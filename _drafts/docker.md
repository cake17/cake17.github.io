---
layout: post
title: Docker
tags: [General]
description: Docker sur un MAC
langs: [fr]
---

Docker entre en jeu pour tenter de résoudre un problème qui existe dès lors
que l'on développe une application, un site web ou tout autre programme
informatique à savoir : `mon programme fonctionne en local mais il ne fonctionne pas
sur le serveur.`

En clair, le serveur qui héberge mon site n'a pas forcément la même
configuration, les mêmes versions d'apache, de nginx, mysql, .... que mon
ordinateur local.

Pour pallier ce problème, les développeurs utilisent souvent les machines
virtuelles qui permettent de lancer en parallèle des OS entiers sur notre
machine. Ainsi en local, on peut recréer entièrement l'OS qui se trouve
sur notre serveur. Faire tourner une machine virtuelle basée sur Linux, sur
son mac n'est plus un problème.

Les inconvénients des machines virtuelles (VM Virtual Machine en english) sont
la taille qu'ils prennent sur notre ordinateur (plusieurs Go de données) et
qu'ils sont long à démarrer (provisionner en langage technique).

Docker permet de s'affranchir de ces limitations. L'idée de Docker est de
créer des containers, sorte de mini machines virtuelles, qui ne
contiendront que des processus isolés les uns des autres. On fait donc
tourner un processus de nginx (serveur web) dans un container, un processus de
mysql dans un autre container et on les lie les uns aux autres. En plus d'être
rapide à démarrer, plusieurs containers peuvent être démarrés en même temps
et on s'imagine tous les avantages que cela va pouvoir avoir pour les différents
tests que l'on va faire subir à notre code.

Envie d'installer et d'utiliser Docker ? Suivez le guide !

Boot2docker et Docker
---------------------

Docker fonctionne directement en natif sur linux, mais pas sur un MAC. On va
avoir besoin d'installer une machine virtuelle très legère, appelée boot2docker
sur laquelle tournera une version de LINUX et sur laquelle on utilisera Docker.

Installer Docker et boot2docker sur un MAC
------------------------------------------

2 possibilités :

- Installer Kitematic, un logiciel avec interface graphique.
  http://docs.docker.com/kitematic/. Docker et boot2docker seront installés
  en même temps.
- Installer seulement docker et boot2docker.
    - Sur la page [https://github.com/boot2docker/osx-installer/releases/tag/v1.6.2](boot2docker/osx-installer).
    - Télécharger le Boot2Docker-x.x.x.pkg dans la section "Downloads".
    - Installer Boot2Docker en double-cliquant sur le package.
    - L'installeur place Boot2Docker dans le dossier "Applications".
    L'installation place les binaires docker et boot2docker dans /usr/local/bin.

Lancer Docker
-------------

Selon l'installation que vous avez choisi, vous avez 2 possibilités :

- Soit ouvrir l'application Kitematic qui se chargera de lancer la machine
  virtuelle Boot2Docker.
- Soit ouvrir l'application boot2Docker qui lancera la machine virtuelle et
  ouvrira un terminal dans lequel vous pourrez executer vos commandes pour
  docker.

Une histoire de containers
--------------------------

Avec Docker, on va pouvoir isoler des processus dans des containers et les lier
les uns aux autres. Cette technique permet d'isoler les processus et ainsi
de pouvoir en lancer plusieurs en parallèle. Par exemple lancer en parallèle
plusieurs containers contenant chacun un serveur apache ne sera plus un soucis.
Le lancement d'un container est tellement rapide, que l'on pourra les lancer ou
les stopper très rapidement (quelques secondes).

Docker-compose, l'outil ultime pour lancer et lier ses containers
-----------------------------------------------------------------

Il vous faudra installer docker-compose qui est un petit outil pour gérer
ses containers: https://docs.docker.com/compose/install/

Pour installer docker-compose :

- curl -L https://github.com/docker/compose/releases/download/1.2.0/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose
- chmod +x /usr/local/bin/docker-compose

Concrètement, dans chaque projet web on aura un fichier docker-composer.yml qui
contiendra l'ensemble des containers à lancer et leurs configurations.

Fini les requirements pour installer tel ou tel programme ! Avoir docker et
docker-compose sur son ordinateur permettra d'installer et de lancer les
containers qui contiendront les processus nécessaires ! Youpi ! Fini les
installations chaotiques de librairies php comme mcrypt.

On aura donc uniquement une commande à lancer et les containers nécessaires à
l'application, définis dans le docker-composer.yml, seront lancés:

    docker-compose up

Et comme par magie, tous les containers contenant des processus comme Apache,
MySql, Jenkins, etc... seront lancés. Ils seront chacun isolés dans des
containers ce qui permettra de relancer ceux que l'on souhaite si besoin. Il
faudra bien sur penser à définir un chemin du dossier du projet (appelé volume
dans Docker) qui sera accessible pour les containers souhaités.

On se rend donc compte que la difficulté va être de bien définir des fichiers
Dockerfile pour chaque processus souhaité.

Créer son Dockerfile
--------------------

Les applications classiques ont déjà toutes créées des Dockerfile à partir
desquels on peut se baser pour créer nos propres Dockerfile.
