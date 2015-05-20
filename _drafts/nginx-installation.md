---
layout: post
title: Installation de Nginx
tags: [General]
description: Comment installer & configurer Nginx et FastCGI
langs: [fr]
---

PHP-FPM
=======

Installation
------------

brew install --without-apache --with-fpm --with-mysql php56

The php.ini file can be found in:
    /usr/local/etc/php/5.6/php.ini

Setup auto start
----------------

Create a folder for our LaunchAgents and symlink the start/stop service:

    mkdir -p ~/Library/LaunchAgents
    ln -sfv /usr/local/opt/php56/homebrew.mxcl.php56.plist ~/Library/LaunchAgents/

And start PHP-FPM:

    launchctl load -w ~/Library/LaunchAgents/homebrew.mxcl.php56.plist

Make sure PHP-FPM is listening on port 9000:

    lsof -Pni4 | grep LISTEN | grep php

    php-fpm   69659  frdmn    6u  IPv4 0x8d8ebe505a1ae01      0t0  TCP 127.0.0.1:9000 (LISTEN)
    php-fpm   69660  frdmn    0u  IPv4 0x8d8ebe505a1ae01      0t0  TCP 127.0.0.1:9000 (LISTEN)
    php-fpm   69661  frdmn    0u  IPv4 0x8d8ebe505a1ae01      0t0  TCP 127.0.0.1:9000 (LISTEN)
    php-fpm   69662  frdmn    0u  IPv4 0x8d8ebe505a1ae01      0t0  TCP 127.0.0.1:9000 (LISTEN)

Nginx
=====

Installation
------------

brew install nginx

Start, Stop, ...
----------------

nginx -s stop
nginx -s quit
nginx -s reload
nginx -s reopen

Configure
---------

The configuration file is under `/usr/local/etc/nginx/nginx.conf`
When modifying config file, do this to applied those changes:

    nginx -s quit
    nginx -s reload

To get all runing nginx processes, do:

    ps -ax | grep nginx

Setup auto start
----------------

Since we want to use port 80 have to start the Nginx process as root:

    sudo cp -v /usr/local/opt/nginx/*.plist /Library/LaunchDaemons/
    sudo chown root:wheel /Library/LaunchDaemons/homebrew.mxcl.nginx.plist
