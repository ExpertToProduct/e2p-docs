---
sidebar_position: 2
title: Résolution de problèmes
---

# Résolution de problèmes

Ce chapitre regroupe les incidents les plus fréquents et les procédures de résolution associées. Pour tout incident non couvert ici, contacter le support par courriel.

## Problèmes au lancement de l'application

### macOS affiche « Impossible d'ouvrir AI-Finance DAF car le développeur ne peut pas être vérifié »

Ce message peut apparaître lors du tout premier lancement sur certaines configurations macOS.

**Résolution :**

1. Ouvrir **Préférences Système** (ou **Réglages Système** selon la version de macOS).
2. Accéder à **Confidentialité et sécurité**.
3. Faire défiler jusqu'à la section **Sécurité**.
4. Localiser la mention « AI-Finance DAF a été bloqué ».
5. Cliquer sur **Ouvrir quand même**.
6. Confirmer par la saisie du mot de passe administrateur si demandé.

### L'application se ferme immédiatement après le lancement

**Causes possibles et résolutions :**

1. **Port 8000 déjà occupé** :
   - Ouvrir le Terminal.
   - Exécuter la commande : `lsof -i :8000`
   - Identifier le processus utilisant le port et le fermer.
   - Relancer AI-Finance DAF.

2. **Fichier `config_groupe.json` corrompu** :
   - Restaurer la dernière sauvegarde depuis la page **Administration > Sauvegardes**.
   - Si l'application ne se lance pas du tout, remplacer manuellement le fichier par une sauvegarde via le Finder.

3. **Dossier de données inaccessible** :
   - Vérifier les permissions du dossier `~/Library/Application Support/AI-Finance-DAF/`.
   - Réinitialiser les permissions si nécessaire.

### Écran blanc après le démarrage

Un écran blanc persistant au-delà de 30 secondes indique un problème de chargement de l'interface.

**Résolution :**

1. Quitter complètement l'application.
2. Rouvrir AI-Finance DAF.
3. Si le problème persiste, utiliser le raccourci **Commande + Majuscule + R** pour forcer un rechargement complet avec vidage du cache.
4. En dernier recours, réinitialiser l'application en supprimant le dossier `~/Library/Caches/com.experttoproduct.ai-finance-daf/`.

## Problèmes de chargement des liasses

### L'importation d'une liasse PDF échoue avec un message d'erreur

**Causes possibles :**

1. **Le fichier n'est pas un PDF valide** : vérifier l'extension `.pdf` et l'intégrité du fichier en l'ouvrant dans l'aperçu macOS.
2. **Le fichier dépasse 10 Mo** : la taille maximale supportée est de 10 Mo. Réduire la taille du PDF par compression si nécessaire.
3. **Le fichier est protégé par un mot de passe** : supprimer la protection avant importation.

### Les champs sont mal extraits après importation

**Résolution :**

