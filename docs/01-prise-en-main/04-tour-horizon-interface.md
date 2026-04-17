---
sidebar_position: 4
title: Tour d'horizon de l'interface
---

# Tour d'horizon de l'interface

## Organisation générale

Une fois l'assistant de configuration initiale validé, AI-Finance DAF présente son interface principale organisée en trois zones :

1. **Barre latérale gauche** : menu de navigation principale permettant d'accéder à chaque page de l'application.
2. **Zone centrale** : contenu de la page sélectionnée, occupant la majeure partie de l'écran.
3. **Barre d'état inférieure** : informations contextuelles (version de l'application, état de la connexion à l'assistant IA, indicateur de synchronisation).

## Les pages de navigation

Le menu latéral gauche donne accès aux pages suivantes, par ordre d'apparition :

### Groupe

Vue d'ensemble du groupe consolidé. L'utilisateur y trouve :

- L'organigramme visuel des entités avec leurs taux de détention
- Les indicateurs clés consolidés (chiffre d'affaires cumulé, résultat net groupe, capitaux propres consolidés, trésorerie agrégée)
- Le diagramme de Sankey des flux intragroupe
- Le tableau de synthèse comparatif entre les entités

### Pages entités (KALO, D&CO, SCI, LAERANA HOLDING, etc.)

Une page par entité, nommée selon la raison sociale. Chaque page entité affiche :

- Le détail des indicateurs financiers de l'entité sur trois exercices glissants
- Les graphiques d'évolution du chiffre d'affaires, du résultat et des capitaux propres
- La structure bilan-passif avec les postes de dettes et de capitaux propres
- Les notes DAF spécifiques à l'entité (régime fiscal, particularités locales, conventions)

### Consolidation

Page dédiée au détail de la consolidation financière :

- Méthode appliquée par entité (IG, ME, Hors périmètre)
- Retraitements d'intégration (élimination des doubles comptages, neutralisation des flux intragroupe)
- Bilan et compte de résultat consolidés du groupe
- Export du rapport de consolidation au format PDF

### Vigilance

Page de suivi des 11 ratios de vigilance financière inspirés des critères Euler Hermes :

- Ratios de solvabilité (couverture des dettes par les capitaux propres, autonomie financière)
- Ratios de liquidité (trésorerie nette, besoin en fonds de roulement)
- Ratios de rentabilité (marge d'exploitation, ROE, ROCE)
- Ratios d'activité (rotation des stocks, délais de règlement clients et fournisseurs)
- Affichage par code couleur (vert, orange, rouge) selon les seuils paramétrés
- Export du rapport de vigilance au format PDF

### Documents

Espace de chargement et de gestion des documents sources :

- Importation des liasses fiscales annuelles par entité
- Importation des reportings mensuels ou trimestriels
- Historique des documents chargés avec date et statut de traitement

### Assistant IA (QA)

Page dédiée à l'assistant conversationnel spécialisé en finance d'entreprise :

- Champ de saisie d'une question en langage naturel
- Historique des échanges de la session en cours
- Bascule entre mode d'inférence locale (LM Studio) et mode distant (Claude API)
- Le contexte financier du groupe est automatiquement injecté dans le prompt

### Administration

Page de paramétrage avancé (voir chapitre dédié) :

- Rechargement des données par entité
- Gestion du journal d'activité
- Configuration des chemins de fichiers
- Sauvegarde et restauration du fichier `config_groupe.json`

## Raccourcis clavier

Les raccourcis suivants sont disponibles depuis toute page de l'application :

| Action | Raccourci |
|---|---|
| Navigation vers la page Groupe | Commande + 1 |
| Navigation vers l'assistant IA | Commande + 9 |
| Rechargement forcé de la page | Commande + R |
| Rechargement complet (vider le cache) | Commande + Majuscule + R |
| Affichage de la console développeur | Option + Commande + I |

## Code couleur et conventions visuelles

L'application utilise une palette de couleurs cohérente pour faciliter la lecture :

- **Vert** : valeur conforme aux attendus, flux entrant positif, ratio favorable.
- **Orange (ambre)** : valeur à surveiller, écart modéré, alerte non bloquante.
- **Rouge** : valeur critique, alerte bloquante, ratio hors seuils, anomalie détectée.
- **Bleu** : information neutre, valeur historique, donnée de référence.
- **Gris** : donnée non disponible, non applicable, ou en cours de chargement.

## Modes d'affichage

AI-Finance DAF propose deux thèmes visuels accessibles depuis la barre d'état inférieure :

- **Thème clair** (par défaut) : fond blanc, texte foncé, adapté aux environnements lumineux.
- **Thème sombre** : fond sombre, texte clair, réduit la fatigue oculaire en soirée.

Le changement de thème s'applique instantanément à l'ensemble de l'interface.
