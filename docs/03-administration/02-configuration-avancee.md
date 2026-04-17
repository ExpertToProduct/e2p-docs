---
sidebar_position: 2
title: Configuration avancée
---

# Configuration avancée

Le panneau de configuration avancée permet d'ajuster les paramètres techniques de l'application. Il est accessible depuis la page **Administration > Configuration avancée**.

## Préférences générales

### Thème visuel

Sélection entre :

- Thème clair (par défaut)
- Thème sombre
- Thème automatique (bascule selon les réglages système macOS)

Le changement de thème s'applique instantanément sans redémarrage de l'application.

### Langue d'interface

Langues disponibles :

- Français (par défaut)
- Anglais (disponible à partir de la version 1.1)

### Devise d'affichage

Devise utilisée pour tous les montants affichés :

- Euro (€) par défaut
- Franc Pacifique (F CFP) pour les groupes implantés en Nouvelle-Calédonie ou en Polynésie française
- Format personnalisé (symbole et séparateurs paramétrables)

### Format des nombres

- Séparateur de milliers : espace (standard français), virgule (standard anglo-saxon) ou aucun.
- Séparateur décimal : virgule ou point.

## Configuration de l'assistant IA

### Sélection du mode d'inférence

Bascule entre le mode local (LM Studio) et le mode distant (Claude API). Le mode sélectionné devient le mode par défaut à l'ouverture de la page **QA**.

### Clé d'API Claude

Champ de saisie de la clé d'API Anthropic pour le mode distant. La clé est :

- Stockée localement dans le trousseau macOS (Keychain)
- Chiffrée par le système d'exploitation
- Jamais transmise à Expert To Product
- Révocable à tout moment en supprimant la clé du champ

Un bouton **Tester la clé** vérifie la validité de la clé par un appel minimal à l'API Claude. Le résultat est affiché instantanément.

### Modèle Claude sélectionné

Liste déroulante permettant de choisir le modèle :

- Claude Sonnet (équilibre qualité/coût, recommandé)
- Claude Opus (qualité maximale, coût plus élevé)
- Claude Haiku (coût minimal, qualité correcte)

Le choix du modèle peut être ajusté selon la nature des questions posées et le budget souhaité.

### Adresse du serveur LM Studio

Par défaut : `http://localhost:1234/v1`.

Ce paramètre peut être modifié dans les cas particuliers où LM Studio est configuré sur un autre port ou sur un autre poste du réseau local. La modification prend effet au prochain lancement d'une requête.

## Seuils de vigilance

Permet la personnalisation des seuils des onze ratios de vigilance. Pour chaque ratio, trois valeurs peuvent être ajustées :

- **Seuil vert** : valeur au-dessus de laquelle le code couleur passe au vert.
- **Seuil orange** : valeur entre laquelle et le seuil vert le code couleur est orange.
- **Seuil rouge** : valeur en dessous de laquelle le code couleur est rouge.

Un bouton **Réinitialiser les seuils** restaure les valeurs par défaut. Un bouton **Exporter les seuils** permet de sauvegarder la configuration personnalisée dans un fichier JSON réutilisable.

## Chemins de fichiers

### Dossier de données de l'application

Affiche le chemin où est stocké le fichier `config_groupe.json` et les sauvegardes. Par défaut :

```
~/Library/Application Support/AI-Finance-DAF/data/
```

Le bouton **Ouvrir dans le Finder** révèle le dossier dans le gestionnaire de fichiers macOS.

### Dossier des liasses fiscales

Chemin où l'application recherche les liasses PDF par défaut lors d'un rechargement global. Par défaut :

```
~/Documents/AI-Finance-DAF/Liasses/
```

Ce chemin peut être modifié pour pointer vers un partage réseau, un cloud synchronisé (iCloud Drive, Dropbox) ou tout autre emplacement.

## Sauvegarde et synchronisation

### Sauvegarde automatique

Case à cocher activant la génération automatique d'une sauvegarde à chaque modification majeure des données. Activée par défaut.

### Fréquence des sauvegardes programmées

En complément des sauvegardes automatiques déclenchées par événement, l'application peut générer une sauvegarde programmée à intervalle régulier :

- Quotidienne
- Hebdomadaire (par défaut)
- Mensuelle
- Désactivée

### Emplacement des sauvegardes

Par défaut, les sauvegardes sont stockées dans le dossier de données. Un emplacement secondaire peut être configuré pour dupliquer les sauvegardes :

- Un dossier iCloud Drive pour synchroniser sur les autres postes de l'utilisateur.
- Un disque externe.
- Un partage réseau (NAS, serveur d'entreprise).

## Options développeur

Cette section est masquée par défaut et réservée aux utilisateurs avancés.

Activation : cliquer cinq fois sur le numéro de version affiché dans le pied de page de l'application.

Les options disponibles comprennent :

- Affichage de la section Journalisation avancée sur la page Administration
- Accès à la console JavaScript d'Electron
- Exportation brute du fichier `config_groupe.json` en JSON lisible
- Mode verbeux des journaux FastAPI internes
- Accès direct aux sauvegardes non rattachées à la configuration active

L'activation des options développeur ne modifie pas le fonctionnement de l'application en production. Elle peut être désactivée à tout moment.

## Mise à jour des préférences

Toutes les modifications effectuées dans le panneau de configuration avancée sont enregistrées automatiquement. Aucune action de validation n'est nécessaire.

Les préférences sont stockées dans le fichier :

```
~/Library/Preferences/com.experttoproduct.ai-finance-daf.plist
```

En cas de restauration du Mac ou de migration vers un nouveau poste, ce fichier peut être copié pour récupérer les préférences personnalisées.
