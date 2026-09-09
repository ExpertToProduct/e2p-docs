---
sidebar_position: 2
title: Installation
---

# Installation

## Réception de l'application

À la finalisation de la commande, un courriel d'Expert To Product transmet le lien de téléchargement de l'installeur (image disque au format `.dmg`) et un lien de prise de rendez-vous pour l'accompagnement d'installation inclus. Il est recommandé de conserver ce courriel.

## Téléchargement

Le fichier se nomme par convention :

```
AI-Finance DAF-x.y.z-arm64.dmg
```

où `x.y.z` est le numéro de version. Sa taille est d'environ 200 Mo : l'image contient l'interface, le moteur de calcul et tout ce dont il a besoin. Aucun autre logiciel n'est à installer.

## Installation

1. Ouvrir le fichier `.dmg` téléchargé (dossier **Téléchargements**).
2. Glisser l'icône **AI-Finance DAF** sur le dossier **Applications** représenté dans la fenêtre.
3. Fermer la fenêtre et éjecter l'image disque (clic droit sur le disque monté, puis **Éjecter**).

L'application est signée et notarisée par Apple : macOS l'ouvre sans avertissement. Si un message de sécurité apparaît malgré tout, se reporter au chapitre [Résolution de problèmes](../04-support/02-resolution-problemes.md).

## Premier lancement

Au premier lancement, l'application demande **où ranger ses données** (configuration du groupe, statuts, journaux, réglages) :

- **Dossier par défaut** : `~/Library/Application Support/AI-Finance DAF/donnees`, invisible au quotidien et inclus dans les sauvegardes Time Machine.
- **Choisir un dossier** : tout autre emplacement, par exemple un dossier synchronisé avec iCloud Drive.

Ce choix est mémorisé. Le dossier reste accessible à tout moment par le menu **AI-Finance DAF > Ouvrir le dossier des données**.

L'application démarre ensuite son moteur (une dizaine de secondes la première fois) et ouvre sa fenêtre sur un groupe de démonstration fictif. La configuration du groupe réel se fait dans la page **Configuration** (voir [Premier démarrage](./03-premier-demarrage.md)).

Les documents financiers eux-mêmes (liasses, balances, FEC, pièces juridiques) ne sont pas copiés dans le dossier des données : ils restent dans le dossier de votre choix, appelé « data room », que la configuration désigne.

## Autorisations système

- **Accès aux fichiers** : l'application lit les documents du dossier que vous lui indiquez. macOS peut demander l'autorisation d'accéder à Documents, au Bureau ou à un disque externe au premier accès.
- **Réseau local** : l'interface dialogue avec le moteur de calcul par un serveur interne sur le port 8000 du poste. Aucune donnée ne quitte le Mac.
- **Internet** : nécessaire uniquement pour la vérification des mises à jour et, en option, pour l'assistant en mode distant.

## Vérification

1. Ouvrir AI-Finance DAF depuis **Applications**.
2. La fenêtre s'ouvre sur la page **Synthèse** du groupe de démonstration.
3. Le menu **AI-Finance DAF > À propos** affiche le numéro de version.

## Rendez-vous d'accompagnement

La session de 30 minutes comprend la vérification de l'installation, la configuration du groupe (entités, périmètre, dossier de documents), la présentation de la navigation et un premier rechargement sur des documents réels. Les utilisateurs qui le souhaitent peuvent configurer seuls l'application à l'aide de la présente documentation.
