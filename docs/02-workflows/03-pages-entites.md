---
sidebar_position: 3
title: Consulter les pages entités
---

# Consulter les pages entités

Chaque entité déclarée lors de la configuration initiale dispose d'une page dédiée dans l'application. Ces pages permettent un examen détaillé de la situation financière et opérationnelle de chaque société du groupe.

## Accès aux pages entités

Les pages entités apparaissent dans le menu de navigation latéral gauche, nommées selon la raison sociale déclarée. L'ordre d'affichage correspond à l'ordre de saisie dans l'assistant de configuration initiale.

## Structure commune d'une page entité

Toutes les pages entités partagent une organisation en cinq zones successives.

### Zone 1 — En-tête de l'entité

L'en-tête identifie l'entité et synthétise son statut dans le groupe :

- Raison sociale
- Forme juridique et numéro SIREN
- Taux de détention par la société mère du groupe
- Méthode de consolidation appliquée
- Exercice financier en cours d'affichage

### Zone 2 — Indicateurs clés

Trois cartes d'indicateurs principaux sont présentées :

- **Chiffre d'affaires de l'exercice** et son évolution en pourcentage par rapport à l'année précédente
- **Résultat net comptable** et son évolution
- **Capitaux propres** et leur évolution

Le code couleur (vert ou rouge) signale instantanément les évolutions favorables ou défavorables.

### Zone 3 — Évolution sur trois exercices

Deux graphiques juxtaposés permettent de visualiser les tendances :

- **Évolution du chiffre d'affaires et du résultat d'exploitation** sur les trois derniers exercices.
- **Évolution des capitaux propres et de la trésorerie** sur les trois derniers exercices.

Les graphiques sont interactifs : passer le curseur sur un point affiche la valeur exacte à la date correspondante.

### Zone 4 — Structure financière

Un graphique en barres empilées présente la décomposition du passif de l'entité :

- Capitaux propres
- Dettes financières à long terme
- Dettes financières à court terme
- Dettes d'exploitation (fournisseurs, fiscales et sociales)

Ce graphique facilite la lecture de la structure de financement de l'entité et l'identification d'un éventuel déséquilibre.

### Zone 5 — Tableau détaillé

Un tableau de neuf lignes reprend l'ensemble des indicateurs financiers de l'entité sur les trois exercices :

| Indicateur | N-2 | N-1 | N |
|---|---|---|---|
| Chiffre d'affaires | ... | ... | ... |
| Résultat d'exploitation | ... | ... | ... |
| Résultat net comptable | ... | ... | ... |
| Résultat fiscal | ... | ... | ... |
| Capitaux propres | ... | ... | ... |
| Trésorerie | ... | ... | ... |
| Emprunts bancaires | ... | ... | ... |
| Dividendes versés | ... | ... | ... |
| Effectif moyen | ... | ... | ... |

Les valeurs sont formatées en euros avec séparateurs de milliers. Les effectifs sont affichés en équivalents temps plein (ETP).

## Particularités par type d'entité

### Sociétés opérationnelles (SARL, SAS, SASU)

Les pages des sociétés opérationnelles présentent l'ensemble des zones décrites ci-dessus. Le diagramme de Sankey des flux entrants et sortants est affiché lorsque l'entité est partie prenante de flux intragroupe significatifs (dividendes versés, conventions d'assistance reçues, etc.).

### Sociétés civiles immobilières (SCI)

Les pages des SCI adaptent leur contenu à la nature patrimoniale de ces entités :

- Le chiffre d'affaires est remplacé par les **loyers perçus**.
- Le résultat d'exploitation est remplacé par le **résultat foncier**.
- La structure financière met en avant le **ratio dette / valeur du patrimoine**.

Lorsque la SCI est classée hors périmètre de consolidation (cas des SCI détenues à titre personnel par les dirigeants), un bandeau explicite l'indique en haut de la page.

### Sociétés holding

Les pages des sociétés holding intègrent des sections spécifiques :

- **Dividendes reçus des filiales** avec leur répartition par entité émettrice.
- **Conventions d'assistance facturées** aux filiales.
- **Régime mère-fille** : le cas échéant, l'écart entre résultat comptable et résultat fiscal est explicité, avec mention de l'article 145 du Code Général des Impôts.
- **Endettement bancaire** : suivi des emprunts souscrits pour financer des opérations de croissance externe.

## Notes DAF contextuelles

Au bas de chaque page entité, une zone **Notes DAF** permet d'afficher des informations contextuelles spécifiques à l'entité :

- Régime fiscal appliqué (droit commun, régime mère-fille, intégration fiscale)
- Particularités locales (exonérations DOM, zones franches urbaines, etc.)
- Événements exceptionnels de l'exercice (cyclone, sinistre assurantiel, investissement majeur)
- Conventions d'assistance en vigueur

Ces notes peuvent être éditées depuis la page **Administration** de l'application.

## Export d'une page entité

Chaque page entité peut être exportée au format PDF via le bouton **Exporter en PDF** en haut à droite. Le PDF généré reprend l'intégralité des zones affichées à l'écran et peut être utilisé pour :

- Transmission aux organes de direction
- Archivage annuel
- Documentation des dossiers bancaires lors de demandes de financement
- Partage avec le cabinet d'expertise comptable
