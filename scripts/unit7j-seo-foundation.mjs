import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join } from "node:path";

const read = (p) => readFileSync(p, "utf8");
const write = (p, s) => writeFileSync(p, s, "utf8");
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function insertBeforeHeadEnd(html, addition) {
  if (html.includes(addition.trim())) return html;
  return html.replace(/\s*<\/head>/i, `\n${addition.trim()}\n  </head>`);
}

function addAfter(html, needle, addition) {
  if (html.includes(addition.trim())) return html;
  if (!html.includes(needle)) throw new Error(`Needle not found: ${needle}`);
  return html.replace(needle, `${needle}\n${addition.trim()}`);
}

// Root crawl/index foundation.
const blogSitemap = read("blog/sitemap.xml");
if (!blogSitemap.includes("<urlset")) throw new Error("blog/sitemap.xml is invalid");
const rootSitemap = blogSitemap.replace(
  /(<urlset[^>]*>)/,
  `$1\n  <url>\n    <loc>https://dadastore.co/</loc>\n    <lastmod>2026-08-19</lastmod>\n  </url>`
);
write("sitemap.xml", rootSitemap);
write("robots.txt", "User-agent: *\nAllow: /\n\nSitemap: https://dadastore.co/sitemap.xml\n");

// Homepage technical SEO.
{
  const p = "index.html";
  let html = read(p);
  html = addAfter(html, '    <meta property="og:image" content="https://dadastore.co/assets/img/og-dadastore.png" />', `    <meta name="robots" content="index, follow" />\n    <link rel="canonical" href="https://dadastore.co/" />\n    <meta name="twitter:card" content="summary_large_image" />\n    <meta name="twitter:title" content="DaDaStore | Commerce Growth Systems for Performance Marketing" />\n    <meta name="twitter:description" content="DaDaStore builds growth systems across paid traffic, creative strategy, Shopify/CRO, tracking, and optimization for ecommerce and service brands." />\n    <meta name="twitter:image" content="https://dadastore.co/assets/img/og-dadastore.png" />`);
  const jsonLd = `    <script type="application/ld+json">\n      {\n        "@context": "https://schema.org",\n        "@graph": [\n          {\n            "@type": "Organization",\n            "@id": "https://dadastore.co/#organization",\n            "name": "DaDaStore",\n            "url": "https://dadastore.co/",\n            "logo": "https://dadastore.co/assets/img/dadastore-header-logo.png",\n            "email": "mailto:dadastore.co@gmail.com",\n            "description": "Commerce growth systems across paid traffic, creative strategy, ecommerce conversion, tracking, automation, and optimization."\n          },\n          {\n            "@type": "WebSite",\n            "@id": "https://dadastore.co/#website",\n            "url": "https://dadastore.co/",\n            "name": "DaDaStore",\n            "publisher": { "@id": "https://dadastore.co/#organization" }\n          }\n        ]\n      }\n    </script>`;
  if (!html.includes('"@id": "https://dadastore.co/#organization"')) html = insertBeforeHeadEnd(html, jsonLd);
  write(p, html);
}

// Blog landing page metadata + structured data + RSS discovery.
{
  const p = "blog/index.html";
  let html = read(p);
  if (!html.includes('property="og:title"')) {
    html = addAfter(html, '    <meta property="og:url" content="https://dadastore.co/blog/" />', `    <meta property="og:title" content="DaDaStore Insights | Practical Commerce Growth Strategies" />\n    <meta property="og:description" content="Practical DaDaStore insights for social media strategy, paid media, ecommerce, creative testing, tracking, automation, and sustainable growth." />\n    <meta property="og:type" content="website" />\n    <meta property="og:site_name" content="DaDaStore" />\n    <meta property="og:image" content="https://dadastore.co/assets/img/og-dadastore.png" />\n    <meta name="twitter:card" content="summary_large_image" />\n    <meta name="twitter:title" content="DaDaStore Insights | Practical Commerce Growth Strategies" />\n    <meta name="twitter:description" content="Practical strategies for paid media, ecommerce, creative testing, tracking, automation, and sustainable growth." />\n    <meta name="twitter:image" content="https://dadastore.co/assets/img/og-dadastore.png" />\n    <link rel="alternate" type="application/rss+xml" title="DaDaStore Insights" href="https://dadastore.co/blog/feed.xml" />`);
  }
  const jsonLd = `    <script type="application/ld+json">\n      {\n        "@context": "https://schema.org",\n        "@type": "Blog",\n        "@id": "https://dadastore.co/blog/#blog",\n        "url": "https://dadastore.co/blog/",\n        "name": "DaDaStore Insights",\n        "description": "Practical commerce growth strategies from DaDaStore.",\n        "publisher": { "@id": "https://dadastore.co/#organization" }\n      }\n    </script>`;
  if (!html.includes('"@id": "https://dadastore.co/blog/#blog"')) html = insertBeforeHeadEnd(html, jsonLd);
  write(p, html);
}

// Add BlogPosting structured data and richer social metadata to every published article page.
const blogRoot = "blog";
const dirs = readdirSync(blogRoot).filter((name) => {
  const p = join(blogRoot, name);
  return statSync(p).isDirectory() && name !== "assets" && name !== "data" && name !== "category";
});
let articleCount = 0;
for (const slug of dirs) {
  const p = join(blogRoot, slug, "index.html");
  if (!existsSync(p)) continue;
  let html = read(p);
  const title = html.match(/<title>(.*?) \| DaDaStore Insights<\/title>/i)?.[1];
  const description = html.match(/<meta name="description" content="([^"]*)"/i)?.[1];
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/i)?.[1];
  const image = html.match(/<meta property="og:image" content="([^"]+)"/i)?.[1];
  const date = html.match(/<meta property="article:published_time" content="([^"]+)"/i)?.[1];
  const section = html.match(/<meta property="article:section" content="([^"]+)"/i)?.[1];
  if (!title || !description || !canonical || !image || !date || !section) throw new Error(`Missing SEO source metadata: ${p}`);

  if (!html.includes('property="og:site_name"')) {
    html = addAfter(html, `<meta property="og:image" content="${image}"/>`, `<meta property="og:site_name" content="DaDaStore"/><meta name="twitter:card" content="summary_large_image"/><meta name="twitter:title" content="${esc(title)}"/><meta name="twitter:description" content="${esc(description)}"/><meta name="twitter:image" content="${image}"/><link rel="alternate" type="application/rss+xml" title="DaDaStore Insights" href="https://dadastore.co/blog/feed.xml"/>`);
  }

  if (!html.includes('"@type":"BlogPosting"')) {
    const json = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": title,
      "description": description,
      "url": canonical,
      "mainEntityOfPage": canonical,
      "image": [image],
      "datePublished": date,
      "dateModified": date,
      "articleSection": section,
      "author": { "@type": "Organization", "name": "DaDaStore", "url": "https://dadastore.co/" },
      "publisher": { "@type": "Organization", "name": "DaDaStore", "url": "https://dadastore.co/", "logo": { "@type": "ImageObject", "url": "https://dadastore.co/assets/img/dadastore-header-logo.png" } }
    });
    html = insertBeforeHeadEnd(html, `<script type="application/ld+json">${json}</script>`);
  }
  write(p, html);
  articleCount++;
}

if (articleCount !== 112) throw new Error(`Expected 112 article pages, found ${articleCount}`);
console.log(JSON.stringify({ rootSitemap: true, robots: true, homepage: true, blogIndex: true, articles: articleCount }, null, 2));