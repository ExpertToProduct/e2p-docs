---
sidebar_position: 3
title: Notifications
---

# Notifications

À la première connexion, l'app demande l'autorisation d'envoyer des notifications. Accepter.

## Ce qui prévient

| Notification | Qui la reçoit | Quand |
|---|---|---|
| **Prix de vente à fixer** | direction d'exploitation, direction générale, DAF | les achats demandent les prix d'un dossier |
| **Prix fixés** | la personne qui a demandé | la direction a validé le dossier |
| **Prix à revoir** | la personne qui a demandé | la direction a renvoyé une ligne avec un commentaire |

Toucher la notification ouvre l'onglet Prix de vente sur le dossier concerné. Le chiffre sur l'icône est le nombre de dossiers à fixer ; il s'efface à l'ouverture de l'onglet.

Les notifications passent par les serveurs d'Apple : elles arrivent partout, même hors du bureau. Pour agir ensuite, il faut le Wi-Fi du bureau ou le VPN.

## Si rien n'arrive

1. Réglages de l'app › **Notifications** : « autorisées » attendu. Si « refusées », le lien ouvre les Réglages iOS de l'app pour les réactiver.
2. Réglages de l'app › **Appareil** : « enregistré » attendu. Sinon, se déconnecter puis se reconnecter : l'iPhone se déclare au serveur à la connexion.
3. Demander à l'administrateur : dans E2P Costing › ADMIN › Équipe, carte **Notifications iPhone**, il voit les téléphones enregistrés par personne et peut s'envoyer une notification de test.

## Changement de téléphone

Installer TestFlight et E2P sur le nouveau, se connecter : il se déclare de lui-même. Se déconnecter sur l'ancien pour qu'il cesse de recevoir.

## Côté administrateur

La clé de notification d'Apple vit sur le serveur, jamais dans l'application ni dans un courriel. La carte Notifications iPhone de l'écran Équipe indique si elle est en place, l'identifiant de clé masqué, et la dernière notification reçue par chaque téléphone.
