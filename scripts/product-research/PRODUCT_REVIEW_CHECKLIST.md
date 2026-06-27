# Checklist de revue produit

Cette checklist doit etre lue avant toute integration manuelle dans
`src/data/products/recuperateurs-eau.json`.

## Source et correspondance

- Confirmer que l'ASIN provient d'une URL Amazon copiee manuellement.
- Verifier que l'URL source correspond vraiment au `targetProductId`.
- Rejeter les produits mal identifies, ambigus, hors sujet ou dangereux.
- Garder une trace de chaque produit rejete avec une raison courte.

## Coherence editoriale

- Verifier la capacite annoncee.
- Verifier les dimensions quand elles sont utiles a l'achat.
- Verifier les accessoires inclus ou absents.
- Verifier la presence ou l'absence d'un trop-plein.
- Verifier la presence ou l'absence d'un collecteur de gouttiere.
- Verifier la presence ou l'absence d'un robinet.
- Verifier la presence ou l'absence d'un couvercle.
- Verifier les indications de protection UV.
- Confirmer que le produit reste coherent avec le conseil editorial du site.
- Confirmer que le brouillon ne modifie pas des champs editoriaux sans raison.

## Transparence commerciale

- Ne jamais presenter un produit comme teste si aucun test reel n'a ete mene.
- Ne pas inventer de prix.
- Ne pas inventer de disponibilite.
- Ne pas inventer de note.
- Ne pas inventer d'avis.
- Confirmer que les liens publics seront generes par le moteur d'affiliation.
- Ne jamais coller de lien affilie directement dans les donnees publiques.

## Avant integration publique

- Lancer `node scripts/product-research/apply-selected-products.mjs`.
- Lancer `node scripts/product-research/validate-product-draft.mjs`.
- Lire `scripts/product-research/output/product-draft-validation-report.json`.
- Integrer manuellement uniquement les changements valides.
- Lancer `npm run build` apres toute integration publique.
