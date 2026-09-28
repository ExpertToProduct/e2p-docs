---
sidebar_position: 5
title: Suivre les règlements
---

# Suivre les règlements

Quand un conteneur arrive, une question bloque la relâche des documents : la balance du fournisseur et le fret ont-ils été virés ? L'entrée **Règlements** de la barre latérale répond dossier par dossier, sans rien saisir de plus que ce que la fiche porte déjà.

## Ce que l'application attend de chaque dossier

Dès qu'un dossier est en **commande**, l'application déduit les virements à faire :

| Ligne | Montant | Échéance |
|---|---|---|
| Deposit | le pourcentage ou le montant saisi sur la fiche (carte Facture) — rien n'est pré-rempli, les conditions changent d'un fournisseur à l'autre | date de commande, sinon date de facture |
| Balance | facture − deposit, dans la devise de la facture | ETD (départ du navire), sinon ETA − 30 jours |
| Fret | la ligne Fret quand elle porte GCCOI ou INDIGO | ETA − 5 jours |
| Commission | la commission du dossier (commissionnaire choisi) | date de la facture de commission + 30 jours |

Chaque ligne suit quatre états : **à demander** → **demandé** (la demande de virement est partie) → **exécuté** (la banque a édité le bordereau) → **confirmé en banque** (l'écriture est passée en comptabilité). Une échéance dépassée sans exécution est **en retard** : c'est le nombre affiché sur la pastille de la barre latérale.

:::info Documents libérables
Sur la fiche et dans les onglets Flottants et Arrivés, le voyant **Documents libérables** passe au vert quand la balance et le fret sont exécutés ou confirmés ; sinon il dit ce qui manque.
:::

## Le bordereau de la banque fait le travail

Les demandes de virement passent par un **bordereau de remise de virements** édité par le portail de la banque le jour de l'exécution. Déposez-le dans Règlements (bouton ou glisser-déposer), ou laissez-le arriver par la boîte mail des factures :

- chaque opération dont le libellé est « NATURE-numéro de facture » (par exemple `BALANCE-INV-55`, `FRET-FR-9`) passe la ligne du dossier à **exécuté**, à la date du bordereau ;
- le PDF est classé sur le dossier, en pièce jointe « Bordereau » ;
- une opération que l'application ne peut pas rattacher sans risque (numéro inconnu, deux dossiers possibles) attend dans **Opérations à affecter** : choisissez le dossier, ou écartez-la.

Le libellé à écrire sur le bordereau est donné par le bloc **À préparer pour la banque** (échéances des 7 prochains jours et retards) : copiez-le tel quel, bénéficiaire, libellé, montant, devise.

:::caution Ce qui n'est jamais gardé
Le compte, l'IBAN et le BIC du bénéficiaire ne sortent pas du PDF : l'application n'en retient que le nom, le libellé, le montant et la devise.
:::

## Virements en dollars : importer le suivi de la trésorerie

La trésorerie tient un classeur des virements en dollars de l'année, un onglet par entité, une ligne par virement : fournisseur, date, numéro de proforma, type (acompte ou solde), montant, banque, état (crédité, fait, à faire). Ce classeur est pour les dollars ce que le bordereau est pour les euros. Page Règlements, bouton **Importer le suivi des virements en dollars** : l'application lit l'onglet de son entité et les colonnes par leur titre, quel que soit leur ordre.

Pour chaque virement, l'application cherche la ligne attendue, sans jamais choisir au hasard :

1. **Commissions** : un numéro « COM 0425 » ou « COM 04-05 2025 » désigne un ou plusieurs mois ; les commissions du bénéficiaire facturées dans ces mois sont rattachées ensemble si leur somme fait le montant.
2. **Numéro de proforma** : le numéro du virement retrouve les dossiers qui le portent (« PIMYCF260105 » retrouve « CIMYCF260105-11 » et « CIMYCF260105-10 ») ; une proforma peut couvrir plusieurs dossiers si la somme de leurs balances fait le virement.
3. **Bénéficiaire et montant** à 1 % près.

Un virement crédité passe la ligne **exécutée** à sa date, référence « Suivi USD · banque » ; un virement « à faire » passe la ligne **demandée**. Ce qui n'est pas rattaché attend dans **Opérations à affecter**, avec les lignes candidates et, quand la comptabilité est chargée, l'écriture de banque qui porte le même montant en dollars (« Vu au FEC le 04/08 : 40 000,00 € · pièce … »). Réimporter le même classeur le mois suivant ne refait rien pour les virements déjà traités.

Pour que le rattachement fonctionne, **le numéro de proforma doit être saisi dans la fiche du dossier** (champ « N° facture fournisseur »). Le lien **Proformas manquantes** de la page Règlements donne la liste des dossiers en dollars qui en sont dépourvus, avec une colonne à remplir ; une fois les fiches complétées, **Réessayer l'affectation** dans le bloc des opérations à affecter reprend les virements en attente.

## Règlement global en tranches : importer un relevé

Certains fournisseurs sont réglés par tranches (« SOLDE 1/3 », « SOLDE BIS 2/3 », parfois via l'affactureur) qui couvrent un lot de factures. Le lot n'est connu que par un **relevé**, préparé dans un classeur à une feuille et deux blocs : les débits de banque (mêmes colonnes que la feuille « Débits banque non rattachés » de l'export) et les factures du lot (N° Facture, date, échéance, montant). Page Règlements, bouton **Importer un relevé de règlement global**.

- Le relevé est **équilibré** si le total des débits égale le total des factures à 1 % près. Sinon rien n'est décidé et la raison est affichée.
- Chaque facture du relevé cherche la ligne du dossier qui porte son numéro : trouvée, elle passe **confirmée** à la date de la dernière tranche, avec les pièces des débits ; inconnue de Costing, elle est listée pour que les achats la rattachent en saisissant le numéro de facture fournisseur dans la fiche.
- Les débits du relevé sont **réservés** : ils ne servent plus à aucun autre rapprochement. L'administrateur peut libérer une réservation depuis la carte « Écritures réservées ».
- Les dossiers **réputés réglés** (arrivés, dépotés depuis plus de trente jours sans ligne saisie, donc hors suivi) sont regardés aussi : si le relevé paie leur facture, la ligne est confirmée et le dossier rentre dans le suivi.
- Un champ « N° facture fournisseur » peut porter **plusieurs numéros**, un par ligne ou séparés par « / » : la ligne est payée par la somme de ces factures.
- Colonne facultative **« Dossier »** dans le bloc des factures : quand une facture n'a de numéro dans aucune fiche (une commission, par exemple), indiquer le dossier suffit. L'application rattache la facture à la ligne de ce dossier dont le montant correspond, seule ou en somme avec d'autres factures du même dossier, et la ligne reçoit le numéro. Deux lectures possibles : rien n'est décidé, la facture est « à trancher ».
- Réimporter le même relevé ne refait rien. Après avoir complété le relevé ou les fiches, **Reprendre ce relevé** confirme ce qui ne l'était pas encore, sans réserver les débits une seconde fois.

## Confirmation par la comptabilité

À chaque ouverture de l'écran et à chaque dépôt de FEC, les lignes à demander, demandées et exécutées sont rapprochées des écritures de banque du FEC (débits du compte fournisseur en journal de banque). Une ligne retrouvée passe **confirmé en banque** avec la date comptable et la pièce, une seule fois, au nom du système. Une ligne exécutée depuis plus de 15 jours ouvrés sans aucune écriture possible est signalée « non vu en banque » : à vérifier auprès de la banque ou de la comptabilité.

Une écriture est retenue pour une ligne quand elle est au nom du même bénéficiaire, datée du jour de la facture (sinon de la commande) ou après, et pas déjà prise par une autre ligne. Le montant est comparé à **2 %** près pour une ligne en euros, à **5 %** près pour une ligne en dollars convertie au cours du bordereau s'il existe, sinon au cours du dossier. Quatre formes de paiement sont reconnues, dans cet ordre :

0. **Pièce comptable** : quand la pièce de l'écriture porte le numéro de facture de la ligne (le cabinet y met le numéro de facture du fournisseur, ou le numéro de proforma pour les dollars), la pièce fait foi : la ligne est confirmée sans condition de montant ni de date. Un écart de montant supérieur à la tolérance est signalé, pas refusé. Une facture payée en plusieurs fois sur la même pièce est reconnue si la somme des débits fait la ligne. C'est la voie la plus sûre : **saisir le numéro de facture fournisseur dans la fiche** rend le rapprochement certain.
1. **Débit unique** : une écriture au montant de la ligne.
2. **Acompte + solde** : une balance sans deposit saisi, qu'aucune écriture seule ne paie mais que deux débits du même bénéficiaire règlent ensemble. La balance devient alors deux lignes confirmées : un deposit au montant et à la date du premier débit, une balance au montant et à la date du second.
3. **Virement groupé** : un débit qui règle d'un coup deux à quatre lignes du même bénéficiaire, dans la même devise, sur un ou plusieurs dossiers : toutes sont confirmées avec la date et la pièce de ce débit.

L'application ne choisit **jamais au hasard** : s'il existe plusieurs écritures, plusieurs paires ou plusieurs combinaisons possibles, rien n'est décidé et la ligne est signalée « à rapprocher à la main », avec la liste des candidats dans l'alerte. C'est fréquent pour les fournisseurs qui ont beaucoup de lignes ouvertes et sont réglés par virements groupés : le libellé bancaire ne porte que le nom du fournisseur, seul le bordereau de virement dit quelles factures un virement couvre. Déposer les bordereaux reste donc la voie sûre ; le FEC vient confirmer.

## Les trois vues et la prévision

- **Par échéance** : une semaine par groupe, pour préparer les virements.
- **Par bénéficiaire** : ce qui reste dû à chaque fournisseur, transitaire ou commissionnaire.
- **Par dossier** : les lignes d'un dossier et son voyant de documents.

En bas de page, la **prévision de sortie de trésorerie** cumule sur huit semaines, par devise, les lignes non exécutées ; le retard sort la semaine en cours.

:::tip Dossiers anciens
Un dossier arrivé depuis plus de 30 jours sans aucune ligne saisie est réputé réglé (sa marchandise a été relâchée) : il n'apparaît pas dans le suivi. Pour le suivre quand même, marquez une de ses lignes depuis la carte Paiements de sa fiche.
:::
