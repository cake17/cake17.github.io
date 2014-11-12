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

- Firefox
- Atom
- Github
- Gimp
- Docker
- PoEdit
- Vlc
- Skype

### With Homebrew

First install brew : `ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
(brew will install Apple Xcode command-line, follow instructions to install it)

- Install softwares

    - brew install git
    - brew install git bash-completion
          if [ -f `brew --prefix`/etc/bash_completion ]; then
            . `brew --prefix`/etc/bash_completion
          fi


- Install php55, composer and mcrypt:

    - brew tap homebrew/dupes
    - brew tap homebrew/php
    - brew install php55
    - brew install mcrypt
    - brew install php55-mcrypt


- Install Composer globally (not with Composer as composer version is old)

      curl -sS https://getcomposer.org/installer | php
      mv composer.phar /usr/local/bin/composer

- Configure Apache2

Add this in `/etc/hosts`:

     127.0.0.1       local.dev
     127.0.0.1       www.local.dev

Change `/etc/apache2/httpd.conf`:

    Uncomment : `LoadModule rewrite_module  libexec/apache2/mod_rewrite.so`
    Add this : `LoadModule php5_module /usr/local/Cellar/php55/5.5.18/libexec/apache2/libphp5.so`
    ServerAdmin myemailadress@example.com
    ServerName www.local.dev:80
    DocumentRoot "/Users/cake17/sites"
    <Directory "/Users/cake17/sites">
        Options FollowSymLinks Multiviews Indexes
        MultiviewsMatch Any
        AllowOverride All
        Require all granted
    </Directory>
    ErrorLog "/sites/logs/apache2/error_log"
    CustomLog "/sites/logs/apache2/access_log" common
    Uncomment `Include /private/etc/apache2/extra/httpd-vhosts.conf`

Change in `/etc/apache2/extra/httpd-vhosts.conf`, comment everything and add:

    <VirtualHost *:80>
        ServerAdmin cake17@cake-websites.com
        DocumentRoot "/Users/cake17/sites"
        ServerName local.dev
        ServerAlias www.local.dev
        ErrorLog "/Users/cake17/sites/logs/apache2/sites.com-error_log"
        CustomLog "/private/var/log/apache2/sites-access_log" common
    </VirtualHost>


- Install Mysql

`brew install mysql`, then `mysql.server start` and `mysql.server stop` to start/stop mysql server.


### With Gem

- Jekyll : `sudo gem install jekyll`
- Middleman : `sudo gem install middleman`
- Sass : `sudo gem install sass`
- Compass : `sudo gem install compass`

### With npm

Needs to install node.js for grunt & gulp : `brew install node`

- Grunt : `npm install -g grunt-cli`
- Gulp : `npm install --global gulp`
- Bower : `npm install -g bower`
- Yeoman to generate skeletons (I use it with bespoke.js) : `npm install -g yo`
- Bespoke : `npm install -g generator-bespoke`

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
- Finder, AppStore, Pref, Terminal, Firefox, Safari, Rappels, Itunes, Github, Docker, Atom, PoEdit,
  Imovie, Iphoto, Garage Band, Gimp, Vlc, Skype, Plans, Transfert d'images
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
