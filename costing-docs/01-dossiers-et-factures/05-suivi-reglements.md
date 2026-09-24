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

## Confirmation par la comptabilité

À chaque ouverture de l'écran, les virements exécutés sont rapprochés des écritures de banque du FEC : une ligne retrouvée passe **confirmé en banque** avec la date comptable. Une ligne exécutée depuis plus de 15 jours ouvrés sans écriture est signalée « non vu en banque » : à vérifier auprès de la banque ou de la comptabilité.

## Les trois vues et la prévision

- **Par échéance** : une semaine par groupe, pour préparer les virements.
- **Par bénéficiaire** : ce qui reste dû à chaque fournisseur, transitaire ou commissionnaire.
- **Par dossier** : les lignes d'un dossier et son voyant de documents.

En bas de page, la **prévision de sortie de trésorerie** cumule sur huit semaines, par devise, les lignes non exécutées ; le retard sort la semaine en cours.

:::tip Dossiers anciens
Un dossier arrivé depuis plus de 30 jours sans aucune ligne saisie est réputé réglé (sa marchandise a été relâchée) : il n'apparaît pas dans le suivi. Pour le suivre quand même, marquez une de ses lignes depuis la carte Paiements de sa fiche.
:::
