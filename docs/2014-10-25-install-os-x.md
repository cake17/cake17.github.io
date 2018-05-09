---
# layout: post
title: Installer Mac OS X El Capitan 10.11
# tags: [General]
# description: Un reminder pour ma clean install de El Capitan
# lang: fr
---

**Last-Update : 2015-06-19**

## A faire avant l'installation

Faire une sauvegarde:

- des `/Documents` : via rsync
- des clés ssh
- de .bash_profile et .gitconfig
- des `/sites`

## Clean Install El Capitan

Note: pour le Macbook Pro, il vaut mieux brancher une souris car le click du trackpad est désactivé pendant l'installation.

- Télécharger El Capitan sur le site d'Apple

- Faire une clé usb bootable : dans le terminal avec XXXX = nom de la Clé

```bash
sudo /Applications/Install\ OS\ X\ El\ Capitan.app/Contents/Resources/createinstallmedia `--`volume /Volumes/XXXX `--`applicationpath /Applications/Install\ OS\ X\ El\ Capitan.app `--`nointeraction
```

Voici ce que vous allez voir dans votre terminal si tout se déroule bien.

![Install Ok](/public/img/install_os_x_ok.png)

- Redémarrer l'ordi avec la clé branchée. Appuyer sur la touche Option.
  ![Schéma CakePHP docs](/public/img/touche_option_mac.jpg)

- Allez dans l'Utilitaire de disques et effacez la partition de votre volume. Fermer l'utilitaire et lancez l'installation.


## Options changées

### Général

- Settings/Trackpad : Toucher pour cliquer, sens du défilement naturel à décocher
- Deplacer/glisser avec 3 doigts est dans «accessibilité» maintenant
- Mise en veille et sécurité
- Activer le coupe-feu
- Bureau
    - trier par : aligner sur la grille
    - options de présentation : diminue la taille des icônes & espacement, taille du texte à 11
- Ajout des clés et réglages ssh dans `.ssh/`
- code wifi
- configurer l'imprimante : Au branchement de l'imprimante, Apple Software Update devrait proposer d'installer le logiciel pour l'imprimante. Si ce n'est pas le cas, vous pouvez télécharger le [logiciel](https://support.apple.com/kb/DL907?locale=fr_FR)

### Finder

- barre left : cake17, sites, Documents, Applications, Bureau, Téléchargement, AirDrop
- options de présentation : Par liste
- general : Nouvelles fenêtres s’ouvrent dans "Documents"
- afficher les fichiers cachés
- afficher barre d'état et barre du chemin d'accès

### Dock

Le mettre à gauche et ajouter Finder, Launchpad, AppStore, Pref, Terminal, Firefox, Itunes, Atom, Netbeans, Gimp, Colloquy, PoEdit, Rappels, Imovie, Garage Band, Transfert d'images, Libre Office - Téléchargement, Corbeille

### Clavier

- Mettre en `français numérique` pour pouvoir utiliser les majuscules avec la touche Verrouillage Majuscule.
- Guillemets double et simple à changer


## Softwares Téléchargés

### Via l'App Store

- Xcode (le lancer et accepter les conditions)
- Imovie
- GarageBand

### Via le Terminal

Pour installer le command-line developer tools:

    xcode-select --install

### Via [Homebrew](http://brew.sh) (for bin installation) & [Brew Cast](http://caskroom.io) (for app installation) & my shell

Use the mac_install.sh script to install apps and bins:

- Ajoutez ceci dans .bash_profile:

```bash
if [ -f `brew --prefix`/etc/bash_completion ]; then
  . `brew --prefix`/etc/bash_completion
fi
```


### Via le navigateur

- Firefox + sync
