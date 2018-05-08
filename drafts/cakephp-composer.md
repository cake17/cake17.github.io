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

```php
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
```


Dans le fichier index.php, dans le cas où je n'utilise pas d'autoload, je vais
faire ceci:

```php
<?php
// Dans index.php
// J'inclue la classe
require "MaClasse.php";

$maClasse = new MaClasse();
$maClasse->hello();
```

Si vous ouvrez votre page index.php dans votre navigateur, vous devriez voir
`Hello` affiché.

Les normes PSR0, PSR1, PSR2, PSR3 et PSR4
=========================================

Ces normes ont été créées et votées par les contibuteurs principaux de PHP, que ce soit les créateurs de frameworks ou de libraires.
Elles facilitent l'utilisation des librairies d'un framework à l'autre en dotant
le monde PHP de normes communes d'écritures et de création .

La norme PSR4
=============

CakePHP utilise la norme PSR4. Elle remplace la norme PSR0 qui est donc
maintenant dépréciée au profit de PSR4.

Vous pouvez aller consulter le texte "officiel" de la norme PSR4-autoloader
[sur github](https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-4-autoloader.md).

Problème soulevé
================

On se rend rapidement compte que certaines tâches sont répétitives comme
l'inclusion des classes avec les require.
Il faut pour commencer que chaque fichier contienne
une et et une seule classe. Le fichier doit porter le
nom de la classe qu'il contient. Exemple:

```php
<?php
// dans le fichier NomDeLaClasse.php
class NomDeLaClasse
{
}
```

Le nom de la classe doit être avec des majuscules pour chaque mot. Il NE DOIT PAS être de type ma_classe.php ou ma-classe.php ou encore maClasse.php.

On va aussi rajouter la notion de namespaces.

Namespaces
==========

Les namespaces (en français espace de noms) permettent de séparer les classes pour éviter d'avoir des collisions de méthodes. Par convention on utilise le chemin
vers le dossier.

Prenons le fichier de MaClasse.php qui va devenir:

```php
<?php
//
namespace MonApp;

use MonAutreClasse;

class MaClasse
{
    // methods ...
}
```


Comment Composer nous aide pour l'auto-chargement des classes
=============================================================

Lorsque l'on lance la commande `composer dumpautoload`, Composer créé les fichiers
qui font le lien entre les namespaces et les chemins des classes automatiquement.

Il nous suffira d'inclure le fichier de base qui se trouve dans `/vendor/autoload.php`. Vous pouvez l'ouvrir pour voir qu'il inclut tous les
fichiers qui se trouvent dans `/vendor/composer/`.
