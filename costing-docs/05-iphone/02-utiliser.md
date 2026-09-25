---
sidebar_position: 2
title: Utiliser l'application
---

# Utiliser l'application

![Tableau de bord](/img/costing/iphone/tableau-de-bord.png)

## Les écrans

- **Tableau de bord** : les chiffres du jour d'E2P Costing, dossiers en cours, conteneurs en mer et à l'arrivée, règlements en retard, alertes. Tirer vers le bas pour rafraîchir.
- **Dossiers** : la liste avec l'étape et le statut ; une fiche en lecture (en-tête, articles, prix de revient, règlements, suivi du conteneur).
- **Conteneurs** : le suivi par dossier, l'ETA et le dernier événement de la compagnie.
- **Règlements** : par échéance et par bénéficiaire, retards signalés.
- **Prix de vente** : voir ci-dessous.
- **Réglages** : serveur, identifiant, notifications, données conservées, déconnexion.

Tous les chiffres viennent du serveur : ce que montre l'iPhone est exactement ce que montre le poste au même moment.

## Fixer les prix de vente

![Prix de vente](/img/costing/iphone/prix-de-vente.png)

L'onglet liste les dossiers que les achats ont soumis, avec le nombre de lignes restantes ; le chiffre sur l'onglet est le nombre de dossiers à fixer.

Dans un dossier, une carte par article : **référence, désignation, prix de revient unitaire**, et la case prix déjà remplie avec la proposition (dernier prix fixé pour cette référence, sinon PV proposé par les achats, sinon grille 1,89 plus éco-participation ; la source est indiquée en petit).

- **Fixer** confirme la proposition, ou le prix corrigé. Le bouton **×** à gauche de la case permet de saisir un coefficient (« ×2 ») au lieu d'un prix.
- Sous la case, dès qu'un prix est envoyé : coefficient, marge unitaire, taux de marge et marge totale, calculés par le serveur. Deux signaux possibles, jamais bloquants : **Vente à perte** (prix hors éco-participation sous le prix de revient) et **Sous la grille** (coefficient sous 1,89).
- **À revoir** renvoie la ligne aux achats avec un mot ; ils corrigent et redemandent.
- **Valider le dossier**, en bas, quand toutes les lignes sont fixées ; les totaux du dossier s'affichent (chiffre d'affaires attendu, marge, taux moyen).

Le lien « Voir la fiche du dossier » ouvre la fiche complète en lecture. Chaque prix fixé est tracé dans l'historique du dossier avec son auteur.

## Hors réseau

![Hors réseau](/img/costing/iphone/hors-reseau.png)

Chaque écran s'ouvre aussitôt sur le dernier état synchronisé, avec un bandeau « Mis à jour il y a 12 min ». Sans Wi-Fi du bureau ni VPN, le bandeau passe en « Hors réseau · dernière mise à jour le … » ; tout reste lisible, et les boutons qui écrivent sont désactivés avec l'explication. Au retour du réseau, l'app se remet à jour d'elle-même.

Ce que conserve l'iPhone : le dernier état des écrans, l'adresse du serveur et l'identifiant. Réglages › **Effacer les données conservées** vide tout ; la déconnexion aussi.
