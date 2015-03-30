# This is my personal tech blog's repository

[![Build Status](https://api.travis-ci.org/cake17/cake17.github.io.png?branch=master)](https://travis-ci.org/cake17/cake17.github.io)

Clone this repo

Run the following commands:

    //To update foundation with all its dependancy in bower_components
    bower update
    // and copy files from bower_components/foundation/_scss to dev/_scss to update them (see to do it wuth grunt or gulp)

    // To install gem dependancies for jekyll
    bundle install

    // To run a webserver (add --watch while developping)
    bundle exec jekyll serve --baseurl ''

    // Deploy
    Don't forget to run `gulp app.js` and `gulp app.css` to refresh these assets
