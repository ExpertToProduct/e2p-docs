---
sidebar_position: 6
title: Ce que le moteur fait et ne fait pas
---

# Ce que le moteur de consolidation fait et ne fait pas

Cette page est écrite pour un expert-comptable, un commissaire aux comptes ou un DAF qui veut savoir exactement sur quoi reposent les comptes consolidés affichés. Elle est mise à jour à chaque évolution du moteur.

## Périmètre et méthodes

La méthode de chaque société se choisit dans la Configuration (intégration globale, proportionnelle, mise en équivalence, hors périmètre). Sans choix explicite, elle est **déduite** du type et de la détention : holding de tête et détention supérieure à 50 % en intégration globale, 50 % en intégration proportionnelle, 20 à 50 % en mise en équivalence, moins de 20 % hors périmètre ; les sociétés immobilières restent en mise en équivalence. La Synthèse et l'annexe Excel affichent la méthode retenue, sa source et la détention du groupe.

- **Intégration globale** : comptes repris à 100 %, **intérêts non contrôlants** sur le résultat et les capitaux propres pour la part non détenue.
- **Intégration proportionnelle** : comptes repris à la quote-part détenue, éliminations réciproques et profits internes à la même quote-part, pas d'intérêts non contrôlants. Le tableau de flux passe en méthode indirecte.
- **Mise en équivalence simple** : quote-part du résultat de l'exercice, dividendes reçus déduits, titres portés à la valeur d'équivalence.
- **Paliers** : une holding détenue par une autre société forme un sous-groupe avec ses filiales directes. L'écart d'acquisition est calculé à chaque niveau sur les titres de la société qui détient ; la détention du groupe est le produit de la chaîne de détention ; les intérêts non contrôlants sont calculés en chaîne, corrigés de la quote-part de capitaux propres éliminée dans le sous-groupe.
- **Variation de périmètre** : dates d'entrée et de sortie par société. Le compte de résultat est repris au prorata des mois de présence ; les capitaux propres à la date d'entrée servent au calcul de l'écart d'acquisition (saisis, sinon reconstitués) ; le bilan d'une société sortie avant la clôture n'est pas repris. L'annexe liste chaque variation.
- **Crédit-bail** : contrats saisis par société (valeur, durée, taux, loyer, début). Le bien est immobilisé et amorti, une dette financière est constatée et remboursée par la part en capital des loyers, les loyers sont remplacés par l'amortissement et les intérêts, avec impôt différé au taux de la société.
- Les capitaux propres de chaque société sont ceux de sa liasse, résultat de l'exercice inclus.
- **Non couvert** : contrôle de fait sans majorité, résultat de cession à la sortie, valeur résiduelle et option d'achat des crédits-bails, détentions croisées ou circulaires.

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

Une société tenant ses comptes dans une autre devise est convertie selon IAS 21 dans sa version de base : bilan au **cours de clôture**, compte de résultat au **cours moyen**, capitaux propres d'ouverture au cours historique (cours de clôture de l'exercice précédent), et l'**écart de conversion** porté en capitaux propres, visible dans le bilan, l'état de variation et l'annexe. Les cours se saisissent par exercice et par devise dans la Configuration ; sans cours, la société reste non convertie et un bandeau le signale. Le tableau de flux passe alors en méthode indirecte avec une ligne d'effet de change.

**Non couvert** : recyclage de l'écart lors d'une cession, investissement net en devise, hyperinflation, rapprochement intragroupe entre deux sociétés de devises différentes.

## États produits et réconciliation croisée

Compte de résultat consolidé (résultat brut, éliminations, part du groupe et intérêts non contrôlants), bilan consolidé (actif, capitaux propres avec part du groupe, intérêts non contrôlants et réserves, dettes financières, autres passifs), variation des capitaux propres, tableau de flux de trésorerie, journal des éliminations.

À chaque calcul, le moteur vérifie **quatre égalités** et affiche le résultat en tête de la Synthèse :

1. Résultat consolidé = part du groupe + intérêts non contrôlants, et = résultat brut − dividendes internes − marge interne + impôt différé + quote-part de mise en équivalence.
2. Capitaux propres consolidés du bilan = capitaux propres de clôture de l'état de variation.
3. Trésorerie de clôture du tableau de flux = trésorerie nette du bilan, et variation = clôture − ouverture. Vérifiable seulement quand le tableau de flux est construit depuis les balances ; sans balances, la méthode indirecte est approximative et l'égalité est signalée « non vérifiable ».
4. Total actif consolidé = capitaux propres + dettes financières + concours bancaires + autres passifs.

Une égalité en défaut apparaît en rouge dans la Synthèse et dans la file À traiter : le rapport n'est alors pas diffusable en l'état.

## Ce qui est testé

Un groupe synthétique de quatre sociétés (holding, filiale à 100 %, filiale à 70 %, SCI mise en équivalence) avec dividende interne, prestations, cession interne de stock, déficit et taux d'impôt différenciés fait partie de la suite de tests automatisés : chaque valeur consolidée y est comparée à un calcul manuel, et les égalités croisées doivent être vérifiées, à chaque modification du code. Le même groupe est décliné avec une filiale en devise étrangère, en intégration proportionnelle, avec un palier (sous-holding à 80 %), avec une entrée et une sortie en cours d'exercice et avec un contrat de crédit-bail.
