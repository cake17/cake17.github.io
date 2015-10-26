---
layout: post
title: Docker
tags: [General]
description: Docker sur un MAC
langs: [fr]
---

Docker entre en jeu pour tenter de résoudre un problème qui existe dès lors
que l'on développe une application, un site web ou tout autre programme
informatique à savoir : "mon programme fonctionne en local mais il ne fonctionne pas
sur le serveur."

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

Docker Toolbox
--------------

Docker fonctionne directement en natif sur linux, mais pas sur un MAC.
Téléchargez `Docker Toolbox` qui va s'occuper de toute l'installation
de tous les logiciels dont vous aurez besoin pour faire fonctionner
Docker.

Installer Docker sur un MAC
---------------------------

Suivez les instructions de [la page](http://docs.docker.com/mac/step_one).

Lancer Docker
-------------

Lancez LaunchPad et choisissez `Docker Terminal`. Vous avez aussi la possibilité
de lancer `Kitematic` qui est une version graphique de Docker mais je trouve
qu'on comprend mieux le fonctionnement et qu'on a accès à toutes les
fonctionnalités de docker grâce au terminal.

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
ses containers: https://docs.docker.com/compose/install/. A priori, il est
déjà installé si vous avez installé Docker avec la docker-toolbox.

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
