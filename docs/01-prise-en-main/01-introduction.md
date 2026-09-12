---
sidebar_position: 1
title: Introduction
---

# AI-Finance DAF — Introduction

## Qu'est-ce qu'AI-Finance DAF

AI-Finance DAF est une application de bureau destinée aux Directeurs Administratifs et Financiers (DAF) de groupes d'entreprises familiaux. À partir des documents que le cabinet produit déjà (liasses fiscales, balances générales, fichiers des écritures comptables), elle établit les comptes consolidés du groupe, rapproche les positions intragroupe, suit les ratios de vigilance, tient la liste de ce qui reste à traiter (écarts, contrôles, pièces manquantes), suit l'exercice en cours et répond aux questions en langage naturel.

L'application fonctionne **intégralement en local sur le poste de l'utilisateur**. Le moteur de calcul, l'interface et les données restent sur le poste. Aucune donnée financière n'est transmise vers un serveur distant, sauf si l'utilisateur choisit explicitement d'interroger l'assistant via l'API Claude (voir le chapitre dédié).

## À qui s'adresse AI-Finance DAF

- **Directeur Administratif et Financier** d'un groupe de plusieurs sociétés (holding, filiales opérationnelles, SCI patrimoniales)
- **Directeur Général** pilotant un groupe familial et souhaitant disposer d'une vision consolidée sans recours systématique au cabinet d'expertise comptable
- **Contrôleur de gestion** en charge du reporting annuel et du suivi de l'exercice en cours
- **Cabinet d'expertise comptable** proposant à ses clients un outil de restitution pilotée

AI-Finance DAF est particulièrement adapté aux structures implantées dans les Départements et Régions d'Outre-Mer, dont les particularités (régime fiscal, absence de TVA à Mayotte, conventions d'assistance intragroupe) ne sont pas toujours bien prises en charge par les outils génériques du marché.

## Ce que fait l'application

- **Lecture des documents** : liasses fiscales au format PDF (régime simplifié 2033 et régime réel normal 2050, formulaire 2065), balances générales (PDF du cabinet ou tableur), fichiers des écritures comptables (FEC).
- **Consolidation** : bilan et compte de résultat consolidés, élimination des titres, des comptes réciproques et des dividendes intragroupe, impôts différés, intérêts non contrôlants, écart d'acquisition, tableau de flux de trésorerie.
- **Intragroupe** : rapprochement automatique des comptes réciproques entre entités à partir des balances.
- **Vigilance** : onze ratios par entité et pour le consolidé, avec des seuils adaptés au type d'activité (opérationnelle, holding, immobilière).
- **File « à traiter »** : alertes de ratios, contrôles de cohérence et pièces manquantes réunis dans une seule liste, avec un statut par élément.
- **Pièces juridiques** : référentiel des documents attendus par entité (statuts, K-bis, PV d'assemblée, rapports, registre des titres…) et dépôt guidé.
- **Pilotage** : suivi de l'exercice en cours à partir des FEC partiels.
- **Assistant** : questions en langage naturel sur le dossier, avec un modèle local (LM Studio) ou, en option, l'API Claude.
- **Rapport DAF** au format PDF, sauvegardes datées, protection par mot de passe optionnelle, plusieurs groupes dans la même application.

## Ce qui est inclus dans la licence

L'acquisition d'une licence AI-Finance DAF comprend :

- L'installeur de l'application pour macOS (Apple Silicon) et, à partir de la version 2.3.0, pour Windows 11 (x64)
- L'assistance à l'installation initiale (30 minutes de visioconférence avec un membre de l'équipe)
- L'accompagnement à la configuration du groupe et à l'organisation du dossier de documents
- Les mises à jour de l'année en cours
- Le support par courriel (délai de réponse sous 48 heures ouvrées)

La maintenance annuelle, souscrite au-delà de la première année, permet de continuer à bénéficier des mises à jour fonctionnelles, des correctifs de sécurité et du support par courriel.

## Ce qui n'est pas inclus

- L'expertise comptable et fiscale : AI-Finance DAF est un outil de pilotage, non un logiciel de tenue de comptabilité. Le recours à un expert-comptable reste nécessaire pour l'établissement des liasses fiscales et la certification des comptes.
- Les développements spécifiques propres à un groupe : l'ajout de fonctionnalités sur mesure fait l'objet d'un devis distinct.
- L'hébergement distant : l'application est exclusivement locale par conception.

## Prérequis techniques

### Système d'exploitation

- macOS 13 Ventura ou version ultérieure, architecture Apple Silicon (processeurs M1, M2, M3, M4 ou ultérieurs)
- ou Windows 11 (64 bits), à partir de la version 2.3.0 ; voir les [limites propres à Windows](./02-installation.md#windows)

### Matériel

- 16 Go de mémoire vive recommandés, notamment pour faire tourner un modèle de langage local
- 2 Go d'espace disque pour l'application, plus l'espace du dossier de documents du groupe

### Logiciels tiers optionnels

- **LM Studio** pour l'assistant en mode local (gratuit)
- Une **clé d'API Anthropic** pour l'assistant en mode distant (facturation à l'usage)

## Organisation de la documentation

1. **Prise en main** : installation, premier démarrage, tour d'horizon de l'interface.
2. **Workflows** : déposer les documents et recharger, lire la synthèse consolidée, consulter une entité, piloter la vigilance et la file à traiter, interroger l'assistant.
3. **Administration** : dossier des données, sauvegardes, paramètres, mises à jour.
4. **Support** : foire aux questions, résolution des incidents courants, contact.

Il est recommandé de parcourir la section « Prise en main » dans l'ordre lors de la première utilisation.
