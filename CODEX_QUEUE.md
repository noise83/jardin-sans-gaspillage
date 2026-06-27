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

# TASK 004 — NEXT

## Objectif
Faire un audit court du silo récupération d’eau après création des pages 300 L, 500 L et 1000 L.

## Important
Cette tâche est un audit uniquement. Ne modifier aucun fichier, ne créer aucun commit et ne faire aucun push.

## À vérifier
- Les routes suivantes existent et se buildent :
  - `/recuperation-eau/`
  - `/recuperation-eau/recuperateur-eau-pluie-300l/`
  - `/recuperation-eau/recuperateur-eau-pluie-500l/`
  - `/recuperation-eau/cuve-eau-pluie-1000l/`
  - `/comparatifs/meilleur-recuperateur-eau-pluie/`
- Chaque page a un title unique.
- Chaque page a une meta description.
- Chaque page a un seul H1.
- Les canonicals utilisent bien `https://jardinsansgaspillage.fr`.
- Les pages 300 L, 500 L et 1000 L ont bien un JSON-LD `BreadcrumbList` et `Article`.
- Les pages 300 L, 500 L et 1000 L n’ont pas de schema `Product`, `Review` ou `AggregateRating`.
- Le maillage entre 300 L, 500 L, 1000 L, la page pilier et le comparatif principal est présent.
- Aucune page ne prétend que des produits ont été testés.
- Aucune affiliation directe n’a été ajoutée sur les guides capacité.

## Validation
- Lancer `npm run build`.
- Ne modifier aucun fichier.
- Ne faire aucun commit.
- Ne faire aucun push.
- Rendre un résumé clair : points OK, problèmes éventuels, corrections recommandées.

---

# TASK 005 — TODO

## Objectif
Préparer la prochaine étape produit/affiliation sans scraper Amazon et sans utiliser de clés API.

## Note
Cette tâche sera détaillée après validation de l’audit du silo récupération d’eau.
