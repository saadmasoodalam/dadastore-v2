import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const BLOG_DIR = path.join(ROOT, "blog");
const POSTS_FILE = path.join(BLOG_DIR, "data", "posts.json");
const CATEGORIES_FILE = path.join(BLOG_DIR, "data", "categories.json");
const OUTPUT_FILE = path.join(BLOG_DIR, "category", "index.html");

const escapeHtml = (value) => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;");

export function buildCategoryDirectoryData(posts, categories) {
  const published = posts.filter((post) => post.status === "published" && typeof post.url === "string" && post.url.trim());
  return categories.map((category) => {
    const articles = published
      .filter((post) => post.category === category.title)
      .sort((a, b) => String(b.date).localeCompare(String(a.date)) || a.title.localeCompare(b.title));
    return {
      slug: category.slug,
      title: category.title,
      description: category.description,
      count: articles.length,
      previews: articles.slice(0, 3).map((post) => post.title),
    };
  }).filter((category) => category.count > 0);
}

function renderCategoryCard(category, index) {
  const countLabel = `${category.count} ${category.count === 1 ? "article" : "articles"}`;
  const previews = category.previews.map((title) => `<li>${escapeHtml(title)}</li>`).join("\n                  ");
  return `          <a class="blog-category-directory-card" href="?category=${escapeHtml(category.slug)}#category-results" data-category-link="${escapeHtml(category.slug)}">
            <span class="blog-category-directory-index" aria-hidden="true">${String(index + 1).padStart(2, "0")}</span>
            <div class="blog-category-directory-heading">
              <h2>${escapeHtml(category.title)}</h2>
              <span>${countLabel}</span>
            </div>
            <p>${escapeHtml(category.description)}</p>
            <ul aria-label="Representative articles">
              ${previews}
            </ul>
            <strong>View ${escapeHtml(category.title)} articles <span aria-hidden="true">→</span></strong>
          </a>`;
}

