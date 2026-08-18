import { readFileSync, writeFileSync } from "node:fs";

const cssPath = "blog/assets/blog.css";
const marker = "/* Unit 7H: render article cover JPEGs as full-width hero media */";
const css = readFileSync(cssPath, "utf8");

if (css.includes(marker)) {
  console.log("Unit 7H CSS already present; no change required.");
  process.exit(0);
}

const patch = `\n\n${marker}\n.blog-post-hero.blog-insight-block:has(> img.blog-post-visual[src*="/cover-"]) {\n  min-height: 0;\n  aspect-ratio: 16 / 9;\n  padding: 0;\n  background: #080b19;\n}\n\n.blog-post-hero.blog-insight-block:has(> img.blog-post-visual[src*="/cover-"])::before,\n.blog-post-hero.blog-insight-block:has(> img.blog-post-visual[src*="/cover-"])::after {\n  display: none;\n}\n\n.blog-post-hero.blog-insight-block > img.blog-post-visual[src*="/cover-"] {\n  width: 100%;\n  height: 100%;\n  min-width: 0;\n  max-width: none;\n  margin: 0;\n  object-fit: cover;\n  object-position: center;\n}\n`;

writeFileSync(cssPath, css.replace(/\s*$/, "") + patch, "utf8");
console.log("Applied Unit 7H full-width article cover hero repair.");
