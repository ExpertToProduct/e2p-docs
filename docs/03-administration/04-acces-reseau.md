---
sidebar_position: 4
title: Accès depuis plusieurs postes
---

# Accès depuis plusieurs postes

Par défaut, AI-Finance DAF n'est joignable que depuis le poste qui l'héberge. **Paramètres > Accès réseau local** ouvre l'application aux autres postes du réseau local (cabinet, lecteur, second administrateur), dans un simple navigateur, sans rien installer.

## Prérequis

- Des **comptes nominatifs** (Paramètres > Accès) : l'accès réseau refuse de s'ouvrir sans compte administrateur, et toute requête venant d'un autre poste est rejetée tant qu'aucun compte n'existe.
- Les postes sont sur le **même réseau local** (Wi-Fi ou câble du bureau). L'accès depuis Internet, un VPN ou un réseau distant n'est pas couvert : il relève de l'infrastructure du client.
- Le poste hôte reste allumé et l'application ouverte.

## Ouvrir l'accès

1. Dans Paramètres > Accès réseau local, choisir le port (8443 par défaut) et cliquer sur **Ouvrir l'accès réseau**.
2. La page affiche les adresses à communiquer (`https://192.168.x.x:8443`) et un QR code à scanner depuis un téléphone ou une tablette.
3. Sur l'autre poste, ouvrir l'adresse dans un navigateur, accepter l'avertissement de certificat la première fois (voir ci-dessous), puis se connecter avec son identifiant.

Le réglage est mémorisé : l'accès se rouvre à chaque lancement tant qu'il n'est pas fermé.

## Certificat et avertissement du navigateur

La liaison est chiffrée en HTTPS avec un **certificat auto-signé** généré sur le poste hôte (valable dix ans). Comme aucune autorité ne le connaît, le navigateur affiche un avertissement la première fois. Deux options :

- accepter l'avertissement après avoir comparé l'**empreinte** affichée dans Paramètres avec celle que montre le navigateur ;
- télécharger le certificat depuis Paramètres et l'installer comme certificat de confiance sur le poste (Trousseau d'accès sur Mac, magasin de certificats sur Windows), ce qui supprime l'avertissement.

Si macOS demande d'autoriser les connexions entrantes pour AI-Finance DAF, accepter : c'est le pare-feu du poste hôte. Sur Windows, autoriser `ai-finance-backend.exe` sur les réseaux privés quand le pare-feu le demande.

## Travailler à plusieurs

- Chaque poste a sa session ; les rôles s'appliquent (un lecteur ne peut rien écrire).
- **Une écriture à la fois** : dépôts, statuts, configuration et rechargements sont sérialisés entre postes. Si un autre poste écrit au même moment, l'application répond « une autre écriture est en cours » et il suffit de réessayer.
- Quand un autre compte modifie les données, un bandeau **« Données modifiées par … »** apparaît en haut de la page avec un bouton Actualiser.
- Paramètres affiche les **postes actifs** des quinze dernières minutes ; le journal des accès enregistre l'adresse de chaque poste.

## Fermer l'accès

**Fermer l'accès réseau** dans Paramètres coupe immédiatement le point d'écoute ; les sessions distantes sont perdues. Le poste hôte continue de fonctionner normalement.
