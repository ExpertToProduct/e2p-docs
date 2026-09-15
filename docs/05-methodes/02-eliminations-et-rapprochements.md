---
sidebar_position: 2
title: Éliminations et rapprochements intragroupe
---

# Éliminations et rapprochements intragroupe

## D'où viennent les flux

D'abord des balances. Dans la balance de chaque société, l'application repère les comptes dont l'intitulé nomme une autre société du groupe, par son nom ou l'un de ses alias configurés : titres de participation, clients et fournisseurs réciproques, comptes courants, loyers, prestations, dividendes reçus. Un compte dont l'intitulé ne nomme personne est rapproché par montant quand un montant identique existe en face, et marqué « probable, à confirmer ».

Ensuite de la Configuration, étape **Flux** : dividendes, conventions d'assistance, ventes internes de marchandises. Les flux lus dans les balances priment ; la saisie complète ce que les balances ne montrent pas.

## Le rapprochement

Chaque flux est confronté à sa contrepartie : prestations facturées par la holding contre charges enregistrées par les filiales, loyer encaissé par le bailleur contre loyer payé par le locataire, compte courant dans les deux comptabilités. Un écart devient un contrôle dans **À traiter**, avec les deux montants. Les dividendes reçus sont confrontés au procès-verbal d'approbation de l'émetteur, en tenant compte de la détention (voir [Contrôles et échéancier](./08-controles-et-echeancier.md)).

## Les éliminations

Au moment de la consolidation, pour les sociétés intégrées :

- titres de participation contre capitaux propres de la filiale, la différence formant l'[écart d'acquisition](./03-ecart-acquisition-minoritaires-equivalence.md) ;
- créances et dettes réciproques, comptes courants compris ;
- produits et charges réciproques : prestations, loyers, ventes internes, retirés du chiffre d'affaires consolidé et des charges, sans effet sur le résultat consolidé ; la Synthèse montre le chiffre d'affaires cumulé des sociétés, les éliminations et le chiffre d'affaires consolidé, à la quote-part pour une société en intégration proportionnelle ;
- dividendes reçus des filiales, retirés du résultat de la société bénéficiaire et remis en réserves ;
- profits internes sur stocks : la marge sur les marchandises vendues à une autre société et encore en stock à la clôture, calculée à partir du taux de marge et de la part résiduelle déclarés à l'étape Flux, retirée du résultat et du stock puis reprise l'exercice suivant.

En intégration proportionnelle, tout est fait au prorata. En mise en équivalence, il n'y a pas d'élimination ligne à ligne.

## Le journal des éliminations

La **Synthèse** liste chaque écriture : exercice, sociétés, nature, montant, origine (balance, avec le compte et l'intitulé, ou configuration). Le classeur Excel reprend le journal. C'est ce qui explique l'écart entre la somme des sociétés et le consolidé.

## Référentiel

Textes qui fondent les méthodes de cette page, tels qu'ils sont cités dans l'application (Paramètres, rapport PDF, classeur Excel). Un statut « convention » ou « approximation » signale un écart assumé avec le texte ; « usage » signale l'absence de référentiel national. « Vérifié » : citation relue sur Légifrance à la date indiquée.

| Périmètre | Référentiel | Statut | Écart assumé | Vérifié |
|---|---|---|---|---|
| Éliminations intragroupe | Règlement ANC n° 2020-01 : élimination des opérations réciproques, des dividendes internes et des résultats internes | conforme au référentiel | Un flux ni nommé dans les intitulés de comptes ni déclaré dans la configuration n'est pas éliminé et rien ne le signale ; les intérêts de comptes courants ne sont pas traités. | à confirmer |

## Limites

Un flux qui n'est ni nommé dans un intitulé ni déclaré n'est pas éliminé, et son absence ne se voit que par un déséquilibre. Les intérêts de comptes courants ne sont pas traités. Demander au cabinet de nommer les comptes réciproques avec la société en face est ce qui rend le rapprochement automatique.
