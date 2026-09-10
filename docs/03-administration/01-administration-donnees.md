---
sidebar_position: 1
title: Administration des données
---

# Administration des données

La page **Paramètres** rassemble les opérations de maintenance. Ce chapitre décrit aussi où vivent les données et comment les sauvegarder.

## Où sont les données

- **Dossier des données** (choisi au premier lancement, menu **AI-Finance DAF > Ouvrir le dossier des données**) : configuration du groupe `config_groupe.json` et ses versions précédentes, registre des groupes, statuts de la file à traiter, journaux d'activité et de l'assistant, réglage d'accès, fichier `.env`.
- **Data room** (désignée dans la configuration) : liasses, balances, FEC, pièces juridiques. L'application y lit et, lors d'un dépôt guidé, y copie un fichier ; elle n'y supprime rien.
- **Journal technique** : `~/Library/Logs/ai-finance/backend.log` (menu **Afficher le journal du backend**).

Aucune de ces données n'est chiffrée par l'application : elle s'appuie sur FileVault et les permissions du compte macOS.

## Couverture des données

En haut de **Paramètres**, un tableau indique pour chaque entité et chaque exercice la source des chiffres (liasse, balance, FEC, saisie, aucune). C'est le premier endroit à consulter quand un chiffre surprend.

## Rechargement

**Recharger les données** (barre latérale) relit tous les documents et recalcule le dossier en arrière-plan, avec progression. Le même travail est lancé automatiquement au démarrage.

## Sauvegarde

**Paramètres > Sauvegarde** crée une archive `.zip` datée contenant la configuration et ses versions, les statuts, les journaux et les évaluations de l'assistant, avec un manifeste. **Sauvegarde complète** y ajoute la data room entière (plusieurs centaines de Mo).

Destination, dans l'ordre : le dossier indiqué dans la configuration, sinon `iCloud Drive/AI-Finance/sauvegardes` si iCloud Drive est actif, sinon un dossier `sauvegardes` à côté de la data room. Les trente dernières archives sont conservées. La page liste les archives existantes.

### Restaurer

1. Quitter l'application.
2. Dézipper l'archive dans un dossier temporaire.
3. Copier le contenu de `app_data/` dans le dossier des données (menu Ouvrir le dossier des données, application relancée puis quittée si besoin).
4. Pour une archive complète, copier `data_room/` vers la data room.
5. Relancer l'application.

Time Machine et iCloud Drive complètent utilement ce dispositif.

## Journal d'activité

Rechargements, dépôts, changements de statut, connexions. **Effacer** vide le journal ; l'opération est irréversible.

## Accès protégé

**Paramètres > Accès** permet de créer des comptes nominatifs. Le premier compte, administrateur, active la protection : l'application demande ensuite un identifiant et un mot de passe à chaque ouverture ; cinq échecs consécutifs verrouillent l'accès une minute. Les mots de passe sont stockés hachés dans le dossier des données.

Deux rôles :

- **Administrateur** : tout, y compris la gestion des comptes (création, rôle, désactivation, réinitialisation du mot de passe) et le journal des accès.
- **Lecteur** : consultation seule. Les dépôts de pièces, changements de statut, rechargements, sauvegardes et la configuration disparaissent de l'interface et sont refusés par le moteur.

Le journal des accès (Paramètres > Accès) conserve les connexions et les actions d'écriture (dépôt, statut, configuration, rechargement, groupes, comptes) avec l'identifiant de leur auteur. Un mot de passe unique défini avec une version antérieure devient automatiquement le compte administrateur « admin », avec le même mot de passe.

Pour retirer la protection : un administrateur utilise « Retirer la protection » avec son mot de passe. En cas d'oubli du dernier mot de passe administrateur, supprimer le fichier `acces.json` du dossier des données, application fermée.

## Plusieurs groupes

Le sélecteur de la barre latérale bascule entre les groupes enregistrés ; chaque groupe a son propre dossier de configuration, ses statuts, ses journaux et sa data room. **Configuration > Nouveau groupe** en crée un ; **Retirer** le sort du registre sans supprimer ses fichiers.

## Bonnes pratiques

- Sauvegarder avant une clôture et avant toute modification de la structure du groupe.
- Ne pas modifier `config_groupe.json` à la main : passer par la page Configuration, qui valide et conserve la version précédente.
- Garder la data room dans un dossier lui-même sauvegardé (Time Machine, iCloud Drive, NAS).
