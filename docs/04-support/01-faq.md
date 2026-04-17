---
sidebar_position: 1
title: Foire aux questions
---

# Foire aux questions

## Questions générales

### Où sont stockées les données financières du groupe ?

L'ensemble des données est stocké localement sur le poste de l'utilisateur, dans le dossier `~/Library/Application Support/AI-Finance-DAF/data/`. Le fichier principal est `config_groupe.json`. Aucune donnée n'est transmise vers un serveur distant. Pour accéder au dossier, ouvrir le Finder et utiliser le raccourci **Commande + Majuscule + G**, puis coller le chemin.

### Les données sont-elles chiffrées au repos ?

Le fichier `config_groupe.json` n'est pas chiffré par AI-Finance DAF. Il repose sur la protection offerte par macOS :

- Le chiffrement complet du disque via **FileVault** (fortement recommandé pour tout Mac professionnel).
- Les permissions du compte utilisateur qui empêchent un autre utilisateur du même Mac d'accéder aux données.

La clé d'API Claude, lorsqu'elle est saisie dans les préférences, est stockée de manière chiffrée dans le trousseau macOS (Keychain).

### Comment sauvegarder mes données ?

Trois niveaux de sauvegarde sont disponibles :

1. **Automatique** : des sauvegardes horodatées sont générées à chaque modification majeure, dans le dossier de données de l'application.
2. **Manuelle** : le bouton **Sauvegarder maintenant** de la page **Administration > Sauvegardes** crée une sauvegarde à la demande.
3. **Externe** : Time Machine, iCloud Drive ou tout outil de sauvegarde tiers peut être utilisé pour dupliquer le dossier de données vers un support externe.

Il est recommandé de combiner les trois niveaux pour une sécurité optimale.

### L'application fonctionne-t-elle hors connexion internet ?

La quasi-totalité des fonctionnalités fonctionne hors connexion :

- Chargement des liasses fiscales PDF
- Analyse de la consolidation
- Calcul des ratios de vigilance
- Génération des rapports PDF
- Assistant IA en mode local (LM Studio)

La connexion internet est nécessaire uniquement pour :

- L'assistant IA en mode distant (Claude API)
- La vérification des mises à jour
- Le téléchargement d'une nouvelle version

### Puis-je installer AI-Finance DAF sur plusieurs Mac ?

Une licence AI-Finance DAF couvre l'installation sur jusqu'à trois Mac appartenant au même utilisateur ou à la même entreprise. Pour activer la licence sur un second poste, utiliser la clé de licence reçue lors de l'achat initial.

