---
sidebar_position: 5
title: Suivre les règlements
---

# Suivre les règlements

Quand un conteneur arrive, une question bloque la relâche des documents : la balance du fournisseur et le fret ont-ils été virés ? La section **RÈGLEMENTS** de la barre latérale répond dossier par dossier, sans rien saisir de plus que ce que la fiche porte déjà. Elle compte quatre entrées :

| Entrée | À quoi elle sert |
|---|---|
| **À payer** | les virements à préparer pour la banque, les échéances et les retards (la pastille rouge compte les retards) |
| **Rapprochement** | relier chaque virement à son dossier et suivre sa confirmation par la comptabilité, en quatre sous-onglets ; ventiler un virement, gérer les avances (la pastille compte les opérations à affecter) |
| **Imports** | déposer les bordereaux de la banque, le suivi des virements en dollars, les Summaries des commissionnaires, les relevés de règlement global et les grands livres lettrés |
| **Trésorerie** | ce qui reste à régler, les avances disponibles et les sorties prévues sur huit semaines |

Les quatre entrées relèvent d'un même droit d'écran, « Règlements » (ADMIN › Profils). Ventiler un virement et utiliser une avance demandent en plus la case **Saisir un règlement**.

## Ce que l'application attend de chaque dossier

Dès qu'un dossier est en **commande**, l'application déduit les virements à faire :

| Ligne | Montant | Échéance |
|---|---|---|
| Deposit | le pourcentage ou le montant saisi sur la fiche (carte Facture) — rien n'est pré-rempli, les conditions changent d'un fournisseur à l'autre | date de commande, sinon date de facture |
| Balance | facture − deposit, dans la devise de la facture | ETD (départ du navire), sinon ETA − 30 jours |
| Fret | la ligne Fret quand elle porte GCCOI ou INDIGO, ou, sans prestataire, quand son n° de facture est un job H&J « HJ… » (à payer à **ROY**) ; en dollars, à son propre cours, quand le montant est saisi en dollars | ETA − 5 jours |
| Commission | la commission du dossier, une ligne par commissionnaire, au cours de sa facture s'il est saisi | date de la facture de commission + 30 jours |

