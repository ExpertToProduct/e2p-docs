---
sidebar_position: 1
title: Foire aux questions
---

# Foire aux questions

## Questions générales

### Où sont stockées les données du groupe ?

Sur le poste, à deux endroits : le **dossier des données** choisi au premier lancement (configuration, statuts, journaux ; menu **AI-Finance DAF > Ouvrir le dossier des données**) et la **data room**, le dossier de documents que vous désignez dans la configuration. Rien n'est transmis à un serveur distant, à l'exception du dossier structuré envoyé à Anthropic lorsque vous interrogez l'assistant en mode Claude.

### Les données sont-elles chiffrées ?

Pas par l'application. Elles reposent sur le chiffrement du disque par **FileVault** (recommandé sur tout Mac professionnel) et sur les permissions du compte utilisateur. La clé d'API Claude, si vous en utilisez une, est un fichier texte du dossier des données soumis aux mêmes protections.

### Comment sauvegarder ?

**Paramètres > Sauvegarde** produit une archive datée (configuration, statuts, journaux), **Sauvegarde complète** y ajoute la data room. Destination par défaut : iCloud Drive s'il est actif. Time Machine complète le dispositif. Voir [Administration des données](../03-administration/01-administration-donnees.md).

### L'application fonctionne-t-elle hors connexion ?

Oui, entièrement : lecture des documents, consolidation, vigilance, file à traiter, rapport PDF, assistant en mode local. Internet n'est nécessaire que pour la vérification des mises à jour et l'assistant en mode Claude.

### Puis-je installer AI-Finance DAF sur plusieurs postes ?

Une licence couvre jusqu'à trois postes, Mac ou Windows, appartenant au même utilisateur ou à la même entreprise : installer l'image disque ou l'installeur sur chaque poste. Pour partager un même dossier de données et une même data room entre postes, les placer dans un dossier synchronisé (iCloud Drive, OneDrive) et ne les ouvrir que depuis un poste à la fois. Au-delà de trois postes, un tarif entreprise est disponible sur demande.

### Plusieurs groupes sur le même poste ?

Oui. **Configuration > Nouveau groupe** crée un groupe avec sa configuration, ses statuts et sa data room ; le sélecteur de la barre latérale bascule de l'un à l'autre.

## Questions sur les données

### Comment ajouter une entité ?

1. Page **Configuration**, étape **Entités** : ajouter la société (type, régime fiscal, détention, préfixe de fichiers).
2. **Appliquer**.
3. Créer son dossier dans la data room (`Bilans/`, `PnL/`, `Balances/`, `FEC/`) et y déposer ses documents.
4. **Recharger les données**.

### Comment retirer une entité ?

La retirer de la liste dans **Configuration**, puis appliquer. Ses documents restent dans la data room. Pour conserver son historique tout en la sortant du consolidé (cession, liquidation), préférer la décocher du périmètre de consolidation.

### Un chiffre me semble faux, que vérifier ?

1. La **source** du chiffre dans la fiche de l'entité (liasse, balance, saisie, aucune).
2. Les **écarts liasse / balance** dans la file **À traiter**.
3. Le **document** lui-même, ouvert depuis la section Documents de la fiche.
4. Le tableau **Couverture des données** de la page Paramètres.

### Puis-je saisir des chiffres sans documents ?

Oui, à l'étape **Données financières** de la Configuration. Ces saisies servent tant que les documents ne sont pas déposés ; ensuite les documents ont priorité.

### Comment sont détectés les flux intragroupe ?

À partir des balances : les comptes réciproques entre deux entités (comptes courants, créances et dettes croisées) sont rapprochés automatiquement. Les flux déclarés dans la Configuration servent de complément ou de repli, et peuvent être verrouillés pour garder la main.

### Que signifie « projet » sur une pièce juridique ?

Le document est présent mais n'est pas signé (version de travail). « Périmé » signale une pièce datée hors délai (K-bis de plus de trois mois, par exemple).

## Questions sur l'assistant

### L'assistant peut-il se tromper ?

Oui. Il reçoit un dossier structuré exact, mais un modèle de langage peut confondre deux exercices ou interpréter un chiffre de travers. Les chiffres font foi dans la Synthèse et les fiches.

### Quel modèle local choisir ?

Qwen 2.5 7B Instruct dans LM Studio, qui obtient le meilleur score sur le jeu de questions de référence de l'application. Prévoir 16 Go de mémoire.

### Mes données partent-elles chez Anthropic ?

Uniquement si vous choisissez le mode **CLAUDE**, ou le mode **AUTO** alors que LM Studio est éteint et qu'une clé est configurée. Dans ce cas, le dossier structuré de la question (chiffres, structure, alertes) est transmis à Anthropic pour cette réponse. En mode **LOCAL**, rien ne quitte le poste.

## Questions techniques

### L'application ne s'ouvre pas, que faire ?

Voir [Résolution de problèmes](./02-resolution-problemes.md). Causes fréquentes : port 8000 déjà pris par un autre logiciel, dossier des données inaccessible (disque externe débranché), moteur qui ne démarre pas (journal du backend).

### Comment réinitialiser l'application ?

1. Quitter AI-Finance DAF.
2. Sauvegarder puis renommer le dossier des données.
3. Supprimer `~/Library/Application Support/ai-finance/donnees.txt`.
4. Relancer : la question du dossier est posée de nouveau et un groupe de démonstration est créé.

La data room n'est pas touchée.

### Une liasse n'est pas lue, pourquoi ?

Trois causes. Le fichier ne porte pas le nom attendu (préfixe de l'entité et exercice) ou n'est pas dans le bon sous-dossier : la section Documents de la fiche indique le nom attendu. Le PDF est un **scan sans couche texte** : la fiche l'indique par la mention « scanné, non lu », la couverture des données le compte et la file À traiter porte un contrôle ; demander au cabinet l'export de son logiciel plutôt qu'un scan, ou installer l'outil de reconnaissance de texte sur le poste (voir Résolution de problèmes). Le format est inhabituel : les liasses des logiciels de cabinet courants (régime 2033 et 2050) sont reconnues ; pour un autre format, transmettre un exemple au support.

## Questions commerciales

### Quelle est la durée de la maintenance incluse à l'achat ?

Douze mois. Au-delà, une maintenance annuelle peut être souscrite pour bénéficier des mises à jour et du support. Son prix est de 15 % à 20 % du prix de la licence initiale.

### Puis-je essayer AI-Finance DAF avant achat ?

Une version d'évaluation limitée est disponible sur demande, pour tester l'ensemble des fonctionnalités pendant 30 jours sur un groupe fictif. Une démonstration personnalisée de 45 minutes en visioconférence est également proposée gratuitement.

### Que se passe-t-il en cas de rupture de la maintenance annuelle ?

La version en cours continue de fonctionner sans limitation ; les mises à jour et le support ne sont plus fournis. La maintenance peut être réactivée à tout moment, un rattrapage des années non souscrites pouvant être exigé.

### Peut-on obtenir un développement sur mesure ?

Oui, sur devis : fonctionnalité absente du produit standard, intégration avec un système existant, adaptation à un secteur. Les demandes sont adressées au support.