Pour les entreprises nécessitant plus de trois postes (cabinet d'expertise comptable, groupe avec plusieurs DAF), un tarif entreprise est disponible sur demande.

## Questions sur les données

### Comment ajouter une nouvelle entité au groupe ?

1. Ouvrir la page **Administration**.
2. Dans la section **Périmètre des entités**, cliquer sur **Ajouter une entité**.
3. Remplir les champs requis (raison sociale, forme juridique, SIREN, taux de détention, méthode de consolidation).
4. Enregistrer. La nouvelle entité apparaît immédiatement dans le menu de navigation.
5. Charger les liasses fiscales de la nouvelle entité depuis la page **Documents**.

### Comment supprimer une entité ?

La suppression d'une entité est irréversible et entraîne la perte de toutes ses données financières historiques. Il est recommandé de créer une sauvegarde manuelle au préalable.

1. Ouvrir la page **Administration**.
2. Dans la section **Périmètre des entités**, cliquer sur le bouton **Supprimer** associé à l'entité.
3. Confirmer la suppression.

Si l'entité n'est plus active mais doit conserver son historique (cession, liquidation), il est préférable de la marquer comme **Hors périmètre de consolidation** plutôt que de la supprimer.

### Puis-je modifier les exercices historiques déjà chargés ?

Oui, les données de tout exercice peuvent être modifiées à tout moment. Pour éviter les écrasements accidentels, une sauvegarde automatique est créée à chaque modification.

La modification rétroactive des données d'un exercice clos peut nécessiter un ajustement de cohérence sur l'exercice suivant (notamment les capitaux propres). Les contrôles de cohérence intégrés à l'application détectent automatiquement ces désalignements.

### Comment gérer un changement de méthode de consolidation ?

Un changement de méthode (par exemple passage d'IG à ME suite à une cession partielle) doit être documenté :

1. Modifier la méthode depuis la page **Administration**.
2. Ajouter une note explicative dans la zone **Notes DAF** de l'entité concernée.
3. Conserver la sauvegarde antérieure pour trace historique.

Le changement de méthode s'applique automatiquement à l'ensemble des calculs consolidés. Les exercices antérieurs peuvent être recalculés ou conservés selon la méthode en vigueur à l'époque (option paramétrable).

## Questions techniques

### L'application ne s'ouvre pas, que faire ?

Se reporter au chapitre [Résolution de problèmes](./02-resolution-problemes.md). Les causes les plus fréquentes sont :

- Blocage initial de macOS lors du premier lancement (autoriser l'ouverture dans les préférences Sécurité et confidentialité).
- Port 8000 déjà occupé par une autre application.
- Fichier `config_groupe.json` corrompu (restaurer une sauvegarde).

### Comment réinitialiser complètement l'application ?

1. Quitter AI-Finance DAF.
2. Ouvrir le Finder, se rendre dans `~/Library/Application Support/`.
3. Renommer ou supprimer le dossier `AI-Finance-DAF`.
4. Relancer l'application. L'assistant de configuration initiale s'ouvre comme lors de la première utilisation.

Cette opération efface l'ensemble des données. Une sauvegarde préalable est fortement recommandée.

### L'extraction automatique d'une liasse PDF ne fonctionne pas correctement, pourquoi ?

Plusieurs causes possibles :

- **Le PDF est un scan** sans couche texte : l'extraction automatique ne peut pas fonctionner, une saisie manuelle est requise.
- **Le format de la liasse est atypique** : certains logiciels d'expertise comptable génèrent des liasses dont la structure diffère légèrement du standard CERFA.
- **Les codes cellule sont absents** : certaines liasses allégées ne comportent pas les codes standards (FL, HN, etc.) utilisés par l'extraction.

Dans tous les cas, la saisie manuelle reste possible depuis la page de l'entité concernée.

## Questions commerciales

### Quelle est la durée de la maintenance incluse à l'achat ?

La maintenance est incluse pendant les 12 premiers mois suivant l'acquisition de la licence. Au-delà, une maintenance annuelle peut être souscrite pour bénéficier des mises à jour et du support.

Le prix de la maintenance annuelle est de 15 % à 20 % du prix de la licence initiale.

### Puis-je essayer AI-Finance DAF avant achat ?

Une version d'évaluation limitée est disponible sur demande. Elle permet de tester l'ensemble des fonctionnalités pendant 30 jours sur les données d'un groupe fictif.

Une démonstration personnalisée de 45 minutes en visioconférence est également proposée gratuitement. Réservation depuis le site d'Expert To Product.

### Que se passe-t-il en cas de rupture de la maintenance annuelle ?

À l'expiration de la maintenance annuelle :

- La version en cours continue de fonctionner sans limitation.
- Les mises à jour ne sont plus reçues.
- Le support par courriel n'est plus accessible.

La maintenance peut être réactivée à tout moment. Un rattrapage des années non souscrites peut être exigé selon les conditions en vigueur au moment de la réactivation.

### Peut-on obtenir un développement sur mesure ?

Oui. Les demandes de développement spécifiques (fonctionnalité absente du produit standard, intégration avec un SI existant, adaptation à un secteur particulier) font l'objet d'un devis séparé.

Les demandes peuvent être adressées par courriel à l'adresse de contact support.
