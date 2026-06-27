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

Page 300 L créée. Commit : `37b9918 Add 300l rainwater collector guide`. Build validé.

---

# TASK 002 — DONE

Maillage interne entre les guides capacité, le pilier et le comparatif. Commit : `32e417c Improve internal links between rainwater capacity guides`. Build validé.

---

# TASK 003 — DONE

JSON-LD ajouté sur 300 L, 500 L et 1000 L. Types : `BreadcrumbList`, `Article`. Aucun schema commercial inventé. Commit : `0234863 Add structured data to rainwater capacity guides`. Build validé.

---

# TASK 004 — DONE

Audit du silo récupération d’eau terminé. Aucun problème bloquant. Build validé.

---

# TASK 005 — DONE

Workflow local de recherche produits ajouté dans `scripts/product-research/`. Aucun scraping, aucune API, aucune clé, aucune modification publique. Commit : `b416c16 Add product research workflow`. Build validé.

---

# TASK 006 — DONE

Import contrôlé vers brouillon ajouté. Le fichier public `src/data/products/recuperateurs-eau.json` n’est pas modifié automatiquement. Commit : `aafef30 Add controlled product import draft workflow`. Build validé.

---

# TASK 007 — DONE

Checklist de revue, validateur de brouillon et rapport de validation ajoutés. Commit : `16fd5eb Add product draft review workflow`. Build validé.

---

# TASK 008 — NEXT

## Objectif
Marquer le produit cible `recuperateur-500l-compromis` comme candidat prioritaire à rechercher, sans l’approuver et sans intégrer de produit public.

## Pourquoi
Le premier produit à chercher doit être un récupérateur d’eau de pluie 500 L classique, bon compromis, adapté à un jardin familial modéré. C’est le meilleur premier test commercial et éditorial. Mais aucune vraie URL produit n’a encore été validée, donc il ne faut pas mettre `approved`.

## Fichiers concernés
- `scripts/product-research/selected-products-input.json`
- `scripts/product-research/README.md` si une précision courte est utile

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
- `CODEX_QUEUE.md`

## À faire

1. Dans `selected-products-input.json`, nettoyer l’entrée `recuperateur-500l-compromis` :
- garder `targetProductId: "recuperateur-500l-compromis"` ;
- mettre `sourceUrl` à vide ;
- mettre `status` à `candidate`, pas `approved` ;
- ajouter une note claire indiquant que c’est le candidat prioritaire ;
- préciser dans la note le type de produit recherché : récupérateur eau de pluie environ 500 L, cuve fermée, robinet inclus ou compatible, trop-plein possible, dimensions indiquées, protection UV ou matière opaque, produit neuf, pas IBC, pas occasion.

2. S’assurer qu’aucune entrée placeholder ne reste en `approved` sans URL exploitable.

3. Ne pas ajouter de vraie URL produit.

4. Ne pas modifier les produits publics.

5. Lancer :
- `node scripts/product-research/parse-selected-products.mjs`
- `node scripts/product-research/apply-selected-products.mjs`
- `node scripts/product-research/validate-product-draft.mjs`
- `npm run build`

## Validation
- Les scripts passent.
- Le build passe.
- Aucun produit public n’est modifié.
- Le rapport de validation ne signale pas de modification publique.
- Résumer les fichiers modifiés.
- Commit et push avec le message :
  `Mark 500l collector as priority product candidate`

---

# TASK 009 — WAITING_USER

## Objectif
Intégrer manuellement un premier produit réel validé dans les données publiques.

## Pourquoi cette tâche attend
Cette tâche ne doit pas être exécutée tant qu’une vraie URL produit Amazon n’a pas été sélectionnée et validée éditorialement.

## Action attendue avant de repasser en NEXT
- Sélectionner un produit réel cohérent avec `recuperateur-500l-compromis`.
- Renseigner son URL source dans `scripts/product-research/selected-products-input.json`.
- Mettre `status: "approved"` seulement après vérification éditoriale.
- Lancer les scripts de contrôle avant toute intégration publique.

## Note importante
Ne pas marquer cette tâche `NEXT` avant validation humaine d’un produit réel.
