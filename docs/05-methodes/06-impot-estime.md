---
sidebar_position: 6
title: Impôt estimé
---

# Impôt estimé

L'impôt affiché est une estimation à partir des liasses, destinée à juger la cohérence et l'ordre de grandeur. L'impôt réel est celui établi par le cabinet.

## Par société

Le résultat fiscal est celui corrigé dans le wizard, sinon celui lu sur la liasse, sinon approché. Un résultat fiscal négatif devient un déficit reportable, imputé sur les exercices suivants. L'impôt estimé est la base positive multipliée par le taux d'IS de la société, 25 % par défaut et modifiable dans la Configuration, moins les crédits d'impôt saisis. Une société à l'impôt sur le revenu n'a pas d'impôt : son résultat est imposé chez ses associés.

## Contrôle par la page 2065

La page d'identification de chaque liasse est lue : régime déclaré, réel normal ou simplifié, et les mentions de l'intégration fiscale, résultat d'ensemble, date d'entrée dans le groupe, société mère. Ce qui est déclaré est confronté à la Configuration ; un écart donne un contrôle dans À traiter.

## Au niveau du groupe

Sans intégration fiscale, l'impôt du groupe est la somme des impôts estimés des sociétés à l'IS. Avec l'option « intégration fiscale » de la Configuration, l'impôt est calculé sur un résultat d'ensemble.

## Ce que l'estimation ignore

Les réintégrations et déductions autres que celles déjà dans le résultat fiscal de la liasse, la contribution sociale, les acomptes et le calendrier de paiement, le régime mère-fille sur les dividendes reçus, et le taux réduit, qui se traduit en indiquant le taux voulu dans la Configuration de la société.

## Référentiel

Textes qui fondent les méthodes de cette page, tels qu'ils sont cités dans l'application (Paramètres, rapport PDF, classeur Excel). Un statut « convention » ou « approximation » signale un écart assumé avec le texte ; « usage » signale l'absence de référentiel national. « Vérifié » : citation relue sur Légifrance à la date indiquée.

| Périmètre | Référentiel | Statut | Écart assumé | Vérifié |
|---|---|---|---|---|
| Impôt estimé et régime fiscal | Code général des impôts, art. 219 : taux de l'impôt sur les sociétés ; CGI art. 223 A et suivants : intégration fiscale ; CGI art. 145 et 216 : régime des sociétés mères et filiales (non appliqué automatiquement) | approximation assumée | Impôt estimé sur le résultat fiscal lu ou corrigé, sans réintégrations hors liasse, contribution sociale, acomptes ni taux réduit automatique ; le régime mère-fille doit être reflété dans le résultat fiscal saisi. | 2026-09-15 |
