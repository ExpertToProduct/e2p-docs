---
sidebar_position: 4
title: Comptabilité (FEC)
---

# Comptabilité (FEC)

Le FEC (fichier des écritures comptables) est ce que le moteur lit pour rapprocher les frais d'approche de la comptabilité, confirmer les virements en banque et calculer les coefficients d'approche. La carte **Comptabilité (FEC)** de la page ADMIN › Sauvegarde montre celui qui est en service et permet d'en déposer un nouveau, sans rien demander à l'informaticien.

1. La carte affiche le **FEC courant** (entité, exercice, date d'arrêté, période des écritures, nombre d'écritures, fichier, qui l'a déposé et quand) et le **FEC de l'exercice précédent**, puis la liste des fichiers présents.
2. Pour renouveler : glissez le fichier remis par le cabinet comptable dans la zone **Nouveau FEC**, ou cliquez **Choisir un fichier**. Nommez-le de préférence `CODEFECAAAAMMJJ.txt` (par exemple `DEMOFEC20260831.txt`) : la date est celle de l'arrêté. Si le nom ne suit pas ce modèle, la date de la dernière écriture sert d'arrêté.
3. Le fichier est contrôlé (format FEC à 18 colonnes, au moins une écriture, dates lisibles), rangé sous son nom normé, et le moteur le prend aussitôt. Le message indique l'entité, la date, le nombre d'écritures et le nombre de virements confirmés en banque grâce aux nouvelles écritures.
4. **Recharger** demande au moteur de relire son dossier sans nouveau fichier — utile si un FEC a été posé à la main sur le serveur.

Le FEC peut aussi être envoyé **par courriel** à la boîte de veille des factures : une pièce jointe `.txt` reconnue comme FEC est déposée de la même façon, et une notification le confirme.

:::caution Ce qui est refusé, et pourquoi
Un fichier qui n'est pas un FEC (mauvais en-tête, aucune écriture, dates illisibles) est refusé avec la raison. Un FEC **plus ancien** que celui en service pour le même exercice est refusé par défaut : l'écran propose « Déposer quand même » si c'est voulu (le moteur continuera de servir le plus récent). Un FEC **identique** à un fichier déjà présent est signalé « déjà déposé ». Le FEC précédent n'est jamais supprimé.
:::

:::info Qui peut déposer
Dès que les comptes sont actifs, le dépôt et le rechargement sont réservés au contrôle de gestion, à la DAF et aux administrateurs ; tout le monde peut consulter la carte.
:::
