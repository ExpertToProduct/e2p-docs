---
sidebar_position: 1
title: Simulateur
---

# Simuler un prix de revient

Explorer, pour un seul article et sans rien enregistrer, ce que donnerait un prix d'achat avec un coefficient d'approche donné.

Champs : prix d'achat unitaire, devise, taux, coefficient d'approche, marge cible, prix de marché (facultatif).

Le résultat — prix de revient, prix de vente conseillé, marge — se recalcule tout seul un tiers de seconde après la dernière frappe, sans bouton. Rien ne s'affiche tant que le prix d'achat et le coefficient (au moins 1) ne sont pas saisis.

:::info Un seul article, pas un conteneur entier
Le coefficient est pré-rempli avec le repère constaté dans la comptabilité (voir [Coefficients d'approche](02-coefficients.md)), mais reste modifiable. Pour un vrai conteneur avec plusieurs articles, créez un dossier : lui seul répartit les frais entre les articles selon leur volume, leur poids et leur valeur — le simulateur applique le coefficient tel quel, à un seul article.
:::

:::note
Comme les trois pages suivantes, ce calcul vient d'un second programme (E2P-ENGINE) : s'il ne répond pas, l'écran affiche une erreur plutôt qu'un chiffre faux.
:::
