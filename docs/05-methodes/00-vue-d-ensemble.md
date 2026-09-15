---
sidebar_position: 0
title: Vue d'ensemble
---

# Vue d'ensemble

Les données circulent dans un seul sens, des documents du client vers les pages. Chaque couche ne fait qu'une chose et transmet à la suivante.

![Fonctionnement d'AI-Finance DAF : des documents du client aux pages, en sept couches](/img/architecture-ai-finance.svg)

1. **Les documents** restent dans le dossier de documents du client, sur son poste. L'application les lit, elle ne les copie ni ne les modifie.
2. **Les lecteurs**, un par format, extraient des valeurs avec leur niveau de confiance et leur provenance : la liasse par ses codes Cerfa, la balance par ses comptes, le fichier des écritures ligne à ligne, les procès-verbaux par leur texte, les scans par reconnaissance de texte.
3. **L'historique par société** fusionne ces sources, la liasse complétée et contrôlée par la balance, enrichie par le fichier des écritures, corrigée par les saisies justifiées de la Configuration. Chaque poste garde sa provenance et ses écarts.
4. **La configuration du groupe**, saisie dans l'assistant de configuration, décide du périmètre, des méthodes, des flux déclarés et des seuils. Elle est la seule source de ces choix : rien n'est déduit des documents.
5. **Le moteur de consolidation** applique le périmètre, rapproche et élimine les flux internes, calcule les intérêts minoritaires, la mise en équivalence, l'écart d'acquisition, les conversions de devises, le retraitement du crédit-bail et le tableau de flux. Il est déterministe : mêmes documents et même configuration, mêmes chiffres.
6. **Les services** lisent le moteur sans le modifier : ratios de vigilance et seuils, contrôles de cohérence et file à traiter, pièces et échéancier légal, repères sectoriels, contexte de l'assistant.
7. **L'API locale** sert tout cela à l'interface, au rapport PDF et au classeur Excel, qui affichent sans recalculer et ne peuvent donc pas se contredire. En accès réseau local, le même serveur répond aux autres postes.

L'intelligence artificielle n'intervient dans aucun calcul : elle sert à lire les scans et à répondre en langage courant, à partir des chiffres du moteur. Les pages suivantes détaillent chaque méthode.

Chaque méthode porte son référentiel national et son statut (conforme, convention assumée, approximation, usage de place) : voir [Référentiels](./09-referentiels.md).
