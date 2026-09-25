---
sidebar_position: 1
title: Questions fréquentes
---

# Questions fréquentes

## Numérotation et étapes

**Peut-on créer un dossier directement en commande ou en flottant, sans passer par « projet » ?**
Oui. Le bouton « Nouveau » s'adapte à l'onglet ouvert : « Nouveau projet », « Nouvelle commande » ou « Nouveau flottant ».

**Combien de conteneurs tient un seul dossier ?**
Quatre au plus, chacun avec son propre dépôt et sa date de dépotage.

**Deux dossiers ont été créés par erreur pour le même connaissement, peut-on les réunir ?**
Oui, une fonction de fusion existe : le premier garde son numéro et récupère conteneurs, factures, frais et articles des autres.

**Le moteur de calcul est indisponible pendant une expédition partielle, que se passe-t-il ?**
Le passage en flottant échoue franchement, puisque c'est le moteur qui calcule le partage des montants entre ce qui part et ce qui reste. Il faut réessayer une fois le moteur revenu.

## Pièces jointes et factures

**Une facture arrive par mail avant que le dossier existe dans E2P Costing, que devient-elle ?**
Elle est gardée en attente sur le disque du serveur avec une alerte, jamais perdue. À déposer à la main une fois le dossier créé.

**La même facture est déposée deux fois, y a-t-il un doublon ?**
Non : un second dépôt du même fichier (même contenu) sur le même dossier est refusé, avec un message clair — qu'il vienne d'un double clic ou du watcher relisant un mail déjà traité. Le même fichier sur un **autre** dossier reste accepté, ce n'est pas un doublon dans ce cas.

**Une facture est déposée sur le mauvais dossier, peut-on la déplacer ?**
Oui, voir [Corriger une erreur](../01-dossiers-et-factures/04-corriger-erreur.md) — bouton « Déplacer » à côté de la pièce.

**La facture est une photo ou un scan sans texte, est-elle quand même utile ?**
Elle reste déposée et consultable, mais sans recherche par contenu ni extraction automatique — ces deux services ont besoin de texte.

## Travail à plusieurs

**Deux personnes ouvrent la même fiche en même temps, qui gagne ?**
La fiche prévient qu'une autre personne l'a ouverte. Si les deux enregistrent, la seconde reçoit un message précis disant qui a écrit quoi entre-temps : rien n'est perdu en silence.

**Qui a le droit de valider un dossier — seulement le contrôleur de gestion ou le DAF ?**
Le système ne l'impose pas : n'importe quel compte peut valider. Le profil (acheteur, assistant achat…) sert seulement au tableau de bord, pas à des permissions.

## Surestaries et stationnement hors Gescom

**Comment déclare-t-on des surestaries hors Gescom ?**
Sur la fiche, ligne Surestaries (ou Stationnement au port) du bloc « Frais non soumis aux droits de douane », tant qu'elle est en provision : bouton « Facture reçue… », puis montant facturé, numéro et date. L'application garde la provision dans le prix de revient, tel qu'enregistré en Gescom, et met l'excédent hors Gescom ; la ligne passe en Facture et affiche « dans le PR X · hors Gescom Y ». Si la facture est inférieure à la provision, rien ne va hors Gescom et l'écart est seulement signalé.

**Et quand la gérance décide de tout passer hors Gescom ?**
Dans le même formulaire, cocher « Tout hors Gescom (décision de gérance) » : rien dans le prix de revient, la facture entière hors Gescom, avec la personne du sélecteur « Je suis… » et la date, pour la trace.

**Le dossier est déjà validé, peut-on encore régulariser ?**
Oui, le formulaire reste disponible sous la fiche figée pour ces deux lignes. L'enregistrement est accepté si le prix de revient ne change pas d'un centime, refusé sinon avec la raison, et laisse une ligne « régularisation » dans l'historique. Une décision de gérance n'est donc possible sur un dossier validé que si la rubrique ne portait pas de provision.

**Où retrouve-t-on les montants hors Gescom ?**
Récapitulatif de la fiche (bloc « Hors Gescom »), page Frais d'approche (tuile « à passer en charges exceptionnelles » et tableau par dossier face au FEC), export Excel des dossiers (colonnes Hors Gescom et Motif), fiche PDF.

## Suivi des règlements

**Comment le suivi des règlements se met-il à jour ?**
De quatre façons. Par les bordereaux de remise de virement, transférés ou mis en copie à la boîte de veille : chaque opération est rattachée au dossier par le numéro de facture du libellé, sinon par bénéficiaire et montant, et la ligne passe en « exécuté ». En déposant un bordereau à la main sur la page Règlements ou dans les pièces d'un dossier. À la main, ligne par ligne, sur la page Règlements ou dans le bloc Paiements de la fiche : demandé, exécuté avec date et référence, annulé. Par le FEC, à chaque dépôt : les lignes exécutées retrouvées en banque passent en « confirmé ».

**Quel libellé mettre sur un virement pour qu'il soit reconnu ?**
« NATURE-numéro de facture », par exemple BALANCE-XXX ou FRET-XXX (natures : DEPOSIT, ACOMPTE, BALANCE, SOLDE, FRET, COMMISSION). Le bloc « À préparer pour la banque » de la page Règlements donne ce libellé tout prêt.

