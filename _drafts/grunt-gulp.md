---
layout: post
title: Grunt & Gulp
tags: [General]
description: Grunt & Gulp : 2 tools for same needs
langs: [fr]
---

## Grunt && Gulp

Tool to automate acts on files : minify, compile, test, ...
For instance, you can concatenate js files, or css files.
Another example is that you can minify the file concatenated.

You need to install node.js for both tools : `brew install node`

#### Grunt

Install : `npm install -g grunt-cli`

Create a Gruntfile.js in your project. This is where you put all dependancies and their use.

Useful dependancies [here](http://gruntjs.com/plugins)

- grunt-contrib-concat : concatenate
- grunt-contrib-uglify : minify
- grunt-contrib-jshint : verify that a js is ready to minify

#### Gulp

Install : `npm install --global gulp`

Create a gulpfile.js in your project. This is where you put all dependancies and their use

Useful dependancies [here](http://gulpjs.com/plugins)
