---
title: PHP Extensions
description: Quelles extensions PHP faut-il installer ?
---

Ayant eu l'habitude d'utiliser MAMP, je n'ai jamais trop prêté attention à l'installation de PHP et de ses extensions.

Or je tente d'apprendre docker et lorsque je créé des dockerfile qui installent php, je ne sais pas quelles extensions sont nécessaires, lesquelles sont dépréciées, etc...

Je voudrais donc faire un petit résumé des extensions PHP, et plus précisément pour PHP 5.6.

## Où trouver les extensions PHP ?

Les extensions pour PHP se trouvent [ici](https://pecl.php.net/) ou encore sur la [doc PHP](https://php.net/manual/fr/extensions.alphabetical.php) mais j'ai un peu de mal à me repérer sur ces 2 sites.

De même, les extensions obsolètes ou à ne pas utiliser de la [doc PHP](https://php.net/manual/fr/extensions.state.php) n'ont pas l'air d'être à jour.

## Quelles extensions sont installées par défaut avec php-fpm ?


Rien ne vaut un test dans le réél. J'ai lancé un container avec docker qui contient la dernière version de Debian, appelée Jessie:

```bash
docker run -t -i debian:jessie /bin/bash
```

Je suis donc dans le bash de ma version containerisée de Jessie et je vais pouvoir tester des installations de php5.

Je commence par installer php5-fpm qui semble être la version la plus avancée de php. On peut lire un résumé des avantages/inconvénients sur [cette page](http://php.net/manual/fr/install.fpm.php):

```bash
apt-get install php5-fpm
```

J'insiste sur le fait qu'il faille utiliser php-fpm et de **ne** surtout **plus** utiliser mod_php.

Dans mon terminal, je vais pouvoir trouver les modules qui sont installés avec la commande `php -m`. En effet l'installation de php5-fpm va installer les extensions PHP dépendantes dont il a besoin pour fonctionner.

## Liste complète des modules

Voici la [liste complète des extensions](https://php.net/manual/fr/extensions.alphabetical.php) et une [liste plus restrictive](https://pagodabox.io/docs/php_extensions?c=5-6&) qui me semble meilleure car certains modules anciens ont été purgés. Les modules qui ont été installés sur ma machine avec sont en gras:

<!-- php_extensions:
  - amqp
  - apfd
  - apm
  - **bcmath**
  - **bz2**
  - **calendar**
  - **Core**
  - **ctype**
  - curl
  - **date**
  - **dba**
  - **dom**
  - enchant
  - **ereg**
  - **exif**
  - **fileinfo**
  - **filter**
  - **ftp**
  - gd
  - gender
  - geoip
  - **gettext**
  - gmp
  - gnupg
  - **hash**
  - htscanner
  - http
  - **iconv**
  - igbinary
  - imagick
  - imap
  - intl
  - **json**
  - json_post
  - ldap
  - **libxml**
  - lzf
  - magickwand
  - **mbstring**
  - mcrypt
  - memcache
  - memcached
  - **mhash**
  - mogilefs
  - mongo
  - mongodb
  - mssql
  - mysql : DEPRECIE
  - mysqli
  - ncurses
  - newrelic
  - newt
  - oauth
  - **openssl**
  - **pcntl**
  - **pcre**
  - **pdo**
  - pdo_dblib
  - pdo_mysql
  - pdo_odbc
  - pdo_pgsql
  - pdo_sqlite
  - pgsql
  - phalcon
  - **phar**
  - phpwkhtmltox
  - **posix**
  - propro
  - pspell
  - radius
  - raphf
  - rar
  - **readline**
  - recode
  - redis
  - **Reflection**
  - **session**
  - **shmop**
  - **simplexml**
  - snmp
  - **soap**
  - **sockets**
  - sphinx
  - **SPL**
  - ssh2
  - **standard**
  - stats
  - stomp
  - svn
  - **sysvmsg**
  - **sysvsem**
  - **sysvshm**
  - tidy
  - timezonedb
  - **tokenizer**
  - txforward
  - uploadprogress
  - **wddx**
  - xcache
  - **xml**
  - **xmlreader**
  - xmlrpc
  - **xmlwriter**
  - xsl
  - yaml
  - **zip**
  - **zlib**
php_zend_extensions:
  - **Zend opcache**
  - xdebug -->

Autre info: Le module mcrypt n'est plus maintenu, il est donc préferable de ne pas l'installer.

## Configuration de PHP et des extensions

2 autres commandes me semblent intéressentes pour regarder la configuration de PHP:
- php -i : correspond au phpinfo() dans le navigateur
  Les extensions et leurs configurations sont affichées
- php --ini : infos sur les fichiers de configuration (=initialisation) utilisés
  Configuration File (php.ini) Path: /etc/php5/cli
  Loaded Configuration File: /etc/php5/cli/php.ini
  Scan for additional .ini files in: /etc/php5/cli/conf.d
  Additional .ini files parsed:      /etc/php5/cli/conf.d/05-opcache.ini,
  /etc/php5/cli/conf.d/10-pdo.ini,
  /etc/php5/cli/conf.d/20-json.ini,
  /etc/php5/cli/conf.d/20-readline.ini

On se rend compte que selon le contexte (fpm, la console=cli, etc..), l'initialisation des modules n'est pas faite par le même fichier.
Pour le navigateur, le fichier se trouve dans `/etc/php5/fpm/php.ini`.
Pour la console, le fichier se trouve dans `/etc/php5/cli`.

La configuration de php ne doit jamais se faire dans les php.ini. En effet, si l'on met à jour php et que le php.ini a changé, l'installation va écraser le php.ini que vous aviez configuré. La bonne façon est:
- de faire une configuration par dossier avec les [fichiers .user.ini](https://php.net/manual/fr/configuration.file.per-user.php).
- d'utiliser les php_value dans les fichiers de configuration de php-fpm : pool.conf
