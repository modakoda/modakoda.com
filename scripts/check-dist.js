// Post-build check: 404.html (the SPA shell) must not carry the home page's meta tags.
// Guards the `match.status` shell detection in src/routes/index.tsx against framework upgrades.
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const head = (file) =>
  readFileSync(`dist/client/${file}`, "utf8").split("</head>")[0];

const notFound = head("404.html");
assert.match(notFound, /<title>Page not found/);
assert.match(notFound, /<meta name="robots" content="noindex"\/>/);
for (const leaked of ['rel="canonical"', "og:url", 'name="description"']) {
  assert.ok(!notFound.includes(leaked), `404.html contains ${leaked}`);
}
assert.ok(
  !readFileSync("dist/client/404.html", "utf8").includes("ld+json"),
  "404.html contains JSON-LD",
);

const home = head("index.html");
assert.match(home, /<title>Modakoda/);
assert.match(home, /<meta name="robots" content="index, follow"\/>/);
assert.match(home, /<link rel="canonical" href="https:\/\/modakoda\.com\/"\/>/);

console.log("dist meta tags OK");
