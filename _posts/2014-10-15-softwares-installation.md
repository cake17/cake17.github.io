---
layout: post
title: Softwares Installation
tags: [General]
description: Install softwares on a MAC
langs: [fr]
---

## Apache

### Description

Permet d’héberger des sites

Démarrer Apache : sudo apachectl start
Re-démarrer Apache : sudo apachectl restart
Stopper Apache : sudo apachectl stop


### Virtual hosts

Pour pouvoir travailler sur plusieurs sites, on utilise les Virtual Hosts et les entrées DNS.

### Local DNS entries

D'abord vous devez entrer vos entrées DNS local – yoursite.dev, test.local ou ce que vous préférez.

Vous pouvez ajouter autant d'entrées que vous le souhaitez dans le fichier
`/etc/hosts`:

	sudo vim /etc/hosts

Quand ce fichier est ouvert, vous pouvez ajouter une nouvelle ligne pour chaque
domaine:

	127.0.0.1    test.local

Utilisez l'adresse IP 127.0.0.1 puisqu'elle pointe vers votre machine locale.

Une fois que c'est fait, sauvegardez le fichier et ouvrez `http://test.local/` dans un navigateur. Vous devriez voir la page “It works!”.

En effet, Apache charge le site par défaut.

Il n'y a pas de virtual hosts configurés pour le moment, donc tout pointe vers le site racine.

### Créer un répertoire pour les sites

Commencez un nouveau site dans le dossier /Sites et créez un nouveau site avec
une seule page:

	cd ~/Sites
	mkdir test.local
	cd test.local
	echo "Ceci est un test.local" > index.html

Le dossier aura un fichier appelé index.html qui contient
"Ceci est un test.local".

### Créer un virtual host

Pour que Apache charge le fichier index.html, vous devez créer un hôte virtuel
qui pointe vers le dossier que vous avez créé. Entrez ceci:

	sudo vim /etc/apache2/httpd.conf

et décommentez la ligne:

	Include /private/etc/apache2/extra/httpd-vhosts.conf

Puis ouvrez le fichier des vhosts:

	sudo vim /etc/apache2/extra/httpd-vhosts.conf

Par défaut ce fichier contient ce qui suit:

	<Directory "/Users/username/Sites/">
		Options Indexes MultiViews
		AllowOverride None
		Order allow,deny
		Allow from all
	</Directory>

Ajoutez ceci:

    NameVirtualHost *:80

	<Directory "/Users/username/Sites/">
		Options Indexes MultiViews Includes
		AllowOverride All
		Order allow,deny
		Allow from all
	</Directory>

	<VirtualHost *:80>
		ServerName test.local
		DocumentRoot /Users/username/Sites/test.local
	</VirtualHost>

Maintenant sauvegardez le fichier et redémarrez Apache en entrant ceci:

    sudo apachectl graceful

Une fois qu'Apache a redémarré, allez à http://test.local/ et vous devriez
voir "This is test.local". Succès!
Repetez ces étapes pour chaque site que vous souhaitez configurer.


## MySql

Permet de faire fonctionner un serveur MySql

Install : `brew install mysql`

Voir la version de mySql:

	mysql -v
	(la mienne : Server version: 5.6.11 MySQL Community Server (GPL))

Commande pour sortir de mysql : `quit ou exit`

### Launch and stop

Lancez : `mysql.server start`

Stop : `mysql.server stop`

Re-démarrez Apache : `sudo apachectl restart`

L'installation de Startup Item ajoute une variable `MYSQLCOM=-YES-` au fichier de configuration du système `/etc/hostconfig`. Si vous voulez désactiver le démarrage automatique de MySQL, changez simplement cette variable en
`MYSQLCOM=-NO-`.

### Secure Mysql

Run `mysql_secure_installation` in terminal and follow instructions.


## PhpMyAdmin

To handle MySql databases.
I know prefer `Adminer` as it's lighter.

### Installation

- PhpMyAdmin : `brew install phpmyadmin`

Faites une copie de
“/Library/WebServer/Documents/phpMyAdmin/config.sample.inc.php” dans le même
répertoire et renommez la copie en `config.inc.php`.

Modifiez “config.inc.php” et mettez la variable “AllowNoPassword” à true.

Cela va nous permettre de nous connecter à MySQL avec l'user `root` avec un mot
de passe vide.

	$cfg['Servers'][$i]['AllowNoPassword'] = true;

Allez avec votre navigateur à l'adresse : http://localhost/phpMyAdmin/.

Connectez vous avec l'utilisateur `root` et laissez le mot de passe vide.

- Adminer

Download it and create a virtual host to launch it

## Jenkins

Install : `brew install jenkins`

Note: When using launchctl the port will be 8080.

To have launchd start jenkins at login:

		mkdir -p ~/Library/LaunchAgents
		ln -sfv /usr/local/opt/jenkins/*.plist ~/Library/LaunchAgents

Then to load jenkins now:

		launchctl load ~/Library/LaunchAgents/homebrew.mxcl.jenkins.plist

Or, if you don't want/need launchctl, you can just run:

		java -jar /usr/local/opt/jenkins/libexec/jenkins.war

Permet de faire de l’intégration continue.

Start Jenkins

	sudo launchctl load /Library/LaunchDaemons/org.jenkins-ci.plist

Stop Jenkins

	sudo launchctl unload /Library/LaunchDaemons/org.jenkins-ci.plist


## XDebug

Site officiel : http://xdebug.org/


## Text Editors

- Atom : I know use this one as it's the one developed by Github. Light but functionnal.
- NetBeans : I used it a while, it's really complete but it's a little slow on my machine.
- Sublime Text 3 is also a great editor.
