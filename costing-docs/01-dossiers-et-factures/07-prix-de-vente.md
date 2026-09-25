---
sidebar_position: 7
title: Fixer les prix de vente
---

# Fixer les prix de vente

C'est la direction qui fixe les prix de vente. Jusqu'ici elle recevait un classeur et y mettait les prix à la main. Depuis le 25 septembre 2026, le circuit passe par l'application : les achats demandent, la direction fixe, ligne par ligne, depuis le poste ou depuis l'iPhone.

## Côté achats : demander les prix

1. Le dossier doit être **validé** : le prix de revient est figé, la direction fixe sur des chiffres définitifs.
2. Sur la fiche, carte **Prix de vente**, bouton **Demander les prix de vente**. Le dossier passe « à fixer » et apparaît chez la direction, avec la date et le nom du demandeur dans l'historique.
3. Si la direction renvoie des lignes **à revoir**, leurs commentaires s'affichent dans cette carte. Repassez le dossier en brouillon, corrigez, validez, puis redemandez.
4. Une fois les prix fixés, la carte les affiche, le tableau des articles gagne une colonne **PV fixé**, et l'export Excel du dossier la reprend.

Profils autorisés à demander : acheteur, assistant achat, DAF.

## Côté direction : fixer

Entrée **PRIX DE VENTE** de la barre latérale ; la pastille compte les dossiers à fixer. Profils autorisés : direction d'exploitation, direction générale, DAF, administrateur.

1. Choisissez un dossier dans la liste (référence, fournisseur, depuis quand, lignes restantes).
2. Chaque ligne montre **Ref, Désignation, PR** et une case prix déjà remplie avec la **proposition** de l'application :
   - le dernier prix que la direction a fixé pour la même référence, avec le dossier et la date ;
   - sinon le PV proposé par les achats sur la fiche ;
   - sinon la grille : 1,89 × prix de revient unitaire, plus l'éco-participation.
3. Confirmez d'un clic sur **Fixer**, ou corrigez : un prix (« 24,90 ») ou un coefficient (« x2 »), l'application convertit. Sous la case s'affichent le coefficient, la marge unitaire et le taux de marge. Un prix sous le prix de revient est signalé en **vente à perte**, un coefficient sous la grille en **sous la grille** ; rien n'est bloqué, la direction décide.
4. Une ligne peut être renvoyée **À revoir** avec un mot pour les achats.
5. **Valider le dossier** quand toutes les lignes sont fixées ; les totaux (chiffre d'affaires attendu, marge, taux moyen) s'affichent en bas.

Le prix saisi est un prix TTC unitaire, éco-participation incluse (à Mayotte TTC vaut hors taxe) ; la marge se calcule sur le prix hors éco-participation face au prix de revient unitaire. Chaque prix fixé est tracé dans l'historique du dossier avec son auteur.

## Sur l'iPhone

L'application E2P pour la direction propose le même onglet **Prix de vente**, avec les mêmes propositions et les mêmes contrôles ; la saisie se fait au clavier numérique et le dernier état reste consultable hors du réseau du bureau. La validation exige la connexion au serveur.

## Et Gescom ?

Le prix fixé reste pour l'instant dans le dossier E2P Costing. Le report dans le tarif Gescom fera l'objet d'un chantier à part (lien SQL).
