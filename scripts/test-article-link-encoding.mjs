import { access, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const BLOG_DIR = path.join(ROOT, "blog");
const POSTS_FILE = path.join(BLOG_DIR, "data", "posts.json");
const STATIC_PAGES = [
  path.join(BLOG_DIR, "index.html"),
  path.join(BLOG_DIR, "category", "index.html"),
];
const GENERATED_SOURCES = [
  path.join(ROOT, "scripts", "build-featured-rotation.mjs"),
  path.join(ROOT, "scripts", "build-category-directory.mjs"),
  path.join(BLOG_DIR, "assets", "blog.js"),
];
const MOJIBAKE_MARKERS = [
  "\u00e2\u2020\u2019",
  "\u00c3\u00a2\u00e2\u20ac\u00a0\u00e2\u20ac\u2122",
  "\u00c3\u00a2\u00e2\u201a\u00ac",
  "\u00c3\u0192",
  "\u00c3\u201a",
];

function fail(message) {
  throw new Error(message);
}

function getReadArticleAnchors(html, file) {
  return [...html.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi)].filter((match) => /Read Article/i.test(match[2])).map((match) => {
    const href = match[1].match(/\bhref=["']([^"']+)["']/i)?.[1];
    if (!href) fail(`${file}: Read Article link is missing a valid href.`);
    return { href, body: match[2] };
  });
}

async function assertLocalHref(file, href) {
  if (/^(?:https?:|mailto:|tel:|#)/i.test(href)) return;
  const cleanHref = href.split(/[?#]/, 1)[0];
  let target = path.resolve(path.dirname(file), cleanHref || ".");
  if (cleanHref.endsWith("/") || !path.extname(target)) target = path.join(target, "index.html");
  await access(target).catch(() => fail(`${file}: unresolved Read Article href ${href}`));
}

const posts = JSON.parse(await readFile(POSTS_FILE, "utf8"));
const published = posts.filter((post) => post.status === "published");
const publicArticleFiles = published.map((post) => path.join(BLOG_DIR, post.slug, "index.html"));
const auditedFiles = [...STATIC_PAGES, ...publicArticleFiles, ...GENERATED_SOURCES];
let readArticleLinks = 0;

for (const file of auditedFiles) {
  const source = await readFile(file, "utf8");
  for (const marker of MOJIBAKE_MARKERS) {
    if (source.includes(marker)) fail(`${path.relative(ROOT, file)}: known mojibake marker found.`);
  }

  if (path.extname(file) !== ".html") continue;
  for (const link of getReadArticleAnchors(source, path.relative(ROOT, file))) {
    if (!/<span\b[^>]*aria-hidden=["']true["'][^>]*>\s*(?:&rarr;|&#8594;|&#x2192;|→)\s*<\/span>/i.test(link.body)) {
      fail(`${path.relative(ROOT, file)}: Read Article link does not contain the approved arrow.`);
    }
    await assertLocalHref(file, link.href);
    readArticleLinks += 1;
  }
}

const featuredSource = await readFile(GENERATED_SOURCES[0], "utf8");
if (!/Read Article <span aria-hidden="true">&rarr;<\/span>/.test(featuredSource)) {
  fail("Featured generator does not use the approved &rarr; source representation.");
}

const clientSource = await readFile(GENERATED_SOURCES[2], "utf8");
if (!/link\.append\("Read Article "\)/.test(clientSource) || !/arrow\.textContent = "\\u2192"/.test(clientSource)) {
  fail("Category card renderer does not construct the approved visible arrow safely.");
}

for (const post of published) {
  await access(path.join(BLOG_DIR, post.slug, "index.html")).catch(() => fail(`Missing published article path: ${post.slug}`));
}

console.log(JSON.stringify({
  result: "passed",
  publicHtmlFilesScanned: STATIC_PAGES.length + publicArticleFiles.length,
  sourceTemplatesScanned: GENERATED_SOURCES.length,
  publishedArticlePathsChecked: published.length,
  readArticleLinksChecked: readArticleLinks,
  malformedSequences: 0,
  brokenReadArticleLinks: 0,
}, null, 2));
