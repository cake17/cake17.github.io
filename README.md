# This is my personal tech blog's repository

[![Build Status](https://api.travis-ci.org/cake17/cake17.github.io.png?branch=master)](https://travis-ci.org/cake17/cake17.github.io)

## To run the website locally, do the following

    git clone git clone git@github.com:cake17/cake17.github.io.git
    cd cake17.github.io
    # run a container with official jekyll image
    docker run --rm -v $PWD:/srv/jekyll -t -p 4000:4000 jekyll/jekyll jekyll serve --forcolling


## Tasks and updates for developer

    - Some tools are needed in development. You can use the package.json file
      to install them for the project, using: ``npm install``
      The following modules will be installed in node_modules:
          - bower : dependancy manager for assets
          - gulp : utility to execute some task like concatenation
          - gulp-sass
          - gulp-minify-css
          - gulp-concat
          - gulp-uglify
          - gulp-rename
          - bundle

    - To update gem dependancies : ``bundle update``

    - To update bower assets:     
          // update foundation with all its dependancies in ``bower_components``
          bower update
          // recreates the app.js file which groups all js files minified (js files from foundation, jquery, modernizr, fastclick, ...)
          gulp app.js
          // recreates the app.css file which groups all js files (css files from foundation)
          gulp app.css
