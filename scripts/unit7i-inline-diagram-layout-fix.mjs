import { readFileSync, writeFileSync } from "node:fs";

const cssPath = "blog/assets/blog.css";
const marker = "/* Unit 7I: normalize in-article diagram figures */";
const css = readFileSync(cssPath, "utf8");

if (css.includes(marker)) {
  console.log("Unit 7I CSS already present; no change required.");
  process.exit(0);
}

const patch = `\n\n${marker}\n.blog-article-body > figure.blog-post-visual {\n  display: block;\n  width: 100%;\n  min-width: 0;\n  max-width: 100%;\n  margin: 38px 0;\n}\n\n.blog-article-body > figure.blog-post-visual > img {\n  display: block;\n  width: 100%;\n  height: auto;\n  max-width: 100%;\n  margin: 0;\n}\n\n.blog-article-body > figure.blog-post-visual > figcaption {\n  margin-top: 10px;\n  color: var(--blog-muted-dark);\n  font-size: 0.7rem;\n  line-height: 1.5;\n  letter-spacing: 0;\n  text-transform: none;\n}\n`;

writeFileSync(cssPath, css.replace(/\s*$/, "") + patch, "utf8");
console.log("Applied Unit 7I in-article diagram figure normalization.");