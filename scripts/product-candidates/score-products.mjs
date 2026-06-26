import { readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const candidatesPath = join(__dirname, "recuperateurs-eau-candidates.json");

function hasText(value) {
  return typeof value === "string" && value.trim().length > 0 && value.trim() !== "#";
}

function hasCapacity(value) {
  return typeof value === "string" && /\d+\s*(l|litres?)/i.test(value);
}

function scoreCandidate(candidate) {
  let score = 0;
  const details = [];

  if (hasCapacity(candidate.capacity)) {
    score += 18;
    details.push("capacité claire");
  }

  if (hasText(candidate.notes) || hasText(candidate.query)) {
    score += 14;
    details.push("usage identifiable");
  }

  if (hasText(candidate.category)) {
    score += 14;
    details.push("catégorie utile");
  }

  if (Array.isArray(candidate.includedAccessories) && candidate.includedAccessories.length > 0) {
    score += Math.min(14, candidate.includedAccessories.length * 4);
    details.push("accessoires renseignés");
  }

  if (Number.isFinite(candidate.reviewCount) && candidate.reviewCount > 0) {
    score += Math.min(12, Math.round(candidate.reviewCount / 10));
    details.push("avis disponibles");
  }

  if (Number.isFinite(candidate.rating) && candidate.rating > 0) {
    score += Math.min(12, Math.round(candidate.rating * 2));
    details.push("note disponible");
  }

  if (hasText(candidate.priceRange)) {
    score += 12;
    details.push("prix indicatif renseigné");
  }

  if (candidate.availabilityStatus === "unknown") {
    score -= 8;
    details.push("disponibilité inconnue");
  }

  return {
    ...candidate,
    editorialScore: Math.max(0, Math.min(100, score)),
    scoreDetails: details,
  };
}

const raw = await readFile(candidatesPath, "utf8");
const candidates = JSON.parse(raw);

const scoredCandidates = candidates
  .map(scoreCandidate)
  .sort((a, b) => b.editorialScore - a.editorialScore);

console.log("Candidats produits triés par score éditorial\n");

for (const candidate of scoredCandidates) {
  console.log(`${candidate.editorialScore}/100 - ${candidate.name}`);
  console.log(`  id: ${candidate.id}`);
  console.log(`  catégorie: ${candidate.category}`);
  console.log(`  capacité: ${candidate.capacity}`);
  console.log(`  marchand: ${candidate.merchant}`);
  console.log(`  source: ${candidate.sourceStatus}`);
  console.log(`  signaux: ${candidate.scoreDetails.join(", ")}`);
  console.log("");
}
