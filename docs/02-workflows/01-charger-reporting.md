---
sidebar_position: 1
title: Charger un reporting
---

# Charger un reporting

La mise à jour régulière des données financières constitue l'opération la plus fréquente dans AI-Finance DAF. Ce chapitre présente les deux voies disponibles pour charger un nouveau reporting dans l'application.

## Quand charger un nouveau reporting

Les situations typiques de chargement sont les suivantes :

- **Clôture annuelle** : chargement de la liasse fiscale définitive de chaque entité (généralement en mai-juin pour l'exercice N-1).
- **Reporting trimestriel** : mise à jour des indicateurs d'avancement à fréquence trimestrielle.
- **Prévisions budgétaires** : intégration du budget N+1 validé par la direction générale.
- **Révision suite à un ajustement comptable** : rechargement après correction d'une écriture par l'expert-comptable.

## Voie 1 — Importation depuis une liasse fiscale PDF

### Préparation du document

Le document source doit être un fichier PDF contenant la liasse fiscale de l'entité concernée. Les formats supportés sont :

- Formulaire 2065 (déclaration principale IS)
- Annexes 2033-A (bilan simplifié) et 2033-B (compte de résultat simplifié)
- Formulaire 2050 (bilan actif — régime réel normal)
- Formulaire 2051 (bilan passif — régime réel normal)
- Formulaire 2052 (compte de résultat — régime réel normal)
- Formulaire 2058-A (détermination du résultat fiscal)
- Formulaire 2033-E (effectif moyen)

L'idéal est de disposer d'un PDF unique contenant l'ensemble de ces formulaires, tel que transmis par l'expert-comptable à la clôture.

### Procédure de chargement

1. Ouvrir la page **Documents** depuis le menu de navigation principal.
2. Cliquer sur le bouton **Importer un document** en haut à droite.
3. Sélectionner l'entité concernée dans la liste déroulante.
4. Glisser le fichier PDF dans la zone de dépôt, ou cliquer sur **Parcourir** pour ouvrir le sélecteur de fichier système.
5. L'application démarre automatiquement l'analyse du document. Une barre de progression indique l'état d'avancement.
6. À l'issue de l'analyse, un récapitulatif des champs extraits s'affiche avec leur indicateur de confiance (vert, orange, rouge).
7. L'utilisateur revoit chaque champ. Les valeurs peuvent être modifiées par simple clic sur le champ.
8. Cliquer sur **Valider l'importation** pour enregistrer les données dans le fichier de configuration.

### Limites de la voie d'importation automatique

L'extraction automatique fonctionne sur environ 80 à 90 % des liasses fiscales standards. Les cas suivants peuvent nécessiter une saisie manuelle partielle :

- Liasses scannées à partir d'un document papier (absence de couche texte dans le PDF).
- Liasses issues de logiciels d'expertise comptable atypiques modifiant la structure standard CERFA.
- Liasses étrangères pour les filiales implantées hors France.

## Voie 2 — Saisie manuelle

La saisie manuelle est pertinente lorsque la liasse PDF n'est pas disponible ou que l'utilisateur souhaite uniquement mettre à jour quelques valeurs.

### Procédure

1. Ouvrir la page de l'entité concernée depuis le menu de navigation (KALO, D&CO, SCI, etc.).
2. Cliquer sur le bouton **Modifier les données** en haut de la page.
3. Un formulaire apparaît avec les champs financiers de l'entité sur les trois derniers exercices.
4. Saisir ou corriger les valeurs souhaitées. Les champs non modifiés conservent leur valeur antérieure.
5. Cliquer sur **Enregistrer les modifications**.

### Validation automatique

À l'enregistrement, les mêmes quatre contrôles de cohérence que dans l'assistant de configuration initiale sont exécutés :

- Cohérence du bilan entre deux exercices
- Écart résultat comptable / résultat fiscal
- Plausibilité de la marge d'exploitation
- Productivité par ETP

Les alertes oranges sont simplement signalées. Les alertes rouges requièrent une justification écrite avant enregistrement.

## Historique des chargements

Chaque chargement est enregistré dans un historique consultable depuis la page **Administration > Journal**. L'historique contient :

- Date et heure du chargement
- Entité concernée
- Méthode utilisée (import PDF ou saisie manuelle)
- Nombre de champs modifiés
- Éventuelles alertes de cohérence déclenchées
- Justifications saisies par l'utilisateur

Cet historique constitue une traçabilité complète des modifications apportées aux données financières du groupe.

## Sauvegarde automatique

À chaque chargement, une sauvegarde horodatée du fichier `config_groupe.json` est générée automatiquement dans le dossier de données de l'application. Le format de nommage est :

```
config_groupe.json.bak.wizard.AAAAMMJJ_HHMMSS
```

En cas d'erreur de saisie ou de chargement erroné, la version antérieure peut être restaurée depuis la page **Administration** (voir chapitre dédié).

Les sauvegardes sont conservées sans limite de durée. Il est recommandé de purger périodiquement les sauvegardes les plus anciennes si l'espace disque vient à manquer.
