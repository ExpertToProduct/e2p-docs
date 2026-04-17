---
sidebar_position: 5
title: Utiliser l'assistant IA
---

# Utiliser l'assistant IA

AI-Finance DAF intègre un assistant conversationnel spécialisé en finance d'entreprise, accessible depuis la page **QA**. Cet assistant répond aux questions de l'utilisateur en s'appuyant sur le contexte financier du groupe chargé dans l'application.

## Accès à la page

Cliquer sur **QA** ou **Assistant IA** dans le menu de navigation latéral gauche.

## Cas d'usage de l'assistant

L'assistant est conçu pour répondre à des questions de trois natures.

### Questions d'analyse financière

- « Pourquoi la marge d'exploitation de KALO a baissé de 2 points entre 2023 et 2024 ? »
- « Quelle entité du groupe présente le profil de risque le plus élevé ? »
- « Commente l'évolution de la trésorerie consolidée sur trois ans. »

### Questions de réglementation

- « Quelles sont les obligations de publication des comptes annuels pour une SARL de moins de 50 salariés ? »
- « Le régime mère-fille est-il applicable à une filiale détenue à 21 % ? »
- « Quels sont les seuils de l'audit légal pour une SAS familiale ? »

### Questions d'interprétation de ratios

- « Un ratio d'autonomie financière de 35 % est-il satisfaisant pour une SCI ? »
- « Comment se positionne le ROE de D&CO par rapport à la moyenne sectorielle du commerce de détail ? »

## Modes d'inférence disponibles

L'assistant fonctionne selon deux modes, sélectionnables depuis le haut de la page via un interrupteur.

### Mode local — LM Studio

Le mode local utilise un modèle de langage hébergé sur le poste de l'utilisateur, via l'application tierce **LM Studio**. Les caractéristiques sont :

- **Confidentialité maximale** : aucune donnée ne quitte le poste.
- **Fonctionnement sans internet** : utilisable même hors connexion.
- **Qualité de réponse modérée** : les modèles locaux sont moins performants que les modèles cloud de dernière génération.
- **Vitesse variable** : dépend de la puissance du Mac (plus rapide sur M4 Pro que sur M1).

#### Prérequis d'installation de LM Studio

1. Télécharger LM Studio depuis le site officiel `https://lmstudio.ai`.
2. Installer l'application dans le dossier **Applications**.
3. Au premier lancement, télécharger un modèle adapté. Les modèles recommandés sont :
   - **Qwen2.5-7B-Instruct** (équilibre qualité/performance, environ 4 Go)
   - **Llama-3.1-8B-Instruct** (alternative robuste)
4. Dans LM Studio, charger le modèle et activer le serveur local sur le port 1234.

AI-Finance DAF détecte automatiquement la présence de LM Studio et du modèle chargé. Aucune configuration supplémentaire n'est requise.

### Mode distant — Claude API

Le mode distant s'appuie sur l'API Claude éditée par Anthropic. Les caractéristiques sont :

- **Qualité de réponse supérieure** : les modèles Claude Sonnet et Opus offrent une expertise financière de haut niveau.
- **Vitesse élevée** : temps de réponse généralement inférieur à 5 secondes.
- **Nécessite une connexion internet** active.
- **Facturation à l'usage** : consommation des crédits Claude selon le nombre de jetons échangés.

#### Configuration de la clé d'API Claude

1. Créer un compte sur `https://console.anthropic.com`.
2. Générer une clé d'API dans la section **API Keys**.
3. Dans AI-Finance DAF, ouvrir la page **Administration > Configuration avancée**.
4. Coller la clé d'API dans le champ dédié.
5. Cliquer sur **Valider**.

La clé d'API est stockée localement et chiffrée. Elle n'est jamais transmise à Expert To Product ni à aucun tiers autre que Anthropic.

## Injection du contexte financier

Lorsqu'une question est posée, AI-Finance DAF injecte automatiquement dans le prompt envoyé au modèle le contexte financier nécessaire :

- Les données agrégées du groupe pour l'exercice en cours
- Les données détaillées de l'entité concernée par la question (détection automatique)
- Les flux intragroupe pertinents
- Les ratios de vigilance correspondants
- Les notes DAF applicables

Cette injection automatique permet à l'assistant de fournir des réponses contextualisées sans que l'utilisateur ait à recopier manuellement les chiffres.

## Limites de l'assistant

Les limites suivantes doivent être connues de l'utilisateur :

- **L'assistant n'est pas un conseiller fiscal agréé**. Ses réponses sur la réglementation ont valeur d'information, non de conseil personnalisé.
- **Les modèles de langage peuvent produire des erreurs factuelles** (« hallucinations »). Toute information importante doit être vérifiée par l'utilisateur ou par son expert-comptable.
- **Le contexte injecté est limité aux données chargées** dans l'application. Les événements récents non reflétés dans les liasses (par exemple un sinistre du mois en cours) ne sont pas connus de l'assistant.

## Historique des conversations

Les échanges de la session en cours sont conservés et affichés dans la zone centrale de la page. À la fermeture de l'application, l'historique est réinitialisé.

Pour conserver une conversation importante :

- Copier les échanges dans un document externe (traitement de texte, courriel).
- Ou exporter l'échange au format PDF via le bouton **Exporter la conversation**.

## Bonnes pratiques d'utilisation

- **Formuler des questions précises** : plus le contexte est clair, plus la réponse est pertinente. Préférer « Quelle est l'évolution de la marge d'exploitation de KALO entre 2023 et 2024 ? » à « Parle-moi de KALO ».
- **Enchaîner les questions** : l'assistant conserve le contexte de la conversation. Après une première question, poser un « Pourquoi ? » suffit souvent pour approfondir.
- **Demander des recommandations** : l'assistant peut proposer des pistes d'action (« Que recommanderais-tu pour améliorer la trésorerie de D&CO ? »).
- **Solliciter des comparaisons sectorielles** : l'assistant connaît les standards des principales professions et peut positionner le groupe par rapport à eux.
