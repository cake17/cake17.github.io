---
layout: post
title: Grunt & Gulp
tags: [General]
description: Grunt & Gulp - 2 outils pour les mêmes besoins
langs: [fr]
---

### Grunt && Gulp

Grunt et Gulp sont 2 outils qui permettent d'automatiser des tâches habituelles
lorsque l'on développe des sites web. Par exemple, vous pourrez faire les
tâches suivantes:

- minifier un css : c'est à dire enlever tous les espaces se trouvant dans un
  fichier css ce qui va diminuer la taille du fichier et accélerer le chargement
  de ce fichier.
- concaténer des css : vous allez pouvoir concaténer c'est-à-dire fusionner des
  fichiers css ensemble. Encore avec les mêmes conséquences sur le chargement de
  votre page web puisqu'on n'aura qu'un seul fichier et donc un seul appel HTTP
  pour récupérer le fichier css (au lieu d'appeler x fichiers css).
- compiler des css : permet de compiler c'est à dire transformer des fichiers
  en format sass ou less en un format css lisible par les navigateurs.
  Sass ou less sont des dérivés du langage css qui permettent d'utiliser des
  variables (un article est en préparation sur ce sujet...)
- tester vos fichiers css et js...

Vous devez installer node.js pour utiliser ces deux outils : `brew install node`
sur un mac.

Je vais plutôt utiliser gulp qui permet d'utiliser des flux et donc permet
d'éviter des étapes intermédiaires. Je vais donc décrire précisemment gulp
mais vous pourrez trouver à la fin de l'article la façon d'installer Grunt.

#### Gulp

##### Installation

    npm install --global gulp

Créez un fichier gulpfile.js à la racine de votre projet. Dans ce fichier vous
allez mettre toutes les dépendances pour votre projet, que vous pouvez trouver
sur le [site des plugins](http://gulpjs.com/plugins).

Les plugins que j'utilise régulièrement sont les suivants:

- gulp
- gulp-sass : compile les fichiers sass en CSS
- gulp-minify-css : minifie le css
- gulp-concat : fusionne des fichiers
- gulp-uglify : minifie le js
- gulp-rename

On les met au début du fichier `gulpfile.js` comme ceci:

    var gulp = require('gulp'),
        sass = require('gulp-sass'),
        minify = require('gulp-minify-css'),
        concat = require('gulp-concat'),
        uglify = require('gulp-uglify'),
        rename = require('gulp-rename');

##### Workflow

On va utiliser bower pour gérer les dépendances des libraires css et js.
J'utilise par exemple [foundation](http://foundation.zurb.com/docs) qui est un
framework css très utile.

##### Bower

On crée un fichier `.bowerrc` qui contient les configurations pour Bower et
notamment le dossier où vous allez télécharger vos dépendances.

    {
      "directory": "bower_components"
    }

Les dépendances que vous souhaitez seront dans `bower.json`:

    {
        "name": "my-app",
        "version": "0.0.1",
        "private": "true",
        "dependencies": {
            "foundation": "zurb/bower-foundation"
        }
    }

J'ai donc mis foundation en dépendance. Il me suffit maintenant de taper
`bower install` dans mon terminal.
Il faut bien mettre le dossier bower_components dans .gitignore car ce dossier
ne sert que pour le développement. Grâce justement à gulp ou grunt, vous allez
pouvoir copier et utiliser les fichiers de libraires css ou js tiers.

On peut noter également qu'il n'est pas nécessaire d'ajouter jquery en
dépendance (foundation en a besoin) car jquery est déjà une dépendance de
foundation et va donc se télécharger dans le dossier `bower_components`.

Pour bien comprendre les tâches, je vais séparer mes dossier en deux:
- un dossier /public
- un dossier /dev

Le dossier /public va contenir les css et js minifiés et concaténés.
On va grâce à gulp avoir 2 fichiers dans ce dossier: frontend.min.css et
frontend.min.js. Ce sont donc ces deux fichiers qu'on va inclure dans les
balises <head> du layout de notre projet. Les images et icones seront aussi
dans ce dossier qui doit être accessible aux personnes naviguant sur votre site.

Le dossier /dev contient lui les fichiers de développement comme les fichiers
sass et js que le développeur va pouvoir modifier avant d'utiliser gulp pour
créer nos 2 fichiers css et js pour la production.

Dans le fichier `gulpfile.js`, je vais donc créer une variable `paths` qui va
nous indiquer les chemins vers les différents dossiers:

    var paths = {
        'dev': {
            'scss': './dev/scss/',
            'js': './dev/js/'
        },
        'public': {
            'css': './public/css/',
            'js': './public/js/'
        },
        'vendor': {
            'bower': './bower_components/'
        }
    };

##### Les Tâches gulp

    // --- TASKS
    // Generate CSS App file
    gulp.task('app.css', function() {
      // place code for your default task here
      return gulp.src('./dev/scss/*.scss')
          .pipe(sass({
              includePaths: [paths.vendor.bower+'foundation/scss']
          }))
          .pipe(minify())
          .pipe(rename({suffix: '.min'}))
          .pipe(gulp.dest(paths.public.css));
    });

    // Generate Js App File
    gulp.task('app.js', function(){
      return gulp.src([
            paths.vendor.bower+'jquery/dist/jquery.min.js',
            paths.vendor.bower+'foundation/js/foundation.min.js',
            paths.vendor.bower+'fastclick/lib/fastclick.js',
            paths.vendor.bower+'modernizr/modernizr.js',
        ])
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(paths.public.js));
    });

Ces 2 tâches app.css et app.js se lancent respectivement avec les commandes
`gulp app.css` et `gulp app.js`.

Pour le css, cela va récupérer tous les fichiers se trouvant dans `/dev/scss`,
les regrouper, les minifier et enfin enregistrer le fichier sous
`/public/css/app.min.css`.

Pour le js, la tâche va regrouper tous les fichiers js qui se trouvent en
majorité dans le dossier bower_components (les librairies js de foundation,
jquery, modernizr, ...) et créer un fichier js sous `/public/js/app.min.js`.

##### Intégration dans votre layout

Il ne reste plus qu'à ajouter une balise d'insertion vers le css dans le head
de votre page:

    <link href="public/css/app.min.css" rel="stylesheet">

Et le js à intégrer avant la balise fermante </body>.

    <script type="text/javascript" src="public/js/app.min.js"></script>

Si vous voulez voir à quoi ressemble le fichier `gulpfile.js` dans son ensemble,
vous pouvez aller sur le [dépôt github de ce site](https://github.com/cake17/cake17.github.io/blob/master/_posts/2015-30-30-grunt-gulp.md)
puisqu'il utilise ces techniques.

#### Grunt

##### Installation

    npm install -g grunt-cli

Créez un fichier Gruntfile.js dans votre projet. Vous mettrez les dépendances
nécessaires à l'utilisation de Grunt.

Dépendances utiles [ici](http://gruntjs.com/plugins)

- grunt-contrib-concat : concatène
- grunt-contrib-uglify : minifie
- grunt-contrib-jshint : verify that a js is ready to minify
