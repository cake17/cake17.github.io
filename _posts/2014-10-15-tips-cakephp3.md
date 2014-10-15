---
layout: post
title: CakePHP 3
tags: [General]
description: General Information about CakePHP 3 & Plugins
---

### Plugin cakephp-codesniffer

 This is a sniffer plugin to check that your code is valid with [CakePHP coding standards](http://book.cakephp.org/3.0/en/contributing/cakephp-coding-conventions.html).

You can now add the plugin [cakephp-codesniffer](https://github.com/cakephp/cakephp-codesniffer) to the composer.json of your project like this:

    php composer.phar require cakephp/cakephp-codesniffer
    vendor/bin/phpcs --config-set installed_paths vendor/cakephp/cakephp-codesniffer

This will also add a symlink to phpcs in bin/ directory.

To use it, do this at the root of your website in your terminal : `./bin/phpcs --standard=CakePHP path/to/code/to/check`

Example to check a plugin : `./bin/phpcs --standard=CakePHP plugins/PluginName`
