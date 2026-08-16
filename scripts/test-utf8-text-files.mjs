import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const TEXT_EXTENSIONS = new Set([".css", ".csv", ".html", ".js", ".json", ".md", ".mjs", ".scss", ".txt", ".xml", ".yaml", ".yml"]);
const TEXT_BASENAMES = new Set(["CNAME", ".gitignore", ".nojekyll"]);
const SKIP_DIRECTORIES = new Set([".git", "node_modules"]);
const decoder = new TextDecoder("utf-8", { fatal: true });
const failures = [];
let scanned = 0;

function walk(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (entry.isDirectory() && SKIP_DIRECTORIES.has(entry.name)) continue;
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) { walk(file); continue; }
    if (!entry.isFile() || (!TEXT_EXTENSIONS.has(path.extname(entry.name).toLowerCase()) && !TEXT_BASENAMES.has(entry.name))) continue;
    scanned++;
    const bytes = fs.readFileSync(file);
    try {
      const text = decoder.decode(bytes);
      if (text.includes("\uFFFD")) failures.push({ file: path.relative(ROOT, file).replaceAll("\\", "/"), reason: "replacement_character" });
    } catch (error) {
      failures.push({ file: path.relative(ROOT, file).replaceAll("\\", "/"), reason: "invalid_utf8", message: error.message });
    }
  }
}

walk(ROOT);
console.log(JSON.stringify({ scanned_text_files: scanned, invalid_utf8_files: failures.filter(x => x.reason === "invalid_utf8").length, replacement_character_files: failures.filter(x => x.reason === "replacement_character").length, failures }, null, 2));
if (failures.length) process.exitCode = 1;
