import { access, readdir, readFile } from "node:fs/promises";
import path from "node:path";

const ARTICLE_EXEMPT_DIRECTORIES = new Set(["assets", "category", "data"]);
const SAFE_RASTER_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp"]);
const nonEmpty = (value) => typeof value === "string" && value.trim().length > 0;

export function derivePublishedRegistry(posts) {
  const errors = [];
  if (!Array.isArray(posts)) return { published: [], errors: ["posts registry must be an array"] };
  const candidates = posts.filter((post) => post?.status === "published");
  const published = candidates.filter((post) => {
    const valid = nonEmpty(post.slug) && nonEmpty(post.title) && nonEmpty(post.category) && post.url === "./" + post.slug + "/";
    if (!valid) errors.push("malformed published record: " + (post?.slug ?? "missing-slug"));
    return valid;
  });
  for (const field of ["slug", "url"]) {
    const seen = new Set();
    for (const post of candidates) {
      const value = post[field];
      if (seen.has(value)) errors.push("duplicate published " + field + ": " + value);
      seen.add(value);
    }
  }
  for (const post of posts.filter((item) => item?.status === "draft" && item.url !== null)) errors.push("draft has public URL: " + (post.slug ?? "missing-slug"));
  return { published, errors };
}

export async function auditPublishedRegistry(posts, blogDir) {
  const result = derivePublishedRegistry(posts);
  const registered = new Set(result.published.map((post) => post.slug));
  const missingPages = [];
  for (const post of result.published) await access(path.join(blogDir, post.slug, "index.html")).catch(() => missingPages.push(post.slug));
  const publicArticleDirectories = [];
  for (const entry of await readdir(blogDir, { withFileTypes: true })) {
    if (!entry.isDirectory() || ARTICLE_EXEMPT_DIRECTORIES.has(entry.name)) continue;
    const page = path.join(blogDir, entry.name, "index.html");
    if (await access(page).then(() => true, () => false)) publicArticleDirectories.push(entry.name);
  }
  const unregisteredPages = publicArticleDirectories.filter((slug) => !registered.has(slug));
  const errors = [...result.errors, ...missingPages.map((slug) => "registered article page missing: " + slug), ...unregisteredPages.map((slug) => "unregistered public article page: " + slug)];
  return { ...result, publishedCount: result.published.length, missingPages, unregisteredPages, errors };
}

export async function validateCoverAsset(post, root, blogDir) {
  const failures = [];
  const src = post?.cover?.src;
  if (!nonEmpty(src) || !nonEmpty(post?.cover?.alt)) failures.push("cover metadata or alt text missing");
  if (!(Number(post?.cover?.width) > 0) || !(Number(post?.cover?.height) > 0)) failures.push("cover dimensions missing");
  if (failures.length) return failures;
  const coverFile = path.resolve(blogDir, src);
  if (!coverFile.startsWith(path.resolve(root))) return ["cover path escapes repository"];
  const extension = path.extname(coverFile).toLowerCase();
  const bytes = await readFile(coverFile).catch(() => null);
  if (!bytes) return ["cover file missing"];
  if (bytes.length === 0 || bytes.length > 1500000) failures.push("cover file size outside policy");
  if (extension === ".svg") {
    const svg = bytes.toString("utf8");
    if (!/<svg\b[^>]*>/i.test(svg) || !/<\/svg>\s*$/i.test(svg)) failures.push("invalid SVG document");
    if (/<script\b|<foreignObject\b|\bon[a-z]+\s*=|(?:href|src)\s*=\s*["\x27](?:https?:|\/\/|data:)/i.test(svg)) failures.push("unsafe SVG content");
    const open = svg.match(/<svg\b([^>]*)>/i)?.[1] ?? "";
    const viewBox = open.match(/\bviewBox\s*=\s*["\x27]\s*([\d.]+)\s+([\d.]+)\s+([\d.]+)\s+([\d.]+)\s*["\x27]/i);
    if (!viewBox || Number(viewBox[3]) <= 0 || Number(viewBox[4]) <= 0) failures.push("SVG viewBox missing or invalid");
    else if (Math.abs((Number(viewBox[3]) / Number(viewBox[4])) - (16 / 9)) > 0.03) failures.push("SVG aspect ratio must be 16:9");
  } else if (!SAFE_RASTER_EXTENSIONS.has(extension)) failures.push("unsupported cover extension: " + (extension || "none"));
  return failures;
}
