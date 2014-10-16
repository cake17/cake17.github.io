Dependancy Managers
===================

## Pear : Not used anymore

## Composer

Used for CakePHP 3.x

CakePHP 3 sort courant 2014 et utilise Composer pour l'installation de dépendances. Que ce soit pour créer un projet CakePHP, le mettre à jour, installer des plugins CakePHP ou des librairies externes, il va être obligatoire de regarder un peu le fonctionnement de Composer.

### Installation de Composer sur MAC OS 10.9

	$ curl -sS https://getcomposer.org/installer | php
	$ mv composer.phar /usr/local/bin/composer

et ensuite on peut utiliser la commande **composer** partout (si `usr/local/bin` est dans le PATH)

### Création d'un projet CakePHP

Elle se fait en une commande avec Composer en se plaçant avec `cd` dans le répertoire où l'on veut installer le nouveau projet

	cd /path/to/project
	composer create-project -s dev cakephp/app

### Fonctionnement de Composer

Le fonctionnement est simple : on ajoute un fichier composer.json à la racine de son projet et on rentre dedans les dépendances dont on a besoin. Ensuite on lance dans le terminal une commande :

	composer install (pour la première execution)
	composer update (celle qu'on utilisera le plus souvent pour mettre à jour les dépendances, plugins)

#### Rappel de l'arborescence de CakePHP 3

Src
plugins
logs
tmp
vendor
webroot
.htaccess
composer.json
index.php
README.md

C'est dans le fichier composer.json que vous allez définir les plugins et dépendances dont votre projet CakePHP va avoir besoin.

Un exemple simple de ce fichier :

{
	"name": "votreNom/nomApp",
	"description": "mon application perso",
	"homepage": "<a href="http://www.monapp.com" rel="" target="">http://www.monapp.com</a>",
	"type": "project",
	"license": "MIT",
	"require": {
		"cakephp/cakephp": "3.0.*-dev",
		"FriendsOfCake/crud": "dev-cake3",
		"cakephp/debug_kit": "dev-master",
		"votreNom/pluginName": "dev-master",
		"php": "&gt;=5.4"
	},
	"repositories": [
		{
			"type": "vcs",
				"url": "git@bitbucket.org:votreNom/pluginName.git"
		},
	],
	"autoload": {
		"psr-4": {
			"App\\": "App",
			"App\\Test\\": "Test",
			"": "./Plugin"
		}
	},
	"scripts": {
		"post-install-cmd": "App\\Console\\Installer::postInstall"        }
	}

#### Quelques explications :

* Les premières lignes définissent votre projet
* Dans **require**, vous mettez les dépendances, plugins, vendors dont vous avez besoin pour votre projet
* Dans **repositories**, vous pouvez ajouter les adresses de package privés, qui ne sont pas repertoriés sur <a href="https://packagist.org/" rel="" target="">https://packagist.org/</a>. CakePHP est disponible sur Packagist, ainsi que la plupart des Plugins donc cela ne sert que si on crée ses propres Plugins.
* Dans **autoload**, on définit les conventions qu'utilise CakePHP 3, en l'occurence psr-4 : <a href="https://github.com/php-fig/fig-standards/blob/master/proposed/psr-4-autoloader/psr-4-autoloader.md" rel="" target="">https://github.com/php-fig/fig-standards/blob/master/proposed/psr-4-autoloader/psr-4-autoloader.md</a>
* Dans **scripts**, on peut ajouter des scripts à exécuter avant, après avoir fait un update.

#### Problème des .git des plugins

En effet lorsque les dépendances sont installées dans le projet, le dossier caché .git du plugin est ajouté dans le dossier du plugin. Cela pose problème avec le versionning du projet dans sa globalité puisqu'il va considérer le plugin comme un submodule. Or on sait que les submodules sont une catastrophe à gérer.

Voir les solutions à ce problème : [https://getcomposer.org/doc/faqs/should-i-commit-the-dependencies-in-my-vendor-directory.md](https://getcomposer.org/doc/faqs/should-i-commit-the-dependencies-in-my-vendor-directory.md)

#### Exemple de composer.json pour un plugin CakePHP

{
	"name":"votreNom/nomPlugin",
	"version": "1.0.0",
	"description":"CakePHP Application Plugin super top qui fait ça et ça",
	"type":"cakephp-plugin",
	"keywords":[
		"cakephp",
		"mot clé1",
		"mot clé2"
	],
	"homepage":"https://github.com/votreNom/nomPlugin",        "license":"MIT",
	"authors":[
		{
			"name":"Votre Nom",
			"role":"Author",
			"homepage":"http://www.votrePageWeb.com/"
		},
		{
			"name":"Nom autre pers si nécessaire",
			"role":"Contributor",
			"homepage":"https://github.com/votreNom"
		}
	],
	"require":{
        "composer/installers":"*"
    },
    "require-dev": {
    	"cakephp/cakephp": "3.0.x-dev"
	},
	"suggest":{
	},
	"autoload": {
		"psr-4": {
			"Crud\\": "."
		}
	},
	"support": {
		"source":"https://github.com/votreNom/nomPlugin",
		"issues":"https://github.com/votreNom/nomPlugin/issues",
		"wiki":"http://www.wiki.com/",
		"irc":"irc://irc.freenode.org/votreIrc"
	},
	"extra": {
		"installer-name": "NomDuPlugin"
	}
}

## Homebrew

Used to install and update tools on my MAC
http://brew.sh/

### Install

	ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

### Usage

To check your installation : `brew doctor`

To install a package : `brew install package_name`

Everything is install in the `usr/local/Cellar` directory, so it can be uninstall easily : `brew uninstall package_name`

List all tap used : `brew tap`

