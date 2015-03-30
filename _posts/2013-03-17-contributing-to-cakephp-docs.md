---
layout: post
title: Contribuer aux docs de CakePHP
tags: [General]
description: Tout ce dont vous avez besoin pour aider à traduire la documentation de CakePHP
langs: [fr]
comments: true
---

Bonjour,

Après avoir utilisé le framework CakePHP pendant environ un an, je me suis lancé dans la traduction de la documentation.

La documentation de CakePHP était étoffée en ce qui concerne la version 1.3, mais la dernière version 2.0 n'était qu'en anglais.

Après avoir consulté le forum français [http://forum.cakephp-fr.org/](http://forum.cakephp-fr.org/), je me suis aperçu qu'il fallait aller sur github, un site de partage de codes sources et notamment de codes libres.
Avec azur, un membre de cakephp.org, nous avons donc récupéré la version anglaise et traduit pendant l'été l'intégralité de la documentation de la version 2.0.

Un problème subsiste, il s'agit du maintien de la doc, puisqu'elle évolue tous les jours en anglais. Pour vérifier cela il faudrait regarder chaque commit fait sur la doc anglaise et changer un à un les fichiers concernés. Cela demande un travail assez important mais qui serait facilité si on pouvait se répartir le fardeau. Je vais donc mettre à la suite la procédure pour participer à la documentation sur Github en essayant de détailler au maximum car l'utilisation de git n'est pas aisée au départ.

CakePHP 3 sort bientôt et la documentation est en train d'être remaniée sur github. La modification de la documentation se fait sur [https://github.com/cakephp/docs](https://github.com/cakephp/docs).

* CakePHP 2 : branche master
* CakePHP 3 : branche 3.0

L'affichage de la doc se trouve :

* CakePHP 2 : [CookBook](http://book.cakephp.org/2.0/fr/index.html)
* CakePHP 3 : (en beta) [CookBook](http://book.cakephp.org/3.0/fr/index.html)

### QUI TRADUIT ?

Tout le monde peut contribuer à la traduction. Tous les avis sont les bienvenus alors n'hésitez pas à aller sur le [forum](http://forum.cakephp-fr.org/viewforum.php?id=14) pour discuter de la traduction.
Le groupe github cakephp-fr regroupant les traducteurs se trouve [ici](https://github.com/cakephp-fr). Si vous voulez en faire partie, demandez-le dans le [forum](http://forum.cakephp-fr.org/viewforum.php?id=14) ou via github.

### COMMENT TRADUIRE ?

Ci-dessous les étapes pour participer à la traduction :

1. Installez Git sur votre ordinateur comme expliqué [ici](http://git-scm.com/book/fr/D%C3%A9marrage-rapide-Installation-de-Git) et inscrivez-vous gratuitement sur [Github](https://github.com/signup/free). Vous pouvez aussi installer le logiciel avec interface graphique sur github dans la section téléchargements.

2. Forkez le dépôt officiel de la doc de cakephp [ici](https://github.com/cakephp/docs). Forker veut dire faire une copie du dépôt de la doc officiel `cakephp / docs` sur le serveur de github mais à votre nom `votreNom / docs` (cliquez sur `Fork` en haut à droite de la page des [docs](https://github.com/cakephp/docs)).

3. Vous pourrez ainsi cloner votre dépôt (= récupérer les fichiers sur votre ordinateur) que vous venez de forker et le modifier sur votre ordinateur (Cliquez sur `clone in Desktop` à droite de la page de votre fork https://github.com/votreNom/docs et choisissez l'endroit où vous voulez mettre le dossier des docs sur votre ordinateur).
   Un petit schéma pour récapituler les points 2 et 3:

   ![Schéma CakePHP docs]({{ site.baseurl }}/public/img/schema_cakephp_docs.png)

4. Creez une nouvelle branche
Avec Git en général, il est toujours mieux de ne pas directement travailler sur les branches, mais de créer une nouvelle branche pour faire ses modifications. Cela permet de mettre à jour ses branches locales avec les branches du remote sans avoir de conflits.
Je vais prendre l'exemple du modification que l'on souhaite faire à la branche 3.0:

{% highlight bash linenos %}
// dans votre terminal, on va dans le dossier des docs
cd chemin/vers/docs
// on va sur la branche 3.0
git checkout 3.0
// On créé une nouvelle branche à partir de la 3.0 et on va dessus
git checkout -b 3.0-fr-name-of-change
{% endhighlight %}

5. Modifier les fichiers de la doc sur votre ordinateur (attention de bien mettre votre éditeur en utf8) et pusher vos modifications vers votre dépôt github:

{% highlight bash linenos %}
// dans votre terminal, on va dans le dossier des docs (si ce n'est pas déjà le cas)
cd chemin/vers/docs
// pour voir les fichiers que vous avez modifié
git status
// pour les ajouter et créer un commit
git add --all
git commit -a -m "[fr] Follow #1111 from english version"
// envoi vers votre fork
git push origin 3.0-fr-name-of-change
{% endhighlight %}

6. Retour sur le site de github sur la page de votre fork https://github.com/votreNom/docs et envoyez une pull request (icone verte à gauche à côté des branches) en comparant les branches 3.0 et 3.0-fr-name-of-change.

7. Cas particulier : quand vous clonez votre dépôt sur votre ordinateur, toutes les branches sont normalement présentes. Dans le cas où la branche 3.0 (ou tout autre branche) n'est pas présente, vous pouvez faire ceci:

{% highlight bash linenos %}
// on récupère les branches, tags, etc... du remote
git fetch origin
// on créé la branche à partir du remote et on va dessus
git checkout --track origin/3.0
{% endhighlight %}

Ça parait un peu compliqué au début, mais à long terme, ça vaut vraiment le coup d'utiliser git pour versionner ses projets. Accrochez-vous et ça coulera bientôt de source ! En plus la majorité des projets open source utilisent git et github, donc l'installation servira !

**Plus d'aide**

[https://help.github.com](https://help.github.com)

[http://rogerdudler.github.io/git-guide/index.fr.html](http://rogerdudler.github.io/git-guide/index.fr.html)

### COMMENT BIEN TRADUIRE ?

Quelques règles pour bien traduire se trouvent [ici](http://book.cakephp.org/3.0/fr/contributing/documentation.html).

Par convention, vous pouvez ajouter [fr] au début de chaque nom de commit, et l'écrire en anglais, par exemple `[fr] fix typo in save()`

Il est préférable de garder les termes anglais (c'est bien sûr contestable ...) pour les termes techniques comme : controller, model, helper, component, etc... Je trouve que le fait de les traduire risque de perdre le lecteur (j'en parle par expérience).

### ENCORE PLUS DE TRADUCTIONS ....

D'autres projets autour de CakePHP n'ont toujours pas de traduction française. Je pense notamment à :

* Croogo : CMS basé sur CakePHP : [https://github.com/cakephp-fr/docs-croogo](https://github.com/cakephp-fr/docs-croogo)
* Les Plugins (à voir les plus utilisés sur github)
* Localized : Dépôt officiel sur le compte github de cakephp : [https://github.com/cakephp/localized](https://github.com/cakephp/localized)

En espérant vous avoir donné envie de participer à ce travail de traduction!

### Outils pour générer la documentation

Plus d'infos dans [cet article](http://cake17.github.io/2014/11/04/sphinx.html)
