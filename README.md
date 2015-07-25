# This is my personal tech blog's repository

[![Build Status](https://api.travis-ci.org/cake17/cake17.github.io.png?branch=master)](https://travis-ci.org/cake17/cake17.github.io)

Tools needed

    - bower
    - bundle
    - gulp

Clone this repo

Run the following commands:

    // To update foundation with all its dependancy in bower_components
    bower update

    // To install gem dependancies for jekyll (it creates the Gemfile.lock)
    bundle install

    // To run a webserver locally
    bundle exec jekyll serve --baseurl '' --watch

    // Before pushing to deploy : run these 2 gulp commands
    gulp app.js // recreates the app.js file which groups all js files minified (js files from foundation, jquery, modernizr, fastclick, ...)
    gulp app.css // recreates the app.css file which groups all js files (css files from foundation)
