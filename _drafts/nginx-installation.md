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

```bash
brew install --without-apache --with-fpm --with-mysql php56
```

The php.ini file can be found in `/usr/local/etc/php/5.6/php.ini`.

Setup auto start
----------------

Create a folder for our LaunchAgents and symlink the start/stop service:

```bash
mkdir -p ~/Library/LaunchAgents
ln -sfv /usr/local/opt/php56/homebrew.mxcl.php56.plist ~/Library/LaunchAgents/
```

And start PHP-FPM:

```bash
launchctl load -w ~/Library/LaunchAgents/homebrew.mxcl.php56.plist
```

Make sure PHP-FPM is listening on port 9000:

```bash
lsof -Pni4 | grep LISTEN | grep php

php-fpm   69659  frdmn    6u  IPv4 0x8d8ebe505a1ae01      0t0  TCP 127.0.0.1:9000 (LISTEN)
php-fpm   69660  frdmn    0u  IPv4 0x8d8ebe505a1ae01      0t0  TCP 127.0.0.1:9000 (LISTEN)
php-fpm   69661  frdmn    0u  IPv4 0x8d8ebe505a1ae01      0t0  TCP 127.0.0.1:9000 (LISTEN)
php-fpm   69662  frdmn    0u  IPv4 0x8d8ebe505a1ae01      0t0  TCP 127.0.0.1:9000 (LISTEN)

MySql
=====

Setup auto start for mysql:

```bash
ln -sfv /usr/local/opt/mysql/*.plist ~/Library/LaunchAgents
```

# 2 ways for starting the database server
  - launchctl load ~/Library/LaunchAgents/homebrew.mxcl.mysql.plist
  - mysql.server start


# Launch mysql_secure_installation to secure mysql Installation


Nginx
=====

Installation
------------

```bash
brew install nginx
```

Start, Stop, ...
----------------

Don't forget to stop Apache process if it exists `sudo apachectl stop`

```bash
sudo nginx -s stop
sudo nginx -s quit
sudo nginx -s reload
sudo nginx -s reopen
```

Configure
---------

The configuration file is under `/usr/local/etc/nginx/nginx.conf`.
Edit it to get something like that::

```vim
server {
  listen       80;
  server_name  localhost;

  #access_log  logs/host.access.log  main;

  location / {
      # default root path is /usr/local/Cellar/nginx/x.x.x/html
      root   /Users/username/www;
      index  index.html index.htm;
  }
}
```

https://gist.github.com/cake17/b308efe8a5fcafb59f11


When modifying config file, do this to applied those changes:

```bash
nginx -s quit
nginx -s reload
```

To get all runing nginx processes, do:

```bash
ps -ax | grep nginx
```

Setup auto start
----------------

Since we want to use port 80 have to start the Nginx process as root:

```bash
sudo cp -v /usr/local/opt/nginx/*.plist /Library/LaunchDaemons/
sudo chown root:wheel /Library/LaunchDaemons/homebrew.mxcl.nginx.plist
```

See the websites
----------------

Open Navigator it by going to URL:

    http://localhost
