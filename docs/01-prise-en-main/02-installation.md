---
sidebar_position: 2
title: Installation
---

# Installation

## Réception de la licence

À la finalisation de la commande sur le site d'Expert To Product, deux courriels sont transmis à l'adresse renseignée lors de l'achat :

1. **Courriel de confirmation de paiement** émis par l'opérateur de paiement (Lemon Squeezy).
2. **Courriel d'activation** émis par Expert To Product, contenant :
   - Le lien de téléchargement de l'installeur AI-Finance DAF (fichier au format `.dmg`)
   - La clé de licence associée
   - Un lien de prise de rendez-vous pour l'accompagnement d'installation inclus

Il est recommandé de conserver ces deux courriels dans un dossier dédié de la messagerie.

## Téléchargement de l'application

Depuis le courriel d'activation, cliquer sur le bouton **Télécharger AI-Finance DAF**. Le téléchargement démarre automatiquement dans le navigateur.

La taille du fichier est comprise entre 180 et 250 Mo selon la version. Le téléchargement peut prendre de quelques minutes à plusieurs dizaines de minutes selon la qualité de la connexion internet.

Le fichier téléchargé se nomme par convention :

```
AI-Finance-DAF-x.y.z.dmg
```

où `x.y.z` correspond au numéro de version (par exemple `1.0.0`).

## Installation de l'application

1. Localiser le fichier téléchargé dans le dossier **Téléchargements** du Finder.
2. Double-cliquer sur le fichier `.dmg` pour l'ouvrir. Une fenêtre d'installation apparaît.
3. Glisser l'icône **AI-Finance DAF** dans le dossier **Applications** représenté à droite de la fenêtre.
4. Une copie est effectuée (quelques secondes).
5. Fermer la fenêtre d'installation.
6. Éjecter l'image disque depuis le Finder (clic droit sur l'icône du disque monté, puis **Éjecter**).

## Premier lancement

Lors du tout premier lancement, macOS affiche un message de sécurité indiquant que l'application provient d'un développeur identifié et demandant la confirmation de l'utilisateur.

1. Ouvrir le dossier **Applications** dans le Finder.
2. Cliquer une première fois sur **AI-Finance DAF**. Un message « Voulez-vous vraiment ouvrir cette application ? » peut s'afficher.
3. Cliquer sur **Ouvrir**.
4. macOS enregistre cette autorisation. Les lancements ultérieurs s'effectueront sans demande de confirmation.

Si le message de sécurité bloque l'ouverture avec la mention « Impossible d'ouvrir AI-Finance DAF car le développeur ne peut pas être vérifié », se reporter au chapitre [Résolution de problèmes](../04-support/02-resolution-problemes.md).

## Autorisations système

AI-Finance DAF nécessite les autorisations suivantes :

- **Accès au dossier Documents et Bureau** : pour lire les liasses fiscales ouvertes par l'utilisateur. L'autorisation est demandée au premier chargement d'un document.
- **Connexion réseau locale** : l'application lance un serveur interne sur le port 8000 pour le dialogue entre son interface graphique et son moteur de calcul. Aucune donnée ne quitte le poste.
- **Connexion internet sortante** : nécessaire uniquement en cas d'utilisation du mode d'inférence distant Claude (optionnel) et pour les mises à jour de l'application.

Les autorisations peuvent être révisées à tout moment depuis **Préférences Système > Confidentialité et sécurité**.

## Vérification de l'installation

Pour confirmer que l'installation s'est déroulée correctement :

1. Ouvrir AI-Finance DAF depuis le dossier **Applications** ou le **Launchpad**.
2. L'écran d'accueil doit apparaître en moins de 15 secondes.
3. Vérifier que la mention de la version est affichée dans le pied de page (exemple : « Version 1.0.0 »).

Si l'application ne démarre pas ou affiche une erreur au lancement, se reporter à la section [Résolution de problèmes](../04-support/02-resolution-problemes.md).

## Prise du rendez-vous d'accompagnement

Il est recommandé de programmer le rendez-vous d'accompagnement d'installation dès la première connexion à l'application. Le lien de prise de rendez-vous se trouve dans le courriel d'activation.

La session d'accompagnement de 30 minutes comprend :

- La vérification du bon fonctionnement de l'installation sur le poste.
- La configuration initiale de la structure du groupe (entités, périmètre de consolidation).
- La présentation de la navigation et des principales fonctionnalités.
- Une démonstration de chargement d'une liasse fiscale réelle.

Les utilisateurs qui le souhaitent peuvent décliner cet accompagnement et procéder à la configuration seuls à l'aide de la présente documentation.
