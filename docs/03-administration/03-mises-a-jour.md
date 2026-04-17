---
sidebar_position: 3
title: Mises à jour du logiciel
---

# Mises à jour du logiciel

Les mises à jour d'AI-Finance DAF permettent de bénéficier des améliorations fonctionnelles, des correctifs de sécurité et de la compatibilité avec les nouvelles versions de macOS.

## Cycle de versions

AI-Finance DAF suit une numérotation sémantique de type **X.Y.Z** :

- **X** (version majeure) : changement d'architecture ou rupture de compatibilité. Mise à jour payante possible.
- **Y** (version mineure) : ajout de fonctionnalités, améliorations significatives. Incluse dans la maintenance annuelle.
- **Z** (correctif) : corrections de bugs, ajustements mineurs. Toujours gratuite.

La fréquence typique de publication est :

- Versions correctives : toutes les 2 à 4 semaines selon les besoins.
- Versions mineures : 3 à 4 fois par an.
- Versions majeures : une fois par an en moyenne.

## Notification des mises à jour

L'application vérifie automatiquement la disponibilité d'une nouvelle version au démarrage. Cette vérification s'effectue en arrière-plan et ne ralentit pas le lancement.

Si une nouvelle version est détectée, une notification discrète apparaît dans la barre d'état inférieure : **« Une mise à jour est disponible ».**

Un clic sur la notification ouvre une fenêtre de dialogue présentant :

- Le numéro de la nouvelle version
- La date de publication
- Les notes de version (nouveautés, corrections, compatibilité)
- Deux boutons : **Installer maintenant** ou **Reporter**.

## Procédure de mise à jour

### Mise à jour automatique (recommandée)

Pour les versions correctives et mineures, la mise à jour s'effectue automatiquement dans l'application après acceptation de l'utilisateur :

1. Cliquer sur **Installer maintenant** dans la notification.
2. L'application télécharge la nouvelle version en arrière-plan (généralement 50 à 150 Mo).
3. À la fin du téléchargement, un message invite à redémarrer l'application.
4. Cliquer sur **Redémarrer et installer**.
5. L'application se ferme, installe la mise à jour et se rouvre automatiquement.

La durée totale est comprise entre 30 secondes et 2 minutes selon la qualité de la connexion.

### Mise à jour manuelle

Pour les versions majeures ou en cas d'échec de la mise à jour automatique, la procédure manuelle est la suivante :

1. Se rendre sur le site d'Expert To Product à la page **Téléchargements**.
2. Se connecter avec les identifiants de la licence.
3. Télécharger le nouveau fichier `.dmg`.
4. Ouvrir le `.dmg` et glisser l'icône dans le dossier **Applications**, en remplaçant l'ancienne version.
5. Lancer la nouvelle version depuis le dossier **Applications**.

Le fichier `config_groupe.json` et l'ensemble des données ne sont pas affectés par cette opération.

## Préparation avant mise à jour

Avant toute mise à jour majeure (changement de X), il est recommandé de :

1. **Générer une sauvegarde manuelle** depuis la page **Administration > Sauvegardes**.
2. **Exporter les rapports importants** en PDF (consolidation, vigilance) au cas où un problème de compatibilité nécessiterait un retour à la version précédente.
3. **Consulter les notes de version** pour identifier d'éventuels changements impactants (suppression de fonctionnalités, modification de comportements).

Les versions mineures et correctives ne nécessitent pas de préparation particulière, mais une sauvegarde manuelle reste une bonne pratique.

## Rollback vers une version antérieure

En cas de dysfonctionnement constaté après une mise à jour, il est possible de revenir à la version précédente :

1. Quitter complètement AI-Finance DAF.
2. Télécharger la version antérieure depuis le site d'Expert To Product (section **Archives** de la page **Téléchargements**).
3. Ouvrir le `.dmg` et installer l'ancienne version (remplacement).
4. Si la version précédente ne parvient pas à lire le fichier `config_groupe.json` (cas de migration de schéma), restaurer la dernière sauvegarde antérieure à la mise à jour depuis la page **Administration**.

Les versions N-1 et N-2 sont archivées pendant 12 mois minimum.

## Mises à jour du moteur d'inférence LM Studio

LM Studio est un logiciel tiers qui dispose de son propre cycle de mises à jour, indépendant d'AI-Finance DAF.

Il est recommandé de maintenir LM Studio à jour en suivant les notifications de l'application elle-même. Les modèles de langage peuvent également être mis à jour depuis LM Studio, pour bénéficier des dernières versions des modèles disponibles.

## Notification de fin de maintenance

Lorsqu'une version mineure n'est plus supportée (absence de correctifs depuis plus de 12 mois), une notification s'affiche à l'ouverture de l'application pour inciter à la mise à jour.

Le support par courriel reste disponible pour toutes les versions sous maintenance annuelle active, quelle que soit la version utilisée, dans la limite des possibilités techniques.
