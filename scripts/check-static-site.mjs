import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";

const root = path.resolve("out");
const errors = [];
const htmlFiles = [];

async function walk(directory) {
  for (const entry of await readdir(directory)) {
    const fullPath = path.join(directory, entry);
    const info = await stat(fullPath);
    if (info.isDirectory()) await walk(fullPath);
    else if (entry.endsWith(".html")) htmlFiles.push(fullPath);
  }
}

function routeForFile(file) {
  const relative = path.relative(root, file).replaceAll(path.sep, "/");
  if (relative === "index.html") return "/";
  if (relative.endsWith("/index.html")) return `/${relative.slice(0, -"index.html".length)}`;
  return `/${relative}`;
}

function targetFile(pathname) {
  const relative = decodeURIComponent(pathname).replace(/^\/+/, "");
  if (!relative) return path.join(root, "index.html");
  if (path.extname(relative)) return path.join(root, ...relative.split("/"));
  return path.join(root, ...relative.split("/"), "index.html");
}

function hasAnchor(html, hash) {
  const id = decodeURIComponent(hash.slice(1));
  if (!id) return true;
  return html.includes(`id="${id}"`) || html.includes(`id='${id}'`) ||
    html.includes(`name="${id}"`) || html.includes(`name='${id}'`);
}

await walk(root);
const cache = new Map();

for (const file of htmlFiles) {
  const html = await readFile(file, "utf8");
  cache.set(file, html);
}

for (const file of htmlFiles) {
  const html = cache.get(file);
  const sourceRoute = routeForFile(file);
  const hrefs = [...html.matchAll(/\shref=["']([^"']+)["']/g)].map((match) => match[1]);

  for (const href of hrefs) {
    if (/^(?:https?:|mailto:|tel:|data:|javascript:)/.test(href)) continue;
    const url = new URL(href, `https://local.test${sourceRoute}`);
    const destination = targetFile(url.pathname);
    let destinationHtml;
    try {
      destinationHtml = cache.get(destination) ?? (await readFile(destination, "utf8"));
    } catch {
      errors.push(`${sourceRoute} -> ${href}: 遷移先が存在しません`);
      continue;
    }
    if (url.hash && destination.endsWith(".html") && !hasAnchor(destinationHtml, url.hash)) {
      errors.push(`${sourceRoute} -> ${href}: アンカーが存在しません`);
    }
  }
}

const canonicalApps = [
  ["genai-passport", "生成AIパスポート"],
  ["itpass", "ITパスポート"],
  ["sg", "情報セキュリティ"],
  ["fe", "基本情報技術者"],
  ["fp1", "FP1級"],
  ["fp2", "FP2級"],
  ["fp3", "FP3級"],
  ["tableclock", "TableClock"],
];

for (const [slug, name] of canonicalApps) {
  for (const type of ["privacy", "terms"]) {
    const file = path.join(root, "apps", slug, type, "index.html");
    const html = cache.get(file);
    if (!html?.includes(name)) errors.push(`/apps/${slug}/${type}/: title・見出しに対象アプリ名がありません`);
    if (!html?.includes('aria-label="パンくず"')) errors.push(`/apps/${slug}/${type}/: パンくずがありません`);
  }
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exitCode = 1;
} else {
  console.log(`OK: ${htmlFiles.length}個のHTMLについて内部リンク・アンカー・アプリ規約の対象名・パンくずを確認しました。`);
}
