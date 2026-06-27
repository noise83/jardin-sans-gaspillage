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

# TASK 008 — DONE

Produit cible `recuperateur-500l-compromis` marqué comme candidat prioritaire, sans URL réelle et sans approbation prématurée. Commit : `b87bb42 Mark 500l collector as priority product candidate`. Build validé.

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

---

# TASK 010 — NEXT

## Objectif
Créer une page longue traîne SEO sur les récupérateurs d’eau de pluie muraux.

## Page à créer
- `src/pages/recuperation-eau/cuve-murale-recuperateur-eau-pluie/index.astro`

## Ne pas modifier
- `AGENTS.md`
- `package.json`
- `astro.config.mjs`
- les composants globaux sauf nécessité minime
- les données produits
- le moteur d’affiliation
- les scripts product-research et product-candidates
- les pages légales
- le design global
- `CODEX_QUEUE.md`

## SEO
- URL : `/recuperation-eau/cuve-murale-recuperateur-eau-pluie/`
- Title : `Cuve murale pour récupérateur d’eau de pluie : avantages et limites`
- Meta description : `Découvrez quand choisir une cuve murale de récupération d’eau de pluie, ses avantages, ses limites, les critères d’installation et les erreurs à éviter.`
- H1 : `Cuve murale pour récupérateur d’eau de pluie : bonne idée ou compromis ?`

## Intention de recherche
Aider un particulier qui manque de place ou veut une installation plus discrète à comprendre si une cuve murale est adaptée à son jardin, sa terrasse, sa façade ou son passage latéral.

## Structure attendue

### 1. Introduction
Expliquer qu’une cuve murale est pensée pour gagner de la place et s’intégrer contre un mur, mais qu’elle impose des compromis : profondeur, stabilité, capacité utile, raccordement et accès au robinet.

### 2. Bloc “En résumé”
Créer un bloc clair :
- adaptée aux petits jardins, terrasses et passages latéraux ;
- utile quand une cuve ronde prend trop de place ;
- plus discrète contre une façade ;
- capacité parfois limitée ;
- installation à soigner pour la stabilité ;
- bon choix si la gouttière est proche et l’usage raisonnable.

### 3. H2 À qui convient une cuve murale ?
Expliquer :
- petit jardin ;
- terrasse ;
- façade visible ;
- passage étroit ;
- massifs proches de la maison ;
- usage à l’arrosoir.
Dire clairement que ce n’est pas forcément adapté à un grand potager ou à un usage intensif.

### 4. H2 Les avantages d’un récupérateur d’eau mural
Inclure :
- gain de place ;
- meilleure intégration visuelle ;
- accès pratique au robinet ;
- pose près d’une descente de gouttière ;
- formats 300 à 500 L intéressants pour usage familial modéré.

### 5. H2 Les limites à connaître
Inclure :
- capacité souvent plus faible qu’une grosse cuve ;
- prix parfois plus élevé au litre ;
- stabilité à surveiller ;
- profondeur et largeur à vérifier ;
- accessoires pas toujours inclus ;
- entretien et nettoyage parfois moins pratiques ;
- trop-plein indispensable.

### 6. H2 Cuve murale 300 L ou 500 L : comment choisir ?
Créer un tableau simple :
Capacité | Usage conseillé | Point de vigilance
300 L | terrasse, petit jardin, appoint | autonomie faible
500 L | jardin familial modéré, massifs, petit potager | poids et stabilité
Plus de 500 L | besoin plus régulier, espace technique | encombrement et installation

Ajouter des liens naturels vers :
- `/recuperation-eau/recuperateur-eau-pluie-300l/`
- `/recuperation-eau/recuperateur-eau-pluie-500l/`

### 7. H2 Où installer une cuve murale ?
Expliquer :
- près d’une descente de gouttière ;
- sur sol plat, dur et stable ;
- contre un mur accessible ;
- sans bloquer un passage ;
- avec assez de place pour remplir un arrosoir ;
- avec une évacuation ou trop-plein prévu.

### 8. H2 Quels accessoires vérifier avant achat ?
Inclure :
- robinet ;
- collecteur de gouttière ;
- filtre ;
- kit de raccordement ;
- trop-plein ;
- couvercle ;
- socle ou support ;
- protection UV.

### 9. H2 Cuve murale ou cuve ronde classique ?
Comparer sans forcer :
- cuve murale : meilleure intégration et gain de place ;
- cuve ronde : souvent plus simple et parfois moins chère ;
- cuve IBC : volume plus important mais aspect technique.
Ajouter un lien vers :
- `/comparatifs/meilleur-recuperateur-eau-pluie/`

### 10. H2 Faut-il une pompe avec une cuve murale ?
Réponse nuancée : souvent non pour l’arrosoir ; parfois utile si tuyau long, cuve éloignée ou besoin de pression. Ajouter un lien vers :
- `/arrosage-econome/`

### 11. H2 Erreurs fréquentes
Inclure :
- choisir uniquement pour le design ;
- oublier les dimensions réelles ;
- négliger le support ;
- oublier le trop-plein ;
- acheter sans vérifier les accessoires ;
- placer la cuve trop loin des plantes ;
- croire qu’une cuve murale remplace une grosse réserve.

### 12. H2 Verdict
Conclure qu’une cuve murale est un très bon choix pour gagner de la place et garder une installation propre, à condition de vérifier la capacité, les accessoires, la stabilité et l’usage réel. Pour un potager régulier, il faudra souvent viser 500 L ou compléter avec une autre réserve.

### 13. H2 À lire ensuite
Créer un bloc de maillage interne vers :
- `/recuperation-eau/`
- `/recuperation-eau/recuperateur-eau-pluie-300l/`
- `/recuperation-eau/recuperateur-eau-pluie-500l/`
- `/recuperation-eau/cuve-eau-pluie-1000l/`
- `/comparatifs/meilleur-recuperateur-eau-pluie/`
- `/outils/calculateur-taille-cuve/`

## Données structurées
Ajouter uniquement :
- `BreadcrumbList`
- `Article`
Ne pas ajouter `Product`, `Review` ou `AggregateRating`.
Auteur/éditeur : `Jardin Sans Gaspillage`.

## Contraintes
- Ton expert, accessible, concret.
- Paragraphes courts.
- Ne pas ajouter d’affiliation directe.
- Ne pas prétendre à des tests produits.
- Ne pas créer de tableau produit affilié.
- Ne pas ajouter de dépendance.
- Ne pas faire de refonte globale.
- Garder le style “carnet de terrain moderne”.

## Validation
- `npm run build` doit passer.
- Résumer les fichiers créés/modifiés.
- Commit et push sur `main` avec le message :
  `Add wall mounted rainwater tank guide`

---

# TASK 011 — TODO

## Objectif
Après création de la page cuve murale, renforcer le maillage depuis la page pilier et le comparatif principal.
