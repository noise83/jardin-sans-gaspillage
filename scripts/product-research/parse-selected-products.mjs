import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const currentDir = dirname(fileURLToPath(import.meta.url));
const inputPath = join(currentDir, "selected-products-input.example.json");
const outputDir = join(currentDir, "output");
const outputPath = join(outputDir, "selected-products-parsed.json");

function extractAsin(sourceUrl) {
  if (!sourceUrl || sourceUrl === "#") {
    return "";
  }

  const match = sourceUrl.match(/\/(?:dp|gp\/product|product)\/([A-Z0-9]{10})(?:[/?#]|$)/i);
  return match ? match[1].toUpperCase() : "";
}

const selectedProducts = JSON.parse(await readFile(inputPath, "utf8"));
const parsedProducts = selectedProducts.map((product) => ({
  ...product,
  asin: extractAsin(product.sourceUrl),
}));

for (const product of parsedProducts) {
  const status = product.asin ? `ASIN trouvé : ${product.asin}` : "ASIN non trouvé";
  console.log(`${product.targetProductId} — ${status}`);
}

await mkdir(outputDir, { recursive: true });
await writeFile(outputPath, `${JSON.stringify(parsedProducts, null, 2)}\n`, "utf8");

console.log(`\nFichier généré : ${outputPath}`);
