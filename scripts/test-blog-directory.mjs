import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { buildCategoryDirectoryData, renderCategoryDirectoryPage } from "./build-category-directory.mjs";

const posts = JSON.parse(await readFile(new URL("../blog/data/posts.json", import.meta.url), "utf8"));
const categories = JSON.parse(await readFile(new URL("../blog/data/categories.json", import.meta.url), "utf8"));
const directory = buildCategoryDirectoryData(posts, categories);
const html = renderCategoryDirectoryPage(directory);

assert.equal(directory.length, 10);
assert.equal(directory.reduce((sum, category) => sum + category.count, 0), 61);
assert.equal(directory.some((category) => category.count === 0), false);
assert.equal(new Set(directory.map((category) => category.slug)).size, directory.length);
assert.equal((html.match(/data-category-link=/g) ?? []).length, 10);
assert.equal((html.match(/class="blog-article-card"/g) ?? []).length, 0, "the default directory must not duplicate the article archive");
assert.equal(/^\s*\+\s*</m.test(html), false);
assert.equal(posts.filter((post) => post.status === "draft").length, 0);
for (const category of directory) {
  assert.ok(html.includes(`?category=${category.slug}#category-results`));
  assert.ok(category.previews.length <= 3);
}

console.log(JSON.stringify({ tests: 9, activeCategories: directory.length, representedPublishedArticles: 61, emptyCategories: 0, defaultArchiveCards: 0 }, null, 2));
