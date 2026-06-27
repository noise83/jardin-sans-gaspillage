# CODEX_QUEUE — Jardin Sans Gaspillage

Ce fichier sert de file de tâches pour Codex.

## Règles générales pour Codex

- Toujours lire `AGENTS.md` avant d’exécuter une tâche.
- Exécuter uniquement les tâches marquées `NEXT`.
- Ne jamais modifier `AGENTS.md`.
- Ne jamais ajouter de dépendance sans demande explicite.
- Ne jamais faire de refonte globale.
- Ne jamais modifier le design global sauf si la tâche le demande explicitement.
- Ne jamais prétendre qu’un produit a été testé si aucun test réel n’a été mené.
- Ne jamais ajouter d’affiliation directe si la tâche ne le demande pas.
- Après chaque tâche : lancer `npm run build`.
- Si le build échoue : arrêter immédiatement, ne pas commit, résumer l’erreur.
- Si le build passe : commit et push avec le message demandé dans la tâche.
- Faire un commit séparé par tâche.
- Ne pas exécuter plus de 3 tâches par session.

## Instruction courte à donner à Codex

Lis `AGENTS.md` puis `CODEX_QUEUE.md`. Exécute uniquement les tâches marquées `NEXT`, dans l’ordre, avec un maximum de 3 tâches par session. Après chaque tâche, lance `npm run build`. Si le build passe, commit et push avec le message indiqué. Si une tâche échoue, arrête-toi et résume le problème. Ne modifie rien hors périmètre.

---

# TASK 001 — DONE

## Objectif
Créer une page longue traîne SEO sur les récupérateurs d’eau de pluie 300 L.

## Résultat
- Page créée : `src/pages/recuperation-eau/recuperateur-eau-pluie-300l/index.astro`
- Commit : `37b9918 Add 300l rainwater collector guide`
- Build validé par Codex.

---

# TASK 002 — DONE

## Objectif
Renforcer le maillage interne entre les pages 300 L, 500 L, 1000 L, la page pilier récupération d’eau et le comparatif principal.

## Résultat
- Maillage interne renforcé entre les pages capacité, le pilier et le comparatif.
- Commit : `32e417c Improve internal links between rainwater capacity guides`
- Build validé par Codex.

---

# TASK 003 — DONE

## Objectif
Ajouter des données structurées simples aux pages longues traîne 300 L, 500 L et 1000 L.

## Résultat
- JSON-LD ajouté sur les pages 300 L, 500 L et 1000 L.
- Types ajoutés : `BreadcrumbList`, `Article`.
- Aucun schema `Product`, `Review` ou `AggregateRating`.
- Commit : `0234863 Add structured data to rainwater capacity guides`
- Build validé par Codex.

---

# TASK 004 — DONE

## Objectif
Faire un audit court du silo récupération d’eau après création des pages 300 L, 500 L et 1000 L.

## Résultat
- Audit uniquement, aucun fichier modifié.
- `npm run build` passe avec 16 pages générées.
- Routes, titles, meta descriptions, H1, canonicals, JSON-LD, maillage, absence de faux tests et absence d’affiliation directe validés.
- Aucun problème bloquant détecté.

---

# TASK 005 — NEXT

## Objectif
Préparer un workflow local de recherche produits pour les récupérateurs d’eau, sans scraper Amazon, sans API externe et sans utiliser de clés.

## Pourquoi
Le site a déjà une base produits et un moteur d’affiliation local, mais les ASIN sont encore vides. Cette tâche doit créer une brique de travail utile pour préparer les futurs ASIN et candidats produits, sans automatisation risquée.

## Fichiers à créer
- `scripts/product-research/README.md`
- `scripts/product-research/recuperateurs-eau-search-plan.json`
- `scripts/product-research/generate-research-links.mjs`
- `scripts/product-research/selected-products-input.example.json`
- `scripts/product-research/parse-selected-products.mjs`

