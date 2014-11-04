---
layout: post
title: Css, Sass
tags: [General]
description: Decrypt sass language
langs: [fr]
---

## Historique

Le css est un langage qui permet de définir l'apparence, l'aspect visuel d'un document Html.
Ce langage est apparu à l'origine pour désolidariser le contenu de la page (textes, liens) et l'apparence de la page (par exemple tous les titres h2 sont en vert).

## SASS ou SCSS

Les 2 langages sont les mêmes mais pour le SASS est moins verbeux. On ne met pas de `;` à la fin des instructions, on saute une ligne à la place. De même, les parenthèses ne sont pas utilisées et on indente le code à la place.

## Avantage

Le principal avantage de ce découplement est que l'on va pouvoir réutiliser du css pour plusieurs elements HTML.

Prenons l'exemple de 2 elements html:
    <div class="round">Boite ronde</div>
    <div class="round">Autre boite ronde dans la page</div>

Le css:
    .round {
        -moz-border-radius: 15px;
        border-radius: 15px;
    }

Ainsi les deux boites seront arrondis.

## Défaut

Maintenant, voyons le principal défaut du css: son côté statique. En effet, voici ce que l'on ne peut pas faire avec des feuilles css:
- utiliser de variables
- imbriquer des règles
- importer d'autres fichiers de css
- faire des mixins
- faire un héritage/étendre des règles
- faire des opérations : *, +, ...

Toutes ces limitations vont être outrepassées grâce au langage SASS. On va écrire notre code en sass avec les possibilités listées ci-dessus, puis on va mouliner ce sass pour en sortir une belle feuille css que tous les navigateurs pourront lire.

## Passer du SASS au CSS

Pour cela on va utiliser un framework comme Compass.

## Grunt

Tool to acts on js files : minify, compile, test, ...

### Installation

You need node.js : `brew install node`

Then : `npm install -g grunt-cli`


## Références

- http://sass-lang.com/guide
