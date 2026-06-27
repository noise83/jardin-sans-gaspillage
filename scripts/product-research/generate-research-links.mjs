import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const currentDir = dirname(fileURLToPath(import.meta.url));
const planPath = join(currentDir, "recuperateurs-eau-search-plan.json");
const outputDir = join(currentDir, "output");
const outputPath = join(outputDir, "recuperateurs-eau-research-links.json");

const plan = JSON.parse(await readFile(planPath, "utf8"));

const researchLinks = plan.map((family) => ({
  id: family.id,
  label: family.label,
  intent: family.intent,
  links: family.queries.map((query) => ({
    query,
    url: `https://www.amazon.fr/s?k=${encodeURIComponent(query)}`,
  })),
}));

for (const family of researchLinks) {
  console.log(`\n${family.label}`);
  console.log(family.intent);
  for (const link of family.links) {
    console.log(`- ${link.query}: ${link.url}`);
  }
}

await mkdir(outputDir, { recursive: true });
await writeFile(outputPath, `${JSON.stringify(researchLinks, null, 2)}\n`, "utf8");

console.log(`\nFichier généré : ${outputPath}`);
