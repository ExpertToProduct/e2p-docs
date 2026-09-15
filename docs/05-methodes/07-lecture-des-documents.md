---
sidebar_position: 7
title: Lecture des documents
---

# Lecture des documents

## Liasses fiscales

La liasse est lue par ses codes Cerfa, ce qui la rend indépendante du logiciel du cabinet. La famille du formulaire est détectée par les codes présents : 2050 pour le réel normal, 2033 pour le simplifié, 2072 pour une société immobilière à l'impôt sur le revenu, celle-ci lue par libellés pour les recettes, les charges et le résultat. Pour chaque poste attendu, l'application cherche le code sur la page puis le nombre situé sur la même ligne dans la colonne des valeurs de l'exercice, colonne net à l'actif. Un nombre trouvé est vert ; une cellule vide sur une ligne présente vaut zéro et est orange ; un code absent est rouge. L'exercice vient de la date de clôture, le SIREN de la ligne SIRET, le nom de la désignation de la société.

## Balances

Deux formats : le PDF « balance générale » des logiciels de cabinet, colonnes compte, intitulé, soldes N, N−1, N−2, où un signe moins final marque un solde créditeur ; et le tableur avec numéro, intitulé, débit, crédit, solde. Les postes sont dérivés par les préfixes du plan comptable général. La balance attendue est celle de clôture, avant affectation du résultat. Elle complète la liasse sur les postes qu'elle n'a pas et la contrôle sur ceux qu'elle a, dans une tolérance de 2 % : chiffre d'affaires, résultats, capitaux propres, trésorerie, emprunts, clients, immobilisations. Elle est la seule source du bilan d'une société immobilière à l'IR, elle permet le tableau de flux et porte les positions intragroupe.

## Fichiers des écritures comptables

Le fichier normalisé de dix-huit colonnes, séparateur tabulation ou barre verticale, encodage et format des montants détectés. Il est contrôlé compte par compte contre la balance et apporte le chiffre d'affaires mensuel, les flux datés de financement et d'investissement, les balances âgées sur les écritures non lettrées et les mouvements intragroupe datés. Un fichier partiel de l'exercice en cours alimente Pilotage.

## Liasses scannées

Un PDF sans couche texte est reconnu par le moteur de reconnaissance du poste, sans que la page quitte l'ordinateur ; une copie avec couche texte est lue ensuite comme une liasse native. Les montants issus d'un scan ne sont jamais verts et sont marqués à relire ; sans balance pour les contrôler, la file À traiter le signale.

## Procès-verbaux

Le texte des PV d'approbation est analysé pour la date d'assemblée, l'exercice, le résultat et le dividende voté ou l'absence de distribution, à partir des formulations usuelles. Un PV rédigé autrement donne des champs vides, et le contrôle des dividendes le dit « non vérifiable ».

## Référentiel

Textes qui fondent les méthodes de cette page, tels qu'ils sont cités dans l'application (Paramètres, rapport PDF, classeur Excel). Un statut « convention » ou « approximation » signale un écart assumé avec le texte ; « usage » signale l'absence de référentiel national. « Vérifié » : citation relue sur Légifrance à la date indiquée.

| Périmètre | Référentiel | Statut | Écart assumé | Vérifié |
|---|---|---|---|---|
| Lecture des liasses fiscales | Formulaires Cerfa 2050 à 2059 (régime réel normal), 2033 (réel simplifié), 2065 (impôt sur les sociétés), 2072 (sociétés immobilières non soumises à l'IS) ; CGI art. 53 A (déclaration annuelle de résultats) et 223 (dans les trois mois de la clôture) ; clôture au 31 décembre : deuxième jour ouvré suivant le 1er mai, délai de télédéclaration compris | conforme au référentiel | Formats vérifiés sur les liasses d'un seul éditeur de logiciel comptable ; un montant lu sur un scan reste à relire. | 2026-09-15 |
| Contrôle d'identité des liasses | Contrôle propre à l'application : SIREN (clé de contrôle du SIRET) et année de clôture lus sur la liasse, confrontés à la configuration | usage de place, pas de référentiel national | La raison sociale est lue et affichée, pas comparée ; balances et fichiers des écritures ne sont pas contrôlés ainsi. | à confirmer |
| Lecture des balances | Plan comptable général (règlement ANC n° 2014-03) : classes et préfixes de comptes utilisés pour dériver les postes | conforme au référentiel | Pas de plan comptable personnalisé : les préfixes du plan comptable général sont fixes. | à confirmer |
| Fichier des écritures comptables | Livre des procédures fiscales, art. L. 47 A-I : remise du fichier des écritures comptables ; LPF art. A. 47 A-1 : structure du fichier (dix-huit champs, formats) | conforme au référentiel | Aucun contrôle de conformité fiscale du fichier : seule la cohérence avec la balance est vérifiée. | 2026-09-15 |
| Dividendes et procès-verbaux | Code de commerce, art. L. 232-11 (bénéfice distribuable) et L. 232-12 (décision de l'assemblée, acomptes sur bilan certifié) ; L. 232-13 : mise en paiement dans les neuf mois de la clôture | conforme au référentiel | Le délai de paiement de neuf mois n'est pas contrôlé ; les acomptes sur dividendes hors assemblée ne sont pas prévus. | 2026-09-15 |

## Ce qui est saisi, jamais lu

Les détentions, les statuts, les registres, les conventions, les contrats de crédit-bail, les cours de change. Le plan comptable est celui du plan général : il n'y a pas de plan comptable personnalisé.
