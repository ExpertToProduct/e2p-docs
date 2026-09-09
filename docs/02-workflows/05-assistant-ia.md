---
sidebar_position: 5
title: Utiliser l'assistant IA
---

# Utiliser l'assistant IA

La page **Assistant IA** permet de poser des questions en langage naturel sur le dossier du groupe. L'assistant reçoit un **dossier structuré** construit par l'application (chiffres, structure, alertes, pièces, pilotage) et répond à partir de lui.

## Ce que l'assistant reçoit

Pour chaque question, l'application choisit les sections du dossier utiles : chiffres de l'exercice de référence, structure du groupe et détentions, consolidation et éliminations, fiscalité, intragroupe, vigilance, file à traiter, pièces, FEC, pilotage de l'exercice en cours. Le dossier est déterministe : deux questions identiques reçoivent le même contexte. L'assistant ne fouille pas dans les documents et n'a pas accès à Internet.

- Les **pastilles de sections** au-dessus de la question permettent d'imposer les sections envoyées.
- Sous la réponse figurent les **liens** vers les pages et fiches citées, les sections utilisées, le modèle sollicité et, le cas échéant, la mention **dossier tronqué** avec un bouton pour renvoyer la question avec plus de contexte.

## Modes

Trois boutons en haut de la page :

- **AUTO** (par défaut) : le modèle local si LM Studio est lancé, sinon l'API Claude si une clé est configurée.
- **LOCAL** : LM Studio uniquement. Rien ne quitte le poste.
- **CLAUDE** : l'API Claude d'Anthropic. Le dossier structuré est transmis à Anthropic pour cette question.

### LM Studio (mode local)

1. Installer LM Studio depuis `https://lmstudio.ai`.
2. Télécharger un modèle. Recommandé : **Qwen 2.5 7B Instruct** (environ 4,5 Go), qui obtient les meilleurs résultats sur le jeu de questions de référence de l'application. Mistral 7B fonctionne également.
3. Charger le modèle et démarrer le serveur local (port 1234).

L'application détecte LM Studio automatiquement. Un Mac avec 16 Go de mémoire répond en 10 à 30 secondes.

### API Claude (mode distant)

1. Créer une clé sur `https://console.anthropic.com`.
2. Ouvrir le dossier des données (menu **AI-Finance DAF > Ouvrir le dossier des données**) et y créer un fichier nommé `.env` contenant :

```
ANTHROPIC_API_KEY=votre-clé
CLAUDE_MODEL=claude-sonnet-5
```

3. Relancer l'application.

La clé reste dans ce fichier, sur le poste, protégé par les permissions du compte et le chiffrement du disque (FileVault). Elle n'est jamais transmise à Expert To Product. Facturation à l'usage par Anthropic.

## Poser une bonne question

- Nommer l'entité et l'exercice : « Pourquoi le résultat consolidé 2025 est-il inférieur à la somme des résultats ? », « Quelles pièces manquent pour DISTRIB ? », « Où en est le CA de l'exercice en cours ? ».
- Enchaîner : les six derniers échanges sont conservés dans la conversation.
- Pour une question de pilotage, imposer la section **pilotage** pour éviter le mélange avec l'exercice clos.

## Limites

- **Les chiffres font foi dans la Synthèse et les fiches**, pas dans les réponses : un modèle de langage peut se tromper, confondre deux exercices ou prendre un résultat pour un dividende. Le dossier envoyé le lui rappelle, mais la vérification reste nécessaire.
- L'assistant n'est pas un conseiller fiscal ; ses réponses sur la réglementation ont valeur d'information.
- Les événements postérieurs aux documents déposés lui sont inconnus.
- Sur un grand groupe, le dossier peut dépasser la fenêtre du modèle local : la mention « dossier tronqué » l'indique, et la relance avec plus de contexte ou le mode Claude y remédie.

## Historique

La conversation est conservée tant que la page reste ouverte dans l'application. Chaque question est inscrite, avec les sections utilisées et le modèle, dans un journal du dossier des données, qui sert à améliorer le choix des sections.
