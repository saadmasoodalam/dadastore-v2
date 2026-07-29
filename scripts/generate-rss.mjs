import { writeFile } from "node:fs/promises";
import path from "node:path";
import { BLOG_DIR, DEFAULT_PUBLIC_BASE, loadBlogData, normalizeBase, publishedRecords, xmlEscape } from "./build-blog-index.mjs";

const { posts } = await loadBlogData();
const base = normalizeBase(globalThis.process?.env?.BLOG_PUBLIC_BASE || DEFAULT_PUBLIC_BASE);
const published = publishedRecords(posts)
  .slice()
  .sort((a, b) => String(b.date).localeCompare(String(a.date)) || a.slug.localeCompare(b.slug));
const items = published.map((post) => {
  const link = new URL(String(post.url).replace(/^\.\//, ""), base).href;
  const date = new Date(`${post.date}T00:00:00Z`).toUTCString();
  return [
    "    <item>",
    `      <title>${xmlEscape(post.title)}</title>`,
    `      <description>${xmlEscape(post.excerpt)}</description>`,
    `      <link>${xmlEscape(link)}</link>`,
    `      <guid isPermaLink="true">${xmlEscape(link)}</guid>`,
    `      <pubDate>${xmlEscape(date)}</pubDate>`,
    "      <author>DaDaStore</author>",
    `      <category>${xmlEscape(post.category)}</category>`,
    "    </item>",
  ].join("\n");
}).join("\n");
const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0">\n  <channel>\n    <title>DaDaStore Insights</title>\n    <description>Practical commerce growth strategies from DaDaStore.</description>\n    <link>${xmlEscape(base)}</link>\n    <language>en</language>\n${items}\n  </channel>\n</rss>\n`;
await writeFile(path.join(BLOG_DIR, "feed.xml"), xml, "utf8");
console.log(`Generated blog/feed.xml with ${published.length} published article entry.`);
