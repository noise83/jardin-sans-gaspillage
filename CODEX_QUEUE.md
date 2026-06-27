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

# TASK 005 — DONE

## Objectif
Préparer un workflow local de recherche produits pour les récupérateurs d’eau, sans scraper Amazon, sans API externe et sans utiliser de clés.

## Résultat
- Workflow local de recherche produits ajouté dans `scripts/product-research/`.
- Génération de liens de recherche Amazon de travail sans tag affilié.
- Extraction locale d’ASIN depuis des URLs copiées manuellement.
- Aucun scraping, aucune API, aucune clé, aucune modification publique.
- Commit : `b416c16 Add product research workflow`
- Build validé par Codex.

---

# TASK 006 — DONE

## Objectif
Créer un import contrôlé depuis des produits sélectionnés vers un brouillon de données produits publiques, sans modifier automatiquement `src/data/products/recuperateurs-eau.json`.

## Résultat
- Fichier de travail `selected-products-input.json` ajouté.
- Script `apply-selected-products.mjs` ajouté.
- Brouillon généré dans `scripts/product-research/output/recuperateurs-eau-products-draft.json`.
- Le fichier public `src/data/products/recuperateurs-eau.json` n’est pas modifié automatiquement.
- Commit : `aafef30 Add controlled product import draft workflow`
- Build validé par Codex.

---

# TASK 007 — NEXT

## Objectif
Créer une procédure de revue manuelle avant intégration des ASIN dans les données produits publiques, sans modifier les produits publics.

## Pourquoi
On a maintenant un workflow qui peut générer un brouillon. Avant de toucher `src/data/products/recuperateurs-eau.json`, il faut une étape de contrôle : vérifier que seules les valeurs attendues changent, que les ASIN sont plausibles, que les produits restent cohérents éditorialement, et que le site ne risque pas d’afficher des données commerciales inventées.

## Fichiers à créer
- `scripts/product-research/PRODUCT_REVIEW_CHECKLIST.md`
- `scripts/product-research/validate-product-draft.mjs`
- `scripts/product-research/output/product-draft-validation-report.json`

## Fichier à modifier
- `scripts/product-research/README.md`

## Ne pas modifier
- `AGENTS.md`
- `package.json`
- `astro.config.mjs`
- les pages publiques
- les composants
- `src/data/products/recuperateurs-eau.json`
- le moteur d’affiliation
- les scripts `product-candidates`
- le design global

## À faire

### 1. Créer `PRODUCT_REVIEW_CHECKLIST.md`
Rédiger une checklist claire pour la revue manuelle avant intégration publique.
Elle doit couvrir :
- vérifier que l’ASIN vient d’une URL Amazon copiée manuellement ;
- vérifier que le produit correspond vraiment au `targetProductId` ;
- vérifier capacité, dimensions, accessoires, trop-plein, collecteur, robinet, couvercle, protection UV ;
- vérifier que le produit n’est pas présenté comme testé ;
- vérifier qu’aucun prix, disponibilité, note ou avis n’est inventé ;
- vérifier que les liens publics seront générés par le moteur d’affiliation, pas collés manuellement ;
- vérifier que le brouillon ne modifie pas des champs éditoriaux sans raison ;
- vérifier que le produit n’est pas dangereux, ambigu, hors sujet ou mal identifié ;
- garder une trace des produits rejetés avec une raison.

### 2. Créer `validate-product-draft.mjs`
Créer un script Node sans dépendance qui :
- lit `src/data/products/recuperateurs-eau.json` ;
- lit `scripts/product-research/output/recuperateurs-eau-products-draft.json` ;
- compare les produits par identifiant ;
- vérifie que tous les produits publics existent encore dans le brouillon ;
- vérifie qu’aucun nouveau champ commercial interdit n’est ajouté : `price`, `rating`, `reviews`, `availability`, `stock`, `discount` ;
- vérifie que les ASIN ajoutés respectent un format plausible de 10 caractères alphanumériques ;
- liste les produits dont l’ASIN a changé ;
- signale les produits dont d’autres champs ont changé ;
- écrit un rapport JSON dans `scripts/product-research/output/product-draft-validation-report.json` ;
- affiche un résumé console clair.

### 3. Mettre à jour le README
Ajouter une section “Revue avant intégration publique” qui explique :
- générer le brouillon avec `apply-selected-products.mjs` ;
- valider le brouillon avec `validate-product-draft.mjs` ;
- lire `PRODUCT_REVIEW_CHECKLIST.md` ;
- ne modifier `src/data/products/recuperateurs-eau.json` qu’après validation humaine ;
- lancer `npm run build` après toute intégration publique.

## Contraintes
- Ne pas ajouter de dépendance.
- Ne pas scraper Amazon.
- Ne pas appeler d’API externe.
- Ne pas modifier les produits publics.
- Ne pas modifier les pages publiques.
- Ne pas activer d’affiliation directe.
- Ne pas inventer de prix, disponibilité, note ou avis.
- Ne pas créer de schema Product.

## Validation
- `node scripts/product-research/apply-selected-products.mjs` doit fonctionner.
- `node scripts/product-research/validate-product-draft.mjs` doit fonctionner.
- `npm run build` doit passer.
- Résumer les fichiers créés/modifiés.
- Commit et push avec le message :
  `Add product draft review workflow`

---

# TASK 008 — TODO

## Objectif
Après validation de la procédure de revue, intégrer manuellement un premier produit réel validé dans les données publiques.

## Note
Cette tâche sera détaillée uniquement après test réel du workflow de revue.
