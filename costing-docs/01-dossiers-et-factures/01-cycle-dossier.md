---
sidebar_position: 1
title: Cycle d'un dossier
---

# Du projet au dossier arrivé

Un dossier de prix de revient traverse quatre étapes, de la première estimation jusqu'à la marchandise dépotée.

<svg viewBox="0 0 760 190" role="img" aria-label="Quatre étapes reliées par des flèches : Projet, Commande, Flottant, Arrivé. Une expédition partielle peut se détacher entre Commande et Flottant. La numérotation C accompagne le dossier depuis Projet ; le numéro D n'apparaît qu'à l'arrivée." style={{width: '100%', height: 'auto'}}>
  <defs>
    <marker id="fleche-cycle" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 z" fill="currentColor"/>
    </marker>
  </defs>
  <text x="20" y="20" fontFamily="monospace" fontSize="11" fill="currentColor" opacity="0.6">numéro C014 porté depuis la création</text>
  <line x1="20" y1="30" x2="560" y2="30" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.5" strokeDasharray="2 4"/>
  <line x1="560" y1="30" x2="700" y2="30" stroke="#c97a2b" strokeWidth="1.5" strokeDasharray="2 4" markerEnd="url(#fleche-cycle)"/>
  <text x="565" y="20" fontFamily="monospace" fontSize="11" fill="#c97a2b">devient D081</text>

  <g fontFamily="sans-serif" textAnchor="middle">
    <rect x="10" y="46" width="150" height="64" rx="10" fill="currentColor" fillOpacity="0.06" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1.5"/>
    <text x="85" y="72" fontSize="14" fontWeight="600" fill="currentColor">Projet</text>
    <text x="85" y="90" fontSize="10.5" fill="currentColor" opacity="0.6">estimation, pas encore engagé</text>

    <line x1="160" y1="78" x2="205" y2="78" stroke="currentColor" strokeWidth="1.6" markerEnd="url(#fleche-cycle)"/>

    <rect x="205" y="46" width="150" height="64" rx="10" fill="currentColor" fillOpacity="0.06" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1.5"/>
    <text x="280" y="72" fontSize="14" fontWeight="600" fill="currentColor">Commande</text>
    <text x="280" y="90" fontSize="10.5" fill="currentColor" opacity="0.6">achat ferme, engagé</text>

    <line x1="355" y1="78" x2="400" y2="78" stroke="currentColor" strokeWidth="1.6" markerEnd="url(#fleche-cycle)"/>

    <rect x="400" y="46" width="150" height="64" rx="10" fill="#2f6f68" fillOpacity="0.12" stroke="#2f6f68" strokeWidth="1.5"/>
    <text x="475" y="66" fontSize="14" fontWeight="600" fill="currentColor">Flottant</text>
    <text x="475" y="82" fontSize="10.5" fill="currentColor" opacity="0.6">en mer, conteneur connu</text>
    <text x="475" y="95" fontSize="10.5" fill="#2f6f68">factures dépôt auto actif</text>

    <line x1="550" y1="78" x2="595" y2="78" stroke="currentColor" strokeWidth="1.6" markerEnd="url(#fleche-cycle)"/>

    <rect x="595" y="46" width="150" height="64" rx="10" fill="#c97a2b" fillOpacity="0.12" stroke="#c97a2b" strokeWidth="1.5"/>
    <text x="670" y="72" fontSize="14" fontWeight="600" fill="currentColor">Arrivé</text>
    <text x="670" y="90" fontSize="10.5" fill="currentColor" opacity="0.6">dépoté, prêt à valider</text>
  </g>

  <g fontFamily="sans-serif" textAnchor="middle">
    <path d="M280,110 C280,140 400,140 400,110" fill="none" stroke="#a3402f" strokeWidth="1.4" strokeDasharray="3 3" markerEnd="url(#fleche-cycle)"/>
    <rect x="230" y="146" width="230" height="34" rx="8" fill="#a3402f" fillOpacity="0.1" stroke="#a3402f" strokeWidth="1"/>
    <text x="345" y="159" fontSize="10" fill="#a3402f" fontWeight="600">expédition partielle</text>
    <text x="345" y="172" fontSize="9.5" fill="#a3402f">reste = C014 · parti = C014-1</text>
  </g>
</svg>

## 1. Projet — reçoit le n° C

**Bouton : Nouveau projet.** Champs : fournisseur, articles envisagés, prix estimés.

Une fiche presque vide, ouverte dès qu'un achat est envisagé. Elle prend un numéro `C014`, gardé à vie même une fois le dossier arrivé — rien n'est encore engagé, un projet abandonné ne laisse pas de trace comptable.

## 2. Commande

