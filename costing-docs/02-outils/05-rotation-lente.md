---
sidebar_position: 5
title: Rotation lente et arrêt de réachat
---

# Rotation lente et arrêt de réachat

Un article qui dort en stock ne doit pas être recommandé. Depuis le 13/10/2026, l'écran **Prévision d'achat** reprend la liste des articles à rotation lente établie dans E2P Advisor (workflow W52) : les articles en **arrêt de réachat** sont écartés des commandes proposées, et chaque segment signale le stock lent qu'il contient.

## Ce qui est en arrêt de réachat

Un article est en arrêt de réachat quand il est **lent** (plus de 180 jours de stock), **très lent** (plus de 365) ou **dormant** (aucune vente depuis 6 mois). Les jours de stock sont calculés au meilleur rythme de vente entre l'année en cours et l'année précédente : un article qui se vend bien mais vient d'être réapprovisionné n'est pas concerné. L'arrêt est dit **urgent** quand une commande est en cours ou que l'article a été acheté il y a moins de 6 mois.

La liste complète, avec les promotions, démarques et transferts proposés, est dans E2P Advisor : voir [Rotation lente](/advisor/gescom/rotation-lente).

## Dans la prévision par segment

| Ce qu'on voit | Ce que cela veut dire |
|---|---|
| Badge orange **stock lent XX €** dans la colonne des alertes | le segment contient des articles en arrêt de réachat ; au survol : nombre d'articles, unités, urgents |
| Alerte « stock à rotation lente » | à écouler avant de recommander |

Le **besoin à commander ne change pas** : le stock lent continue de couvrir la demande du segment. On évite ainsi de racheter à cause d'un stock qu'on cherche justement à vendre.

## Dans la préparation de commande d'un segment

L'article porte un badge **arrêt de réachat** (rouge s'il est urgent). Il ne reçoit plus de quantité dans la répartition proposée. L'acheteur peut toujours saisir une quantité à la main, s'il a une raison de le recommander.

## Dans la commande par fournisseur

Les articles en arrêt de réachat ne sont jamais proposés. Ils apparaissent dans **« Voir les articles vendus écartés »**, avec le motif. Leurs ventes comptent toujours dans la part du fournisseur : le besoin se reporte sur ses autres articles.

## Mise à jour

La liste est mise à jour **chaque soir à 21 h 30**, à partir des exports Sage de la journée : un article vendu dans la journée peut sortir de l'arrêt de réachat dès le lendemain. Seuls l'arrêt de réachat et le stock lent changent ; le reste de la prévision d'achat garde le dernier dépôt complet. Voir [Tâches automatiques](../03-administration/05-taches-automatiques.md).
