# Product Research

Ce dossier prépare la recherche produits de façon locale et contrôlée pour Jardin Sans Gaspillage.

Il ne scrape pas Amazon, n'appelle aucune API externe et n'utilise aucune clé. Les scripts servent uniquement à générer des liens de recherche de travail, puis à préparer l'extraction d'ASIN depuis des URL produits copiées manuellement.

Principes à respecter :

- Ne pas inventer de prix, de disponibilité ou d'avis.
- Ne pas afficher publiquement les données produites sans validation éditoriale.
- Ne pas ajouter de tag affilié aux liens de recherche générés.
- Ne pas modifier directement les fichiers produits publics dans `src/data/products/`.
- Utiliser plus tard une API officielle ou un flux marchand autorisé pour toute intégration automatisée.

Commandes locales :

```bash
node scripts/product-research/generate-research-links.mjs
node scripts/product-research/parse-selected-products.mjs
```

Les fichiers générés sont écrits dans `scripts/product-research/output/`.