**Bouton : Passer en commande.** Aucun champ supplémentaire n'est exigé à ce passage.

Le projet devient un achat ferme : il entre dans les engagements. Le numéro `C014` ne change pas. Une commande peut aussi être créée directement, sans étape « projet ».

## 3. Flottant

**Bouton : Passer en flottant.** Champs : n° des conteneurs, compagnie maritime, cubage, ETD, ETA, n° facture fournisseur.

La marchandise a quitté le fournisseur. C'est ici que le **numéro de conteneur** entre dans la fiche — et c'est ce numéro qui permet à une facture reçue par mail de se déposer d'elle-même sur le bon dossier (voir [Déposer un document](02-deposer-document.md)).

:::info Si une partie seulement de la commande part
Le dossier se scinde : ce qui part devient un nouveau dossier flottant `C014-1`, le reste demeure en commande sous `C014`. Les montants estimés sont partagés au prorata de la valeur expédiée.
:::

## 4. Arrivé — reçoit le n° D

**Bouton : Déclarer arrivé.** Champs : dépôt de chaque conteneur, date de dépotage, n° factures Gescom.

Chaque conteneur (quatre au plus) reçoit son dépôt et sa date. Le dossier prend alors son numéro `D081`, dans l'ordre des dépotages — comme dans le classeur papier. Le numéro de commande `C014` reste visible dans la fiche et dans l'historique.

## Les factures se déposent seules, dès le stade « Flottant »

Une facture reçue sur la boîte mail dédiée aux achats (fret, douane…) est relevée toutes les 5 minutes. Si son numéro de conteneur correspond à un seul dossier — par exemple `MSBU7958143` — elle s'y dépose directement, avec ses indices repérés (numéro de facture, date, fournisseur) proposés dans la fiche, jamais écrits sans clic sur « Enregistrer ». Sans correspondance claire, elle attend sagement une pose à la main, avec une alerte pour le signaler.

Avant le stade « Flottant », ou pour tout document sans conteneur reconnaissable (bon de commande, devis…), le dépôt se fait comme toujours à la main depuis la fiche.

## Compléter et valider le dossier arrivé

- Frais d'approche, articles et prix de vente proposé sont saisis — ou complétés à partir des indices trouvés dans les factures déposées, jamais imposés.
- La fiche indique elle-même ce qu'il manque encore (badge « à saisir » sur chaque champ absent).
- Chaque conteneur a son dépôt et sa date de dépotage renseignés.
- Le dossier passe en **Validé** : il n'est plus modifiable sans repasser d'abord en brouillon.

## Facture reçue sur une provision (surestaries, stationnement au port)

Les surestaries et le stationnement au port sont souvent **provisionnés** dans le prix de revient, et ce prix de revient, une fois enregistré en Gescom, ne bouge plus. Quand la facture arrive, la fiche ne réajuste donc pas la provision : sur ces deux lignes, le bouton **Facture reçue…** ouvre un petit formulaire (montant facturé, n° et date de facture) qui remplit la ligne selon la règle du service achats.

| Cas | Dans le prix de revient | Hors Gescom (charges exceptionnelles) |
|---|---|---|
| Facture supérieure à la provision | la provision, inchangée | l'excédent (facture − provision), motif « dépassement de provision » |
| Facture inférieure à la provision | la provision, inchangée | rien : l'écart est seulement signalé |
| Case **Tout hors Gescom (décision de gérance)** | rien (0) | toute la facture, avec votre nom et la date |

La ligne affiche ensuite « facture reçue X · dans le PR Y · hors Gescom Z · motif ». **Annuler** rend la saisie libre. Le récapitulatif porte un bloc **Hors Gescom** avec le total à passer en charges exceptionnelles, repris dans l'export du sommaire (colonnes HORS GESCOM et MOTIF), dans la fiche PDF et sur la page [Frais d'approche](../02-outils/03-frais-approche.md).

:::info Dossier déjà validé
Le formulaire reste disponible sur une fiche validée : l'enregistrement se fait sans repasser en brouillon et **refuse tout changement du prix de revient global**. Une décision de gérance n'y est donc possible que si la rubrique ne portait rien dans le prix de revient.
:::

## Deux numérotations

| | |
|---|---|
| `C001, C002…` | Donné à la création d'un projet ou d'une commande, gardé à vie (`C012-1` pour une expédition partielle). |
| `D001, D002…` | Donné à l'arrivée, dans l'ordre des dépotages, comme dans le classeur. |

:::tip Créer directement plus loin
Le bouton « Nouveau » s'adapte à l'onglet ouvert : **Nouveau projet**, **Nouvelle commande** ou **Nouveau flottant** — inutile de repasser par les étapes précédentes pour un dossier qui a déjà un conteneur en mer.
:::
