import { readFileSync, writeFileSync } from "node:fs";

const cssPath = "blog/assets/blog.css";
const marker = "/* Unit 7F: contain semantic insight blocks at tablet widths */";
const css = readFileSync(cssPath, "utf8");

if (css.includes(marker)) {
  console.log("Unit 7F CSS already present; no change required.");
  process.exit(0);
}

const patch = `\n\n${marker}\n@media (min-width: 680px) and (max-width: 1199px) {\n  .blog-insight-block {\n    width: 100%;\n    min-width: 0;\n    max-width: 100%;\n    contain: inline-size;\n  }\n\n  .blog-insight-diagram {\n    width: calc(100% - 16px);\n    min-width: 0;\n    max-width: calc(100% - 16px);\n    margin-inline: auto;\n  }\n\n  .blog-insight-diagram > *,\n  .blog-insight-diagram :is(span, div, strong, b, i, small) {\n    min-width: 0;\n    max-width: 100%;\n  }\n}\n`;

writeFileSync(cssPath, css.replace(/\s*$/, "") + patch, "utf8");
console.log("Applied Unit 7F tablet insight overflow containment.");
