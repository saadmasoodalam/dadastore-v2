import { writeFile } from "node:fs/promises";
import path from "node:path";
import { BLOG_DIR, DEFAULT_PUBLIC_BASE, loadBlogData, normalizeBase, publishedRecords, xmlEscape } from "./build-blog-index.mjs";

const { posts } = await loadBlogData();
const base = normalizeBase(globalThis.process?.env?.BLOG_PUBLIC_BASE || DEFAULT_PUBLIC_BASE);
const published = publishedRecords(posts).sort((a, b) => a.slug.localeCompare(b.slug));
const entries = [
  { url: new URL(".", base).href, lastmod: null },
  { url: new URL("category/", base).href, lastmod: null },
  ...published.map((post) => ({
    url: new URL(String(post.url).replace(/^\.\//, ""), base).href,
    lastmod: post.date,
  })),
];
const rows = entries.map(({ url, lastmod }) =>
  `  <url>\n    <loc>${xmlEscape(url)}</loc>${lastmod ? `\n    <lastmod>${xmlEscape(lastmod)}</lastmod>` : ""}\n  </url>`
).join("\n");
const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${rows}\n</urlset>\n`;
await writeFile(path.join(BLOG_DIR, "sitemap.xml"), xml, "utf8");
console.log(`Generated blog/sitemap.xml with ${entries.length} published-safe entries.`);
