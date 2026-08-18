import { execFileSync } from "node:child_process";
import { readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { basename, join, resolve } from "node:path";
import { createHash } from "node:crypto";

const root = resolve(process.cwd());
const unit7eCommit = "faeb839d87f3601b55fe6225c32c9ae5e7cf79ad";
const protectedArticlePlan = join(root, "blog", "data", "article-plan.json");
const sha256 = (path) => createHash("sha256").update(readFileSync(path)).digest("hex");
const articlePlanHashBefore = sha256(protectedArticlePlan);

const changed = execFileSync(
  "git",
  ["show", "--pretty=", "--name-only", unit7eCommit, "--", "assets/images/blog/*.svg"],
  { cwd: root, encoding: "utf8" },
)
  .trim()
  .split(/\r?\n/)
  .filter((path) => /^assets\/images\/blog\/cover-.*\.svg$/.test(path))
  .filter((path, index, array) => array.indexOf(path) === index)
  .sort();

if (changed.length !== 50) {
  throw new Error(`Expected 50 Unit 7E SVG covers, found ${changed.length}`);
}

for (const svg of changed) {
  const jpg = svg.replace(/\.svg$/, ".jpg");
  try {
    statSync(join(root, jpg));
  } catch {
    throw new Error(`Missing JPEG counterpart: ${jpg}`);
  }
}

const candidates = [];
const walk = (directory) => {
  for (const entry of readdirSync(directory)) {
    const path = join(directory, entry);
    if (statSync(path).isDirectory()) walk(path);
    else if (entry === "index.html" || path.endsWith(join("data", "posts.json"))) candidates.push(path);
  }
};
walk(join(root, "blog"));

const touched = [];
let replacements = 0;
for (const path of candidates) {
  const before = readFileSync(path, "utf8");
  let after = before;
  for (const svg of changed) {
    const svgName = basename(svg);
    const jpgName = svgName.replace(/\.svg$/, ".jpg");
    const parts = after.split(svgName);
    if (parts.length > 1) {
      replacements += parts.length - 1;
      after = parts.join(jpgName);
    }
  }
  if (after !== before) {
    writeFileSync(path, after, "utf8");
    touched.push(path.slice(root.length + 1).replaceAll("\\", "/"));
  }
}

if (replacements !== 350) {
  throw new Error(`Expected 350 replacements, found ${replacements}`);
}
if (touched.length !== 52) {
  throw new Error(`Expected 52 touched files, found ${touched.length}`);
}

let remaining = 0;
for (const path of candidates) {
  const text = readFileSync(path, "utf8");
  for (const svg of changed) remaining += text.split(basename(svg)).length - 1;
}
if (remaining !== 0) throw new Error(`${remaining} affected SVG references remain`);
if (sha256(protectedArticlePlan) !== articlePlanHashBefore) {
  throw new Error("blog/data/article-plan.json changed unexpectedly");
}

console.log(JSON.stringify({ covers: changed.length, files: touched.length, replacements, remaining, touched }, null, 2));
