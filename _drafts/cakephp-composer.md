---
layout: post
title: CakePHP 3 & Autoload
tags: [General]
description: Auto-chargement des classes dans CakePHP 3 avec Composer
langs: [fr]
---

Petit préambule
===============

Quand on rentre dans le monde merveilleux des objets et des classes, on est souvent
un peu perdu dans toutes les notions de la programmation orientée objet. Je vais
prendre un exemple simple, sans rapport avec CakePHP, avec une classe MaClasse
que je vais créer dans un dossier `/exemple`.

Voilà mon arborescence:

exemple/
    MaClasse.php
    index.php


Et la classe MaClasse.php

{% highlight php linenos %}
<?php
// Dans MaClasse.php
MaClasse
{
    public function __construct()
    {
    }

    public function hello()
    {
        echo "Hello";
    }
}
{% endhighlight %}


Dans le fichier index.php, dans le cas où je n'utilise pas d'autoload, je vais
faire ceci:

{% highlight php linenos %}
<?php
// Dans index.php
// J'inclue la classe
require "MaClasse.php";

$maClasse = new MaClasse();
$maClasse->hello();
{% endhighlight %}

Si vous ouvrez votre page index.php dans votre navigateur, vous devriez voir
`Hello` affiché.


Les normes PSR0, PSR1, PSR2, PSR3 et PSR4
=========================================

Ces normes ont été créées et votées par l'ensemble des frameworks PHP.
Elles facilitent l'utilisation des librairies d'un framework à l'autre en dotant
le monde PHP de normes d'écritures et de création .


La norme PSR4
=============

CakePHP utilise la norme PSR4. Elle remplace la norme PSR0 qui est donc
maintenant dépréciée au profit de PSR4.

Vous pouvez aller consulter le texte "officiel" de la norme PSR4-autoloader
[sur github](https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-4-autoloader.md).


Problème soulevé
================

on se rend rapidement compte que certaines tâches sont répétitives comme
l'inclusion des classes avec les require.


Namespaces
==========

Comment Composer nous aide pour l'auto-chargement des classes
=============================================================
