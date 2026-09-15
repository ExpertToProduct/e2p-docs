---
sidebar_position: 8
title: Contrôles et échéancier
---

# Contrôles et échéancier

## Contrôles de cohérence

À chaque rechargement, pour chaque société :

- **écarts liasse contre balance**, poste par poste, dans la tolérance de 2 % ;
- **balance absente**, société sans source, liasse scannée non lue, chiffres issus d'un scan sans balance ;
- **identité de la liasse** : le SIREN et l'année de clôture lus sur la liasse de l'exercice courant sont comparés à la configuration ;
- **dividendes reçus** confrontés au procès-verbal de l'émetteur : le dividende voté, multiplié par la détention, doit égaler le montant reçu ; verdicts confirmé, écart, contredit, non vérifiable ;
- **prestations intragroupe** : ce que la holding facture contre ce que les filiales enregistrent ;
- **conventions** entre sociétés absentes de la liste des conventions réglementées ;
- **commissaire aux comptes** : seuils de nomination obligatoire, deux critères sur trois (total du bilan, chiffre d'affaires, effectif), pour une société isolée, pour la tête d'un groupe en cumul avec les sociétés contrôlées, et pour les sociétés contrôlées significatives ; seuils du décret 2024-152 pour les exercices ouverts à partir de 2024, seuils antérieurs avant ; durée du mandat de six exercices.

Les contrôles alimentent la file À traiter, avec les montants et le lien vers la page où agir.

## Ratios de vigilance

Douze ratios calculés sur les postes lus, jugés par des seuils qui dépendent du type de société ; seuils par défaut, puis par type, puis ceux de la Configuration par type et par société, l'origine étant affichée. Deux précisions : les délais clients rapportent les créances au chiffre d'affaires, créances toutes taxes comprises contre chiffre d'affaires hors taxes, ce qui les surestime de la TVA ; le taux de valeur ajoutée est calculé comme chiffre d'affaires moins achats, rapporté au chiffre d'affaires, une approximation.

## Échéancier légal

Chaque obligation est calculée à partir de la clôture de la société et des règles du référentiel : approbation des comptes six mois après la clôture ; dépôt au greffe deux mois après l'assemblée en dépôt électronique, huit mois après la clôture si la date d'assemblée n'est pas connue ; rapport de gestion et rapport du commissaire avant l'assemblée ; liasse fiscale ou déclaration 2072 dans les trois mois de la clôture, soit début mai pour une clôture au 31 décembre. Les sociétés civiles ne sont pas concernées par le dépôt ni le rapport de gestion. La date d'assemblée est lue dans le procès-verbal déposé ; à défaut elle est estimée. Un clic sur une obligation montre la règle, sa référence, le point de départ retenu et sa provenance, le calcul, et un avertissement quand le point de départ est fragile.

Une obligation « en retard » signifie que son justificatif est absent du dossier de documents, pas que l'obligation n'a pas été remplie.

## Référentiel

Textes qui fondent les méthodes de cette page, tels qu'ils sont cités dans l'application (Paramètres, rapport PDF, classeur Excel). Un statut « convention » ou « approximation » signale un écart assumé avec le texte ; « usage » signale l'absence de référentiel national. « Vérifié » : citation relue sur Légifrance à la date indiquée.

| Périmètre | Référentiel | Statut | Écart assumé | Vérifié |
|---|---|---|---|---|
| Commissaire aux comptes | Code de commerce, art. L. 823-1 : nomination obligatoire au-delà de seuils ; C. com. art. D. 823-1, renvoyant aux seuils de l'art. D. 221-5 (total du bilan 5 000 000 €, chiffre d'affaires 10 000 000 €, cinquante salariés), relevés par le décret n° 2024-152 du 28 février 2024 pour les exercices ouverts à compter du 1er janvier 2024 ; C. com. art. L. 823-3 : mandat de six exercices | conforme au référentiel | — | 2026-09-15 |
| Mandats des dirigeants | Code de commerce, art. L. 225-18 (administrateurs : six ans au plus), L. 223-18 (gérant de SARL : durée statutaire, sinon durée de la société) ; statuts pour une SAS ; Code civil art. 1846 (gérant de société civile) | conforme au référentiel | Seuls les mandats à durée déterminée saisis dans la configuration sont suivis. | à confirmer |
| Conventions réglementées | Code de commerce, art. L. 225-38 et suivants (SA), L. 223-19 (SARL), L. 227-10 (SAS) : conventions réglementées et rapport spécial | conforme au référentiel | — | 2026-09-15 |
| Convention de trésorerie | Code monétaire et financier, art. L. 511-7, 3° : opérations de trésorerie entre sociétés d'un même groupe, exception au monopole bancaire | conforme au référentiel | — | 2026-09-15 |
| Approbation des comptes | Code de commerce, art. L. 225-100 (SA) et L. 223-26 (SARL) : approbation dans les six mois de la clôture, prorogation par décision de justice ; Statuts pour une SAS ; Code civil art. 1856 (SCI : reddition annuelle de compte par le gérant) | conforme au référentiel | — | 2026-09-15 |
| Dépôt des comptes au greffe | Code de commerce, art. L. 232-21 à L. 232-23 et R. 123-111 : dépôt dans le mois suivant l'approbation, deux mois en cas de dépôt électronique (délai retenu) ; C. com. art. L. 232-25 : option de confidentialité des micro et petites entreprises, fermée aux sociétés appartenant à un groupe au sens de l'art. L. 233-16 | conforme au référentiel | — | 2026-09-15 |
| Rapport de gestion | Code de commerce, art. L. 232-1 : rapport de gestion établi par les dirigeants ; dispense pour les petites entreprises au sens de l'art. L. 230-1 (total du bilan 1 000 000 €, chiffre d'affaires 2 000 000 €, vingt salariés), sauf pour les sociétés dont l'activité consiste à gérer des titres de participations | convention de gestion, écart assumé | La dispense des petites entreprises n'est pas appliquée : le rapport reste attendu pour toute société commerciale, en priorité moyenne. Une holding n'en bénéficie de toute façon pas. | 2026-09-15 |
| Registre des titres et extrait K-bis | Code de commerce, art. L. 228-1 et R. 228-8 : titres nominatifs et registre des mouvements de titres (SA, SAS) ; pour une SARL, les parts résultent des statuts et des cessions publiées ; Extrait K-bis de moins de trois mois : usage des tiers, sans délai légal | convention de gestion, écart assumé | Le registre est attendu pour toute forme sociale ; pour une SARL, les statuts à jour en tiennent lieu. | 2026-09-15 |
| Pièces attendues dans la data room | Référentiel des pièces de l'application : chaque pièce datée porte sa propre référence dans l'échéancier (approbation, dépôt, rapports, liasse) | usage de place, pas de référentiel national | « En retard » signifie justificatif absent de la data room, pas obligation non remplie. | à confirmer |
| Ratios de vigilance et seuils | Aucun référentiel national : définitions d'analyse financière classiques (marge, rentabilité, structure, liquidité, délais) et seuils d'usage de place inspirés de la pratique bancaire | usage de place, pas de référentiel national | Délai clients calculé sur des créances TTC rapportées à un chiffre d'affaires HT (surestimé de la TVA) ; taux de valeur ajoutée approché par (chiffre d'affaires − achats) / chiffre d'affaires. | à confirmer |
| Repères sectoriels | Insee, dispositif Ésane (élaboration des statistiques annuelles d'entreprises) : ratios par activité et par catégorie de taille, millésime affiché | conforme au référentiel | Un repère, pas une norme : les seuils de vigilance restent la seule règle d'alerte. | à confirmer |
