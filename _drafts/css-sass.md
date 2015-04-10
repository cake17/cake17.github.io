---
layout: post
title: Css, Sass
tags: [General]
description: Decrypt sass language
langs: [fr]
---

## Historique

Le CSS est un langage qui permet de définir l'apparence, l'aspect visuel d'un
document Html.
Ce langage est apparu à l'origine pour désolidariser le contenu de la page
(textes, liens) et l'apparence de la page (par exemple tous les titres h2 sont
en vert).
Je vous recommande de lire ce petit
[guide de conventions pour le CSS et le html](http://codeguide.co) écrit
par le créateur de bootstrap.

Mise en place de CSS dans une page HTML:

{% highlight html %}
    <html>
        <head>
            <link rel="stylesheet" href="style.css">
        </head>
        ..
{% endhighlight %}

Vous verrez sans doute `type="text/css"` ajouté dans la balise link, mais il
n'est pas nécessaire de l'ajouter selon les conventions auxquels je fais
référence plus haut.

On a donc inclus un lien vers la page CSS `style.css` dans laquel on va
mettre notre code CSS. On peut bien sûr inclure autant de fichiers CSS que
l'on souhaite en ajoutant autant de lien dans le <head> de notre page Html.

Maintenant nous allons pouvoir modifier l'apparence des id et des classes des
éléments de notre page.

Par exemple `<div class="red">Ce texte est écrit en rouge</div>`. On va
ajouter une ligne dans le fichier `style.css` comme ce qui suit::

{% highlight css %}
    .red {
        font-color: red;
    }
{% endhighlight %}

On peut donc ajouter `red` aux classes des éléments pour obtenir des éléments
écrits en rouge.

Maintenant pour les designs, il est recommandé de ne pas surcharger les pages
avec trop de couleurs. Je peux vous conseiller [ce site](http://paletton.com)
qui permet de choisir des couleurs qui vont bien ensemble.

Il serait pratique de pouvoir définir des variables de couleur du genre
`$white = "#fff";` à insérer au début de notre code CSS et que l'on pourrait
récupérer dans chaque element CSS souhaité. C'est à cause de cette limitation de
CSS que les langages SASS, SCSS ou LESS ont été créés.

## Préprocesseur

Les navigateurs ne peuvent que lire des fichiers CSS, et pas les fichiers SCSS,
SASS ou LESS. C'est pour cela que l'on doit d'abord créer un fichier CSS à
partir des fichiers SCSS, SASS ou LESS. C'est ce que l'on appelle le
preprocessing.

## SASS ou SCSS

Les 2 langages sont les mêmes mais le SASS est moins verbeux. On ne met pas de
`;` à la fin des instructions, on saute une ligne à la place. De même, les
parenthèses ne sont pas utilisées et on indente le code à la place. Je préfère
utiliser le SCSS, plus verbeux mais qui évite les erreurs d'indentation.

## Avantage

Le principal avantage de ce découplement est que l'on va pouvoir réutiliser du
CSS pour plusieurs elements HTML.

Prenons l'exemple de 2 elements html:
    <div class="round">Boite ronde</div>
    <div class="round">Autre boite ronde dans la page</div>

Le CSS:

{% highlight css %}
    .round {
        -moz-border-radius: 15px;
        border-radius: 15px;
    }
{% endhighlight %}

Ainsi les deux boites seront arrondis.

## Défaut

Maintenant, voyons le principal défaut du CSS: son côté statique. En effet,
voici ce que l'on ne peut pas faire avec des feuilles CSS:
- utiliser de variables
- imbriquer des règles
- importer d'autres fichiers de CSS
- faire des mixins
- faire un héritage/étendre des règles
- faire des opérations : *, +, ...

Toutes ces limitations vont être outrepassées grâce au langage SASS. On va
écrire notre code en sass avec les possibilités listées ci-dessus, puis on va
mouliner ce sass pour en sortir une belle feuille CSS que tous les navigateurs
pourront lire.

## Passer du SASS au CSS

Pour cela on va utiliser un framework comme Compass.


## Références

- http://sass-lang.com/guide
