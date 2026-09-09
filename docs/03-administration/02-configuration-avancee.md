---
sidebar_position: 2
title: Paramètres et configuration avancée
---

# Paramètres et configuration avancée

## Apparence

**Paramètres > Apparence** : fond texturé activable, curseur d'intensité, retour aux valeurs par défaut. Le réglage est mémorisé sur le poste, pas dans les données du groupe.

## Configuration du groupe

La page **Configuration** rouvre l'assistant sur la configuration actuelle : identité, entités (type, régime fiscal, détention, préfixe des fichiers), flux intragroupe, données saisies. **Appliquer** valide, conserve la version précédente et recharge sans redémarrer.

Quelques réglages n'ont pas de champ dédié et se saisissent dans `config_groupe.json`, avec l'aide du support si besoin :

- `seuils` : ajustement des seuils de vigilance par type d'activité ou par entité, ou désactivation d'un ratio pour une entité (`null`).
- `groupe.sauvegardes` : dossier de destination des sauvegardes.
- `_meta.data_root` : emplacement de la data room (aussi modifiable dans l'assistant).
- `flux_intragroupe[].verrouille` : conserver un flux déclaré même si les balances en détectent un autre.

## Fichier `.env`

Dans le dossier des données, un fichier texte `.env` porte les réglages locaux :

```
# Assistant : repli sur l'API Claude quand LM Studio est éteint (optionnel)
ANTHROPIC_API_KEY=
CLAUDE_MODEL=claude-sonnet-5

# Dossier des sauvegardes (optionnel)
# AI_FINANCE_SAUVEGARDES=/Volumes/Disque/AI-Finance/sauvegardes
```

Relancer l'application après modification.

## Variables d'environnement

Pour un usage avancé (poste partagé, scripts), l'application respecte :

| Variable | Rôle |
|---|---|
| `AI_FINANCE_APP_DATA` | Dossier des données, à la place du choix mémorisé |
| `AI_FINANCE_PORT` | Port du serveur interne (8000 par défaut) |
| `AIFINANCE_DATA_ROOT` | Data room, à la place de la configuration |
| `AI_FINANCE_SAUVEGARDES` | Dossier des sauvegardes |
| `AI_FINANCE_CONTEXTE_MAX` | Budget en caractères du dossier envoyé à l'assistant (9000 par défaut) |

## Rechoisir le dossier des données

Quitter l'application, supprimer le fichier `~/Library/Application Support/ai-finance/donnees.txt`, relancer : la question du premier lancement est posée de nouveau. Les données de l'ancien dossier ne sont pas déplacées.

## Serveur interne

L'interface dialogue avec le moteur par `http://127.0.0.1:8000`, accessible uniquement depuis le poste. Si ce port est déjà pris au lancement, l'application s'y connecte au lieu de démarrer son propre moteur ; définir `AI_FINANCE_PORT` pour en choisir un autre.
