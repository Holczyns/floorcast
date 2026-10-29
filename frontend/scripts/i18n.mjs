// Lists the texts each language does not translate yet: every t("…") of the sources against its dictionaries.
// Run: npm run i18n
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const src = fileURLToPath(new URL("../src/", import.meta.url));
const files = (dir) =>
  readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    if (entry.isDirectory()) return entry.name === "i18n" ? [] : files(join(dir, entry.name));
    return entry.name.endsWith(".ts") ? [join(dir, entry.name)] : [];
  });
const QUOTED = /\b(?:t|N_)\(\s*"((?:[^"\\]|\\.)*)"/g;
const KEY = /^\s*("(?:[^"\\]|\\.)*")\s*:/gm;

const texts = new Set();
for (const file of files(src)) {
  for (const match of readFileSync(file, "utf8").matchAll(QUOTED)) texts.add(JSON.parse(`"${match[1]}"`));
}
const languages = readdirSync(join(src, "i18n"), { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name);
let missing = 0;
for (const language of languages) {
  const keys = new Set();
  for (const file of readdirSync(join(src, "i18n", language)).filter((f) => f.endsWith(".ts") && f !== "guide.ts")) {
    for (const match of readFileSync(join(src, "i18n", language, file), "utf8").matchAll(KEY)) keys.add(JSON.parse(match[1]));
  }
  const lacking = [...texts].filter((text) => !keys.has(text));
  const unused = [...keys].filter((key) => !texts.has(key));
  console.log(`${language}: ${texts.size - lacking.length} of ${texts.size} translated${unused.length ? `, ${unused.length} not used any more` : ""}`);
  for (const text of lacking) console.log(`  missing: ${JSON.stringify(text)}`);
  for (const key of unused) console.log(`  unused:  ${JSON.stringify(key)}`);
  missing += lacking.length;
}
process.exitCode = missing ? 1 : 0;