1. Vérifier que la liasse est bien au format CERFA standard (formulaires 2033, 2050, 2058).
2. Si le PDF est un scan, l'extraction automatique ne peut pas fonctionner. Procéder à la saisie manuelle.
3. Pour les liasses atypiques (logiciels d'expertise comptable spécifiques), la saisie manuelle des champs non détectés reste toujours possible.

### Une entité est marquée comme incomplète dans la page Administration

Une entité est considérée incomplète lorsqu'un ou plusieurs champs financiers critiques sont vides.

**Résolution :**

1. Ouvrir la page de l'entité concernée.
2. Cliquer sur **Modifier les données**.
3. Compléter les champs manquants.
4. Enregistrer.

L'indicateur de couverture passe au vert une fois tous les champs renseignés.

## Problèmes de consolidation

### Les chiffres consolidés ne correspondent pas aux attendus

Plusieurs causes possibles :

1. **Méthode de consolidation incorrecte** : vérifier que chaque entité est bien paramétrée avec la méthode appropriée (IG, ME, Hors périmètre).
2. **Taux de détention erroné** : vérifier les taux saisis à la configuration.
3. **Flux intragroupe non déclarés** : les flux non saisis ne sont pas neutralisés, ce qui peut gonfler artificiellement les chiffres consolidés.
4. **Données d'un exercice non chargées** : s'assurer que toutes les entités disposent de données pour l'exercice consolidé.

Un contrôle manuel de cohérence peut être effectué en comparant les chiffres consolidés aux chiffres individuels des entités, en tenant compte des neutralisations attendues.

### Un flux intragroupe apparaît en double dans le diagramme de Sankey

**Cause :** le même flux a été déclaré deux fois lors de la configuration (avec des libellés légèrement différents, par exemple).

**Résolution :**

1. Ouvrir la page **Administration**.
2. Accéder à la section **Flux intragroupe**.
3. Identifier et supprimer la ligne en doublon.
4. Enregistrer.

## Problèmes de l'assistant IA

### L'assistant en mode local ne répond pas

**Vérifications à effectuer :**

1. **LM Studio est-il lancé** ? Ouvrir LM Studio et vérifier que le serveur local est démarré (icône verte dans le panneau).
2. **Un modèle est-il chargé** ? LM Studio requiert qu'un modèle soit explicitement chargé avant utilisation.
3. **Le port 1234 est-il bien celui configuré** ? Vérifier la correspondance entre les préférences d'AI-Finance DAF et de LM Studio.

### L'assistant en mode distant retourne une erreur de clé

**Causes possibles :**

1. **Clé d'API invalide ou expirée** : régénérer une nouvelle clé depuis la console Anthropic et la saisir à nouveau.
2. **Crédits Claude épuisés** : vérifier le solde du compte Anthropic.
3. **Limites de débit atteintes** : attendre quelques minutes avant une nouvelle tentative.

Le bouton **Tester la clé** dans les préférences permet de diagnostiquer rapidement ce type d'incident.

### Les réponses de l'assistant sont lentes ou incomplètes

**En mode local :**

- La vitesse dépend de la puissance du Mac. Les modèles trop volumineux (plus de 13 milliards de paramètres) peuvent être lents sur des Mac M1.
- Privilégier un modèle plus petit (Qwen2.5-7B ou Llama-3.1-8B) pour une meilleure réactivité.

**En mode distant :**

- Les temps de réponse longs peuvent indiquer une période de forte charge chez Anthropic. Réessayer quelques minutes plus tard.
- Vérifier la qualité de la connexion internet.

## Problèmes de mise à jour

### La mise à jour automatique échoue

**Résolution :**

1. Vérifier la connexion internet.
2. Redémarrer l'application.
3. Réessayer depuis **Préférences > Mises à jour > Rechercher maintenant**.
4. Si l'échec persiste, procéder à une mise à jour manuelle depuis le site d'Expert To Product.

### Après une mise à jour, certaines fonctionnalités ne répondent plus

**Résolution :**

1. Quitter complètement l'application.
2. Relancer AI-Finance DAF.
3. Si le problème persiste, procéder à un rollback vers la version antérieure en suivant la procédure décrite dans le chapitre [Mises à jour du logiciel](../03-administration/03-mises-a-jour.md).

## Problèmes de performance

### L'application devient lente avec le temps

**Causes possibles :**

1. **Trop de sauvegardes accumulées** : purger les sauvegardes anciennes depuis la page **Administration**.
2. **Journal d'activité volumineux** : exporter le journal en CSV puis le purger.
3. **Cache Electron saturé** : utiliser le raccourci **Commande + Majuscule + R** pour vider le cache.

### Le calcul des ratios de vigilance prend plusieurs secondes

Le calcul des onze ratios sur l'ensemble du périmètre consolidé est optimisé mais peut nécessiter quelques secondes pour les groupes comportant de nombreuses entités.

**Optimisation possible :**

- Privilégier l'affichage entité par entité plutôt que le mode consolidé lors des consultations fréquentes.
- Rafraîchir uniquement après modification effective des données.

## Contacter le support

Si l'incident rencontré n'est pas résolu par les procédures ci-dessus, contacter le support par courriel en joignant :

- Une description détaillée du problème.
- La version de l'application (affichée dans le pied de page).
- La version de macOS utilisée.
- Une copie du journal d'activité si pertinent (section Administration).
- Une capture d'écran de l'erreur si possible.

Les coordonnées du support sont indiquées au chapitre [Contact et support](./03-contact-support.md).
