---
sidebar_position: 3
title: Premier démarrage
---

# Premier démarrage

Après l'installation, l'application affiche un groupe de démonstration fictif. La page **Configuration** permet de créer le groupe réel en cinq étapes : **Identité**, **Entités**, **Flux**, **Données financières**, **Validation**. Comptez 15 à 30 minutes selon le nombre d'entités.

## Avant de commencer : le dossier de documents

AI-Finance DAF lit les documents dans un dossier de votre choix, la **data room**, organisé par entité :

```
<data room>/
  HOLDING/       Bilans/   PnL/   Balances/
  DISTRIB/       Bilans/   PnL/   Balances/   FEC/
  SCI_IMMO/      Bilans/   PnL/   Balances/
  juridique/     statuts, K-bis, PV d'assemblée, pactes...
```

- `Bilans/` et `PnL/` : les liasses fiscales au format PDF, une par exercice (régime simplifié 2033 ou réel normal 2050, avec le formulaire 2065).
- `Balances/` : la balance générale de chaque exercice, en PDF du cabinet ou en tableur.
- `FEC/` : le fichier des écritures comptables, notamment celui de l'exercice en cours pour la page Pilotage.
- `juridique/` : les pièces juridiques, rangées par entité.

Les noms de fichiers attendus dépendent du **préfixe** défini pour chaque entité à l'étape 2 ; l'application les affiche dans la fiche de chaque entité et signale ce qui manque.

## Étape 1 — Identité

- Dénomination du groupe
- Devise (euro par défaut)
- Exercice de référence (dernier exercice clos) et exercices disponibles
- Assujettissement à la TVA (à désactiver pour Mayotte)
- Emplacement de la data room

## Étape 2 — Entités

Pour chaque société du groupe :

- Raison sociale, forme juridique, SIRET
- **Type** : opérationnelle, holding ou immobilière. Le type détermine les seuils de vigilance appliqués.
- Activité, capital social, effectif
- **Détention** par la société mère (en pourcentage) et inclusion ou non dans le périmètre de consolidation
- **Régime fiscal** : IS ou IR (transparence fiscale des SCI), taux d'IS
- **Préfixe des fichiers** : la racine des noms de documents dans la data room (par exemple `DISTRIB` pour `DISTRIB_bilan_2025.pdf`)
- **Clôture de l'exercice** (31 décembre par défaut) : sert au calcul des délais légaux de l'échéancier
- **Alias** : variantes d'écriture de la société dans les intitulés de comptes, pour le rapprochement intragroupe
- **Commissaire aux comptes** : nom, premier exercice du mandat, date de nomination. Laissé vide, l'application vérifie chaque exercice si la nomination est devenue obligatoire (deux critères sur trois : total bilan, chiffre d'affaires, effectif, seuils du décret de 2024 ; cumul pour la société qui contrôle le groupe et ses filiales significatives)
- **Dirigeants** : fonction, nom, date de nomination et durée du mandat quand elle est déterminée, pour être prévenu de l'échéance

L'ordre de saisie est l'ordre d'affichage dans la barre latérale.

## Étape 3 — Flux intragroupe

Déclaration des flux récurrents entre entités : dividendes, convention d'assistance (management fees), loyers, compte courant, refacturation. Pour chacun : émetteur, récepteur, montant annuel, exercices concernés.

Ces flux servent aux éliminations de la consolidation. Dès que les balances sont déposées, l'application rapproche elle-même les comptes réciproques : un flux détecté dans les balances remplace le flux déclaré, sauf si celui-ci est verrouillé. Cette étape indique aussi quelles sociétés ont signé la convention de trésorerie du groupe et quels tiers homonymes ne doivent jamais être pris pour une société du groupe.

## Étape 4 — Données financières

Pour chaque entité, deux possibilités :

- **Lire une liasse** : choisir le PDF de la liasse fiscale ; l'application reconnaît le régime (2033 ou 2050) et préremplit les champs clés (chiffre d'affaires, résultat d'exploitation, résultat net, capitaux propres, trésorerie, emprunts, effectif). Chaque champ est marqué selon sa fiabilité de lecture et peut être corrigé.
- **Saisir** les valeurs à la main.

Ces saisies servent de complément ou de secours : une fois les documents déposés dans la data room, les chiffres lus dans les liasses et les balances ont priorité, et la page **Paramètres** indique pour chaque entité la source utilisée.

## Étape 5 — Validation

Récapitulatif de la configuration : identité, entités et détentions, flux, complétude des données. **Appliquer** enregistre la configuration, la charge sans redémarrer l'application et ouvre la Synthèse.

La configuration est un fichier `config_groupe.json` dans le dossier des données ; l'ancienne version est conservée à côté à chaque modification. Il est recommandé de lancer une sauvegarde depuis **Paramètres** à l'issue de cette étape.

## Plusieurs groupes

L'application peut héberger plusieurs groupes (par exemple pour un cabinet). Le sélecteur en haut de la barre latérale bascule de l'un à l'autre sans redémarrage ; **Configuration > Nouveau groupe** en crée un nouveau. Chaque groupe possède sa configuration, ses statuts, ses journaux et sa data room.
