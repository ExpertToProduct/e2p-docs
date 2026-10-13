---
sidebar_position: 1
title: Installer et se connecter
---

# Installer et se connecter

L'application **E2P** pour iPhone est destinée à la direction. Elle présente ce qu'E2P Costing calcule (dossiers, conteneurs, règlements, tableau de bord) et permet de **fixer les prix de vente** demandés par les achats. Elle ne calcule rien elle-même et n'écrit rien d'autre.

## Installation par TestFlight

L'application n'est pas sur l'App Store public : elle est distribuée par **TestFlight**, l'outil d'Apple pour les applications d'entreprise en test.

TestFlight n'est ouvert qu'aux **testeurs internes** : Apple a refusé la distribution externe pour une application réservée à l'entreprise. Il faut donc d'abord un accès à App Store Connect.

1. L'administrateur invite la personne dans **App Store Connect** (Utilisateurs et accès) ; elle accepte l'invitation reçue par courriel avec son identifiant Apple. Il l'ajoute ensuite au groupe de testeurs internes **Direction**.
2. Sur l'iPhone, installer **TestFlight** depuis l'App Store, avec le même identifiant Apple.
3. Ouvrir le courriel d'invitation TestFlight et toucher **View in TestFlight**, ou ouvrir directement TestFlight : E2P y apparaît.
4. Dans TestFlight, **Installer** E2P. L'icône apparaît sur l'écran d'accueil avec un point orange à côté du nom, signe d'une version TestFlight.

Les mises à jour arrivent d'elles-mêmes : TestFlight prévient et installe la nouvelle version. Une version est valable 90 jours ; une nouvelle est publiée bien avant.

Pas d'invitation reçue ? L'invitation App Store Connect doit avoir été acceptée, et l'adresse doit être celle de l'identifiant Apple utilisé sur l'iPhone. Vérifier aussi les indésirables.

## Se connecter

À l'ouverture, l'app demande :

- **Serveur** : prérempli avec l'adresse du serveur du bureau. Ne pas la changer, sauf indication de l'administrateur.
- **Identifiant** et **mot de passe** : les mêmes que sur le poste, créés par l'administrateur dans Équipe. Un mot de passe provisoire doit d'abord être changé sur le poste.
- **Rester connecté** : garde la session ouverte d'un jour à l'autre. Le mot de passe est alors conservé dans le trousseau sécurisé de l'iPhone, nulle part ailleurs.

## Au bureau ou ailleurs : Cloudflare One

Le serveur est sur le réseau de l'entreprise et n'est jamais publié sur Internet. L'app se connecte donc :

- sur le **Wi-Fi du bureau**, directement ;
- ailleurs (4G, maison, déplacement), avec l'app **Cloudflare One** connectée. Elle ouvre un accès privé vers le seul serveur E2P ; le reste du trafic de l'iPhone n'y passe pas.

Mise en place, une fois par iPhone :

1. L'administrateur autorise l'adresse e-mail de la personne dans Cloudflare (politique d'inscription « Direction E2P (iPhones) »).
2. Installer **Cloudflare One** depuis l'App Store, choisir l'équipe `experttoproduct`, saisir l'adresse e-mail autorisée, puis le code reçu par e-mail.
3. Activer la connexion dans Cloudflare One. L'adresse du serveur dans E2P ne change pas.

Sans l'un ni l'autre, l'app affiche le dernier état synchronisé en mode hors réseau (voir « Utiliser l'application »), mais ne peut ni se connecter ni écrire.

## Profils

Tout le monde voit le tableau de bord, les dossiers, les conteneurs et les règlements. L'onglet **Prix de vente** est réservé aux profils direction d'exploitation, direction générale, DAF et administrateur ; pour eux, Réglages se trouve derrière la roue dentée du tableau de bord.
