---
sidebar_position: 2
title: Résolution de problèmes
---

# Résolution de problèmes

Pour tout incident non couvert ici, contacter le support par courriel en joignant le journal du backend (menu **AI-Finance DAF > Afficher le journal du backend**).

## Au lancement

### macOS refuse d'ouvrir l'application

L'application est signée et notarisée ; ce message ne devrait pas apparaître. S'il apparaît :

1. Vérifier que le fichier `.dmg` provient bien du lien transmis par Expert To Product et le télécharger de nouveau si nécessaire.
2. **Réglages Système > Confidentialité et sécurité**, section Sécurité : cliquer **Ouvrir quand même** si l'application y est mentionnée.

### Windows SmartScreen bloque l'installeur

« Windows a protégé votre ordinateur » : l'installeur Windows n'est pas encore signé par un certificat d'éditeur. Vérifier que le fichier provient du lien transmis par Expert To Product, puis **Informations complémentaires > Exécuter quand même**. Un antivirus d'entreprise peut demander une exception pour `AI-Finance DAF.exe` et `ai-finance-backend.exe`.

### « Le backend ne répond pas sur le port 8000 »

Le moteur de calcul n'a pas démarré ou n'a pas pu écouter.

1. Ouvrir le journal du backend (menu) et lire les dernières lignes.
2. **Port déjà occupé** par un autre logiciel : le fermer, ou définir `AI_FINANCE_PORT` (voir [Paramètres avancés](../03-administration/02-configuration-avancee.md)).
3. **Dossier des données inaccessible** (disque externe absent, permissions) : le rendre accessible ou rechoisir le dossier en supprimant `~/Library/Application Support/ai-finance/donnees.txt` (Windows : `%APPDATA%\ai-finance\donnees.txt`).
4. **Windows** : si le pare-feu ou l'antivirus a refusé `ai-finance-backend.exe`, l'autoriser sur les réseaux privés.
4. Relancer l'application.

### La fenêtre reste vide ou affiche une erreur de connexion

Le moteur démarre encore. Attendre quelques secondes ; l'interface se reconnecte d'elle-même. Sinon Commande + R (Ctrl + R sur Windows).

### Écran de connexion inattendu

Des comptes ont été créés dans **Paramètres > Accès**. Un administrateur réinitialise le mot de passe d'un autre compte depuis cette page. Si le dernier mot de passe administrateur est oublié : quitter l'application, supprimer `acces.json` dans le dossier des données, relancer, puis recréer les comptes.

## Documents

### Un fichier déposé n'apparaît pas

1. Vérifier le sous-dossier (`Bilans/`, `PnL/`, `Balances/`, `FEC/`, `juridique/`) et le nom attendu, affiché dans la section Documents de la fiche de l'entité.
2. Cliquer **Recharger les données**.

### La liasse est marquée « scanné, non lu »

Le PDF n'a pas de couche texte : aucun chiffre ne peut en être lu. Deux solutions :

1. Demander au cabinet l'export PDF de son logiciel (pas un scan). C'est la voie sûre.
2. Installer la reconnaissance de texte sur le poste, une fois pour toutes, dans le Terminal :

```bash
brew install ocrmypdf tesseract-lang
```

Au rechargement suivant, l'application reconnaît le texte des liasses scannées et lit le fichier reconnu, conservé à côté de l'original. Cet outil n'est pas embarqué dans l'application : il pèse plus de 250 Mo. Un scan de mauvaise qualité peut rester partiellement illisible ; les champs non reconnus apparaissent alors comme absents.

### La liasse est lue mais des chiffres manquent

- Un PDF scanné n'a pas de couche texte : voir ci-dessus.
- Une liasse d'un format inhabituel peut ne pas être reconnue : la balance générale du même exercice apporte les mêmes chiffres, et l'étape Données financières de la Configuration permet une saisie de secours.

### Écart entre liasse et balance dans la file à traiter

L'écart est calculé compte par compte. Les causes fréquentes sont une balance avant écritures d'inventaire ou une liasse provisoire. Déposer la version définitive puis recharger ; si l'écart est expliqué, le marquer **Écart justifié**.

### Le FEC est refusé ou incohérent avec la balance

Vérifier qu'il s'agit du FEC de la bonne entité et du bon exercice (`FEC_<préfixe>_<exercice>.txt`), au format réglementaire. Un FEC partiel de l'exercice en cours est normal pour la page Pilotage.

## Consolidation

### Les chiffres consolidés ne correspondent pas aux attendus

1. Vérifier les **sources** de chaque entité (Paramètres > Couverture des données) : une entité sans source compte pour zéro.
2. Vérifier les **détentions** et l'inclusion dans le périmètre (Configuration).
3. Consulter le **journal des éliminations** de la Synthèse et les **positions intragroupe** de la page Groupe : un écart entre deux entités s'y lit directement.
4. Vérifier le régime fiscal (IS ou IR) de chaque entité, qui conditionne l'IS consolidé.

### Le bandeau MODE DÉMO reste affiché

Le groupe est en mode démonstration : la Configuration doit être appliquée avec des documents réels, et le mode réel activé dans la configuration (`groupe.mode`). Le support accompagne cette bascule.

## Assistant

### L'assistant répond « Erreur LM Studio »

1. LM Studio est-il lancé, avec un modèle chargé et le serveur démarré sur le port 1234 ?
2. Un modèle de 7 milliards de paramètres demande environ 8 Go de mémoire libre.
3. Sur un grand dossier, réduire les sections envoyées avec les pastilles ou passer en mode Claude.

### L'assistant répond « Erreur Claude »

Clé absente ou invalide dans le fichier `.env` du dossier des données, crédits Anthropic épuisés, ou pas de connexion Internet. Relancer l'application après toute modification du fichier.

### Les réponses sont lentes

En mode local, la vitesse dépend du Mac : 10 à 30 secondes pour un modèle 7B sur un Mac récent. Préférer Qwen 2.5 7B aux modèles plus grands.

## Mises à jour

### « Impossible de vérifier les mises à jour »

Pas de connexion Internet, ou accès aux versions publiées non autorisé pour ce poste. Le menu propose d'ouvrir la page des versions ; le support transmet l'image disque sur demande.

## Performance

### Le rechargement est long

Un rechargement complet prend une quinzaine de secondes pour un groupe de cinq entités sur trois exercices. Les balances volumineuses et les FEC de plusieurs centaines de milliers de lignes allongent ce délai. Le rechargement se fait en arrière-plan ; la navigation reste possible.

## Contacter le support

Joindre à la demande :

- Une description du problème et les étapes pour le reproduire.
- La version de l'application (menu **À propos**) et la version de macOS ou de Windows.
- Le journal du backend et, si pertinent, une capture d'écran.

Les coordonnées figurent au chapitre [Contact et support](./03-contact-support.md).