## Ne pas modifier
- `AGENTS.md`
- `package.json`
- `astro.config.mjs`
- les pages du site
- les composants
- les données produits publiques dans `src/data/products/`
- le moteur d’affiliation existant
- les scripts `product-candidates` existants
- le design global

## À faire

### 1. README
Créer un README qui explique :
- ce dossier prépare la recherche produits de façon locale et contrôlée ;
- il ne scrape pas Amazon ;
- il n’appelle aucune API ;
- il n’invente pas de prix, de disponibilité ou d’avis ;
- il sert à générer des liens de recherche et à préparer l’extraction d’ASIN depuis des URL produits copiées manuellement ;
- les données produites ne doivent pas être affichées publiquement sans validation éditoriale ;
- les futures intégrations devront utiliser API officielle ou flux marchands autorisés.

### 2. Plan de recherche JSON
Créer `recuperateurs-eau-search-plan.json` avec 6 familles de recherche :
- récupérateur 300 L petit espace
- récupérateur mural 300 à 500 L
- récupérateur 500 L bon compromis
- récupérateur design 500 L type pierre / mural décoratif
- cuve eau de pluie 1000 L
- cuve IBC 1000 L

Chaque entrée doit contenir :
- `id`
- `label`
- `intent`
- `queries` : liste de 3 à 5 recherches Amazon possibles
- `mustCheck` : critères à vérifier manuellement, par exemple capacité, accessoires, trop-plein, collecteur, dimensions, avis, état, origine de la cuve, protection UV
- `avoid` : signaux à éviter, par exemple produit flou, capacité non claire, avis trop faibles, accessoires indispensables non précisés

### 3. Script generate-research-links.mjs
Créer un script Node sans dépendance qui :
- lit `recuperateurs-eau-search-plan.json`
- génère pour chaque query une URL de recherche Amazon.fr du type `https://www.amazon.fr/s?k=...`
- n’ajoute pas de tag affilié sur ces URLs de recherche, car ce sont des liens de travail non publics
- affiche en console les familles et URLs de recherche
- écrit aussi un fichier généré : `scripts/product-research/output/recuperateurs-eau-research-links.json`

### 4. Fichier selected-products-input.example.json
Créer un exemple de fichier pour coller plus tard des produits repérés manuellement.
Chaque entrée doit contenir :
- `targetProductId`
- `sourceUrl`
- `notes`
- `merchant`
- `status`

Mettre des exemples fictifs avec `sourceUrl` vide ou `#`, pas de vraie URL produit.

### 5. Script parse-selected-products.mjs
Créer un script Node sans dépendance qui :
- lit `selected-products-input.example.json`
- tente d’extraire un ASIN depuis une URL Amazon si elle existe
- supporte au moins les formats `/dp/ASIN`, `/gp/product/ASIN` et `/product/ASIN`
- si aucun ASIN n’est trouvé, met `asin` à vide
- affiche un résumé en console
- écrit un fichier généré : `scripts/product-research/output/selected-products-parsed.json`
- ne modifie pas `src/data/products/recuperateurs-eau.json`

## Contraintes
- Ne pas ajouter de dépendance.
- Ne pas scraper Amazon.
- Ne pas appeler d’API externe.
- Ne pas générer de prix, de disponibilité ou d’avis.
- Ne pas activer de liens affiliés.
- Ne pas modifier les pages publiques.
- Ne pas toucher au moteur d’affiliation.
- Ne pas ajouter de données inventées comme réelles.

## Validation
- `node scripts/product-research/generate-research-links.mjs` doit fonctionner.
- `node scripts/product-research/parse-selected-products.mjs` doit fonctionner.
- `npm run build` doit passer.
- Résumer les fichiers créés.
- Commit et push avec le message :
  `Add product research workflow`

---

# TASK 006 — TODO

## Objectif
Créer ensuite un import contrôlé depuis des produits sélectionnés vers les fichiers produits publics, après validation humaine des ASIN.

## Note
Cette tâche sera détaillée après validation de la TASK 005.
