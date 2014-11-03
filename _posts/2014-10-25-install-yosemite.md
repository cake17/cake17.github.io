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
- code wifi
- Mise en veille et sécurité
- Activer le coupe-feu
- Bureau
    => trier par : aligner sur la grille
    => options de présentation : diminue la taille des icônes & espacement, taille du texte à 11
- Ajout des clés et réglages ssh dans `.ssh/`
- install de brew : `ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
brew va installer command-line
- brew install git et git-completion `brew install git bash-completion`
- Logiciels à réinstaller depuis l'App Store : Imovie, Iphoto, GarageBand
- Logiciels à installer : Atom, Github, Gimp, Docker, PoEdit, Vlc, Skype
- Jekyll : `sudo gem install jekyll`

- Install php55, composer and mcrypt:

        brew tap homebrew/dupes
        brew tap homebrew/php
        brew install php55
        brew install composer
        brew install mcrypt
        brew install php55-mcrypt

To finish installing mcrypt for PHP 5.5:
    - /usr/local/etc/php/5.5/conf.d/ext-mcrypt.ini was created, do not forget to remove it upon extension removal.
    - Validate installation via one of the following methods:
        - Using PHP from a webserver:
            - Restart your webserver.
            - Write a PHP page that calls "phpinfo();"
            - Load it in a browser and look for the info on the mcrypt module.
            - If you see it, you have been successful!

        - Using PHP from the command line:
            - Run "php -i" (command-line "phpinfo()")
            - Look for the info on the mcrypt module.
            - If you see it, you have been successful!


- git clone cake-websites
- Puis lancez le shell maj pour installer tous mes projets
