---
sidebar_position: 1
title: Rotation lente
---

# Rotation lente des produits

Quels articles dorment en stock, combien d'argent ils immobilisent, et que faire de chacun ? La vue **Gescom › Rotation lente (W52)** répond article par article, et propose une action chiffrée.

## Où la trouver

- **Gescom › Rotation lente (W52)** : la vue complète.
- **Synthèse › Achats** : la tuile « Rotation lente (W52) », avec la valeur immobilisée, le nombre d'articles lents et de dormants.

## Comment un article est classé

Pour chaque article, on compte le **stock vendable** (magasins et entrepôts ; le flottant, le SAV, le déclassé et le hors négoce sont mis à part), puis le nombre de **jours de stock** : le stock divisé par les ventes moyennes par jour.

La vitesse de vente retenue est **la meilleure des deux** : celle de l'année en cours (ventes datées de Sage), ou celle de toute l'année précédente. Un article qui se vend bien mais vient de recevoir un conteneur n'est donc pas classé lent. Dans le tableau, un petit « 2025 » à côté des jours de stock signale qu'ils sont calculés au rythme de l'année précédente.

| Classe | Règle |
|---|---|
| **Dormant** | aucune vente depuis 6 mois |
| **Très lent** | plus de 365 jours de stock |
| **Lent** | plus de 180 jours de stock |
| **Nouveauté** | reçu pour la première fois il y a moins de 90 jours : jamais classé lent, aucune action |

Les articles sont triés par **valeur immobilisée** (stock × coût moyen pondéré), pour traiter d'abord ce qui bloque le plus d'argent.

## Les actions proposées

| Action | Quand | Ce qui est proposé |
|---|---|---|
| **Transfert** | un dépôt n'a rien vendu de l'article, alors qu'un autre dépôt le vend | envoyer le stock vers le dépôt qui vend le plus, à concurrence de 90 jours de ses ventes |
| **Promotion** | article lent, très lent ou dormant | remise de 15 % (lent), 30 % (très lent), 40 % (dormant), **jamais sous le prix de revient** |
| **Démarque** | dormant depuis 12 mois ou plus | descendre jusqu'à 30 % sous le prix de revient ; la perte est chiffrée |
| **Arrêt de réachat** | tout article lent | ne pas recommander ; **urgent** si une commande est en cours ou si l'article a été acheté il y a moins de 6 mois |

Quand le prix de vente de l'article n'est pas connu, la promotion indique seulement le plancher (le prix de revient) : le prix est à fixer.

L'arrêt de réachat est repris dans E2P Costing : les articles concernés ne sont plus proposés dans les commandes préparées, et chaque segment de la prévision d'achat signale son stock lent. Voir [la documentation d'E2P Costing](/costing/outils/rotation-lente).

## Lire la vue

- **Quatre tuiles** : valeur immobilisée (dont les dormants), stock à transférer, chiffre d'affaires possible des promotions et démarques avec la perte et le nombre de prix à fixer, arrêts de réachat dont urgents.
- **Filtres** : par classe, par type d'action, par famille, et recherche par référence ou désignation.
- **Détail d'un article** : cliquer sa référence. On voit chaque action avec son motif et son chiffrage, le stock et les ventes de chaque dépôt, le rythme retenu et les ventes des années précédentes.
- **Par famille** : la valeur immobilisée par famille ; un clic filtre la liste.

## Mettre les données à jour

La vue lit les exports Sage (inventaire, mouvements de stock, statistiques articles). Elle est recalculée par l'administrateur à chaque nouvel inventaire ; la prévision d'achat d'E2P Costing est redéposée ensuite, pour que l'arrêt de réachat y suive. La date du stock utilisée s'affiche dans la tuile « Valeur immobilisée ».

## Limites connues

- Une vente datée n'est connue que pour l'année en cours. Pour un article sans vente cette année, la dernière vente est estimée au plus tard (« avant 2025 » veut dire : vendu pour la dernière fois en 2024 ou avant).
- Les articles hors nomenclature (matériaux, articles divers) sont classés sous « Hors nomenclature ».
- Les seuils et les remises sont ceux décidés le 13/10/2026 ; ils se règlent dans le moteur.
