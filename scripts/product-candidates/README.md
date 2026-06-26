# Product Candidates

Ce dossier prépare le futur moteur multi-sites de sélection de produits.

Les fichiers JSON stockent des candidats produits repérés pour une niche donnée. À ce stade, ce sont des données de travail locales : elles servent à comparer des profils de produits, à noter leur intérêt éditorial et à préparer une intégration propre dans les fichiers produits publics du site.

Important :

- Les prix et disponibilités ne sont pas vérifiés automatiquement.
- Les exemples actuels sont des placeholders manuels, sans lien affilié actif.
- Le script de scoring n'appelle aucune API externe et ne scrape pas Amazon.
- Les futures intégrations devront passer par une API officielle, un flux marchand autorisé ou un export fourni par une plateforme partenaire.
- Les clés API, identifiants marchands, tokens et secrets devront rester dans `.env.local` ou dans des variables d'environnement, jamais dans GitHub.

Utilisation locale :

```bash
node scripts/product-candidates/score-products.mjs
```

Le score est éditorial. Il aide à prioriser les candidats selon la clarté de la capacité, l'usage identifiable, la catégorie, les accessoires, les avis ou notes disponibles, le prix indicatif et la disponibilité connue ou non.
