---
sidebar_position: 1
title: Périmètre et méthodes de consolidation
---

# Périmètre et méthodes de consolidation

Le périmètre se déduit de la configuration de chaque société, jamais des documents. Il est recalculé à chaque rechargement.

## Données utilisées

Pour chaque société, à l'étape **Entités** de la Configuration : la détention en pourcentage, la société détentrice, le type (holding, opérationnelle, immobilière), la case « inclure dans la consolidation », une méthode imposée si on le souhaite, une date d'entrée ou de sortie du périmètre.

## Méthode retenue

Une méthode imposée s'applique telle quelle. Sinon, dans cet ordre :

| Situation | Méthode |
|---|---|
| Holding de tête | Intégration globale |
| Société immobilière | Mise en équivalence |
| Case « inclure » décochée | Hors périmètre |
| Détention supérieure à 50 % | Intégration globale |
| Détention égale à 50 % | Intégration proportionnelle |
| Détention de 20 à 50 % | Mise en équivalence |
| Détention inférieure à 20 % | Hors périmètre |

La page **Groupe** affiche pour chaque société la méthode retenue et son origine, déduite ou imposée.

## Détentions indirectes

La détention du groupe dans une société est le produit des détentions le long de la chaîne « détenue par » jusqu'à la tête. Une société détenue à 100 % par une filiale elle-même détenue à 75 % est contrôlée, donc intégrée globalement, avec 25 % d'intérêts minoritaires. La page Groupe distingue le pourcentage de contrôle et le pourcentage d'intérêt.

## Variations de périmètre

Une entrée ou une sortie en cours d'exercice se traduit par un compte de résultat repris au prorata des mois de présence. Le bilan d'une société sortie avant la clôture n'est pas repris.

## Intégration proportionnelle

Chaque poste est repris à la quote-part du groupe et les éliminations avec cette société sont faites au même prorata ; il n'y a pas d'intérêts minoritaires. C'est la pratique française pour le contrôle conjoint.

## Ce que l'application ne fait pas

Elle ne lit pas les détentions dans les statuts ni dans les registres : un pourcentage saisi faux donne un périmètre faux sans alerte. Le seul contrôle indirect est le rapprochement des titres de participation lus dans la balance de la holding avec les filiales qu'ils nomment (voir [Éliminations et rapprochements](./02-eliminations-et-rapprochements.md)).
