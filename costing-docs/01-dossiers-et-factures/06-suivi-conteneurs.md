---
sidebar_position: 6
title: Suivre un conteneur
---

# Suivre un conteneur

Où en est le conteneur ? Quand arrive-t-il vraiment ? Depuis quand est-il déchargé ? La carte **Suivi du conteneur** de la fiche répond sans aller sur le site de la compagnie : l'application interroge ShipsGo, un service de suivi maritime, et tient la fiche à jour.

## Ce que le suivi fait pour vous

- **ETD et ETA tenues à jour.** L'ETD vide est remplie au départ réel du navire ; l'ETA saisie est remplacée par l'ETA de la compagnie dès qu'elle change. Chaque écriture est tracée dans l'historique de la fiche (« suivi conteneurs », avec la source).
- **Dates de débarquement.** Quand le conteneur est déchargé, le début du décompte des surestaries (date du navire chez MSC, débarquement du conteneur chez CMA) et l'entrée sur le terminal sont remplis s'ils étaient vides. Les dates de dépotage et les jours saisis ne sont **jamais** touchés.
- **Alertes** : ETA retardée de plus de deux jours (par rapport à la fiche ou à la première ETA annoncée), transbordement, conteneur déchargé alors que le fret GCCOI ou INDIGO n'est pas payé (elle remonte aussi dans [Règlements](05-suivi-reglements.md)), suivi sans données (numéro à vérifier), suivi périmé.
- **Frise du voyage**, conteneur par conteneur : vide au chargeur, entrée au terminal, chargé, départ, arrivée, déchargé, sortie du port, retour du vide — avec le port, la date, le navire, et ce qui est encore estimé.
- Dans la liste des dossiers, onglets **Commandés** et **Flottants**, la colonne **Dernier événement** dit en un coup d'œil où en est chaque conteneur.

:::info « Au port, à dépoter » n'est pas « arrivé »
Le suivi propose l'étape **flottant** dès que le navire est parti, mais jamais l'étape **arrivé** : arrivé veut dire dépoté, et seul le service achats le sait. Un conteneur déchargé est signalé « au port, à dépoter ».
:::

## Démarrer le suivi d'un dossier : un crédit

ShipsGo fonctionne par crédits : **un crédit par conteneur** (ou par connaissement), jusqu'à la fin du voyage, sans remboursement. Aucun suivi ne se crée donc tout seul : sur la fiche d'un dossier commandé ou flottant qui porte un numéro de conteneur (ou de connaissement), cliquez **Suivre ce conteneur…**, lisez le nombre de crédits annoncé, puis **Confirmer et suivre**. Le suivi commence aussitôt ; la compagnie est reconnue d'après la fiche (MSC, CMA) ou détectée par ShipsGo d'après le numéro.

Ensuite, le serveur relit chaque voyage **toutes les six heures** et écrit dans la fiche ce qui a changé. **Actualiser** force une relecture immédiate (aucun crédit). Quand le conteneur est sorti du port, le suivi est terminé et n'est plus relu.

:::caution Compte d'essai
Le compte ShipsGo de l'entreprise commence avec trois crédits : choisissez les trois dossiers à suivre avec le fondateur. L'administrateur peut activer, dans ADMIN › Sauvegarde, la création automatique des suivis manquants — elle consomme alors un crédit par conteneur commandé ou flottant.
:::

## Si la carte dit « non configuré »

La clé d'accès à ShipsGo est déposée sur le serveur par l'administrateur (voir le guide du serveur) ; elle n'apparaît jamais à l'écran. Tant qu'elle manque, la carte l'indique et aucun suivi ne peut être créé ni relu.
