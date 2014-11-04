---
layout: post
title: Grunt
tags: [General]
description: Grunt, a useful tool to
langs: [fr]
---

## Grunt

Tool to acts on files : minify, compile, test, ...
For instance, you can concatenate js files, or css files.
Another example is that you can minify the file concatenated.

### Installation

You need node.js : `brew install node`

Then : `npm install -g grunt-cli`

### Create a Gruntfile.js in your project

This is where you put all dependancies and their use

### Useful dependancies

grunt-contrib-concat : concatenate
grunt-contrib-uglify : minify
grunt-contrib-jshint : verify that a js is ready to minify
