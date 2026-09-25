---
sidebar_position: 1
title: Installer et se connecter
---

# Installer et se connecter

L'application **E2P** pour iPhone est destinée à la direction. Elle présente ce qu'E2P Costing calcule (dossiers, conteneurs, règlements, tableau de bord) et permet de **fixer les prix de vente** demandés par les achats. Elle ne calcule rien elle-même et n'écrit rien d'autre.

## Installation par TestFlight

L'application n'est pas sur l'App Store public : elle est distribuée par **TestFlight**, l'outil d'Apple pour les applications d'entreprise en test.

1. Sur l'iPhone, installer **TestFlight** depuis l'App Store.
2. Ouvrir le courriel « Vous êtes invité à tester E2P » envoyé par l'administrateur et toucher **View in TestFlight**, ou saisir le code du courriel dans TestFlight (« Utiliser un code »).
3. Dans TestFlight, **Installer** E2P. L'icône apparaît sur l'écran d'accueil avec un point orange à côté du nom, signe d'une version TestFlight.

Les mises à jour arrivent d'elles-mêmes : TestFlight prévient et installe la nouvelle version. Une version est valable 90 jours ; une nouvelle est publiée bien avant.

Pas d'invitation reçue ? L'adresse saisie par l'administrateur doit être celle de l'identifiant Apple utilisé sur l'iPhone. Vérifier aussi les indésirables.

## Se connecter

À l'ouverture, l'app demande :

- **Serveur** : prérempli avec l'adresse du serveur du bureau. Ne pas la changer, sauf indication de l'administrateur.
- **Identifiant** et **mot de passe** : les mêmes que sur le poste, créés par l'administrateur dans Équipe. Un mot de passe provisoire doit d'abord être changé sur le poste.
- **Rester connecté** : garde la session ouverte d'un jour à l'autre. Le mot de passe est alors conservé dans le trousseau sécurisé de l'iPhone, nulle part ailleurs.

## Réseau du bureau ou VPN

Le serveur est sur le réseau de l'entreprise, pas sur Internet. L'app se connecte donc :

- sur le **Wi-Fi du bureau** ;
- ailleurs, avec le **VPN de l'entreprise** activé sur l'iPhone (profil fourni par l'informaticien).

Sans l'un ni l'autre, l'app affiche le dernier état synchronisé en mode hors réseau (voir « Utiliser l'application »), mais ne peut ni se connecter ni écrire.

## Profils

Tout le monde voit le tableau de bord, les dossiers, les conteneurs et les règlements. L'onglet **Prix de vente** est réservé aux profils direction d'exploitation, direction générale, DAF et administrateur ; pour eux, Réglages se trouve derrière la roue dentée du tableau de bord.
