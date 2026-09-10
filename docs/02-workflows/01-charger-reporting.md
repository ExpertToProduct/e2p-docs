---
sidebar_position: 1
title: Déposer les documents et recharger
---

# Déposer les documents et recharger

La mise à jour des données ne passe pas par un formulaire d'import : les documents sont déposés dans la **data room**, puis l'application est rechargée.

## Quand recharger

- **Clôture annuelle** : dépôt de la liasse fiscale définitive et de la balance de chaque entité.
- **Suivi de l'exercice en cours** : dépôt d'un FEC partiel arrêté à date.
- **Correction du cabinet** : remplacement d'un document par sa version corrigée.
- **Pièce juridique** reçue : PV d'assemblée, K-bis à jour, rapport du commissaire aux comptes.

## Les documents lus

| Document | Format | Dossier | Ce qu'il apporte |
|---|---|---|---|
| Liasse fiscale | PDF (2033 simplifié ou 2050 réel normal, avec le 2065) | `Bilans/`, `PnL/` | Bilan, compte de résultat, régime fiscal, effectif |
| Balance générale | PDF du cabinet ou tableur | `Balances/` | Détail par compte, positions intragroupe, tableau de flux de trésorerie, contrôle de la liasse |
| FEC | Fichier texte | `FEC/` | Contrôle de la balance, lettrage, âge des créances, exercice en cours |
| Balance intermédiaire | PDF ou tableur, `<préfixe>_<exercice>_<MM>` (MM = dernier mois couvert) | `Balances/` | Situation de l'exercice en cours sans FEC : cumuls à date, comparatif N-1, atterrissage |
| Pièces juridiques | PDF | `juridique/` | Statuts, K-bis, PV, rapports, registre des titres, conventions |

Les liasses scannées sans couche texte ne peuvent pas être lues ; demander au cabinet le PDF d'origine.

## Nommer les fichiers

Le nom attendu de chaque fichier découle du préfixe de l'entité et de l'exercice, par exemple `DISTRIB_bilan_2025.pdf`, `DISTRIB_balance_2025.pdf`, `FEC_DISTRIB_2026.txt`. La fiche de chaque entité (section **Documents**) et la page **Groupe** indiquent les fichiers attendus et ceux qui manquent.

## Recharger

1. Déposer ou remplacer le fichier dans la data room.
2. Cliquer **Recharger les données** dans la barre latérale.
3. Suivre la progression (moteur, intragroupe, historique, vigilance, alertes, identité).
4. Les pages se rafraîchissent d'elles-mêmes à la fin.

Le rechargement se fait en arrière-plan : la navigation reste possible pendant qu'il tourne. Au démarrage de l'application, les mêmes calculs sont lancés automatiquement.

## Déposer une pièce depuis l'application

Pour une pièce juridique attendue, le bouton **Déposer** (page **Groupe**, section des pièces, ou ligne correspondante de la file **À traiter**) ouvre un panneau qui propose le nom de fichier et le sous-dossier de la data room. Choisir le fichier ou le glisser sur la ligne : il est copié au bon endroit et la pièce passe à « présente » sans rechargement complet.

## Vérifier ce qui a été lu

**Paramètres > Couverture données groupe** indique, pour chaque entité et chaque exercice, la source utilisée : liasse, balance, FEC, saisie de l'assistant de configuration, ou aucune. La fiche de chaque entité détaille dans **Sources et contrôles** les écarts constatés entre la liasse et la balance.

## Traçabilité

Chaque rechargement, dépôt et changement de statut est inscrit dans le **journal d'activité** (page Paramètres). La configuration du groupe conserve sa version précédente à chaque modification, et la page Paramètres permet une sauvegarde datée à tout moment (voir [Administration des données](../03-administration/01-administration-donnees.md)).
