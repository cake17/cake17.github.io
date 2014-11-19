---
layout: post
title: CakePHP 3
tags: [General]
description: General Information about CakePHP 3 & Plugins
langs: [en]
---

### Plugin cakephp-codesniffer

CodeSniffer is used in the terminal and is a way to check that files
follow code conventions. In our case, we follow the PSR-4 recommandations and [CakePHP coding standards](http://book.cakephp.org/3.0/en/contributing/cakephp-coding-conventions.html).

You can now add the plugin [cakephp-codesniffer](https://github.com/cakephp/cakephp-codesniffer) to the composer.json of your project like this:

    php composer.phar require cakephp/cakephp-codesniffer
    bin/phpcs --config-set installed_paths vendor/cakephp/cakephp-codesniffer

This will also add a symlink to phpcs in bin/ directory.

To use it, do this at the root of your website in your terminal : `./bin/phpcs --standard=CakePHP path/to/code/to/check`

Example to check a plugin : `./bin/phpcs --standard=CakePHP plugins/PluginName`

### PhpUnit

PHPUnit, a member of the xUnit family of testing frameworks, provides an easy-to-use framework for testing and analyzing your PHP applications.

It is now installed in each project in dev mode
Just add the package in your composer.json's require-dev

Usage : `./bin/phpunit`
Will launch every test defined in phpunit.xml.dist

### Code Coverage

PHPUnit will generate a set of static HTML files containing the coverage results. You can generate coverage for a test case by doing the following:

	./bin/phpunit --coverage-html webroot/coverage tests/TestCase/Model/Table/ArticlesTableTest

Go in to http://localhost/your_app/coverage to see the results

### ApiGen

You can use directly [ApiGen](https://github.com/apigen/apigen) in your projects to generate a complete html website with your Api.

Install

    composer require apigen/apigen --dev

Config

The config file `apigen.neon` is written in [neon format](http://ne-on.org) and is at the root of your project (or create it). Remove the brackets if they exist. Example:

    source:
    	- src

    destination: api
    extensions:
    	- php

    exclude:
    	- tests/
    	- vendor/
    	- *Factory.php

    skipDocPath:
    	- * <mask>```

    skipDocPrefix:
    	- Nette

    charset:
    	- UTF-8

    main: Project
    title: Project API
    templateTheme: bootstrap
    groups: auto
    autocomplete:
    	- classes
    	- constants
    	- functions
    	- methods
    	- properties
    	- classconstants

    accessLevels:
    	- public
    	- protected

    internal: false
    php: true
    tree: true
    deprecated: false
    todo: false
    download: false


Generate Api

    php vendor/bin/apigen generate
