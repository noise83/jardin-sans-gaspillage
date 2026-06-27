import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const currentDir = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(currentDir, "..", "..");
const productsPath = join(repoRoot, "src", "data", "products", "recuperateurs-eau.json");
const inputPath = join(currentDir, "selected-products-input.json");
const outputDir = join(currentDir, "output");
const outputPath = join(outputDir, "recuperateurs-eau-products-draft.json");

function extractAsin(sourceUrl) {
  if (!sourceUrl || sourceUrl === "#") {
    return "";
  }

  const match = sourceUrl.match(/\/(?:dp|gp\/product|product)\/([A-Z0-9]{10})(?:[/?#]|$)/i);
  return match ? match[1].toUpperCase() : "";
}

const products = JSON.parse(await readFile(productsPath, "utf8"));
const selectedProducts = JSON.parse(await readFile(inputPath, "utf8"));
const productIds = new Set(products.map((product) => product.id));
const approvedSelections = selectedProducts.filter((selection) => selection.status === "approved");

let asinExtractedCount = 0;
let modifiedCount = 0;
const warnings = [];
const asinByProductId = new Map();

for (const selection of approvedSelections) {
  if (!productIds.has(selection.targetProductId)) {
    warnings.push(`Produit cible inconnu : ${selection.targetProductId}`);
    continue;
  }

  const asin = extractAsin(selection.sourceUrl);

  if (!asin) {
    warnings.push(`Entree approved sans ASIN valide : ${selection.targetProductId}`);
    continue;
  }

  asinExtractedCount += 1;
  asinByProductId.set(selection.targetProductId, asin);
}

const draftProducts = products.map((product) => {
  const asin = asinByProductId.get(product.id);

  if (!asin) {
    return product;
  }

  modifiedCount += 1;
  return {
    ...product,
    asin,
  };
});

await mkdir(outputDir, { recursive: true });
await writeFile(outputPath, `${JSON.stringify(draftProducts, null, 2)}\n`, "utf8");

console.log("Import brouillon produits");
console.log(`Entrees lues : ${selectedProducts.length}`);
console.log(`Entrees approved : ${approvedSelections.length}`);
console.log(`ASIN extraits : ${asinExtractedCount}`);
console.log(`Produits modifies dans le brouillon : ${modifiedCount}`);
console.log(`Erreurs / avertissements : ${warnings.length}`);

for (const warning of warnings) {
  console.log(`- ${warning}`);
}

console.log(`\nFichier brouillon genere : ${outputPath}`);
