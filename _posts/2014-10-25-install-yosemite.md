---
layout: post
title: Installer Yosemite
tags: [General]
description: Un reminder pour ma clean install de Yosemite
langs: [fr]
---

## Clean Install Yosemite

- Télécharger Yosemite sur le site d'Apple

- Faire une clé usb bootable : dans le terminal avec XXXX = nom de la Clé

sudo /Applications/Install\ OS\ X\ Yosemite.app/Contents/Resources/createinstallmedia --volume /Volumes/XXXX --applicationpath /Applications/Install\ OS\ X\ Yosemite.app --nointeraction

- Redémarrer l'ordi avec la clé branchée. Appuyer sur la touche Option.

- Allez dans l'Utilitaire de disques et effacez la partition de votre volume.
Fermer l'utilitaire et lancez l'installation.


## Options changées

### Général

- Settings/Trackpad : Toucher pour cliquer, Faire glisser avec 3 doigts, sens du défilement naturel à décocher
- Mise en veille et sécurité
- Activer le coupe-feu
- Bureau
    => trier par : aligner sur la grille
    => options de présentation : diminue la taille des icônes & espacement, taille du texte à 11
- Ajout des clés et réglages ssh dans `.ssh/`
- code wifi

### Finder

- barre left : cake17, sites, Documents, Applications, Bureau,
  Téléchargement, AirDrop, Vidéos, Musique, Images
- options de présentation : Par liste
- general : Nouvelles fenêtres s’ouvrent dans "Documents"
- afficher les fichiers cachés

### Dock

- la mettre à gauche
- Finder, AppStore, Pref, Terminal, Firefox, Safari, Rappels, Itunes, Github, Docker, Atom, PoEdit,
  Imovie, Iphoto, Garage Band, Gimp, Vlc, Skype, Plans, Transfert d'images
  || Applications, Téléchargement, Corbeille

### Clavier

Mettre en `français numérique` pour pouvoir utiliser les majuscules avec la touche Verrouillage Majuscule.


## Softwares Téléchargés

### Via l'App Store

- Imovie
- Iphoto
- GarageBand

### Via le navigateur

- Firefox
- Atom
- Gimp
- Docker
- PoEdit
- Vlc
- Skype

### Via Homebrew

Installez d'abord brew : `ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
(brew va installer Apple Xcode command-line, suivez les instructions pour l'installer)

- Installez git

    - brew install git bash-completion
        // Ajoutez ceci dans .bash_profile
        if [ -f `brew --prefix`/etc/bash_completion ]; then
          . `brew --prefix`/etc/bash_completion
        fi


- Installez php56

    - brew tap homebrew/dupes
    - brew tap homebrew/php
    - brew install php56 --without-mysql --without-apache --with-postgresql
    - brew install php56-intl

The php.ini file can be found in:
    /usr/local/etc/php/5.6/php.ini

✩✩✩✩ PEAR ✩✩✩✩

If PEAR complains about permissions, 'fix' the default PEAR permissions and config:
    chmod -R ug+w /usr/local/Cellar/php56/5.6.10/lib/php
    pear config-set php_ini /usr/local/etc/php/5.6/php.ini system

✩✩✩✩ Extensions ✩✩✩✩

If you are having issues with custom extension compiling, ensure that
you are using the brew version, by placing /usr/local/bin before /usr/sbin in your PATH:

      PATH="/usr/local/bin:$PATH"

PHP56 Extensions will always be compiled against this PHP. Please install them
using --without-homebrew-php to enable compiling against system PHP.

✩✩✩✩ PHP CLI ✩✩✩✩

If you wish to swap the PHP you use on the command line, you should add the following to ~/.bashrc,
~/.zshrc, ~/.profile or your shell's equivalent configuration file:

      export PATH="$(brew --prefix homebrew/php/php56)/bin:$PATH"

✩✩✩✩ FPM ✩✩✩✩

To launch php-fpm on startup:
    mkdir -p ~/Library/LaunchAgents
    cp /usr/local/opt/php56/homebrew.mxcl.php56.plist ~/Library/LaunchAgents/
    launchctl load -w ~/Library/LaunchAgents/homebrew.mxcl.php56.plist

The control script is located at /usr/local/opt/php56/sbin/php56-fpm

OS X 10.8 and newer come with php-fpm pre-installed, to ensure you are using the brew version you need to make sure /usr/local/sbin is before /usr/sbin in your PATH:

  PATH="/usr/local/sbin:$PATH"

To have launchd start homebrew/php/php56 at login:
    mkdir -p ~/Library/LaunchAgents
    ln -sfv /usr/local/opt/php56/*.plist ~/Library/LaunchAgents
Then to load homebrew/php/php56 now:
    launchctl load ~/Library/LaunchAgents/homebrew.mxcl.php56.plist

- Installez nginx : `brew install nginx`

- Installez Postgres : `brew install postgres`

### Via le terminal

- Installez Composer globalement (pas avec Brew puisque la version de composer de brew est ancienne)

      curl -sS https://getcomposer.org/installer | php
      mv composer.phar /usr/local/bin/composer


### Via Gem

- Jekyll : `sudo gem install jekyll`
- Middleman : `sudo gem install middleman`
- Sass : `sudo gem install sass`
- Compass : `sudo gem install compass`
- Jekyll-sitemap : `sudo gem install jekyll-sitemap`

### Via npm

On doit d'abord installer node.js for grunt & gulp : `brew install node`

- Grunt : `npm install -g grunt-cli`
- Gulp : `npm install --global gulp`
- Bower : `npm install -g bower`
- Yeoman pour générer des squelettes (utilisé avec bespoke.js) : `npm install -g yo`
- Bespoke : `npm install -g generator-bespoke`
- Pour CakePHP Asset Compress : `npm install -g uglify-js`

### Pour les docs sphinx (cakephp docs)

- brew install python
- brew install sphinx
- pip install sphinxcontrib-phpdomain

### Mes projets

- git clone cake-websites
- Puis lancez le shell maj pour installer tous mes projets
