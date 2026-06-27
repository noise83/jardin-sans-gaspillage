import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const currentDir = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(currentDir, "..", "..");
const productsPath = join(repoRoot, "src", "data", "products", "recuperateurs-eau.json");
const outputDir = join(currentDir, "output");
const draftPath = join(outputDir, "recuperateurs-eau-products-draft.json");
const reportPath = join(outputDir, "product-draft-validation-report.json");
const forbiddenCommercialFields = new Set([
  "price",
  "rating",
  "reviews",
  "availability",
  "stock",
  "discount",
]);
const asinPattern = /^[A-Z0-9]{10}$/;

function indexById(products, label) {
  const byId = new Map();
  const duplicateIds = [];

  for (const product of products) {
    if (!product || typeof product.id !== "string" || !product.id) {
      duplicateIds.push(`${label}: missing id`);
      continue;
    }

    if (byId.has(product.id)) {
      duplicateIds.push(product.id);
    }

    byId.set(product.id, product);
  }

  return { byId, duplicateIds };
}

function findForbiddenFields(value, path = "") {
  if (!value || typeof value !== "object") {
    return [];
  }

  if (Array.isArray(value)) {
    return value.flatMap((item, index) => findForbiddenFields(item, `${path}[${index}]`));
  }

  const occurrences = [];

  for (const [key, childValue] of Object.entries(value)) {
    const childPath = path ? `${path}.${key}` : key;

    if (forbiddenCommercialFields.has(key)) {
      occurrences.push(childPath);
    }

    occurrences.push(...findForbiddenFields(childValue, childPath));
  }

  return occurrences;
}

function comparableProduct(product) {
  const copy = structuredClone(product);
  delete copy.asin;
  return copy;
}

function diffValues(before, after, path = "") {
  if (JSON.stringify(before) === JSON.stringify(after)) {
    return [];
  }

  if (
    !before ||
    !after ||
    typeof before !== "object" ||
    typeof after !== "object" ||
    Array.isArray(before) !== Array.isArray(after)
  ) {
    return [{ path: path || "$", before, after }];
  }

  if (Array.isArray(before)) {
    const maxLength = Math.max(before.length, after.length);
    const diffs = [];

    for (let index = 0; index < maxLength; index += 1) {
      diffs.push(...diffValues(before[index], after[index], `${path}[${index}]`));
    }

    return diffs;
  }

  const keys = new Set([...Object.keys(before), ...Object.keys(after)]);
  const diffs = [];

  for (const key of keys) {
    const childPath = path ? `${path}.${key}` : key;
    diffs.push(...diffValues(before[key], after[key], childPath));
  }

  return diffs;
}

function readJson(path) {
  return readFile(path, "utf8").then((content) => JSON.parse(content));
}

const publicProducts = await readJson(productsPath);
const draftProducts = await readJson(draftPath);
const publicIndex = indexById(publicProducts, "public");
const draftIndex = indexById(draftProducts, "draft");

const missingProducts = [];
const unknownDraftProducts = [];
const asinChanges = [];
const invalidAsins = [];
const otherFieldChanges = [];
const forbiddenFields = [];

for (const [productId, publicProduct] of publicIndex.byId.entries()) {
  const draftProduct = draftIndex.byId.get(productId);

  if (!draftProduct) {
    missingProducts.push(productId);
    continue;
  }

  const publicAsin = publicProduct.asin || "";
  const draftAsin = draftProduct.asin || "";

  if (publicAsin !== draftAsin) {
    asinChanges.push({
      id: productId,
      before: publicAsin,
      after: draftAsin,
    });
  }

  if (draftAsin && !asinPattern.test(draftAsin)) {
    invalidAsins.push({
      id: productId,
      asin: draftAsin,
    });
  }

  const editorialDiffs = diffValues(comparableProduct(publicProduct), comparableProduct(draftProduct));

  if (editorialDiffs.length > 0) {
    otherFieldChanges.push({
      id: productId,
      fields: editorialDiffs.map((diff) => diff.path),
    });
  }

  const forbiddenPaths = findForbiddenFields(draftProduct, productId);

  for (const forbiddenPath of forbiddenPaths) {
    forbiddenFields.push(forbiddenPath);
  }
}

for (const productId of draftIndex.byId.keys()) {
  if (!publicIndex.byId.has(productId)) {
    unknownDraftProducts.push(productId);
  }
}

const errors = [
  ...missingProducts.map((id) => `Produit public absent du brouillon : ${id}`),
  ...invalidAsins.map((entry) => `ASIN invalide pour ${entry.id} : ${entry.asin}`),
  ...forbiddenFields.map((path) => `Champ commercial interdit : ${path}`),
  ...publicIndex.duplicateIds.map((id) => `Identifiant public duplique : ${id}`),
  ...draftIndex.duplicateIds.map((id) => `Identifiant brouillon duplique : ${id}`),
];
const warnings = [
  ...unknownDraftProducts.map((id) => `Produit present seulement dans le brouillon : ${id}`),
  ...otherFieldChanges.map((entry) => `Champs hors ASIN modifies pour ${entry.id}`),
];
const report = {
  passed: errors.length === 0,
  generatedAt: new Date().toISOString(),
  summary: {
    publicProducts: publicProducts.length,
    draftProducts: draftProducts.length,
    asinChanges: asinChanges.length,
    otherFieldChanges: otherFieldChanges.length,
    forbiddenFields: forbiddenFields.length,
    invalidAsins: invalidAsins.length,
    missingProducts: missingProducts.length,
    unknownDraftProducts: unknownDraftProducts.length,
    errors: errors.length,
    warnings: warnings.length,
  },
  errors,
  warnings,
  missingProducts,
  unknownDraftProducts,
  asinChanges,
  invalidAsins,
  otherFieldChanges,
  forbiddenFields,
};

await mkdir(outputDir, { recursive: true });
await writeFile(reportPath, `${JSON.stringify(report, null, 2)}\n`, "utf8");

console.log("Validation du brouillon produits");
console.log(`Produits publics : ${publicProducts.length}`);
console.log(`Produits brouillon : ${draftProducts.length}`);
console.log(`ASIN modifies : ${asinChanges.length}`);
console.log(`Changements hors ASIN : ${otherFieldChanges.length}`);
console.log(`Erreurs : ${errors.length}`);
console.log(`Avertissements : ${warnings.length}`);
console.log(`Rapport : ${reportPath}`);

if (errors.length > 0) {
  console.log("\nErreurs detectees :");
  for (const error of errors) {
    console.log(`- ${error}`);
  }
  process.exitCode = 1;
}

if (warnings.length > 0) {
  console.log("\nAvertissements :");
  for (const warning of warnings) {
    console.log(`- ${warning}`);
  }
}
