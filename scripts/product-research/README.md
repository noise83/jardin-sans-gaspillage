# Product Research

Ce dossier prepare la recherche produits de facon locale et controlee pour Jardin Sans Gaspillage.

Il ne scrape pas Amazon, n'appelle aucune API externe et n'utilise aucune cle. Les scripts servent uniquement a generer des liens de recherche de travail, puis a preparer l'extraction d'ASIN depuis des URL produits copiees manuellement.

Principes a respecter :

- Ne pas inventer de prix, de disponibilite ou d'avis.
- Ne pas afficher publiquement les donnees produites sans validation editoriale.
- Ne pas ajouter de tag affilie aux liens de recherche generes.
- Ne pas modifier directement les fichiers produits publics dans `src/data/products/`.
- Utiliser plus tard une API officielle ou un flux marchand autorise pour toute integration automatisee.

Commandes locales :

```bash
node scripts/product-research/generate-research-links.mjs
node scripts/product-research/parse-selected-products.mjs
node scripts/product-research/apply-selected-products.mjs
```

Les fichiers generes sont ecrits dans `scripts/product-research/output/`.

## Workflow d'import controle

Ce workflow prepare un brouillon de donnees produits, sans modifier automatiquement les fichiers publics du site.

1. Generer les liens de recherche avec `generate-research-links.mjs`.
2. Chercher manuellement les produits a partir des requetes preparees.
3. Copier les URL retenues dans `selected-products-input.json`.
4. Passer `status` a `approved` seulement apres verification editoriale.
5. Lancer `parse-selected-products.mjs` pour controler l'extraction locale des ASIN.
6. Lancer `apply-selected-products.mjs` pour generer un brouillon dans `output/`.
7. Relire le brouillon avant toute modification manuelle de `src/data/products/recuperateurs-eau.json`.

Le script d'application ne scrape pas Amazon, n'appelle aucune API externe, n'ajoute aucun tag affilie et n'ecrit jamais dans `src/data/products/recuperateurs-eau.json`.
