---
sidebar_position: 4
title: Devises et crédit-bail
---

# Devises et crédit-bail

## Sociétés en devise

Configuration : la devise de chaque société si elle diffère de celle du groupe, et pour chaque exercice le cours de clôture et le cours moyen de chaque devise, saisis à l'étape Identité. Aucun cours n'est téléchargé.

Conversion : bilan au cours de clôture ; compte de résultat au cours moyen ; capitaux propres d'ouverture au cours historique, c'est-à-dire le cours de clôture de l'exercice précédent s'il est renseigné, sinon le cours moyen. L'écart de conversion est la différence entre les capitaux propres de clôture convertis au cours de clôture et leur valeur historique (ouverture historique, plus résultat au cours moyen, moins dividendes au cours moyen). Il est porté en capitaux propres consolidés, jamais en résultat.

Non couvert : le recyclage de l'écart lors d'une cession, l'investissement net en devise, l'hyperinflation, et le rapprochement de flux intragroupe entre deux devises différentes. Une société en devise n'a pas de liasse fiscale française : ses chiffres viennent d'une balance ou d'une saisie.

## Crédit-bail

Chaque contrat se déclare pour sa société : libellé, valeur du bien, durée en mois, taux, loyer annuel, date de début. Les comptes sociaux ne changent pas. En consolidation :

- le bien est immobilisé pour sa valeur et amorti linéairement sur la durée ;
- une dette financière de même valeur est constatée, remboursée par la part en capital de chaque loyer, le loyer moins les intérêts au taux du contrat sur le capital restant dû en début d'exercice ;
- le loyer est annulé, remplacé par l'amortissement et les intérêts ;
- la différence cumulée est un retraitement de capitaux propres, net d'impôt différé au taux de la société.

Les échéances sont calculées par exercice, au prorata des mois du contrat compris dans l'exercice. La valeur résiduelle et l'option d'achat ne sont pas modélisées. La page Vigilance juge chaque société sur ses comptes sociaux et le consolidé sur les comptes retraités.

## Référentiel

Textes qui fondent les méthodes de cette page, tels qu'ils sont cités dans l'application (Paramètres, rapport PDF, classeur Excel). Un statut « convention » ou « approximation » signale un écart assumé avec le texte ; « usage » signale l'absence de référentiel national. « Vérifié » : citation relue sur Légifrance à la date indiquée.

| Périmètre | Référentiel | Statut | Écart assumé | Vérifié |
|---|---|---|---|---|
| Conversion des comptes en devises | Règlement ANC n° 2020-01 : méthode du cours de clôture (bilan au cours de clôture, résultat au cours moyen, écart de conversion en capitaux propres) | conforme au référentiel | Non traités : recyclage de l'écart de conversion à la cession, investissement net en devise, hyperinflation, rapprochement intragroupe entre deux devises. | à confirmer |
| Retraitement du crédit-bail | Règlement ANC n° 2020-01 : retraitement des contrats de location-financement dans les comptes consolidés (bien immobilisé et amorti, dette financière, loyer remplacé par amortissement et intérêts) | conforme au référentiel | Option d'achat et valeur résiduelle non modélisées ; impôt différé au taux de la société. | à confirmer |
