---
title: Virtual Machines
description: Install a virtual machine on a MAC
---

# Vagrant

# Puphpet

It's a [great tool](https://puphpet.com) which allows you to create a virtual machine that you can download, unzip and then launch.

## Installation

Before, you need to install VirtualBox and Vagrant. It uses Puppet to generate as the provisioning backend

The following sections need to be fullfilled:
- Deploy Target : VirtualBox, Debian Wheezy 7.5 x64, Box Sync Folder Source => ~username/Documents/SitesWeb, shared Folder => Default
- Server Packages : Installed Packages => vim, python-pip, python-sphinx, python-sphinxcontrib.phpdomain
- Firewall Rules
- Webservers : Install Apache2, Server Name => local.dev, Document Root => /var/www/local.dev
- Languages
  - php 5.6, Europe/Paris, Modules => cli, intl, mcrypt, mbstring, curl, PHP Librairies => XDebug
  - Ruby 2.1.2 Install Bundler
  - Node.js
  - Python
- Databases
  - PostgreSQL 9.3
  - MariaDB 10.0, Install Adminer
  - MongoDB
  - SQLite
- Additional Tools
  - MailCatcher
  - Elastic Search

## Usage

Unzip the folder and go in it with `cd` in terminal
Run `vagrant up` to create the virtual machine
To go on the VM : `vagrant ssh`
