---
layout: post
title: Installer Yosemite
tags: [General]
description: Un reminder pour ma clean install de Yosemite
langs: [fr]
---

**Last-Update : 2015-09-10**

## Clean Install Yosemite

- Télécharger Yosemite sur le site d'Apple

- Faire une clé usb bootable : dans le terminal avec XXXX = nom de la Clé

sudo /Applications/Install\ OS\ X\ Yosemite.app/Contents/Resources/createinstallmedia `--`volume /Volumes/XXXX `--`applicationpath /Applications/Install\ OS\ X\ Yosemite.app `--`nointeraction

- Redémarrer l'ordi avec la clé branchée. Appuyer sur la touche Option.

- Allez dans l'Utilitaire de disques et effacez la partition de votre volume. Fermer l'utilitaire et lancez l'installation.


## Options changées

### Général

- Settings/Trackpad : Toucher pour cliquer, Faire glisser avec 3 doigts, sens du défilement naturel à décocher
- Mise en veille et sécurité
- Activer le coupe-feu
- Bureau
    - trier par : aligner sur la grille
    - options de présentation : diminue la taille des icônes & espacement, taille du texte à 11
- Ajout des clés et réglages ssh dans `.ssh/`
- code wifi

### Finder

- barre left : cake17, sites, Documents, Applications, Bureau, Téléchargement, AirDrop, Vidéos, Musique, Images
- options de présentation : Par liste
- general : Nouvelles fenêtres s’ouvrent dans "Documents"
- afficher les fichiers cachés

### Dock

Le mettre à gauche et ajouter Finder, Launchpad, AppStore, Pref, Terminal, Firefox, Itunes, Atom, Netbeans, Gimp, Colloquy, PoEdit, Github Desktop, Rappels, Imovie, Garage Band, Transfert d'images, Libre Office - Téléchargement, Corbeille

### Clavier

Mettre en `français numérique` pour pouvoir utiliser les majuscules avec la touche Verrouillage Majuscule.


## Softwares Téléchargés

### Via l'App Store

- Imovie
- Iphoto
- GarageBand

### Via [Homebrew](http://brew.sh) (for bin installation) & [Brew Cast](http://caskroom.io) (for app installation) & my shell

Use the following script to install apps and bins:

{% gist 99e72719c221d239b3f8 %}

- Ajoutez ceci dans .bash_profile:

    if [ -f `brew --prefix`/etc/bash_completion ]; then
      . `brew --prefix`/etc/bash_completion
    fi


### Via le navigateur

- Firefox
