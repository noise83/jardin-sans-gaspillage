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

# TASK 001 — NEXT

## Objectif
Créer une page longue traîne SEO sur les récupérateurs d’eau de pluie 300 L.

## Page à créer
- `src/pages/recuperation-eau/recuperateur-eau-pluie-300l/index.astro`

## Ne pas modifier
- `AGENTS.md`
- `package.json`
- `astro.config.mjs`
- les composants globaux sauf nécessité minime
- les données produits
- le moteur d’affiliation
- les scripts `product-candidates`
- les pages comparatifs
- les pages légales
- le design global
- les pages 500 L et 1000 L déjà créées

## SEO
- URL : `/recuperation-eau/recuperateur-eau-pluie-300l/`
- Title : `Récupérateur d’eau de pluie 300 L : pour petit jardin ou terrasse ?`
- Meta description : `Découvrez quand choisir un récupérateur d’eau de pluie 300 L, pour quels usages, ses limites, son installation et les erreurs à éviter.`
- H1 : `Récupérateur d’eau de pluie 300 L : suffisant pour votre jardin ?`

## Intention de recherche
Aider un particulier à comprendre si une cuve de 300 L est adaptée à une terrasse, un balcon, un petit jardin, quelques massifs ou un usage d’appoint.

## Structure attendue

### 1. Introduction
Expliquer qu’un récupérateur 300 L est une petite réserve pratique, facile à placer, mais limitée. Il convient surtout aux usages ponctuels ou aux petits espaces.

### 2. Bloc “En résumé”
Créer un bloc clair :
- adapté à une terrasse, un balcon ou un petit jardin
- utile pour pots, bacs, petits massifs et arrosage d’appoint
- facile à installer près d’une gouttière
- réserve limitée en période sèche
- bon choix pour démarrer sans grosse installation

### 3. H2 À qui convient un récupérateur d’eau de pluie 300 L ?
Expliquer :
- terrasse avec bacs
- balcon si configuration adaptée
- petit jardin
- quelques massifs
- plantes en pots
- arrosage ponctuel à l’arrosoir
Dire clairement que ce volume n’est pas adapté à un grand potager, une pelouse ou un usage intensif.

### 4. H2 Quels usages concrets avec 300 L ?
Inclure :
- remplir un arrosoir
- arroser des pots
- soutenir quelques plantes en été
- arroser un petit massif
- nettoyer ponctuellement du matériel extérieur
Préciser que l’eau de pluie n’est pas potable.

### 5. H2 Les avantages d’un récupérateur 300 L
Inclure :
- faible encombrement
- prix généralement plus accessible
- pose plus simple
- bon format pour tester la récupération d’eau
- choix intéressant pour les petits espaces

### 6. H2 Les limites à connaître
Inclure :
- réserve vite consommée
- autonomie faible en été
- pas suffisant pour un potager familial
- accessoires parfois non inclus
- stabilité et trop-plein à prévoir malgré le petit volume

### 7. H2 300 L, 500 L ou 1000 L : que choisir ?
Créer un tableau simple :

Capacité | Usage conseillé | Limite principale
300 L | terrasse, petit jardin, appoint | autonomie faible
500 L | jardin familial modéré, petits massifs, potager raisonnable | encore juste en sécheresse
1000 L | potager régulier, jardin moyen à grand | encombrement et poids

Ajouter des liens naturels vers :
- `/recuperation-eau/recuperateur-eau-pluie-500l/`
- `/recuperation-eau/cuve-eau-pluie-1000l/`
- `/comparatifs/meilleur-recuperateur-eau-pluie/`

### 8. H2 Comment bien installer un récupérateur 300 L ?
Expliquer :
- poser sur sol plat et stable
- rapprocher de la descente de gouttière
- utiliser un collecteur adapté
- prévoir un trop-plein
- garder la cuve fermée
- vérifier le robinet
- anticiper la vidange ou protection en hiver selon région

