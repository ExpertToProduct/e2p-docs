---
sidebar_position: 3
title: Premier démarrage
---

# Premier démarrage

Lors du tout premier lancement d'AI-Finance DAF sur un poste, l'application détecte l'absence de configuration et ouvre automatiquement l'**assistant de configuration initiale**. Cet assistant guide l'utilisateur à travers cinq étapes de paramétrage, à l'issue desquelles l'application est prête à fonctionner.

L'ensemble de l'assistant peut être complété en 15 à 30 minutes selon la complexité de la structure du groupe et la disponibilité des documents financiers.

## Étape 1 — Identité du groupe

L'utilisateur renseigne les informations générales du groupe piloté :

- **Dénomination du groupe** (exemple : « Groupe LAERANA », « Groupe Dupont »)
- **Territoire d'implantation principal** (sélection parmi les territoires français : métropole, Mayotte, La Réunion, Guadeloupe, Martinique, Guyane, Nouvelle-Calédonie, etc.)
- **Devise de référence** (Euro par défaut, Franc Pacifique pour la Nouvelle-Calédonie et la Polynésie française)
- **Exercice comptable de référence** (année civile par défaut, avec possibilité de définir une clôture décalée)

Ces informations peuvent être modifiées ultérieurement depuis la page **Administration**.

## Étape 2 — Périmètre des entités

L'utilisateur déclare l'ensemble des entités juridiques composant le groupe. Pour chaque entité, les champs suivants sont renseignés :

- **Raison sociale** (exemple : « KALO SARL », « SCI RAYHANE 2 »)
- **Forme juridique** (SARL, SAS, SCI, SA, EURL, SASU, etc.)
- **Numéro SIREN**
- **Taux de détention** par la société mère du groupe (en pourcentage)
- **Méthode de consolidation** :
  - **Intégration Globale (IG)** : pour les filiales détenues à plus de 50 % ou exerçant un contrôle exclusif.
  - **Mise en Équivalence (ME)** : pour les participations comprises entre 20 % et 50 %.
  - **Hors périmètre** : pour les entités patrimoniales exclues de la consolidation (SCI détenues personnellement par les dirigeants, par exemple).

Il est possible d'ajouter autant d'entités que nécessaire. L'ordre de saisie détermine l'ordre d'affichage dans la navigation principale de l'application.

## Étape 3 — Flux intragroupe

Cette étape permet de déclarer les flux financiers récurrents entre les entités du groupe. Ces flux sont utilisés pour générer le diagramme de Sankey et pour les contrôles de cohérence lors de la consolidation.

Pour chaque flux, l'utilisateur renseigne :

- **Entité émettrice** (sélection dans la liste des entités déclarées à l'étape 2)
- **Entité réceptrice** (idem)
- **Nature du flux** :
  - Dividendes
  - Convention d'assistance (management fees)
  - Loyers
  - Prêt ou compte courant d'associé
  - Refacturation de charges
  - Autre
- **Montant annuel moyen** (en euros)
- **Années d'application** (exemple : [2023, 2024, 2025] pour un flux démarré en 2023 et toujours actif)

Les flux peuvent être ajoutés, modifiés ou supprimés ultérieurement depuis la page **Administration**.

## Étape 4 — Saisie financière initiale

Cette étape permet de préremplir les données financières des entités à partir de leurs liasses fiscales. Pour chaque entité déclarée à l'étape 2, l'utilisateur dispose de deux modes :

### Mode 1 — Importation automatique depuis une liasse PDF

1. Cliquer sur **Charger une liasse** sur la carte de l'entité concernée.
2. Sélectionner le fichier PDF de la liasse fiscale (formulaire 2065, 2033-A, 2033-B, ou assimilé).
3. L'application analyse le document et extrait automatiquement les dix champs financiers suivants :
   - Chiffre d'affaires
   - Résultat d'exploitation
   - Résultat net comptable
   - Résultat fiscal
   - Capitaux propres
   - Trésorerie (disponibilités)
   - Emprunts bancaires
   - Dividendes reçus
   - Dividendes versés
   - Effectif moyen (ETP)
4. Chaque champ extrait est accompagné d'un indicateur de confiance :
   - **Vert** : extraction directe depuis la cellule CERFA identifiée, valeur fiable.
   - **Orange** : extraction avec doute (cellule vide interprétée comme zéro, valeur atypique).
   - **Rouge** : cellule non détectée, saisie manuelle requise.
5. L'utilisateur revoit chaque champ et corrige si nécessaire.

### Mode 2 — Saisie manuelle

Si l'utilisateur ne dispose pas de la liasse fiscale au format PDF, il peut saisir les valeurs directement dans le formulaire.

### Contrôles de cohérence

À la validation des saisies d'une entité, quatre contrôles automatiques sont exécutés :

1. **Cohérence du bilan entre deux exercices** : vérifie que les capitaux propres d'une année N sont cohérents avec les capitaux propres de N-1, le résultat de N et les dividendes versés.
2. **Écart résultat comptable / résultat fiscal** : détecte les écarts importants typiques du régime mère-fille ou d'un déficit reportable.
3. **Plausibilité de la marge d'exploitation** : alerte sur des ratios atypiques (marge supérieure à 50 % ou négative inférieure à -50 %).
4. **Productivité par ETP** : alerte sur des ratios CA par effectif hors fourchette raisonnable.

Les alertes sont classées en deux niveaux :

- **Orange** : simple signalement, la poursuite de la saisie est possible.
- **Rouge** : signalement bloquant, une justification écrite est requise pour valider les données (exemple : « Régime mère-fille — article 145 du CGI »).

## Étape 5 — Validation et lancement

La dernière étape présente un récapitulatif complet de la configuration. L'utilisateur vérifie :

- L'identité du groupe
- La liste des entités et leurs taux de détention
- Les flux intragroupe déclarés
- Le statut de complétude des données financières par entité

Si l'ensemble est satisfaisant, cliquer sur **Valider et lancer l'application**. La configuration est enregistrée dans le fichier `config_groupe.json` et l'application ouvre sa page d'accueil.

Il est recommandé de procéder à une sauvegarde du fichier `config_groupe.json` à l'issue de cette étape (voir chapitre [Configuration avancée](../03-administration/02-configuration-avancee.md)).
