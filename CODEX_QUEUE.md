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

# TASK 006 — NEXT

## Objectif
Créer un import contrôlé depuis des produits sélectionnés vers un brouillon de données produits publiques, sans modifier automatiquement `src/data/products/recuperateurs-eau.json`.

## Pourquoi
On veut préparer l’étape d’intégration des ASIN, mais garder une validation humaine avant toute modification publique. Le script doit produire un brouillon contrôlable, pas pousser directement des produits réels dans le site.

## Fichiers à modifier
- `scripts/product-research/README.md`

## Fichiers à créer
- `scripts/product-research/selected-products-input.json`
- `scripts/product-research/apply-selected-products.mjs`
- `scripts/product-research/output/recuperateurs-eau-products-draft.json`

## Ne pas modifier
- `AGENTS.md`
- `package.json`
- `astro.config.mjs`
- les pages du site
- les composants
- le moteur d’affiliation
- les scripts `product-candidates`
- le design global

## Règle importante
Ne pas modifier `src/data/products/recuperateurs-eau.json` dans cette tâche. Le script doit seulement générer un fichier brouillon dans `scripts/product-research/output/`.

## À faire

### 1. Créer `selected-products-input.json`
Créer un fichier de travail basé sur `selected-products-input.example.json`, mais destiné aux vraies sélections futures.

Chaque entrée doit contenir :
- `targetProductId`
- `sourceUrl`
- `notes`
- `merchant`
- `status`

Règles :
- utiliser des entrées placeholder avec `sourceUrl` vide ou `#` ;
- `status` doit pouvoir être `candidate`, `approved`, `rejected` ;
- ne pas ajouter de vraie URL produit dans cette tâche ;
- ne pas inventer de prix, d’avis ou de disponibilité.

### 2. Créer `apply-selected-products.mjs`
Créer un script Node sans dépendance qui :
- lit `src/data/products/recuperateurs-eau.json` ;
- lit `scripts/product-research/selected-products-input.json` ;
- extrait les ASIN depuis `sourceUrl` avec les mêmes formats que `parse-selected-products.mjs` : `/dp/ASIN`, `/gp/product/ASIN`, `/product/ASIN` ;
- ne prend en compte que les entrées avec `status: "approved"` ;
- ignore les entrées `candidate` et `rejected` ;
- cherche le produit cible via `targetProductId` ;
- génère une copie des produits avec `asin` rempli uniquement quand un ASIN valide est trouvé ;
- conserve les autres champs existants ;
- écrit le résultat dans `scripts/product-research/output/recuperateurs-eau-products-draft.json` ;
- affiche un résumé console : nombre d’entrées lues, approuvées, ASIN extraits, produits modifiés, erreurs.

### 3. Sécurité du script
Le script doit :
- ne jamais modifier `src/data/products/recuperateurs-eau.json` ;
- signaler les `targetProductId` inconnus ;
- signaler les entrées approved sans ASIN ;
- ne jamais ajouter de prix, disponibilité, note ou avis ;
- ne jamais ajouter de tag affilié ;
- ne jamais appeler Amazon, API externe ou réseau.

### 4. Mettre à jour le README
Ajouter une section expliquant le workflow :
1. générer les liens de recherche ;
2. chercher manuellement les produits ;
3. copier les URLs dans `selected-products-input.json` ;
4. mettre `status: "approved"` seulement après vérification éditoriale ;
5. lancer `parse-selected-products.mjs` pour contrôle ;
6. lancer `apply-selected-products.mjs` pour générer un brouillon ;
7. relire le brouillon avant toute modification de `src/data/products/recuperateurs-eau.json`.

## Contraintes
- Ne pas ajouter de dépendance.
- Ne pas scraper Amazon.
- Ne pas appeler d’API externe.
- Ne pas modifier les pages publiques.
- Ne pas modifier les produits publics.
- Ne pas activer d’affiliation directe.
- Ne pas inventer de données commerciales.

## Validation
- `node scripts/product-research/parse-selected-products.mjs` doit fonctionner.
- `node scripts/product-research/apply-selected-products.mjs` doit fonctionner.
- `npm run build` doit passer.
- Résumer les fichiers créés/modifiés.
- Commit et push avec le message :
  `Add controlled product import draft workflow`

---

# TASK 007 — TODO

## Objectif
Après validation du workflow d’import brouillon, créer une procédure de revue manuelle pour intégrer les ASIN dans les données publiques sans casser le site.

## Note
Cette tâche sera détaillée après validation de la TASK 006.
