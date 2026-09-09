---
sidebar_position: 3
title: Mises à jour du logiciel
---

# Mises à jour du logiciel

## Numérotation

AI-Finance DAF suit une numérotation **X.Y.Z** : X pour un changement majeur, Y pour des fonctionnalités nouvelles, Z pour des correctifs. Les versions Y et Z sont incluses dans la maintenance de l'année en cours.

## Vérification

L'application vérifie au démarrage, silencieusement, si une version plus récente est publiée. Le menu **AI-Finance DAF > Rechercher des mises à jour…** lance la vérification à la demande et indique si la version installée est à jour.

Si une version plus récente existe, une fenêtre présente le numéro, les notes de version et un bouton **Télécharger**.

## Installer une mise à jour

1. Télécharger l'image disque proposée.
2. Quitter AI-Finance DAF.
3. Ouvrir l'image disque et glisser l'application sur **Applications**, en acceptant le remplacement.
4. Relancer l'application.

Le dossier des données, la data room et le choix du dossier ne sont pas touchés. Une sauvegarde préalable depuis **Paramètres** reste une bonne pratique avant une version majeure.

## Si la vérification échoue

Sans connexion Internet, ou si l'accès aux versions publiées n'est pas autorisé pour ce poste, le menu propose d'ouvrir la page des versions ; le support transmet l'image disque sur demande.

## Revenir à une version antérieure

Réinstaller l'image disque de la version précédente de la même manière. Les données restent lisibles d'une version à l'autre ; en cas de doute, restaurer la sauvegarde faite avant la mise à jour (voir [Administration des données](./01-administration-donnees.md)).

## LM Studio

LM Studio et ses modèles ont leur propre cycle de mise à jour, indépendant d'AI-Finance DAF. Après une mise à jour de LM Studio, vérifier que le serveur local est toujours démarré sur le port 1234 avec un modèle chargé.