export function renderCategoryDirectoryPage(directory) {
  const cards = directory.map(renderCategoryCard).join("\n\n");
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Insight Categories | DaDaStore Insights</title>
    <meta name="description" content="Browse published DaDaStore guidance by category across paid media, ecommerce, tracking, creative strategy, SEO, automation, content, email, business growth, and social media systems." />
    <meta name="robots" content="index, follow" />
    <meta name="theme-color" content="#070916" />
    <link rel="icon" href="../../favicon.ico" sizes="any" />
    <link rel="icon" type="image/png" sizes="32x32" href="../../favicon-32.png" />
    <link rel="stylesheet" href="../assets/blog.css" />
  </head>
  <body>
    <header class="blog-header" data-blog-header>
      <div class="blog-shell blog-header-inner">
        <a class="blog-brand" href="../../index.html" aria-label="DaDaStore main website"><img src="../../assets/img/dadastore-header-logo.png" alt="DaDaStore" /></a>
        <nav class="blog-nav" aria-label="Blog navigation" data-blog-nav>
          <a href="../index.html">Insights</a>
          <a href="../index.html#articles">Articles</a>
          <a class="is-active" href="index.html" aria-current="page">Categories</a>
          <a href="../../index.html#services">Services</a>
          <a class="blog-nav-cta" href="mailto:dadastore.co@gmail.com">Start a Project</a>
        </nav>
        <button class="blog-nav-toggle" type="button" aria-label="Open navigation" aria-expanded="false" data-blog-nav-toggle><span></span><span></span></button>
      </div>
    </header>

    <main>
      <section class="blog-category-hero">
        <div class="blog-shell">
          <a class="blog-back-link" href="../index.html"><span aria-hidden="true">←</span> All Insights</a>
          <p class="blog-eyebrow">Knowledge Directory</p>
          <h1>Browse insights by category.</h1>
          <p>Choose a focus area to explore the published DaDaStore guides most relevant to the decision or system you are building.</p>
        </div>
      </section>

      <section class="blog-section blog-category-directory" aria-labelledby="category-directory-title" data-category-directory>
        <div class="blog-shell">
          <div class="blog-section-heading">
            <div>
              <p class="blog-eyebrow">Active Categories</p>
              <h2 id="category-directory-title">Ten paths through the library</h2>
            </div>
            <p>Counts come directly from the 61 published registry records. Drafts and empty categories are excluded.</p>
          </div>
          <div class="blog-category-directory-grid">
${cards}
          </div>
        </div>
      </section>

      <section class="blog-section blog-category-results" id="category-results" aria-labelledby="category-results-title" data-category-results hidden>
        <div class="blog-shell">
          <div class="blog-section-heading">
            <div>
              <p class="blog-eyebrow">Selected Category</p>
              <h2 id="category-results-title" data-category-results-title>Category articles</h2>
            </div>
            <p data-category-results-description>Select a category to view its published articles.</p>
          </div>
          <p class="blog-filter-status" role="status" aria-live="polite" data-category-results-status></p>
          <div class="blog-card-grid" data-category-results-grid></div>
          <a class="blog-text-link blog-category-clear" href="index.html" data-category-clear>Clear category selection <span aria-hidden="true">→</span></a>
          <noscript><p class="blog-category-noscript">JavaScript is required to display a selected category on this static directory. Every article remains available from the Insights library.</p></noscript>
        </div>
      </section>

      <section class="blog-section blog-cta-section">
        <div class="blog-shell blog-cta">
          <div><p class="blog-eyebrow">From Insight to Execution</p><h2>Turn useful guidance into a working system.</h2><p>Connect strategy, execution, measurement, and review around the priorities that matter now.</p></div>
          <a class="blog-button" href="mailto:dadastore.co@gmail.com">Talk With DaDaStore</a>
        </div>
      </section>
    </main>

    <footer class="blog-footer">
      <div class="blog-shell blog-footer-grid">
        <div><a class="blog-footer-brand" href="../../index.html" aria-label="DaDaStore main website"><img src="../../assets/img/dadastore-header-logo.png" alt="DaDaStore" /></a><p>Commerce growth systems built around better signals, stronger creative, and practical execution.</p></div>
        <div class="blog-footer-links">
          <div><strong>Insights</strong><a href="../index.html">All Articles</a><a href="index.html">Categories</a></div>
          <div><strong>DaDaStore</strong><a href="../../index.html#services">Services</a><a href="../../index.html#contact">Contact</a></div>
        </div>
        <div class="blog-footer-bottom"><span>© <span data-blog-year></span> DaDaStore.</span><span>Practical commerce growth insights.</span></div>
      </div>
    </footer>
    <script src="../assets/blog.js"></script>
  </body>
</html>
`;
}

export async function buildCategoryDirectory() {
  const [posts, categories] = await Promise.all([
    readFile(POSTS_FILE, "utf8").then(JSON.parse),
    readFile(CATEGORIES_FILE, "utf8").then(JSON.parse),
  ]);
  const directory = buildCategoryDirectoryData(posts, categories);
  const total = directory.reduce((sum, category) => sum + category.count, 0);
  if (directory.length !== 10 || total !== 61) throw new Error(`Expected 10 active categories and 61 published articles; found ${directory.length} and ${total}.`);
  await writeFile(OUTPUT_FILE, renderCategoryDirectoryPage(directory), "utf8");
  return { activeCategories: directory.length, publishedArticles: total, categories: directory.map(({ slug, title, count }) => ({ slug, title, count })) };
}

if (globalThis.process?.argv?.[1] && import.meta.url === pathToFileURL(globalThis.process.argv[1]).href) {
  buildCategoryDirectory().then((result) => console.log(JSON.stringify(result, null, 2))).catch((error) => {
    console.error(error);
    globalThis.process.exitCode = 1;
  });
}
