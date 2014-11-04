---
layout: post
title: Install Yosemite
tags: [General]
description: A reminder for my Yosemite clean install
langs: [en, fr]
---

## Clean Install Yosemite

- Download Yosemite on Apple Website

- Faire une clé usb bootable : dans le terminal avec XXXX = nom de la Clé

sudo /Applications/Install\ OS\ X\ Yosemite.app/Contents/Resources/createinstallmedia --volume /Volumes/XXXX --applicationpath /Applications/Install\ OS\ X\ Yosemite.app --nointeraction

- Redémarrer l'ordi avec la clé branchée. Appuyer sur la touche Option.

- Allez dans l'Utilitaire de disques et effacez la partition de votre volume.
Fermer l'utilitaire et lancez l'installation.


## Softwares Dowloaded

### From App Store

- Imovie
- Iphoto
- GarageBand

### With Browser

- Atom
- Github
- Gimp
- Docker
- PoEdit
- Vlc
- Skype

### With Homebrew : `brew install NAME`

First install brew : `ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
brew will install command-line

- git
- git bash-completion
      if [ -f `brew --prefix`/etc/bash_completion ]; then
        . `brew --prefix`/etc/bash_completion
      fi

- Install php55, composer and mcrypt:

        brew tap homebrew/dupes
        brew tap homebrew/php
        brew install php55
        brew install composer
        brew install mcrypt
        brew install php55-mcrypt

### With Gem

- Jekyll : `sudo gem install jekyll`
- Middleman : `sudo gem install middleman`
- Sass : `sudo gem install sass`
- Compass : `sudo gem install compass`

### With npm

Needs to install node.js for grunt & gulp : `brew install node`

- Grunt : `npm install -g grunt-cli`
- Gulp : `npm install --global gulp`

### For sphinx docs (cakephp docs)

- brew install python
- brew install sphinx
- pip install sphinxcontrib-phpdomain


## Options changées

### Finder

- Barre left : cake17, sites, Documents, Applications, Bureau,
  Téléchargement, AirDrop, Vidéos, Musique, Images
- options de présentation : Par liste
- General : Nouvelles fenêtres s’ouvrent dans "Documents"
- afficher les fichiers cachés

### Dock

- la mettre à gauche
- Finder, AppStore, Pref, Terminal, Safari, Rappels, Itunes, Github, Atom,
  Imovie, Iphoto, Garage Band, Plans, Transfert d'images
  || Applications, Téléchargement, Corbeille

### Clavier

Mettre en `français numérique` pour pouvoir utiliser les majuscules avec la touche Verrouillage Majuscule.

### Others

- Settings/Trackpad : Toucher pour cliquer, Faire glisser avec 3 doigts, sens du défilement naturel à décocher
- Mise en veille et sécurité
- Activer le coupe-feu
- Bureau
    => trier par : aligner sur la grille
    => options de présentation : diminue la taille des icônes & espacement, taille du texte à 11
- Ajout des clés et réglages ssh dans `.ssh/`
- code wifi

- git clone cake-websites
- Puis lancez le shell maj pour installer tous mes projets
