---
sidebar_position: 4
title: Piloter la vigilance et la file à traiter
---

# Piloter la vigilance et la file à traiter

Deux pages se complètent : **Vigilance** présente les ratios et leurs seuils ; **À traiter** rassemble tout ce qui demande une action.

## Vigilance

### Les onze ratios

| Famille | Ratio | Définition | Seuils par défaut (opérationnelle) |
|---|---|---|---|
| Rentabilité | Marge nette | Résultat net / CA | rouge sous 2 %, orange sous 5 % |
| Rentabilité | Marge opérationnelle | Résultat d'exploitation / CA | rouge sous 3 %, orange sous 7 % |
| Rentabilité | ROE | Résultat net / Capitaux propres | rouge sous 5 %, orange sous 10 % |
| Rentabilité | Taux de valeur ajoutée | Valeur ajoutée / CA | rouge sous 20 %, orange sous 35 % |
| Solvabilité | Gearing | Dettes financières / Capitaux propres | rouge au-dessus de 1,5, orange au-dessus de 0,5 |
| Solvabilité | Autonomie financière | Capitaux propres / Total bilan | rouge sous 20 %, orange sous 35 % |
| Solvabilité | Couverture des dettes | CAF / Dettes financières | rouge sous 0,15, orange sous 0,3 |
| Liquidité | Liquidité générale | Actif circulant / Dettes à court terme | rouge sous 0,8, orange sous 1,2 |
| Activité | BFR | Besoin en fonds de roulement en jours de CA | rouge au-dessus de 90 j, orange au-dessus de 30 j |
| Activité | Délai clients | Créances clients en jours de CA | rouge au-dessus de 75 j, orange au-dessus de 45 j |
| Activité | Délai fournisseurs | Dettes fournisseurs en jours d'achats | rouge au-dessus de 60 j, orange au-dessus de 30 j |

Les montants de référence (chiffre d'affaires, résultat d'exploitation, résultat net, CAF, capitaux propres) sont affichés à côté des ratios.

### Seuils par type d'activité

Les seuils s'adaptent au **type** de l'entité défini à la configuration :

- **Holding** : marges, taux de valeur ajoutée, BFR et délais ne sont pas suivis (affichés en gris) ; liquidité générale avec des seuils abaissés.
- **Immobilière** : gearing, autonomie financière et couverture des dettes avec des seuils tenant compte de l'endettement adossé aux immeubles ; cycle d'exploitation non suivi.

Les seuils affichés sous chaque carte indiquent leur origine (défaut, type, ajustement propre à l'entité). Un ajustement par entité ou par type se règle dans la configuration du groupe (clé `seuils`) ; le support peut accompagner ce paramétrage.

### Lecture

Un onglet par entité et un onglet **Consolidé**. Chaque carte porte la valeur de l'exercice, le code couleur et l'évolution. Une entité sans document lu affiche « Données non disponibles » : aucun ratio n'est estimé à sa place.

### Interpréter une alerte rouge

Une alerte invite à un examen, pas à une conclusion : vérifier la source du chiffre dans la fiche de l'entité, replacer le ratio dans le contexte de l'exercice (investissement, sinistre, cession), le croiser avec les autres ratios, et au besoin poser la question à l'assistant.

### Rapport DAF

Le bouton **Rapport PDF** en haut de la page produit le rapport complet du groupe (voir [Lire la Synthèse](./02-analyser-consolidation.md)).

## À traiter

La file réunit, pour l'exercice de référence, trois familles d'éléments avec l'entité, l'exercice et la gravité :

- **Alertes de ratios** : ratios en rouge ou orange.
- **Contrôles de cohérence** : écart entre liasse et balance, source manquante, régime fiscal incohérent, formulaire 2065 absent, commissaire aux comptes obligatoire mais non renseigné, mandat du commissaire aux comptes ou d'un dirigeant expiré ou à renouveler dans l'année.
- **Pièces manquantes** : documents juridiques et financiers prioritaires attendus et absents. Une pièce dont le délai légal est dépassé apparaît **en rouge** avec son retard en jours et sa date limite ; une pièce dont le délai court encore apparaît avec sa date limite.

### Traiter un élément

- **Écart justifié : expliquer et sortir de la file** : l'écart est compris et documenté.
- **Sans suite : ignorer et sortir de la file** : sans objet pour ce groupe.
- **Remettre dans la file** : revenir sur un statut.
- **Déposer** : pour une pièce manquante, ouvre le dépôt guidé.

Les statuts sont conservés d'un rechargement à l'autre et propres à chaque groupe. Le compteur de la barre latérale indique ce qui reste à traiter ; la file figure aussi dans le rapport DAF.

## Échéancier

La page **Échéancier** reprend les obligations datées de chaque société avec trois compteurs fondés sur le temps qui reste : **en retard**, **dans les 30 jours**, **dans l'année civile**, chacun détaillé par société. Les obligations sont ensuite listées par mois avec la date limite, le retard ou les jours restants, et un bouton **Déposer** quand une pièce est attendue. Un élément expliqué ou ignoré dans la file À traiter sort des compteurs. Le bouton **Calendrier (.ics)** exporte les obligations à venir avec un rappel sept jours avant, pour l'agenda du DAF ; le rapport DAF reprend l'échéancier en tableau.
