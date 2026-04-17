---
sidebar_position: 2
title: Analyser la consolidation du groupe
---

# Analyser la consolidation du groupe

La page **Groupe** constitue le point d'entrée naturel pour obtenir une vision consolidée des activités du groupe. Elle synthétise en une seule vue les principaux indicateurs financiers agrégés et les relations inter-entités.

## Accès à la page

Cliquer sur **Groupe** dans le menu de navigation latéral gauche.

## Composants de la page

### L'en-tête du groupe

La partie supérieure de la page affiche les informations d'identification du groupe :

- Dénomination
- Territoire d'implantation principal
- Exercice de référence affiché
- Dernière date de mise à jour des données

Un sélecteur permet de basculer entre les exercices disponibles (typiquement les trois derniers). Le changement d'exercice actualise instantanément l'ensemble des indicateurs de la page.

### Les indicateurs clés consolidés

Quatre cartes d'indicateurs sont affichées en bandeau :

- **Chiffre d'affaires consolidé** : somme des chiffres d'affaires des entités en Intégration Globale, pondérée des neutralisations intragroupe.
- **Résultat net part groupe** : résultat consolidé revenant à la société mère, après déduction des intérêts minoritaires.
- **Capitaux propres consolidés** : capitaux propres de la société mère augmentés de la quote-part des filiales et diminués des écarts de consolidation.
- **Trésorerie agrégée** : somme des trésoreries des entités du périmètre.

Chaque carte affiche la valeur de l'exercice en cours et la variation par rapport à l'exercice précédent (en pourcentage, avec code couleur vert ou rouge).

### L'organigramme des entités

Au centre de la page, un schéma visuel représente la structure du groupe :

- La société mère est positionnée au sommet.
- Les filiales sont représentées en dessous, reliées par des traits indiquant le lien de détention.
- Le taux de détention est inscrit sur chaque lien.
- Les entités hors périmètre de consolidation sont affichées en gris avec la mention explicite.
- Les entités en Mise en Équivalence sont affichées avec un motif particulier.

Cliquer sur une entité dans l'organigramme ouvre directement la page détaillée correspondante.

### Le diagramme de Sankey des flux intragroupe

Ce diagramme représente les flux financiers circulant entre les entités du groupe. La largeur des flux est proportionnelle à leur montant.

Les flux visualisés comprennent :

- Les dividendes remontés des filiales vers la société mère
- Les conventions d'assistance facturées par la société mère à ses filiales (management fees)
- Les loyers versés aux SCI patrimoniales
- Les prêts et comptes courants d'associés

Passer le curseur sur un flux affiche une infobulle détaillant le montant exact et la nature du flux.

### Le tableau de synthèse

Sous le diagramme de Sankey, un tableau récapitule pour chaque entité du groupe :

- Raison sociale
- Méthode de consolidation appliquée
- Taux de détention
- Chiffre d'affaires de l'exercice
- Résultat net
- Capitaux propres
- Effectif

Les lignes sont triables par clic sur l'en-tête de colonne.

## Interprétation des données consolidées

### Les neutralisations intragroupe

Le moteur de consolidation d'AI-Finance DAF élimine automatiquement les flux internes pour éviter les doubles comptages. Les opérations neutralisées comprennent :

- Les dividendes intragroupe (évitent de compter deux fois le même résultat)
- Les conventions d'assistance entre entités du groupe
- Les ventes internes entre filiales
- Les créances et dettes réciproques au bilan

Le détail des retraitements est consultable sur la page **Consolidation**.

### Les méthodes de consolidation

AI-Finance DAF applique automatiquement la méthode déclarée lors de la configuration initiale :

- **Intégration Globale** : reprise intégrale des comptes de la filiale dans les comptes consolidés. Utilisée pour les filiales détenues à plus de 50 % ou exerçant un contrôle exclusif.
- **Mise en Équivalence** : seule la quote-part du résultat et des capitaux propres est reprise. Utilisée pour les participations comprises entre 20 % et 50 %.
- **Hors périmètre** : les données de l'entité ne sont pas agrégées. Utilisé pour les SCI patrimoniales détenues à titre personnel par les dirigeants.

### Le cas particulier du régime mère-fille

Pour les sociétés mères bénéficiant du régime mère-fille (article 145 du Code Général des Impôts), les dividendes reçus des filiales sont traités comme suit dans AI-Finance DAF :

- Au niveau du résultat comptable de la société mère : les dividendes sont comptabilisés en produits financiers.
- Au niveau du résultat fiscal : les dividendes sont neutralisés, à l'exception de la quote-part de frais et charges de 5 %.

L'écart comptable/fiscal typique est automatiquement détecté par les contrôles de cohérence et peut être justifié par la mention explicite du régime mère-fille.

## Export du rapport de synthèse

Pour partager la vision consolidée avec la direction générale ou des partenaires externes, cliquer sur le bouton **Exporter en PDF** en haut à droite de la page.

Le rapport généré comprend :

- Page de garde avec l'identité du groupe et la date d'édition
- Les quatre indicateurs clés consolidés
- L'organigramme des entités
- Le tableau de synthèse des entités
- Les notes méthodologiques relatives aux choix de consolidation

Le fichier PDF est proposé au téléchargement. Il peut également être enregistré dans un dossier de référence pour archivage.
