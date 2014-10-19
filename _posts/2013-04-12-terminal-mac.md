---
layout: post
title: Cheat sheet for MAC Terminal, Bash and Vim
tags: [General]
description: Useful Commands for Mac Terminal
langs: [fr]
---

### Keyboards Shortcuts and MAC tips

Pour faire des tilde sur MAC : `ALT+n`

Pour faire des conditions OR `||` : `ALT+MAJ+L`

Pour afficher les fichiers cachés sur MAC : dans le terminal, tapez : `defaults write com.apple.finder AppleShowAllFiles 1`

Pour désactiver le DashBoard sur mac OSX 10.9:

    defaults write com.apple.dashboard mcx-disabled -boolean YES
    `killall Dock`

Desactiver le DashBoard sur mac OSX 10.9:

    defaults write com.apple.dashboard mcx-disabled -boolean NO
    `killall Dock`

### Vim

Pour lire un fichier : `vim /path/to/file`

3 modes :

- Par défaut on est en mode interactif : Pour se déplacer dans le fichier, supprimer des lignes, copier-coller
- Pour editer un fichier (mode insertion) avec vim : `tapez 'i'`
- Pour lancer une commande (mode commande) avec vim : `tapez ':' puis la commande`

Tapez ESC pour revenir au mode interactif.

En mode interactif:
w : se déplacer de mot en mot
o : aller au début de la ligne
$ : aller à la fin de la ligne
G : sauter à la ligne dernière ligne (ex 5G va à la ligne 5)
gg : aller à la 1ère ligne du fichier

x : efface des lettres
dd : supprime une ligne
dw : supprime un mot
dO et d$ : supprime le début ou la fin de ligne

yy : copier une ligne
p : coller
r : remplacer une lettre
u : annuler modifications (CTRL + R pour rétablir)

En mode commande
:wq : sauvegarder le fichier et quitter
:%s/ancien/nouveau/g : rechercher et remplacer dans tout le fichier
:r autrefichier : inserer un fichier au niveau du curseur

### Terminal Commands

#### Infos : man, which, ls, cd, pwd, df, find, history

D'une manière général, les options sont mises après un '-'.

Pour connaître les options d'une commande

    man NOM_COMMANDE
    par exemple : man cp

Pour savoir où se trouve la commande : `which NOM_COMMANDE`

Lister le contenu d'un répertoire : `ls`

Lister le contenu d'un répertoire avec les permissions : `ls -l`

Lister le contenu d'un répertoire avec les fichiers cachés : `ls -all`

Lister le contenu d'un répertoire avec la taille en octet, ko, mo et go : `ls -lh`

Se déplacer dans les répertoires : `cd nom du rep`

Après cd vous pouvez appuyer sur 'tab' après avoir entré la première lettre d'un répertoire existant.

Par exemple : cd D+tab+enter vous ouvre le dossier Documents dans votre home.

Pour revenir au répertoire parent : `cd ..`

Connaître l'endroit où vous êtes : `pwd`

Affiche la liste des volumes montés sur votre Mac et les caractéristiques de ceux-ci (très pratique) : `df -h`

find où quoi (ex : find /home/cake17 readme.txt, cherche readme.txt dans /home/cake 17)

Pour voir un historique des commandes entrées : `history`

Pour rechercher une commande tapée : `CONTROL + R + commande_recherche` (ex : `CONTROL + R + all`)

#### Actions : rm, cp, mkdir, mv, chown, chmod

Supprimer un fichier : `rm nom_du_fichier`

Créer un répertoire : `mkdir nom_du_rep`

Supprimer un repertoire : `rm -rf nom_du_rep`

Copier un document : `cp doc_source doc_destination`

Copier un répertoire : `cp -R rep_source rep_destination`

Déplacer un document : `mv doc_source doc_destination`

Pour changer le propriétaire d'un fichier : `chown`

Pour changer les permissions d'un fichier : `chmod`

#### Processus : top, who, w, users, write, uptime, scp

Liste des processus en cours : `top`

Pour savoir qui est connecté : `who`

Pour avoir plus de détails concernant les utilisateurs : `w`

Pour savoir qui est connecté en local : `users`

Pour écrire à un utilisateur

    write nom_d'utilisateur
    Contrôle+c pour arrêter.

Pour savoir depuis combien de temps l'ordinateur (ou le serveur) est booté : `uptime`

Pour démarrer un serveur ssh sur son mac : aller dans `Preferences/Partage` et cocher `Session à distance`

Pour copier des fichiers `scp image.png cake@85.123.10.201:/home/cake/images/`

#### Analyze & filter trafic : host, ping, lsof, netstat, traceroute, ifconfig

Connaitre l’IP d’un serveur dans le terminal : `host NOMDUSERVEUR`

Tester si un serveur répond : `ping NOMDUSERVEUR`

Pour stopper le ping dans terminal : `CONTROL+C`

Pour afficher les proccessus : `sudo lsof -i`

Ou mieux pour avoir des détails sur le PID, l'utilisateur et le processus : `netstat -anpe`

Ou pour seulement les ports TCP : `netstat -antp`. L'adresse ssh qu'il faudra taper sera noté dans la fenêtre.

pour voir le chemin fait par un paquet pour atteindre une adresse ip : `traceroute IP`

Pour voir les interfaces réseaux de son ordi : `ifconfig`

### Références

[OpenClassRooms](http://fr.openclassrooms.com/informatique/cours/reprenez-le-controle-a-l-aide-de-linux/vim-l-editeur-de-texte-du-programmeur)
