---
sidebar_position: 1
title: Administration des données
---

# Administration des données

La page **Administration** centralise les opérations de maintenance courante sur les données de l'application. Elle est destinée à l'utilisateur en charge du pilotage des données (DAF, contrôleur de gestion).

## Accès à la page

Cliquer sur **Administration** dans le menu de navigation latéral gauche.

## Sections disponibles

### Section 1 — Rechargement des données par entité

Cette section permet de déclencher manuellement le rechargement des données d'une ou plusieurs entités à partir de leurs liasses fiscales stockées dans le dossier de données.

Pour chaque entité, un indicateur de couverture est affiché sous forme de barre horizontale :

- **Vert** : 100 % des champs sont renseignés avec des valeurs non nulles.
- **Orange** : certains champs sont renseignés partiellement.
- **Gris** : aucun champ n'est renseigné (entité non encore chargée).

À côté de chaque indicateur, un bouton **Recharger** permet de relancer l'analyse du PDF source.

Un bouton **Rechargement global** en haut de la section relance l'ensemble des entités simultanément. L'opération peut prendre de 30 secondes à 3 minutes selon le nombre d'entités.

### Section 2 — Journal d'activité

Le journal d'activité trace les opérations effectuées sur les données de l'application :

- Ajout, modification ou suppression de champs financiers
- Chargement d'un nouveau document PDF
- Restauration d'une sauvegarde
- Modification de la configuration du groupe

Chaque entrée du journal comprend :

- Date et heure au format ISO 8601
- Utilisateur (le nom saisi dans les paramètres de l'application)
- Type d'opération
- Entité concernée
- Description courte

Le journal est stocké localement dans un fichier `journal.jsonl` au format append-only. Chaque ligne est un enregistrement JSON autonome, garantissant la robustesse face aux interruptions d'écriture.

#### Consultation du journal

Par défaut, les dix dernières entrées sont affichées. Un sélecteur permet d'augmenter la limite (50, 100, 500 entrées). Un champ de recherche textuelle permet de filtrer les entrées par mot-clé.

#### Purge du journal

Le bouton **Effacer le journal** supprime l'intégralité des entrées. Cette opération est irréversible. Il est recommandé d'exporter le journal en CSV avant purge si l'historique présente une valeur documentaire.

### Section 3 — Sauvegardes de la configuration

Cette section affiche la liste des sauvegardes automatiques du fichier `config_groupe.json` générées par l'application :

- Sauvegardes du processus d'assistant de configuration (`*.bak.wizard.*`)
- Sauvegardes déclenchées manuellement par l'utilisateur (`*.bak.manuel.*`)
- Sauvegardes issues de mises à jour applicatives (`*.bak.update.*`)

Pour chaque sauvegarde, les informations affichées sont :

- Nom du fichier de sauvegarde
- Date et heure de création
- Taille du fichier
- Motif de la création (wizard, manuel, update)

#### Restaurer une sauvegarde

1. Cliquer sur le bouton **Restaurer** situé en face de la sauvegarde souhaitée.
2. Une boîte de dialogue de confirmation s'affiche. Elle précise qu'une sauvegarde de la configuration actuelle est créée automatiquement avant restauration, afin de permettre un retour en arrière si la restauration s'avère inadaptée.
3. Cliquer sur **Confirmer la restauration**.
4. L'application recharge automatiquement ses données. La page d'accueil reflète désormais la configuration restaurée.

#### Créer une sauvegarde manuelle

Le bouton **Sauvegarder maintenant** en haut de la section génère immédiatement une copie horodatée du fichier `config_groupe.json` avec le suffixe `.bak.manuel`. Cette opération est recommandée avant toute modification majeure de la structure du groupe.

### Section 4 — Notes DAF

Les notes DAF sont des commentaires libres associés à chaque entité du groupe. Elles apparaissent au bas des pages entités correspondantes.

Pour chaque entité, un champ de texte permet de saisir des informations contextuelles :

- Régime fiscal particulier
- Particularités locales
- Événements exceptionnels de l'exercice
- Conventions d'assistance en vigueur
- Notes internes réservées au DAF

La sauvegarde des modifications est automatique après cinq secondes d'inactivité.

### Section 5 — Journalisation avancée (mode développeur)

Cette section est masquée par défaut. Elle peut être activée depuis **Configuration avancée > Options développeur**.

Elle donne accès à :

- Les journaux bruts du moteur FastAPI interne (`/tmp/ai-finance-backend.log`)
- Les journaux du client Electron
- Un bouton **Redémarrer le serveur interne** utile en cas de blocage anormal

Cette section est réservée aux utilisateurs avancés et aux opérations de diagnostic en lien avec le support technique.

## Bonnes pratiques de maintenance

- **Générer une sauvegarde manuelle avant toute clôture d'exercice** : ce point de repère facilite la restauration en cas d'erreur de saisie post-clôture.
- **Purger les sauvegardes obsolètes trimestriellement** : conserver au moins les dix dernières sauvegardes et purger les plus anciennes pour maintenir la lisibilité.
- **Relire le journal d'activité mensuellement** : détecter d'éventuelles modifications inattendues.
- **Documenter les événements exceptionnels dans les notes DAF** : assurer la mémoire institutionnelle en cas de succession à un nouveau DAF.
