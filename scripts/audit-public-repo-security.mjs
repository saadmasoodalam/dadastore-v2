import { readFile } from "node:fs/promises";
import path from "node:path";
import { execFileSync } from "node:child_process";
import process from "node:process";

const root = process.cwd();
const bs = String.fromCharCode(92);
const files = execFileSync(
  "git",
  ["ls-files", "--cached", "--others", "--exclude-standard", "-z"],
  { encoding: "utf8", maxBuffer: 64 * 1024 * 1024 },
).split("\0").filter(Boolean).map((file) => file.replaceAll(bs, "/")).sort();

const allowedDocs = new Set([
  "docs/UNIT_6X_PUBLIC_REPOSITORY_SECURITY_HARDENING.md",
]);
const forbiddenExact = new Map([
  [["GENERIC", "CODING", "PROJECT", "WORKFLOW", "RULES.md"].join("_"), "internal workflow authority"],
  ["blog/README.md", "internal implementation documentation"],
  ["blog/data/article-brief-schema.json", "private brief schema"],
  ["blog/data/article-briefs.json", "private article briefs"],
  ["blog/data/auto-blogger-config.json", "private automation configuration"],
  ["blog/data/source-review-registry.json", "private source-review state"],
  ["blog/data/topic-queue.json", "private topic queue"],
  ["scripts/generate-article-briefs.mjs", "private generation implementation"],
  ["scripts/test-article-brief-generator.mjs", "private generator test"],
  ["scripts/upgrade-article-insights.mjs", "one-off internal migration"],
]);
const privateRepoMarker = ["dadastore", "content", "workbench"].join("-");
const localPaths = [
  new RegExp("C:" + bs.repeat(2) + "Users" + bs.repeat(2) + "[^" + bs + "\\s]+", "i"),
  /\/Users\/[^/\s]+/,
  /\/home\/[^/\s]+/,
];
const contentRules = [
  ["private-key-marker", /-----BEGIN (?:RSA |EC |OPENSSH |DSA )?PRIVATE KEY-----/],
  ["github-token", /\b(?:gh[pousr]_[A-Za-z0-9_]{20,}|github_pat_[A-Za-z0-9_]{20,})\b/],
  ["cloud-access-key", /\b(?:AKIA|ASIA)[A-Z0-9]{16}\b/],
  ["bearer-token", /\bBearer\s+[A-Za-z0-9._~+/=-]{20,}\b/i],
  ["credential-bearing-url", /\b[a-z][a-z0-9+.-]*:\/\/[^\s/:]+:[^\s/@]+@[^\s]+/i],
  ["webhook-secret", /https:\/\/hooks\.slack\.com\/services\/[A-Za-z0-9/_-]+/i],
  ["secret-assignment", /\b(?:password|passwd|client_secret|api_key|access_token|refresh_token|webhook_secret)\b\s*[:=]\s*["'][^"'\r\n]{8,}["']/i],
];

const issues = [];
const keys = new Set();
function add(file, rule, detail) {
  const key = [file, rule, detail].join("|");
  if (!keys.has(key)) {
    keys.add(key);
    issues.push({ file, rule, detail });
  }
}
function auditPath(file) {
  const base = path.posix.basename(file.toLowerCase());
  if (forbiddenExact.has(file)) add(file, "forbidden-public-path", forbiddenExact.get(file));
  if (file.startsWith("docs/") && !allowedDocs.has(file)) {
    add(file, "internal-unit-document", "public docs allowlist violation");
  }
  if (/(^|\/)(?:runtime|logs|tmp|temp|publication-packages|drafts|simulations)(\/|$)/i.test(file)) {
    add(file, "private-runtime-path", "private runtime directory");
  }
  if (/(^|\/)\.env(?:\.|$)/i.test(file) && !/(^|\/)\.env\.example$/i.test(file)) {
    add(file, "secret-file-name", "environment file");
  }
  if (/\.(?:pem|key|p12|pfx)$/i.test(file)) {
    add(file, "secret-file-name", "key or certificate container");
  }
  if (/^(?:credentials|secrets|private)(?:[._-]|$)/i.test(base)) {
    add(file, "secret-file-name", "sensitive filename prefix");
  }
}
function auditHtml(file, text) {
  for (const match of text.matchAll(/<a\b[^>]*\btarget\s*=\s*["']_blank["'][^>]*>/gi)) {
    const rel = match[0].match(/\brel\s*=\s*["']([^"']*)["']/i)?.[1] ?? "";
    const tokens = new Set(rel.toLowerCase().split(/\s+/).filter(Boolean));
    if (!tokens.has("noopener") || !tokens.has("noreferrer")) {
      add(file, "unsafe-external-link", "target=_blank lacks noopener noreferrer");
    }
  }
  if (/(?:src|href)\s*=\s*["']http:\/\//i.test(text)) {
    add(file, "mixed-content-reference", "HTTP subresource or link");
  }
}
async function auditContent(file) {
  let data;
  try {
    data = await readFile(path.join(root, ...file.split("/")));
  } catch {
    add(file, "unreadable-file", "file could not be read");
    return;
  }
  if (data.includes(0)) return;
  const text = data.toString("utf8");
  for (const [rule, pattern] of contentRules) {
    if (pattern.test(text)) add(file, rule, "sensitive value pattern detected");
  }
  for (const pattern of localPaths) {
    if (pattern.test(text)) add(file, "machine-local-path", "local user path detected");
  }
  if (text.toLowerCase().includes(privateRepoMarker)) {
    add(file, "private-repository-reference", "private workbench reference");
  }
  if (file.endsWith(".html")) auditHtml(file, text);
}

for (const file of files) {
  auditPath(file);
  await auditContent(file);
}

const postsFile = "blog/data/posts.json";
if (!files.includes(postsFile)) {
  add(postsFile, "missing-public-registry", "published posts registry is absent");
} else {
  try {
    const posts = JSON.parse(await readFile(path.join(root, "blog", "data", "posts.json"), "utf8"));
    if (!Array.isArray(posts)) {
      add(postsFile, "invalid-public-registry", "posts registry is not an array");
    } else {
      for (const post of posts) {
        const slug = typeof post?.slug === "string" ? post.slug : "(missing slug)";
        if (post?.status !== "published") {
          add(postsFile, "public-draft-exposure", "non-published record: " + slug);
        }
        if (typeof post?.url !== "string" || !/^\.\/[a-z0-9-]+\/$/.test(post.url)) {
          add(postsFile, "invalid-public-url", "invalid URL record: " + slug);
        }
      }
    }
  } catch {
    add(postsFile, "invalid-public-registry", "posts registry is not valid JSON");
  }
}

issues.sort((a, b) => a.file.localeCompare(b.file) || a.rule.localeCompare(b.rule));
console.log(JSON.stringify({
  status: issues.length === 0 ? "passed" : "failed",
  filesScanned: files.length,
  findings: issues.length,
  issues,
}, null, 2));
process.exitCode = issues.length === 0 ? 0 : 1;