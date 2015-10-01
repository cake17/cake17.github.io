---
layout: post
title: Cheat sheet pour MAC Terminal, Bash et Vim
tags: [General]
description: Commandes utiles pour le terminal de Mac
lang: fr
---

### Raccourcis Clavier et astuces MAC

| Raccourci | Action                                    |
|-----------|-------------------------------------------|
| ALT+n     | Pour faire des tilde sur MAC              |
| ALT+MAJ+L | Pour faire des conditions OR `||`         |


| Dans le Terminal                                                           | Action                                         |
|----------------------------------------------------------------------------|------------------------------------------------|
| tapez : `defaults write com.apple.finder AppleShowAllFiles 1`              | Pour afficher les fichiers cachés sur MAC      |
| defaults write com.apple.dashboard mcx-disabled -boolean YES; killall Dock | Pour désactiver le DashBoard sur mac OSX 10.10 |
| defaults write com.apple.dashboard mcx-disabled -boolean NO; killall Dock  | Réactiver le DashBoard sur mac OSX 10.10       |

Si le ventilateur marche fort ou que la carte sd n'est pas reconnue pour un MacBook, on peut faire un [reset smc](http://support.apple.com/fr-fr/HT3964) et un [reset pram](http://support.apple.com/kb/PH14222?viewlocale=fr_FR)

### Vim

Pour lire un fichier : `vim /path/to/file`

3 modes :

- Par défaut on est en mode interactif : Pour se déplacer dans le fichier, supprimer des lignes, copier-coller
- Pour editer un fichier (mode insertion) avec vim : `tapez 'i'`
- Pour lancer une commande (mode commande) avec vim : `tapez ':' puis la commande`

Tapez ESC pour revenir au mode interactif.

En mode interactif:

| Raccourci | Action                                                   |
|-----------|----------------------------------------------------------|
| w         | se déplacer de mot en mot                                |
| o         | aller au début de la ligne                               |
| $         | aller à la fin de la ligne                               |
| G         | sauter à la ligne dernière ligne (ex 5G va à la ligne 5) |
| gg        | aller à la 1ère ligne du fichier                         |
|           |                                                          |
| x         | efface des lettres                                       |
| dd        | supprime une ligne                                       |
| dw        | supprime un mot                                          |
| dO et d$  | supprime le début ou la fin de ligne                     |
|           |                                                          |
| yy        | copier une ligne                                         |
| p         | coller                                                   |
| r         | remplacer une lettre                                     |
| u         | annuler modifications (CTRL + R pour rétablir)           |


En mode commande

| Raccourci            | Action                                       |
|----------------------|----------------------------------------------|
| :wq                  | sauvegarder le fichier et quitter            |
| :%s/ancien/nouveau/g | rechercher et remplacer dans tout le fichier |
| :r autrefichier      | inserer un fichier au niveau du curseur      |

### Commandes du Terminal

#### Infos : man, which, ls, cd, pwd, df, find, history

D'une manière général, les options sont mises après un '-'.

| Commande           | Action                                                 |
|--------------------|--------------------------------------------------------|
| man NOM_COMMANDE   | Pour savoir où se trouve la commande                   |
| which NOM_COMMANDE | Pour connaître les options d'une commande (ex: man cp) |
|                    |                                                        |
| ls                 | Lister le contenu d'un répertoire                      |
| ls -l              | Lister le contenu d'un répertoire avec les permissions |
| ls -a              | Lister le contenu d’un répertoire avec les fichiers cachés |
| ls -lh            | Lister le contenu d'un répertoire avec la taille en octet, ko, mo et go |

On peut cumuler les options pour par exemple lister le contenu avec les permissions et les fichiers cachés comme ceci : `ls -la`.

| Commande          | Action                                                                  |
|-------------------|-------------------------------------------------------------------------|
| cd NOM_REPERTOIRE | Se déplacer dans les répertoires                                        |
| cd ..             | Pour revenir au répertoire parent                                        |
| cd + TAB                         | Après cd vous pouvez appuyer sur 'tab' après avoir entré la première lettre d'un répertoire existant |
| cd D+TAB+ENTER                   | vous ouvre le dossier Documents dans votre home                                                      |
| pwd                              | Connaître l'endroit où vous êtes                                                                     |
| cd NOM_REPERTOIRE                | Se déplacer dans les répertoires                                                                     |
| df -h                            | Affiche la liste des volumes montés sur votre Mac et les caractéristiques de ceux-ci (très pratique) |
| history                          | Pour voir un historique des commandes entrées                                                        |
| CONTROL + R + COMMANDE_RECHERCHEE| Pour rechercher une commande tapée                                                                   |
| find où quoi                     | ex : find /home/cake17 readme.txt, cherche readme.txt dans /home/cake 17                             |


#### Actions : rm, cp, mkdir, mv, chown, chmod

| Commande                         | Action                                    |
|----------------------------------|-------------------------------------------|
| rm NOM_FICHIER                   | Supprimer un fichier                      |
| mkdir NOM_REPERTOIRE             | Créer un répertoire                       |
| rm -rf NOM_REPERTOIRE            | Supprimer un repertoire                   |
| cp DOC_SOURCE DOC_DESTINATION    | Copier un document                        |
| cp -R REP_SOURCE REP_DESTINATION | Copier un répertoire                      |
| mv DOC_SOURCE DOC_DESTINATION    | Déplacer un document                      |
| chown                            | Pour changer le propriétaire d'un fichier |
| chmod                            | Pour changer les permissions d'un fichier |

#### Processus : top, who, w, users, write, uptime, scp

| Commande              | Action                                                                     |
|-----------------------|----------------------------------------------------------------------------|
| top                   | Liste des processus en cours                                               |
| who                   | Pour savoir qui est connecté                                               |
| users                 | Pour avoir un résumé de l'ordi, ses utilisateurs connectés, ...            |
| write NOM_UTILISATEUR | Pour écrire à un utilisateur (CTRL + C pour arrêter)                       |
| uptime                | Pour savoir depuis combien de temps l'ordinateur (ou le serveur) est booté |

Pour démarrer un serveur ssh sur son mac : aller dans `Preferences/Partage` et cocher `Session à distance`

Pour copier des fichiers `scp image.png cake@85.123.10.201:/home/cake/images/`

#### Analyze & filter trafic : host, ping, lsof, netstat, traceroute, ifconfig

| Commande          | Action                                                                                       |
|-------------------|----------------------------------------------------------------------------------------------|
| host NOMDUSERVEUR | Connaitre l’IP d’un serveur dans le terminal                                                 |
| ping NOMDUSERVEUR | Tester si un serveur répond                                                                  |
| CONTROL+C         | Pour stopper le ping dans terminal                                                           |
| sudo lsof -i      | Pour afficher les proccessus                                                                 |
| netstat -anpe     | Ou mieux pour avoir des détails sur le PID, l'utilisateur et le processus                    |
| netstat -antp     | Ou pour seulement les ports TCP (L'adresse ssh qu'il faudra taper sera noté dans la fenêtre) |
| traceroute IP     | Pour voir le chemin fait par un paquet pour atteindre une adresse ip                         |
| ifconfig          | Pour voir les interfaces réseaux de son ordi                                                 |

### Références

[OpenClassRooms](http://fr.openclassrooms.com/informatique/cours/reprenez-le-controle-a-l-aide-de-linux/vim-l-editeur-de-texte-du-programmeur)