### 9. H2 Quelle toiture pour remplir 300 L ?
Expliquer simplement que même une petite toiture peut remplir rapidement 300 L lors d’une bonne pluie, mais que la fréquence des pluies détermine l’utilité réelle.
Ajouter un lien vers :
- `/outils/calculateur-taille-cuve/`

### 10. H2 Faut-il une pompe avec 300 L ?
Réponse : rarement. Pour une cuve 300 L, l’usage à l’arrosoir ou par gravité suffit souvent. Une pompe n’a du sens que si la cuve est éloignée ou si un petit tuyau doit être alimenté.
Ajouter un lien vers :
- `/arrosage-econome/`

### 11. H2 Erreurs fréquentes avec une cuve 300 L
Inclure :
- croire que 300 L suffisent pour tout le jardin
- acheter sans vérifier les accessoires
- oublier le trop-plein
- poser sur un support fragile
- laisser la cuve ouverte
- placer la cuve trop loin des plantes à arroser

### 12. H2 Verdict : faut-il choisir un récupérateur 300 L ?
Conclusion :
Un récupérateur 300 L est un bon choix pour un petit espace, une terrasse ou un usage d’appoint. Pour un jardin familial ou un potager plus sérieux, 500 L ou 1000 L seront souvent plus confortables. Le 300 L reste une bonne porte d’entrée si l’emplacement est simple et l’arrosage raisonnable.

### 13. H2 À lire ensuite
Créer un bloc de maillage interne vers :
- `/recuperation-eau/`
- `/recuperation-eau/recuperateur-eau-pluie-500l/`
- `/recuperation-eau/cuve-eau-pluie-1000l/`
- `/comparatifs/meilleur-recuperateur-eau-pluie/`
- `/outils/calculateur-taille-cuve/`
- `/arrosage-econome/`

## Contraintes
- Ton expert, accessible, concret.
- Paragraphes courts.
- Ne pas ajouter d’affiliation directe.
- Ne pas prétendre à des tests produits.
- Ne pas créer de tableau produit affilié.
- Ne pas ajouter de dépendance.
- Ne pas faire de refonte globale.
- Garder le style “carnet de terrain moderne”.
- Ne pas ajouter de données structurées dans cette tâche.

## Validation
- `npm run build` doit passer.
- Résumer les fichiers créés/modifiés.
- Commit et push sur `main` avec le message :
  `Add 300l rainwater collector guide`

---

# TASK 002 — TODO

## Objectif
Renforcer le maillage interne entre les pages 300 L, 500 L, 1000 L, la page pilier récupération d’eau et le comparatif principal.

## Fichiers concernés
- `src/pages/recuperation-eau/index.astro`
- `src/pages/recuperation-eau/recuperateur-eau-pluie-300l/index.astro`
- `src/pages/recuperation-eau/recuperateur-eau-pluie-500l/index.astro`
- `src/pages/recuperation-eau/cuve-eau-pluie-1000l/index.astro`
- `src/pages/comparatifs/meilleur-recuperateur-eau-pluie/index.astro`

## À faire
- Ajouter depuis la page pilier un bloc ou une section courte vers les guides 300 L, 500 L et 1000 L.
- Ajouter sur chaque page capacité des liens naturels vers les deux autres capacités.
- Ajouter depuis le comparatif principal un lien vers les guides 300 L, 500 L et 1000 L.
- Éviter les ancres répétées et sur-optimisées.

## Contraintes
- Ne pas modifier le design global.
- Ne pas ajouter d’affiliation.
- Ne pas créer de nouvelles pages.

## Validation
- `npm run build` doit passer.
- Résumer les fichiers modifiés.
- Commit et push avec le message :
  `Improve internal links between rainwater capacity guides`

---

# TASK 003 — TODO

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

## Contraintes
- Le JSON-LD doit correspondre au contenu visible.
- Ne pas ajouter de dépendance.
- Ne pas modifier le contenu visible sauf nécessité technique.

## Validation
- `npm run build` doit passer.
- Résumer les fichiers modifiés.
- Commit et push avec le message :
  `Add structured data to rainwater capacity guides`
