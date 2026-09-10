---
sidebar_position: 2
title: Lire la Synthèse consolidée
---

# Lire la Synthèse consolidée

La page **Synthèse** présente les comptes consolidés du groupe pour l'exercice de référence, avec leur historique. La page **Groupe** complète cette vue par la structure capitalistique et les positions intragroupe.

## Synthèse

### Compte de résultat

- **Chiffre d'affaires**, **résultat d'exploitation**, **résultat net** et **capacité d'autofinancement** : groupe consolidé et détail par entité, sur les exercices disponibles.
- Les flux intragroupe (dividendes, conventions d'assistance, loyers, refacturations) sont éliminés.
- Onglets **Groupe consolidé** et **Par entité**.

### Fiscalité

- IS brut, crédits d'impôt, IS net estimé, déficits reportables.
- Intégration fiscale lorsque le formulaire 2065 l'indique.
- **Impôts différés** : position nette et rapprochement avec l'IS comptabilisé.

### Bilan consolidé

- Capitaux propres consolidés, part du groupe et **intérêts non contrôlants** (INC) par entité.
- **Écart d'acquisition** (goodwill) sur les titres de participation.
- Mise en équivalence des participations non contrôlées.
- **Tableau de flux de trésorerie** construit à partir des balances N et N-1.

### Événements non récurrents

Perte de stock, indemnités d'assurance, impact net et résultat récurrent, pour isoler l'effet d'un sinistre ou d'un événement exceptionnel.

### Journal des éliminations

Chaque écriture d'élimination (titres, comptes réciproques, dividendes intragroupe, profits internes) est listée avec ses montants, pour être auditée ou transmise au commissaire aux comptes.

## Groupe

- **Structure capitalistique** : pour chaque entité, détention, chiffre d'affaires N et N-1, résultat, trésorerie, effectif, inclusion dans le périmètre.
- **Positions intragroupe** : comptes réciproques rapprochés à partir des balances (comptes courants, créances et dettes croisées), avec les écarts entre les deux entités.
- **Pièces juridiques** : référentiel des documents attendus par entité et pour le groupe, statut de chacun (présent, projet, périmé, manquant, sans objet) et dépôt (voir [Déposer les documents](./01-charger-reporting.md)). Les pièces soumises à un délai légal portent leur date limite : **en retard** avec le nombre de jours, ou **à venir**. Délais retenus : approbation des comptes dans les six mois de la clôture, dépôt des comptes au greffe dans les deux mois de l'assemblée (huit mois de la clôture si la date de l'assemblée n'est pas connue), liasse fiscale dans les trois mois de la clôture ou début mai pour une clôture au 31 décembre, K-bis de moins de trois mois. La date de clôture de chaque société se règle dans la Configuration, ainsi qu'une éventuelle prorogation du délai d'approbation et le dépôt sous confidentialité.

## Méthodes de consolidation

- **Intégration globale** pour les filiales incluses dans le périmètre : reprise intégrale des comptes, intérêts non contrôlants pour la part non détenue.
- **Mise en équivalence** pour les participations non contrôlées.
- **Hors périmètre** pour les entités exclues à la configuration (SCI détenues à titre personnel, par exemple) : leurs chiffres restent consultables dans leur fiche.

## Régime mère-fille et transparence fiscale

Les dividendes reçus des filiales apparaissent en produits financiers de la société mère et sont éliminés en consolidation. Les entités à l'IR (SCI transparentes) ne portent pas d'IS : leur résultat remonte fiscalement aux associés.

## Interpréter un chiffre

- La provenance de chaque chiffre est indiquée dans la fiche de l'entité : liasse, balance, saisie, ou aucune source.
- Un chiffre à zéro sur une entité signalée « sans source » n'est pas un résultat : c'est un document manquant.
- Un écart entre liasse et balance apparaît dans la file **À traiter** avec son montant.

## Rapport DAF en PDF et classeur Excel

Le bouton **Rapport PDF** en haut de la page **Vigilance** produit un rapport complet : ratios et alertes, historique, journal des éliminations, fiscalité et réconciliation de l'IS, écart d'acquisition, mise en équivalence, profits internes, contrôles, tableau de flux, file à traiter et pilotage de l'exercice en cours.

Le bouton **Classeur Excel**, sur les pages Vigilance et Synthèse, livre les chiffres en tableur pour le cabinet, le commissaire aux comptes ou la banque : une feuille par état (compte de résultat, bilan, variation des capitaux propres, flux de trésorerie, journal des éliminations, fiscalité), la vigilance, l'échéancier et une **annexe** (périmètre et méthodes par société, sources des chiffres, hypothèses et limites du moteur, réconciliation croisée des états). Les montants sont des nombres, pas du texte.
