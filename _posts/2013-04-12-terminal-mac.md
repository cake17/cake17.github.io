---
layout: post
title: Cheat sheet for Terminal, Bash and Vim
tags: [General]
description: Useful Commands for Terminal
---

### Raccourcis CLAVIER et astuces MAC

Pour faire des tilde sur MAC : `ALT+n`

Pour faire des conditions OR `||` : `ALT+MAJ+L`

Pour afficher les fichiers cachés sur MAC : dans le terminal, tapez

    defaults write com.apple.finder AppleShowAllFiles 1

Pour désactiver le DashBoard sur mac OSX 10.9

    defaults write com.apple.dashboard mcx-disabled -boolean YES

Puis

    killall Dock

Activer le DashBoard sur mac OSX 10.9

    defaults write com.apple.dashboard mcx-disabled -boolean NO

Puis

    killall Dock

### Teminal

Pour lire un fichier

    vi /path/to/file

Pour editer un fichier (mode édition) avec vim

    tapez ‘i’

Lister le contenu d'un répertoire

    ls

Lister le contenu d'un répertoire avec les permissions

    ls -l

Lister le contenu d'un répertoire avec les fichiers cachés

ls -all

Lister le contenu d'un répertoire avec la taille en octet, ko, mo et go

ls -lh

Se déplacer dans les répertoires

cd nom du rep

Après cd vous pouvez appuyer sur 'tab' après avoir entré la première lettre d'un répertoire existant.

Par exemple : cd D+tab+enter vous ouvre le dossier Documents dans votre home.

Pour revenir au répertoire parent

    cd ..

Supprimer un fichier

    rm nom_du_fichier

Créer un répertoire

    mkdir nom_du_rep

Supprimer un repertoire

    rmdir nom_du_rep

Connaître l'endroit où vous êtes

    pwd

Copier un document

    cp doc_source doc_destination

Copier un répertoire

    cp -R rep_source rep_destination

Déplacer un document

    mv doc_source doc_destination

Liste des processus en cours

    top

Pour savoir qui est connecté

    who

Pour avoir plus de détails concernant les utilisateurs

    w

Pour savoir qui est connecté en local

    users

Pour écrire à un utilisateur

    write nom_d'utilisateur
    Contrôle+c pour arrêter.

Pour savoir depuis combien de temps l'ordinateur (ou le serveur) est booté

    uptime

D'une manière général, les options sont mises après un '-'.

Pour connaître les options d'une fonction

    man fcnt
    par exemple : man cp

Affiche la liste des volumes montés sur votre Mac et les caractéristiques de ceux-ci (très pratique)

    df -h

Pour changer le propriétaire d'un fichier

    chown

Cette commande vous indique à quoi correspond telle ou telle commande du terminal.

    Par exemple, tapez man ls : Cela vous indiquera à quoi correspond la commande ls
    man

### Terminal Serveur

Connaitre l’IP d’un serveur dans le terminal

    ping NOMDUSERVEUR

Pour stopper le ping dans terminal

    CONTROL+C


### LINUX

    netstat -an

### MAC

    sudo lsof -i

Ou mieux pour avoir des détails sur le PID, l'utilisateur et le processus

    netstat -anpe

Ou pour seulement les ports TCP

    netstat -antp

pour voir le chemin fait par un paquet pour atteindre une adresse ip

    traceroute IP

### Références

[OpenClassRooms](http://fr.openclassrooms.com/informatique/cours/reprenez-le-controle-a-l-aide-de-linux/vim-l-editeur-de-texte-du-programmeur)