Chaque ligne suit quatre états : **à demander** → **demandé** (la demande de virement est partie) → **exécuté** (la banque a édité le bordereau) → **confirmé en banque** (l'écriture est passée en comptabilité). Une échéance dépassée sans exécution est **en retard** : c'est le nombre affiché sur la pastille de la barre latérale.

:::info Documents libérables
Sur la fiche et dans les onglets Flottants et Arrivés, le voyant **Documents libérables** passe au vert quand la balance et le fret sont exécutés ou confirmés ; sinon il dit ce qui manque.
:::

## À payer

- **À préparer pour la banque** : les virements dont l'échéance tombe dans les 7 prochains jours, ou est dépassée, et qui ne sont pas encore exécutés, regroupés par bénéficiaire. Les commissions d'un même Summary de commissionnaire n'y font qu'**une ligne** : son total, avec le libellé `COMMISSION-SUMMARY-aaaammjj` (par exemple `COMMISSION-SUMMARY-20260831`), puisqu'un seul virement le paie. Le libellé à écrire sur le bordereau (« NATURE-numéro de facture ») y est donné : **Copier tout** met bénéficiaire, libellé, montant, devise et dossier dans le presse-papiers, une ligne par virement, à coller dans un tableur ou un mail.
- Trois onglets : **Par échéance** (une semaine par groupe, pour préparer les virements), **Par bénéficiaire** (ce qui reste dû à chaque fournisseur, transitaire ou commissionnaire), **Par dossier** (les lignes d'un dossier et son voyant de documents).
- Sur chaque ligne : **Demandé** quand la demande de virement est partie, **Exécuté…** (date et référence du bordereau) si le bordereau ne peut pas être déposé.

## Imports

### Le bordereau de la banque fait le travail

Les demandes de virement passent par un **bordereau de remise de virements** édité par le portail de la banque le jour de l'exécution. Déposez-le dans **Règlements › Imports** (glisser-déposer ou bouton). Le dépôt automatique par la boîte mail des factures est suspendu depuis le 12/10/2026.

- chaque opération dont le libellé est « NATURE-numéro de facture » (par exemple `BALANCE-INV-55`, `FRET-FR-9`) passe la ligne du dossier à **exécuté**, à la date du bordereau ;
- le PDF est classé sur le dossier, en pièce jointe « Bordereau » ;
- une opération que l'application ne peut pas rattacher sans risque (numéro inconnu, deux dossiers possibles) attend dans **Rapprochement › Opérations à affecter** : choisissez le dossier, ventilez-la entre plusieurs dossiers, ou écartez-la.


:::caution Ce qui n'est jamais gardé
Le compte, l'IBAN et le BIC du bénéficiaire ne sortent pas du PDF : l'application n'en retient que le nom, le libellé, le montant et la devise.
:::

### Virements en dollars : importer le suivi de la trésorerie

La trésorerie tient un classeur des virements en dollars de l'année, un onglet par entité, une ligne par virement : fournisseur, date, numéro de proforma, type (acompte ou solde), montant, banque, état (crédité, fait, à faire). Ce classeur est pour les dollars ce que le bordereau est pour les euros. **Règlements › Imports**, bouton **Importer le suivi des virements en dollars** : l'application lit l'onglet de son entité et les colonnes par leur titre, quel que soit leur ordre.

Pour chaque virement, l'application cherche la ligne attendue, sans jamais choisir au hasard :

1. **Commissions** : un numéro « COM 0425 » ou « COM 04-05 2025 » désigne un ou plusieurs mois ; les commissions du bénéficiaire facturées dans ces mois sont rattachées ensemble si leur somme fait le montant.
2. **Numéro de proforma** : le numéro du virement retrouve les dossiers qui le portent (« PIMYCF260105 » retrouve « CIMYCF260105-11 » et « CIMYCF260105-10 ») ; une proforma peut couvrir plusieurs dossiers si la somme de leurs balances fait le virement.
3. **Bénéficiaire et montant** à 1 % près.

Le numéro seul ne suffit jamais : le montant du virement doit faire celui de la ligne, ou la somme des lignes, à 1 % près, et à 5 % quand le virement est en dollars et la ligne en euros. Un virement partiel, un acompte ou un solde, attend dans les opérations à affecter ; le **rapprochement par commande** additionne ensuite l'acompte et le solde. Dans ce rapprochement, le numéro prime sur le nom du bénéficiaire : un agent peut payer pour le compte de l'usine, à condition que les montants concordent à 1 %.

Un virement crédité passe la ligne **exécutée** à sa date, référence « Suivi USD · banque » ; un virement « à faire » passe la ligne **demandée**. Ce qui n'est pas rattaché attend dans **Opérations à affecter**, avec les lignes candidates et, quand la comptabilité est chargée, l'écriture de banque qui porte le même montant en dollars (« Vu au FEC le 04/08 : 40 000,00 € · pièce … »). Réimporter le même classeur le mois suivant ne refait rien pour les virements déjà traités.

Pour que le rattachement fonctionne, **le numéro de proforma doit être saisi dans la fiche du dossier** (champ « N° facture fournisseur »). Le lien **Dossiers en dollars sans n° de proforma** (Imports, et Rapprochement › Opérations à affecter) donne la liste des dossiers en dollars qui en sont dépourvus, avec une colonne à remplir ; une fois les fiches complétées, **Réessayer l'affectation** dans le bloc des opérations à affecter reprend les virements en attente.

### Summary d'un commissionnaire

Chaque mois, le commissionnaire (GCCOI, et de même WWI ou YAJING) envoie un **Summary** : une ligne par dossier, désigné par sa référence (`D084`) ou par l'un de ses numéros de facture Gescom (`FC15964`, parfois deux : `FC15813/FC15814`), avec son montant, puis le total. Le PDF porte ensuite une facture par dossier (prospection, manutention de 350 $ par conteneur).

**Règlements › Imports › Lire un Summary** : déposez le PDF, ou une photo prise à l'iPhone. Le tableau est lu (texte du PDF, ou reconnaissance du texte de la photo par le serveur), puis présenté **à relire** avant tout import : commissionnaire, date, devise, total et lignes se corrigent à la main. Quand le document ne porte pas de date, la fin du mois du nom du fichier (`2026.03.pdf`) est proposée, à vérifier.

Pour chaque ligne, l'application indique le dossier retrouvé, l'estimation de la fiche, le montant facturé en euros (au cours propre de la commission s'il est saisi, sinon au cours du dossier), l'écart, et un état :

| État | Ce que cela veut dire |
|---|---|
| à écrire | la commission du dossier à ce commissionnaire est trouvée, pas encore réglée |
| déjà réglée | la commission est exécutée ou confirmée : elle n'est pas touchée |
| cours à saisir | Summary en dollars sur un dossier en euros : saisir d'abord le cours de la commission sur la fiche |
| dossier écarté | le dossier est hors du suivi des règlements (incohérence de la fiche à corriger) |
| inconnu, ambigu, sans commission | aucun dossier, ou plusieurs, ou pas de commission de ce commissionnaire sur le dossier |

Les lignes doivent faire le total au centime, sinon l'import est refusé. Deux lignes pour le même dossier s'additionnent.

**Importer** écrit les lignes « à écrire » :
- la commission prend le **montant du Summary**, dans sa devise : c'est le montant dû. L'estimation de la fiche reste affichée à côté, avec l'écart. **Le prix de revient ne change pas** ;
- son échéance devient la date du Summary + 30 jours ;
- un dossier **réputé réglé** (arrivé depuis plus de 30 jours sans ligne saisie) que le Summary facture rentre dans le suivi avec cette commission ;
- le document est gardé avec le Summary (lien « document » dans la carte).

La carte **Summaries des commissionnaires** (Imports, et Rapprochement › Factures de commissions) suit chaque Summary :
- **à payer** : toutes ses lignes sont écrites ; **Ventiler le paiement…** prépare la ventilation de son virement ;
- **incomplet** : des lignes attendent (cours à saisir, dossier à corriger, numéro inconnu) ; après correction, **Reprendre** les repasse. Un Summary incomplet ne se ventile pas : le montant des lignes en attente resterait en avance chez le commissionnaire, alors qu'il paie ces dossiers ;
- **paiement ventilé** ; **Annuler** remet les commissions dans leur état d'avant, tant qu'aucune n'est réglée et que le paiement n'est pas ventilé.

Quand le virement arrive (bordereau, suivi des virements en dollars), il attend dans les opérations à affecter : le bouton **Ventiler selon le Summary du …** apparaît quand son bénéficiaire et son montant sont ceux du Summary, ou que son libellé porte `SUMMARY-aaaammjj`. La ventilation est pré-remplie, une part par dossier, et se valide à la main ; le débit du virement au FEC confirme ensuite toutes les commissions d'un coup (*virement ventilé*).

:::info Ce que le Summary apprend
L'écart entre le Summary et l'estimation de la fiche est un contrôle : un écart d'environ 350 $ par conteneur signale un nombre de conteneurs GCCOI faux sur la fiche ; un écart égal aux frais « divers » signale des frais que le commissionnaire ne facture pas.
:::

### Règlement global en tranches : importer un relevé

Certains fournisseurs sont réglés par tranches (« SOLDE 1/3 », « SOLDE BIS 2/3 », parfois via l'affactureur) qui couvrent un lot de factures. Le lot n'est connu que par un **relevé**, préparé dans un classeur à une feuille et deux blocs : les débits de banque (mêmes colonnes que la feuille « Débits banque non rattachés » de l'export) et les factures du lot (N° Facture, date, échéance, montant). **Règlements › Imports**, bouton **Importer un relevé de règlement global**.

- Le relevé est **équilibré** si le total des débits égale le total des factures à 1 % près. Sinon rien n'est décidé et la raison est affichée.
- Chaque facture du relevé cherche la ligne du dossier qui porte son numéro : trouvée, elle passe **confirmée** à la date de la dernière tranche, avec les pièces des débits ; inconnue de Costing, elle est listée pour que les achats la rattachent en saisissant le numéro de facture fournisseur dans la fiche.
- Les débits du relevé sont **réservés** : ils ne servent plus à aucun autre rapprochement. L'administrateur peut libérer une réservation depuis la carte « Écritures réservées ».
- Les dossiers **réputés réglés** (arrivés, dépotés depuis plus de trente jours sans ligne saisie, donc hors suivi) sont regardés aussi : si le relevé paie leur facture, la ligne est confirmée et le dossier rentre dans le suivi.
- Un champ « N° facture fournisseur » peut porter **plusieurs numéros**, un par ligne ou séparés par « / » : la ligne est payée par la somme de ces factures.
- Colonne facultative **« Dossier »** dans le bloc des factures : quand une facture n'a de numéro dans aucune fiche (une commission, par exemple), indiquer le dossier suffit. L'application rattache la facture à la ligne de ce dossier dont le montant correspond, seule ou en somme avec d'autres factures du même dossier, et la ligne reçoit le numéro. Deux lectures possibles : rien n'est décidé, la facture est « à trancher ».
- Réimporter le même relevé ne refait rien. Après avoir complété le relevé ou les fiches, **Reprendre ce relevé** confirme ce qui ne l'était pas encore, sans réserver les débits une seconde fois.

### Grand livre lettré : compléter le FEC entre deux dépôts

Le FEC s'arrête à sa date d'arrêté ; entre deux dépôts, le cabinet continue de lettrer. Le grand livre d'un tiers, exporté de Sage au format Excel, complète le FEC pour le lettrage. **Règlements › Imports**, bouton **Importer un grand livre lettré** :

1. Choisir le **tiers** dans la liste : l'export ne dit pas de qui il s'agit.
2. Déposer le classeur. Les colonnes sont reconnues par leur titre.
3. Le bilan indique les écritures lues, celles déjà connues de la comptabilité, les nouvelles, les lettrages ajoutés et les lignes que le suivi va confirmer.

Le grand livre **complète, il ne remplace jamais** : une lettre du FEC n'est pas modifiée, et un désaccord est seulement compté. Un groupe de lettrage ne confirme une ligne que s'il est équilibré au centime, règlement de banque compris. L'import n'écrit rien dans les dossiers ; la confirmation s'écrit au passage suivant du suivi, avec sa trace dans l'historique.

Réimporter le même fichier ne fait rien. Un nouvel export du même tiers remplace le précédent. Quand un FEC plus récent couvre la période, la carte **Grands livres importés** affiche « couvert par le FEC ». L'administrateur peut retirer un grand livre ; ce qui a été confirmé le reste.

## Rapprochement

L'écran s'ouvre sur l'encadré **Comment une ligne passe à « confirmé »** : les étapes, ce qu'il faut sur la fiche pour chacune, et le compte des lignes confirmées par type de preuve. Les lignes sont ensuite réparties en **quatre sous-onglets** :

1. **Factures d'achats** : deposit et balance des fournisseurs, avec la carte **Par commande** et le **rapprochement à la main** (voir plus bas).
2. **Factures de fret** : les lignes de fret GCCOI, INDIGO et ROY (jobs H&J), avec l'alerte « conteneur déchargé, fret non payé », et le **rapprochement à la main** (voir plus bas).
3. **Factures de commissions** : estimé, facturé, écarts, factures refusées, le classeur des commissions, et le **rapprochement à la main** (voir plus bas).
4. **Factures diverses** : ce qui n'entre nulle part ailleurs (virements à affecter sans nature, virements ventilés, avances fournisseurs, virements écartés, lignes saisies à la main).

Les trois premiers suivent la même trame :
- quatre tuiles : lignes, exécutées à confirmer, confirmées, reste à régler ;
- **À compléter pour que la comptabilité confirme** : ce qui bloque chaque ligne (numéro de facture Gescom, numéro de facture fournisseur, date de facture) et quoi faire ;
- **Opérations à affecter** : les virements que l'application n'a pas pu rattacher sans risque, avec leurs lignes candidates. On choisit le dossier (**Affecter**), on le répartit entre plusieurs dossiers (**Ventiler…**), ou on l'écarte. **Réessayer l'affectation** reprend ces virements après que des fiches ont été complétées ;
- **Confirmées récemment** : les 40 dernières lignes confirmées, avec leur preuve.

Un virement en attente est classé par son libellé (« COM… », « FRET… »), sinon par sa nature.

### Rapprochement par commande

La trésorerie paie une **commande** (une proforma) par un acompte puis un ou plusieurs soldes ; Costing suit un dossier par conteneur. La carte **Par commande** du sous-onglet **Factures d'achats** regroupe les virements du suivi en dollars et les dossiers qui portent le même numéro, et affiche pour chaque commande : commandé, acompte versé, solde versé, à faire, reste à payer, état. Les boutons **Simuler** et **Rapprocher par commande** montrent puis écrivent ce qui est certain.

- **Soldée** : un solde versé, plus rien à faire, et les virements couvrent les dossiers. Les lignes passent exécutées à la date du dernier virement. Si les virements dépassent les dossiers de plus de 1 %, un signalement indique qu'un dossier de la commande manque ou porte un autre numéro.
- **Acompte versé** : si le suivi porte aussi le solde à faire et que leur total égale celui des dossiers, l'acompte est inscrit sur chaque dossier au prorata, et la balance, ramenée au reste dû, passe demandée.
- **À trancher** : tout le reste, avec la raison chiffrée. Rien n'est écrit : total de la commande inconnu, aucun dossier ne porte le numéro, virements inférieurs aux factures.

La fiche, le prix de revient et le statut du dossier ne sont jamais modifiés ; seules les lignes de règlement et l'acompte le sont, avec une trace dans l'historique.

### Commissions : le montant facturé

La commission calculée dans la fiche est une **estimation** (taux appliqué à la facture, plus la manutention). Le sous-onglet **Factures de commissions** du Rapprochement affiche, lui, la commission **réellement facturée** par le commissionnaire, retrouvée dans la comptabilité par le numéro de facture Gescom du dossier ou par le numéro du dossier : « Facturée … € (… $, COM 01/2026) · estimée … € ». La fiche et le prix de revient ne changent pas.

- Son état vient du lettrage : **confirmée** quand le règlement groupé du commissionnaire est lettré, sinon « non lettrée en comptabilité ».
- « Pas encore comptabilisée » : dossier arrivé, aucune facture de commission trouvée.
- « Écart avec l'estimation » : le facturé s'écarte de plus de 10 % de l'estimation de la fiche.
- « Facture à vérifier » : montant invraisemblable, plus de trois fois l'estimation ; rien n'est retenu.

Le lien **classeur des commissions** donne la liste complète, pour les achats et le cabinet comptable.

## Rapprocher à la main les factures d'achats, les frets ou les commissions

Le libellé d'un virement à un commissionnaire ou à un transitaire ne dit pas ce qu'il paie (« VIRT GLOBAL COMPTOIR COM 0525 », « BALANCE-COM 02 », « KALOROY20260810 »). Le service qui lettre les virements le sait : il le dit ici en cochant, au lieu de le reconstituer. **Rapprochement › Factures d'achats**, **Factures de fret** ou **Factures de commissions** **› Rapprocher à la main** — la même carte dans les trois onglets :

1. **Choisir le fournisseur** (ARKEMIX, INDIGO HOME APPLIANCE…), le **prestataire de fret** (GCCOI, INDIGO, ROY pour les jobs H&J) ou le **commissionnaire** (GCCOI, WWI, SOFAREM…). Ses deposits et balances, ses frets ou ses commissions s'affichent, dossier par dossier : montant, montant facturé, échéance, statut, preuve. Les commissions déjà confirmées sont masquées ; une case les montre.
2. **Choisir le virement** dans le bandeau :
   - **débit du FEC** : un débit de banque au nom du commissionnaire qu'aucune ligne ne porte encore (date, montant en euros, dollars lus dans le libellé, pièce). Les règlements de commissions GCCOI passent par le compte FGCCOI, reconnu même si son libellé s'écrit « GCC0.I CO LTD » ;
   - **virement en attente** : un virement des bordereaux ou du suivi des virements en dollars, à son nom ou dont le libellé le nomme (« KALOROY… » pour ROY), pas encore affecté.

   Le commissionnaire ou le transitaire étant souvent aussi fournisseur, seuls les virements de la nature choisie sont montrés d'abord (« COM » pour les commissions ; « FRET », « ROY », « HJ » pour le fret) ; un lien affiche les autres (balances, deposits). Pour un fournisseur, tous ses virements sont montrés.
3. **Cocher les commissions** que ce virement paie. La barre du bas donne le total coché, le montant du virement, l'écart et la tolérance : **2 %** dans une seule devise, **5 %** quand des lignes ont été converties (dollars au cours du bordereau, sinon du dossier). Au-delà de la tolérance, le rapprochement n'est possible qu'avec un **motif** écrit (frais bancaires, écart de change, ligne manquante), gardé avec lui.
4. **Rapprocher** :
   - avec un **débit du FEC**, les commissions cochées passent **confirmé en banque**, preuve « rapproché à la main », à la date et à la pièce du débit ; le débit est réservé, il ne confirme plus rien d'autre ;
   - avec un **virement en attente**, elles passent **exécuté**, le virement est affecté ; quand son débit arrive au FEC, il confirme toutes ces commissions d'un coup (comme un virement ventilé).

Une balance payée en partie (un acompte) ne se coche pas : elle se **ventile** (voir plus bas), la part devenant un acompte.

Chaque rapprochement est listé sous le tableau (numéro R…, virement, dossiers, écart, motif) et tracé dans l'historique de chaque dossier. **Défaire** remet les lignes dans leur état d'avant, et le virement en attente revient à affecter ; c'est refusé si une ligne a changé depuis (autre confirmation, nouvelle saisie).

Il faut la case **Rapprocher les virements** du profil (Admin › Profils), donnée d'office au contrôle de gestion et au DAF ; sans elle, la carte reste en consultation.

:::info Fret H&J : confirmé par le lettrage
Chaque job de fret H&J est une facture du fournisseur ROY sous son numéro « HJ… », payée par les virements mensuels KALOROY. Le numéro HJ saisi comme n° de facture du fret sur la fiche suffit : la facture est retrouvée au FEC par ce numéro, et quand le cabinet l'a lettrée sur un virement KALOROY, le fret passe **confirmé** de lui-même (preuve « par lettrage »). Le rapprochement à la main sert aux jobs que le cabinet n'a pas encore lettrés.
:::

## Ventiler un virement entre plusieurs dossiers

Il arrive qu'un seul virement règle plusieurs dossiers, voire plus que ce qui est dû aujourd'hui. Le surplus correspond alors à l'acompte d'une commande future. **Ventiler** répartit ce virement entre les dossiers et garde le solde en mémoire.

- **D'où partir** : une opération en attente, avec **Ventiler…** sur sa ligne dans les opérations à affecter ; ou un virement vu en banque ou au FEC, avec **Ventiler un virement saisi à la main** (montant, devise, bénéficiaire, date, référence).
- **Répartir** : pour chaque part, choisissez le dossier, puis la ligne (balance, deposit, fret, commission) ou **Nouvel acompte**, et le montant dans la devise du virement. L'application vérifie au fur et à mesure et affiche l'effet de chaque part :
  - une part qui couvre la ligne à 1 % près la **solde** ;
  - une part plus petite sur une balance ou un deposit devient un **acompte** : une ligne deposit est créée et la balance baisse d'autant ;
  - un fret ou une commission ne se paie pas en partie : la part est refusée, comme une part qui dépasse ce qui est dû ou une ligne déjà réglée.
- **Devise** : une part sur une ligne d'une autre devise (un virement en dollars pour un fret en euros) est convertie au **cours du bordereau**, à saisir dans la ventilation (dollars pour 1 €).
- **Ventiler** : chaque part passe sa ligne « exécuté » à la date du virement, avec la référence « Ventilation V… ». L'opération d'origine passe « ventilée ». Le solde est gardé : c'est une **avance** chez le fournisseur.
- **Annuler** : dans Factures diverses › **Virements ventilés**. Les lignes reviennent dans leur état d'avant. L'annulation est refusée dès qu'une ligne a été confirmée en banque ou modifiée, ou tant qu'un deposit a été pris sur le solde (le retirer d'abord).

La fiche et le prix de revient ne changent pas. Chaque écriture est tracée dans l'historique du dossier.

## Avances fournisseurs

Le solde d'un virement ventilé est une **avance** : de l'argent déjà versé au fournisseur et pas encore affecté à un dossier. Elle sert de deposit à la commande suivante, toujours **validée à la main**.

- **Sur la fiche** d'un dossier du même fournisseur, un bandeau s'affiche au-dessus des paiements : « Avance disponible chez … ». Le montant proposé est modifiable. **Utiliser comme deposit** l'applique, **Ignorer** masque le bandeau.
- **Dans Rapprochement › Factures diverses › Avances fournisseurs** : pour chaque avance, le solde, les deposits déjà pris (chacun annulable) et le disponible. **Imputer…** applique l'avance à n'importe quel dossier.
- **Ce qui s'écrit** : un deposit exécuté à la date du virement, avec la référence « Avance V… ». Il couvre le deposit attendu du dossier, ou prend sa propre ligne « AVANCE V… ». La balance baisse d'autant ; le prix de revient ne change pas. On ne peut pas prendre plus que le disponible.
- **Confirmation** : le débit du virement d'origine au FEC confirme aussi ces deposits (voir *Confirmation par la comptabilité*, forme 2). Un deposit confirmé ne s'annule plus.

## Confirmation par la comptabilité

À chaque ouverture des écrans Règlements et à chaque dépôt de FEC, les lignes à demander, demandées et exécutées sont rapprochées des écritures de banque du FEC (débits du compte fournisseur en journal de banque). Une ligne retrouvée passe **confirmé en banque** avec la date comptable et la pièce, une seule fois, au nom du système. Une ligne exécutée depuis plus de 15 jours ouvrés sans aucune écriture possible est signalée « non vu en banque » : à vérifier auprès de la banque ou de la comptabilité.

Une écriture est retenue pour une ligne quand elle est au nom du même bénéficiaire, datée du jour de la facture (sinon de la commande) ou après, et pas déjà prise par une autre ligne. Le montant est comparé à **2 %** près pour une ligne en euros, à **5 %** près pour une ligne en dollars convertie au cours du bordereau s'il existe, sinon au cours du dossier. Six formes de preuve ou de paiement sont reconnues, dans cet ordre :

1. **Lettrage de la comptabilité** : c'est la preuve la plus forte. Les factures d'un dossier se retrouvent dans la comptabilité par son **numéro de facture Gescom** (champ de la fiche, un ou plusieurs numéros). Quand la facture est lettrée, soldée au centime et réglée par la banque, la ligne est confirmée à la date du règlement, même sans date de facture. Une facture présente mais non lettrée affiche « non lettrée en comptabilité » : ce n'est pas une preuve de non-paiement (un règlement en tranches ou passé par le compte d'un agent n'est pas lettré), mais la ligne ne sera plus rapprochée par le montant. **Saisir le numéro de facture Gescom dans la fiche est donc ce qui rend le suivi certain.**
2. **Virement ventilé** : un virement réparti entre plusieurs dossiers (voir *Ventiler un virement*) est **un seul débit** en banque. Le débit du bénéficiaire au montant du virement (2 % en euros ; en dollars, contre-valeur au cours du bordereau, à 5 %), daté de 3 jours avant à 30 jours après l'exécution, confirme d'un coup toutes ses parts, y compris les deposits pris sur son avance. Deux débits possibles : rien n'est décidé, chaque part est « à rapprocher à la main ».
3. **Pièce comptable** : quand la pièce de l'écriture porte le numéro de facture de la ligne (le cabinet y met le numéro de facture du fournisseur, ou le numéro de proforma pour les dollars), la pièce fait foi : la ligne est confirmée sans condition de montant ni de date. Un écart de montant supérieur à la tolérance est signalé, pas refusé. Une facture payée en plusieurs fois sur la même pièce est reconnue si la somme des débits fait la ligne. C'est la voie la plus sûre : **saisir le numéro de facture fournisseur dans la fiche** rend le rapprochement certain.

Les trois formes suivantes rapprochent par le **montant** : elles ne s'appliquent qu'à un dossier qui porte une **date de facture**, à défaut une date de commande. Sans date, rien n'est confirmé par le montant, car un débit plus ancien de montant voisin pourrait être pris pour le paiement ; la ligne affiche alors « date de facture à saisir », et le compteur « lignes sans date de facture » de la page permet de les retrouver.

4. **Débit unique** : une écriture au montant de la ligne.
5. **Acompte + solde** : une balance sans deposit saisi, qu'aucune écriture seule ne paie mais que deux débits du même bénéficiaire règlent ensemble. La balance devient alors deux lignes confirmées : un deposit au montant et à la date du premier débit, une balance au montant et à la date du second.
6. **Virement groupé** : un débit qui règle d'un coup deux à quatre lignes du même bénéficiaire, dans la même devise, sur un ou plusieurs dossiers : toutes sont confirmées avec la date et la pièce de ce débit.

L'application ne choisit **jamais au hasard** : s'il existe plusieurs écritures, plusieurs paires ou plusieurs combinaisons possibles, rien n'est décidé et la ligne est signalée « à rapprocher à la main », avec la liste des candidats dans l'alerte. C'est fréquent pour les fournisseurs qui ont beaucoup de lignes ouvertes et sont réglés par virements groupés : le libellé bancaire ne porte que le nom du fournisseur, seul le bordereau de virement dit quelles factures un virement couvre. Déposer les bordereaux reste donc la voie sûre ; le FEC vient confirmer.

Chaque ligne confirmée garde **sa preuve**, affichée à côté de la date (« vu en banque le … ») et dans la carte **Confirmées récemment** : par lettrage, par la pièce, par le montant, acompte + solde, virement groupé, virement ventilé, rapproché à la main, relevé en tranches ou par commande, avec la pièce comptable. Les lignes confirmées avant le 13/10/2026 n'ont que leur pièce.

## Trésorerie

- **Tuiles** : reste à régler (contre-valeur des lignes non exécutées, par devise), retards, demandées, exécutées ce mois, **avances disponibles** (total par devise et fournisseurs concernés).
- **Prévision de sortie de trésorerie** : sur huit semaines glissantes, par devise, les lignes non exécutées ; le retard sort la semaine en cours. Contre-valeur au cours de chaque dossier.

:::tip Dossiers anciens
Un dossier arrivé depuis plus de 30 jours sans aucune ligne saisie est réputé réglé (sa marchandise a été relâchée) : il n'apparaît pas dans le suivi. Pour le suivre quand même, marquez une de ses lignes depuis la carte Paiements de sa fiche.
:::