**Un bordereau n'est rattaché à aucun dossier, que devient-il ?**
Il attend dans le bloc « Opérations à affecter » de la page Règlements : on l'affecte à un dossier en un clic, ou on l'écarte. L'application ne choisit jamais au hasard entre plusieurs dossiers possibles.

**Le FEC suffit-il à savoir ce qui a été payé ?**
Pour le passé, oui : chaque virement à un fournisseur y est. Pour le présent, non : le FEC arrive du cabinet avec des semaines de retard, les virements en dollars y sont en euros au cours de la banque, et le libellé bancaire ne porte pas toujours le numéro de facture. Le bordereau, édité le jour du virement, est l'information à temps ; le FEC vient confirmer.

**Le FEC est déposé, mais la plupart des lignes restent « à demander » : pourquoi ?**
Parce que l'application ne confirme une ligne que si la comptabilité la désigne sans ambiguïté. Depuis le 25 septembre 2026, elle reconnaît un débit unique (2 % d'écart en euros, 5 % en dollars convertis), un acompte suivi d'un solde, et un virement groupé couvrant jusqu'à quatre lignes du même fournisseur. Mais le libellé des écritures de banque ne porte que le nom du fournisseur, sans numéro de facture ni montant par facture ; pour un fournisseur qui a vingt ou trente lignes ouvertes, un virement groupé s'explique de dizaines de façons, et l'application refuse de choisir. Ces lignes sont signalées « à rapprocher à la main », avec les écritures candidates dans l'alerte : on tranche à la fiche en marquant la ligne exécutée avec la date et la référence du virement, ou en déposant le bordereau de l'époque, qui porte la liste des factures réglées. Sur la durée, la voie sûre est le bordereau, saisi ou transféré le jour du virement.

**Pourquoi tout est-il « à demander » au démarrage ?**
Parce que personne n'a encore saisi ni déposé de bordereau. Déposer les bordereaux des dernières semaines, puis marquer exécutés les règlements plus anciens dont on a la preuve, assainit vite. Les dossiers arrivés et dépotés depuis plus de trente jours sans ligne saisie sont réputés réglés et sortent du suivi.

## Suivi des conteneurs

**Comment fonctionne le suivi des conteneurs ?**
Un prestataire, ShipsGo, interroge les compagnies maritimes ; le serveur relit chaque suivi toutes les six heures et écrit dans la fiche l'ETD, l'ETA, l'arrivée du navire et le débarquement, avec une ligne d'historique. La fiche montre la frise des jalons, l'ETA suivie face à l'ETA saisie et les alertes ; la liste des dossiers affiche le dernier événement.

**Comment lancer le suivi d'un dossier ?**
Fiche, carte « Suivi du conteneur », bouton « Suivre ce conteneur… ». L'action consomme un crédit ShipsGo, un par conteneur, ou un seul par connaissement quand le dossier en a plusieurs.

**Comment rendre le suivi automatique ?**
Acheter des crédits chez ShipsGo (un crédit vaut un conteneur ou un connaissement jusqu'à la fin du voyage, valable un an), puis activer la création automatique dans Paramètres, réglage « Suivi des conteneurs ». Le sondage crée alors les suivis des dossiers commandés et flottants, en ignorant ceux dont l'ETA est dépassée de plus de quinze jours, sans doute déjà dépotés : les passer à l'étape arrivé avant d'activer.

**Quelles alertes le suivi produit-il ?**
ETA repoussée de plus de deux jours, transbordement, conteneur déchargé alors que le fret GCCOI ou INDIGO n'est pas payé, suivi sans réponse de la compagnie après sept jours, suivi non relu depuis trois jours. Le suivi s'arrête de lui-même à la sortie du port, ou dix jours après le déchargement.

**Le portail my RDT du transitaire peut-il alimenter l'application ?**
Non : c'est un espace client sans API. Ses courriels d'étape peuvent en revanche être lus par la boîte de veille si on la met en copie.

## Comptabilité (FEC)

**Où dépose-t-on le FEC ?**
Paramètres, carte « Comptabilité (FEC) » : glisser-déposer ou bouton. L'application contrôle le fichier (en-tête FEC, écritures, dates), refuse un fichier plus ancien que celui en place sauf confirmation, ou identique, puis le moteur le prend automatiquement et les confirmations de règlements sont relancées. Le FEC peut aussi être envoyé en pièce jointe à la boîte de veille. Dépôt réservé aux profils contrôle de gestion, DAF et administrateur.

## Dossiers : attribution et statuts

**Comment attribuer d'un coup une série de dossiers à une personne ?**
Depuis le sommaire de la page Dossiers, attribution en lot : les dossiers choisis prennent la personne en créateur, sans toucher au reste de la saisie ; les fiches validées sont laissées telles quelles. Chaque attribution laisse une ligne d'historique.

**Pourquoi des dossiers anciens sont-ils encore en brouillon ?**
Parce que valider est un acte manuel, jamais fait pour les dossiers importés. Valider exige un dossier arrivé, des contrôles de cohérence bons et les informations obligatoires : cubage, compagnie, dépôt et bon de livraison Gescom de chaque conteneur. Une validation en lot est possible ; les dossiers refusés le sont avec la raison, visible sur la page Dossiers.

**Que signifie « validé » ?**
La fiche est figée et le prix de revient est celui qui vaut. On ne modifie plus qu'en repassant en brouillon, sauf les régularisations qui ne touchent pas au prix de revient.
