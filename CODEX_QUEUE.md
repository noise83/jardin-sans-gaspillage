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

# TASK 003 — NEXT

## Objectif
Ajouter des données structurées simples aux pages longues traîne 300 L, 500 L et 1000 L.

## Fichiers concernés
- `src/pages/recuperation-eau/recuperateur-eau-pluie-300l/index.astro`
- `src/pages/recuperation-eau/recuperateur-eau-pluie-500l/index.astro`
- `src/pages/recuperation-eau/cuve-eau-pluie-1000l/index.astro`

## À faire
- Ajouter `BreadcrumbList`.
- Ajouter `Article`.
- Ne pas ajouter `Product`, `Review` ou `AggregateRating`.
- Ne pas inventer d’auteur personnel ; utiliser `Jardin Sans Gaspillage`.
- Les URL doivent utiliser `https://jardinsansgaspillage.fr`.
- Les titres et descriptions du JSON-LD doivent correspondre aux pages concernées.

## Contraintes
- Le JSON-LD doit correspondre au contenu visible.
- Ne pas ajouter de dépendance.
- Ne pas modifier le contenu visible sauf nécessité technique.
- Ne pas modifier `AGENTS.md`.
- Ne pas toucher au moteur d’affiliation.
- Ne pas ajouter de schema `Product` tant que les produits ne sont pas réellement liés/offrés.

## Validation
- `npm run build` doit passer.
- Résumer les fichiers modifiés.
- Commit et push avec le message :
  `Add structured data to rainwater capacity guides`
