---
sidebar_position: 6
title: Ce que le moteur fait et ne fait pas
---

# Ce que le moteur de consolidation fait et ne fait pas

Cette page est écrite pour un expert-comptable, un commissaire aux comptes ou un DAF qui veut savoir exactement sur quoi reposent les comptes consolidés affichés. Elle est mise à jour à chaque évolution du moteur.

## Périmètre et méthodes

- **Intégration globale** des sociétés opérationnelles et de la holding incluses dans le périmètre, quelle que soit la détention, avec **intérêts non contrôlants** sur le résultat et les capitaux propres pour la part non détenue.
- **Mise en équivalence simple** des sociétés immobilières : quote-part du résultat de l'exercice, dividendes reçus déduits, titres portés à la valeur d'équivalence à l'actif et en capitaux propres.
- Les capitaux propres de chaque société sont ceux de sa liasse, résultat de l'exercice inclus.
- **Non couvert** : intégration proportionnelle, contrôle de fait sans majorité, paliers de consolidation (sous-groupes), entrées et sorties de périmètre en cours d'exercice.

## Éliminations

- **Dividendes** intragroupe, à la quote-part détenue.
- **Titres de participation** de la holding contre la quote-part des capitaux propres des filiales à l'acquisition ; l'excédent est un **écart d'acquisition** porté à l'actif, calculé étape par étape quand les acquisitions sont renseignées, sans affectation aux actifs (pas de PPA) ni test de dépréciation.
- **Comptes réciproques** (comptes courants, prestations, loyers, prêts), rapprochés dans les balances quand elles sont déposées, à défaut selon les flux déclarés.
- **Profits internes** sur les ventes de stock entre sociétés (marge non réalisée sur le stock résiduel) avec l'impôt différé actif correspondant.
- **Non couvert** : virements en transit, provisions sur créances intragroupe, profits internes sur cessions d'immobilisations.

## Impôts

- Impôt estimé société par société au **taux propre à chacune** (25 %, taux réduit, 0 % pour les sociétés transparentes ou exonérées), sans intégration fiscale.
- Impôts différés actifs sur les déficits reportables et sur les profits internes éliminés.
- **Réconciliation du taux effectif** : impôt théorique, écarts par cause (absence d'intégration, taux différenciés, crédits d'impôt), impôt comptabilisé.
- **Non couvert** : passifs d'impôt différé sur différences temporelles, différences permanentes.

## Devises

Mono-devise. Une société tenant ses comptes dans une autre devise que celle du groupe n'est pas convertie.

## États produits et réconciliation croisée

Compte de résultat consolidé (résultat brut, éliminations, part du groupe et intérêts non contrôlants), bilan consolidé (actif, capitaux propres avec part du groupe, intérêts non contrôlants et réserves, dettes financières, autres passifs), variation des capitaux propres, tableau de flux de trésorerie, journal des éliminations.

À chaque calcul, le moteur vérifie **quatre égalités** et affiche le résultat en tête de la Synthèse :

1. Résultat consolidé = part du groupe + intérêts non contrôlants, et = résultat brut − dividendes internes − marge interne + impôt différé + quote-part de mise en équivalence.
2. Capitaux propres consolidés du bilan = capitaux propres de clôture de l'état de variation.
3. Trésorerie de clôture du tableau de flux = trésorerie nette du bilan, et variation = clôture − ouverture. Vérifiable seulement quand le tableau de flux est construit depuis les balances ; sans balances, la méthode indirecte est approximative et l'égalité est signalée « non vérifiable ».
4. Total actif consolidé = capitaux propres + dettes financières + concours bancaires + autres passifs.

Une égalité en défaut apparaît en rouge dans la Synthèse et dans la file À traiter : le rapport n'est alors pas diffusable en l'état.

## Ce qui est testé

Un groupe synthétique de quatre sociétés (holding, filiale à 100 %, filiale à 70 %, SCI mise en équivalence) avec dividende interne, prestations, cession interne de stock, déficit et taux d'impôt différenciés fait partie de la suite de tests automatisés : chaque valeur consolidée y est comparée à un calcul manuel, et les quatre égalités doivent être vérifiées, à chaque modification du code.
