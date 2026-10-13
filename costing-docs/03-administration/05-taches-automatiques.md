---
sidebar_position: 5
title: Tâches automatiques
---

# Tâches automatiques

Plusieurs mises à jour se font seules, sans que personne n'ait à cliquer. Cette page dit lesquelles, à quelle heure, et ce qu'elles changent à l'écran.

## Sur le serveur du bureau

Elles tournent tant que le serveur est allumé.

| Quand | Ce qui se fait | Où on le voit |
|---|---|---|
| Toutes les 6 heures | Le suivi ShipsGo des conteneurs est relu : ETD, ETA, débarquement, retour du vide | carte « Suivi du conteneur » ; voir [Suivre un conteneur](../01-dossiers-et-factures/06-suivi-conteneurs.md) |
| Chaque jour à partir de 7 h | Alerte des conteneurs au port et de leur coût | notification aux profils qui ont la case « Recevoir l'alerte conteneurs au port » |
| Chaque jour, à l'heure réglée | Sauvegarde de la base | ADMIN › Sauvegarde ; voir [Sauvegarde](02-sauvegarde.md) |

## Depuis le poste de la direction

Ces tâches partent du poste de la direction, où arrivent les données de la comptabilité et de Sage. Si le poste est en veille à l'heure prévue, elles s'exécutent à son réveil ; s'il est éteint, elles attendent le passage suivant.

| Quand | Ce qui se fait | Où on le voit |
|---|---|---|
| Chaque jour à 12 h 45 | Le **cours du jour** de la Banque centrale européenne (dollar, yuan, livre turque) est déposé | la commande par fournisseur est chiffrée à ce cours |
| Chaque jour à 21 h 30 | La **rotation lente** est recalculée à partir des exports Sage de la journée (stock par dépôt, ventes de la veille), puis l'**arrêt de réachat** et le **stock lent** sont mis à jour dans la prévision d'achat | badges « stock lent » et « arrêt de réachat » ; voir [Rotation lente et arrêt de réachat](../02-outils/05-rotation-lente.md) |

La mise à jour du soir ne touche qu'à l'arrêt de réachat et au stock lent : les ventes, le stock et les paramètres de la prévision d'achat restent ceux du dernier dépôt complet. Chaque passage est inscrit au journal (« mise à jour de la rotation lente dans la prévision d'achat »).

:::info Si une tâche n'a pas pu se faire
Rien n'est écrit à moitié : l'écran garde simplement les données de la veille. Le cours du jour reste le dernier déposé ; la prévision d'achat garde le dernier arrêt de réachat connu. Signalez-le à l'administrateur si la même date reste affichée plusieurs jours.
:::
