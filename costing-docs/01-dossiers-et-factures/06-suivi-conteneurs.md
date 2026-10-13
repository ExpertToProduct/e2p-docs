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

Ensuite, le serveur relit chaque voyage **toutes les six heures** et écrit dans la fiche ce qui a changé. **Actualiser** force une relecture immédiate (aucun crédit). Le suivi continue après la sortie du port, jusqu'au **retour du conteneur vide** (90 jours au plus après le déchargement) : c'est ce qui permet de compter les surestaries.

:::info Création automatique
L'administrateur peut cocher, dans ADMIN › Sauvegarde, carte « Suivi des conteneurs (ShipsGo) », la création automatique des suivis manquants : elle consomme un crédit par conteneur commandé ou flottant, et ignore les dossiers dont l'ETA est dépassée de plus de quinze jours (sans doute déjà dépotés).
:::

## L'onglet « Au port » et l'alerte du matin

Page Dossiers, onglet **Au port** : chaque conteneur débarqué et pas encore rendu vide, avec ce que coûte son attente. Les coûts suivent les mêmes barèmes que la fiche de prix de revient.

| Coût | Compté à partir de | Jusqu'à |
|---|---|---|
| Stationnement | l'entrée sur le terminal, après 5 jours de franchise | la sortie du port |
| Surestaries | l'arrivée du navire (MSC) ou le débarquement (CMA), après la franchise du dossier ou de la compagnie | le retour du conteneur vide |

Pour chaque conteneur : jours écoulés, franchise restante, coût déjà engagé, coût d'un jour de plus et projection à 7 jours. Les frais fixes de sortie, dus quoi qu'il arrive, ne comptent pas comme coût d'attente. Trois niveaux : **dans la franchise**, **franchise épuisée dans 3 jours ou moins**, **coûte déjà**. Une compagnie sans barème connu affiche la raison, jamais un montant inventé.

Chaque jour à partir de 7 h, une alerte part avec les conteneurs au port et leur coût, vers les personnes dont le profil a la case « Recevoir l'alerte conteneurs au port ». Rien n'est envoyé quand aucun conteneur n'est au port.

:::tip Quand ShipsGo ne voit plus un conteneur
Sans sortie connue, l'onglet prend la date de dépotage saisie sur la fiche ; sans retour du vide connu, la date de retour des surestaries saisie sur la fiche. Saisir ces dates fait sortir le conteneur de la liste.
:::

## Si la carte dit « non configuré »

La clé d'accès à ShipsGo est déposée sur le serveur par l'administrateur (voir le guide du serveur) ; elle n'apparaît jamais à l'écran. Tant qu'elle manque, la carte l'indique et aucun suivi ne peut être créé ni relu.
