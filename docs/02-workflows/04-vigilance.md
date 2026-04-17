---
sidebar_position: 4
title: Piloter la vigilance financière
---

# Piloter la vigilance financière

La page **Vigilance** est un outil d'alerte précoce inspiré des grilles d'analyse utilisées par les assureurs-crédit tels qu'Euler Hermes ou Coface. Elle permet d'identifier rapidement les signaux faibles de fragilité financière d'une entité, avant que ceux-ci ne se traduisent en difficultés avérées.

## Accès à la page

Cliquer sur **Vigilance** dans le menu de navigation latéral gauche.

## Les onze ratios de vigilance

AI-Finance DAF calcule et affiche onze ratios classés en quatre familles.

### Famille 1 — Ratios de solvabilité

La solvabilité mesure la capacité de l'entité à faire face à ses engagements de long terme.

1. **Autonomie financière** : Capitaux propres / Total bilan.
   - Seuil vert : supérieur à 30 %.
   - Seuil orange : entre 15 % et 30 %.
   - Seuil rouge : inférieur à 15 %.

2. **Couverture des dettes financières** : Capitaux propres / Dettes financières.
   - Seuil vert : supérieur à 1.
   - Seuil orange : entre 0,5 et 1.
   - Seuil rouge : inférieur à 0,5.

3. **Endettement net / EBE** : (Dettes financières - Trésorerie) / Excédent brut d'exploitation.
   - Seuil vert : inférieur à 3.
   - Seuil orange : entre 3 et 5.
   - Seuil rouge : supérieur à 5.

### Famille 2 — Ratios de liquidité

La liquidité mesure la capacité de l'entité à honorer ses engagements à court terme.

4. **Liquidité générale** : Actif circulant / Dettes à court terme.
   - Seuil vert : supérieur à 1,5.
   - Seuil orange : entre 1 et 1,5.
   - Seuil rouge : inférieur à 1.

5. **Trésorerie nette** : Trésorerie active - Concours bancaires courants.
   - Seuil vert : positive de plus de 60 jours d'exploitation.
   - Seuil orange : positive mais inférieure à 60 jours.
   - Seuil rouge : négative.

### Famille 3 — Ratios de rentabilité

6. **Marge d'exploitation** : Résultat d'exploitation / Chiffre d'affaires.
   - Seuils variables selon le secteur, paramétrables.

7. **Rentabilité des capitaux propres (ROE)** : Résultat net / Capitaux propres.
   - Seuil vert : supérieur à 10 %.
   - Seuil orange : entre 5 % et 10 %.
   - Seuil rouge : inférieur à 5 %.

8. **Rentabilité des capitaux engagés (ROCE)** : Résultat d'exploitation / (Capitaux propres + Dettes financières).
   - Seuil vert : supérieur à 8 %.
   - Seuil orange : entre 4 % et 8 %.
   - Seuil rouge : inférieur à 4 %.

### Famille 4 — Ratios d'activité

9. **Délai de règlement clients** : (Créances clients / Chiffre d'affaires TTC) × 365.
   - Seuils variables selon le secteur.

10. **Délai de règlement fournisseurs** : (Dettes fournisseurs / Achats TTC) × 365.
    - Seuils variables selon le secteur.

11. **Rotation des stocks** : Stocks moyens / (Coût des marchandises vendues / 365).
    - Seuils variables selon le secteur.

## Visualisation des ratios

Chaque ratio est représenté sous la forme d'une carte affichant :

- **Le nom du ratio** et sa définition courte.
- **La valeur calculée** pour l'exercice en cours.
- **Le code couleur** (vert, orange, rouge) correspondant au seuil dépassé.
- **Le seuil de référence** pour le ratio.
- **L'évolution** par rapport à l'exercice précédent (flèche haut ou bas avec variation en points).

Les cartes sont organisées en une grille de quatre colonnes, regroupées par famille.

## Filtrage par entité

Un sélecteur en haut de page permet d'afficher :

- Les ratios consolidés du groupe (par défaut).
- Les ratios d'une entité spécifique (chaque société opérationnelle, chaque SCI, etc.).

Le filtrage par entité est particulièrement utile pour :

- Identifier la filiale à l'origine d'une dégradation du ratio consolidé.
- Préparer un dossier bancaire pour une entité spécifique.
- Analyser la situation d'une entité avant sa cession ou son intégration à un nouveau périmètre.

## Paramétrage des seuils

Les seuils par défaut sont ceux d'une activité commerciale généraliste. Ils peuvent ne pas être pertinents pour certains secteurs (BTP, restauration, hôtellerie, services).

Pour personnaliser les seuils :

1. Ouvrir la page **Administration**.
2. Accéder à la section **Seuils de vigilance**.
3. Modifier les valeurs pour chaque ratio concerné.
4. Enregistrer.

Le recalcul des codes couleur s'effectue automatiquement en temps réel sur la page **Vigilance**.

## Interprétation des alertes rouges

Une alerte rouge sur un ratio ne signifie pas nécessairement une difficulté avérée. Elle invite à un examen plus approfondi :

- **Vérifier la fiabilité des données** : un ratio aberrant peut provenir d'une erreur de saisie. Revenir à la page **Documents** et vérifier le dernier chargement.
- **Analyser le contexte** : un ratio dégradé ponctuellement sur un exercice (investissement majeur, sinistre, cession) peut être normal.
- **Croiser avec d'autres indicateurs** : un ROE faible combiné à une autonomie financière élevée peut indiquer une sous-exploitation du levier financier, pas une fragilité.
- **Comparer à la profession** : certains ratios n'ont de sens qu'en comparaison avec les standards sectoriels.

L'assistant conversationnel de l'application (page QA) peut être sollicité pour contextualiser un ratio dégradé.

## Export du rapport de vigilance

Le bouton **Exporter en PDF** en haut à droite génère un rapport de vigilance complet. Le PDF comprend :

- Page de garde avec identification du périmètre analysé (groupe ou entité)
- Les onze ratios avec leurs valeurs, seuils et codes couleur
- Un récapitulatif des alertes orange et rouge
- Les tendances d'évolution sur trois exercices
- Les notes méthodologiques

Ce rapport peut être produit mensuellement ou trimestriellement pour le comité de direction, ou à la demande en cas de présentation à un partenaire bancaire.
