---
sidebar_position: 4
title: Tour d'horizon de l'interface
---

# Tour d'horizon de l'interface

## Organisation générale

L'interface est composée d'une **barre latérale gauche** (navigation, sélecteur de groupe, bouton Recharger) et d'une **zone centrale** affichant la page sélectionnée. Le titre de la fenêtre rappelle le groupe actif.

## Les pages

| Page | Contenu |
|---|---|
| **Synthèse** | Comptes consolidés de l'exercice de référence, historique, éliminations, fiscalité, flux de trésorerie. |
| **Groupe** | Structure capitalistique, positions intragroupe rapprochées, pièces juridiques et dépôt d'une pièce. |
| **Pilotage** | Exercice en cours, suivi à partir des FEC partiels ou, à défaut, d'une balance arrêtée en cours d'exercice. |
| **À traiter** | File unique des alertes de ratios, contrôles de cohérence et pièces manquantes, avec statuts. |
| **Échéancier** | Obligations légales datées par société (approbation, dépôt au greffe, liasse, rapports) : en retard, dans les 30 jours, dans l'année ; frise par mois, dépôt guidé, export calendrier. |
| **Entités** | Une fiche par société : chiffres clés, bilan, résultat, emprunts, positions intragroupe, sources, documents, pièces à obtenir. |
| **Paramètres** | Couverture des données, rechargement, sauvegardes, apparence, accès, journal d'activité. |
| **Assistant IA** | Questions en langage naturel sur le dossier. |
| **Vigilance** | Ratios par entité et consolidés, seuils, rapport DAF en PDF. |
| **Configuration** | Assistant de configuration du groupe, création d'un nouveau groupe. |

## La barre latérale

- **Sélecteur de groupe** (en haut) : présent dès qu'un second groupe existe.
- **Recharger les données** : relit les documents de la data room et recalcule tout. Une barre de progression suit les six étapes (moteur, intragroupe, historique, vigilance, alertes, identité). Le rechargement complet prend une quinzaine de secondes.
- **À traiter** porte le nombre d'éléments restant à traiter ; **Échéancier** porte le nombre d'obligations en retard, ou à échéance dans les 30 jours.

## Le menu AI-Finance DAF

- **À propos** : numéro de version.
- **Rechercher des mises à jour…**
- **Ouvrir le dossier des données** dans le Finder.
- **Afficher le journal du backend** : journal technique du moteur, utile pour le support.

## Raccourcis clavier

| Action | Raccourci |
|---|---|
| Recharger la page | Commande + R |
| Zoom de l'interface | Commande + / Commande − / Commande 0 |
| Plein écran | Contrôle + Commande + F |
| Envoyer une question à l'assistant | Entrée |

## Code couleur

- **Vert** : conforme, source lue avec succès, ratio favorable.
- **Orange** : à surveiller, écart modéré, document non signé (« projet »).
- **Rouge** : critique, ratio hors seuil, écart bloquant, pièce prioritaire manquante.
- **Gris** : non applicable au type d'entité, donnée absente, en cours de chargement.

## Apparence

L'interface est sombre. **Paramètres > Apparence** permet d'activer un fond texturé et d'en régler l'intensité, ou de revenir au fond plat. Ce réglage est propre au poste.

## Mode réel et mode démonstration

Un bandeau **MODE DÉMO** en haut de la Synthèse signale que les chiffres affichés sont fictifs (groupe de démonstration ou groupe réel dont les documents ne sont pas encore déposés). En mode réel, une entité sans document reste à zéro et est signalée : l'application n'invente jamais de chiffre.
