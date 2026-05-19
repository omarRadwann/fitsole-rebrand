import { readFile } from "node:fs/promises";

const required = [
  ["index.html", "Fitsole - Drop Floor"],
  ["index.html", "products.json?limit=32"],
  ["index.html", "https://fitsole.shop/cart"],
  ["index.html", "prefers-reduced-motion"],
  ["index.html", "productDialog"],
  ["manifest.webmanifest", "\"short_name\": \"Fitsole\""],
  ["robots.txt", "https://fitsole.shop/sitemap.xml"],
  ["sitemap.xml", "https://fitsole.shop/"]
];

const forbidden = [
  ["index.html", "omarradwann.github.io/halo"],
  ["index.html", "hello@halo"],
  ["index.html", "cdn.jsdelivr.net/npm/three"],
  ["index.html", "gsap.min.js"],
  ["index.html", "lenis.min.js"]
];

const cache = new Map();
async function file(path) {
  if (!cache.has(path)) cache.set(path, await readFile(path, "utf8"));
  return cache.get(path);
}

for (const [path, needle] of required) {
  const text = await file(path);
  if (!text.includes(needle)) {
    throw new Error(`${path} is missing required text: ${needle}`);
  }
}

for (const [path, needle] of forbidden) {
  const text = await file(path);
  if (text.includes(needle)) {
    throw new Error(`${path} still includes forbidden legacy text: ${needle}`);
  }
}

JSON.parse(await file("manifest.webmanifest"));

console.log("Fitsole static verification passed.");
