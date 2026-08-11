import { access, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { auditPublishedRegistry } from "./blog-registry-contracts.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const BLOG_DIR = path.join(ROOT, "blog");
const posts = JSON.parse(await readFile(path.join(BLOG_DIR, "data", "posts.json"), "utf8"));
const registry = await auditPublishedRegistry(posts, BLOG_DIR);
const published = registry.published;
const bySlug = new Map(published.map((post) => [post.slug, post]));
const VOID_TAGS = new Set(["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"]);
const SUBSTANTIVE_TAGS = new Set(["h2", "h3", "h4", "p", "ul", "ol", "blockquote", "table", "pre"]);
const failures = [];
failures.push(...registry.errors.map((error) => "registry: " + error));
const counts = { orphanedSubstantiveContent: 0, contentAfterCta: 0, contentAfterRelated: 0, invalidStructuralNesting: 0, prematureWrapperClosures: 0, emptyLargeWrappers: 0, brokenTocTargets: 0, duplicateHeadingIds: 0, relatedPlacementFailures: 0, relatedCardCountFailures: 0, brokenRelatedLinks: 0 };

const classesOf = (node) => new Set((node.attrs.class ?? "").split(/\s+/).filter(Boolean));
const hasClass = (node, name) => classesOf(node).has(name);
const descendants = (node) => node.children.flatMap((child) => [child, ...descendants(child)]);
const contains = (ancestor, node) => { for (let cursor = node; cursor; cursor = cursor.parent) if (cursor === ancestor) return true; return false; };
const textOf = (node) => `${node.text} ${node.children.map(textOf).join(" ")}`.replace(/\s+/g, " ").trim();
const attrMap = (source) => Object.fromEntries([...source.matchAll(/([:\w-]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/g)].map((match) => [match[1].toLowerCase(), match[2] ?? match[3] ?? match[4] ?? ""]));

function parse(html) {
  const root = { tag: "#root", attrs: {}, children: [], parent: null, text: "", start: 0, end: html.length };
  const stack = [root];
  const errors = [];
  const tokenPattern = /<!--[\s\S]*?-->|<![^>]*>|<\/?[a-zA-Z][^>]*>/g;
  let cursor = 0;
  let match;
  while ((match = tokenPattern.exec(html))) {
    stack[stack.length - 1].text += html.slice(cursor, match.index);
    cursor = tokenPattern.lastIndex;
    const token = match[0];
    if (token.startsWith("<!")) continue;
    const closing = /^<\//.test(token);
    const tag = token.match(/^<\/?\s*([\w-]+)/)?.[1]?.toLowerCase();
    if (!tag) continue;
    if (closing) {
      const top = stack[stack.length - 1];
      if (top.tag !== tag) {
        errors.push(`closing </${tag}> encountered while <${top.tag}> was open`);
        const matchingIndex = stack.map((node) => node.tag).lastIndexOf(tag);
        if (matchingIndex < 1) continue;
        while (stack.length - 1 >= matchingIndex) stack.pop().end = tokenPattern.lastIndex;
      } else stack.pop().end = tokenPattern.lastIndex;
      continue;
    }
    const attrsSource = token.replace(/^<\s*[\w-]+|\/?\s*>$/g, "");
    const node = { tag, attrs: attrMap(attrsSource), children: [], parent: stack[stack.length - 1], text: "", start: match.index, end: null };
    node.parent.children.push(node);
    if (!VOID_TAGS.has(tag) && !/\/>$/.test(token)) stack.push(node);
  }
  stack[stack.length - 1].text += html.slice(cursor);
  if (stack.length > 1) errors.push(`unclosed wrappers: ${stack.slice(1).map((node) => `<${node.tag}>`).join(", ")}`);
  return { root, errors };
}

const nearest = (node, predicate) => { for (let cursor = node; cursor; cursor = cursor.parent) if (predicate(cursor)) return cursor; return null; };

for (const post of published) {
  const file = path.join(BLOG_DIR, post.slug, "index.html");
  const html = await readFile(file, "utf8");
  const { root, errors } = parse(html);
  const nodes = descendants(root);
  const articles = nodes.filter((node) => node.tag === "article" && hasClass(node, "blog-post"));
  const bodies = nodes.filter((node) => hasClass(node, "blog-article-body"));
  const layouts = nodes.filter((node) => hasClass(node, "blog-post-layout"));
  const ctas = nodes.filter((node) => hasClass(node, "blog-cta-section"));
  const relatedSections = nodes.filter((node) => hasClass(node, "blog-related"));
  const [article] = articles; const [body] = bodies; const [layout] = layouts; const [cta] = ctas; const [related] = relatedSections;

  if (errors.length) { counts.invalidStructuralNesting += errors.length; failures.push(`${post.slug}: ${errors.join("; ")}`); }
  if (articles.length !== 1 || bodies.length !== 1 || layouts.length !== 1 || ctas.length !== 1 || relatedSections.length !== 1) {
    counts.prematureWrapperClosures += 1; failures.push(`${post.slug}: expected one article, layout, body, CTA, and Related section`); continue;
  }
  if (!contains(article, body) || !contains(layout, body) || !contains(article, cta) || !contains(article, related)) {
    counts.prematureWrapperClosures += 1; failures.push(`${post.slug}: required regions do not share the intended article hierarchy`);
  }

  const substantive = nodes.filter((node) => SUBSTANTIVE_TAGS.has(node.tag) && textOf(node).length > 0);
  const orphans = substantive.filter((node) => contains(article, node) && !contains(body, node) && !nearest(node, (candidate) => hasClass(candidate, "blog-post-header") || hasClass(candidate, "blog-cta-section") || hasClass(candidate, "blog-related")));
  if (orphans.length) { counts.orphanedSubstantiveContent += orphans.length; failures.push(`${post.slug}: ${orphans.length} substantive nodes outside article body`); }
  if (cta.start <= body.start || related.start <= cta.start) { counts.relatedPlacementFailures += 1; failures.push(`${post.slug}: required body -> CTA -> Related order is not preserved`); }
  const afterCta = substantive.filter((node) => node.start > cta.end && node.start < related.start && !contains(related, node));
  if (afterCta.length) { counts.contentAfterCta += afterCta.length; failures.push(`${post.slug}: substantive content appears between CTA and Related`); }
  const afterRelated = substantive.filter((node) => contains(article, node) && node.start > related.end);
  if (afterRelated.length) { counts.contentAfterRelated += afterRelated.length; failures.push(`${post.slug}: substantive content appears after Related Articles`); }

  const headingIds = nodes.filter((node) => /^h[2-4]$/.test(node.tag) && node.attrs.id).map((node) => node.attrs.id);
  const duplicateIds = headingIds.filter((id, index) => headingIds.indexOf(id) !== index);
  if (duplicateIds.length) { counts.duplicateHeadingIds += new Set(duplicateIds).size; failures.push(`${post.slug}: duplicate heading IDs ${[...new Set(duplicateIds)].join(", ")}`); }
  const tocLinks = nodes.filter((node) => node.tag === "a" && node.attrs.href?.startsWith("#") && nearest(node, (candidate) => hasClass(candidate, "blog-post-aside")));
  for (const link of tocLinks) {
    const target = nodes.filter((node) => node.attrs.id === link.attrs.href.slice(1));
    if (target.length !== 1 || !contains(body, target[0])) { counts.brokenTocTargets += 1; failures.push(`${post.slug}: invalid TOC target ${link.attrs.href}`); }
  }

  const cards = descendants(related).filter((node) => node.tag === "article" && hasClass(node, "blog-related-card"));
  if (cards.length !== 3) { counts.relatedCardCountFailures += 1; failures.push(`${post.slug}: expected 3 related cards; found ${cards.length}`); }
  for (const card of cards) {
    const slug = card.attrs["data-related-slug"];
    const link = descendants(card).find((node) => node.tag === "a" && hasClass(node, "blog-related-card-link"));
    if (!bySlug.has(slug) || link?.attrs.href !== `../${slug}/`) { counts.brokenRelatedLinks += 1; failures.push(`${post.slug}: broken related-card link for ${slug ?? "unknown"}`); }
    else await access(path.join(BLOG_DIR, slug, "index.html")).catch(() => { counts.brokenRelatedLinks += 1; failures.push(`${post.slug}: missing related article ${slug}`); });
  }
  const emptySections = nodes.filter((node) => node.tag === "section" && contains(article, node) && textOf(node).length === 0);
  if (emptySections.length) { counts.emptyLargeWrappers += emptySections.length; failures.push(`${post.slug}: ${emptySections.length} empty article section wrappers`); }
}

const result = { tests: failures.length ? "failed" : "passed", publishedPagesAudited: published.length, ...counts, failures };
console.log(JSON.stringify(result, null, 2));
if (failures.length) process.exitCode = 1;
