---
layout: post
title: Deploy CakePHP 3 apps
tags: [General]
description: Deploy CakePHP 3 apps with git and composer
langs: [en]
---

Brief explanations
==================

This is a tuto to create a CakePHP 3 project on a synology server and to deploy it.

A small schema to see how it works:

![Deploy Schema]({{ site.url }}/assets/media/deploy-cakephp.png)


1 Remote
========

1.1 Access to Remote
--------------------

You need to have an access with ssh. If you want to setup one, go
to this [post](http://cake17.github.io/2014/10/15/ssh-keys.html).

So basically, you should be able to access to your remote with something like this::

{% highlight bash linenos %}
ssh git@serveName
// or if you changed your ssh port on your server (strongly advised :-)).
// For example if your ssh port is on 7373.
ssh git@serveName -p 7373
{% endhighlight %}

1.2 Create a Git Bare Repository
--------------------------------

{% highlight bash linenos %}
cd /volume1/repositories/prod
git init --bare cakephp3-test.git
{% endhighlight %}

1.3 Setup Git Hooks
-------------------

I took the script from this [website](http://www.sitepoint.com/one-click-app-deployment-server-side-git-hooks).

Create the file `hooks/post-receive` and add this,
`vi cakephp3-test.git/hooks/post-receive`:

{% highlight bash linenos %}
#!/bin/sh
## store the arguments given to the script
read oldrev newrev refname

# The deployed directory (the running site)
DEPLOYDIR=/volume1/web/cakephp3-test

## Where to store the log information about the updates
LOGFILE=./post-receive.log

##  Record the fact that the push has been received
echo -e "Received Push Request at $( date +%F )" >> $LOGFILE
echo " - Old SHA: $oldrev New SHA: $newrev Branch Name: $refname" >> $LOGFILE

## Update the deployed copy
echo "Starting Deploy" >> $LOGFILE

echo " - Starting code update"
GIT_WORK_TREE="$DEPLOYDIR" git checkout -f
echo " - Finished code update"

echo " - Starting composer install"
cd "$DEPLOYDIR"; php composer.phar install --prefer-dist; cd -
echo " - Finished composer install"

echo "Finished Deploy" >> $LOGFILE
{% endhighlight %}

And create the folder in `/volume1/web/cakephp3-test`


2 Local
========

2.1 Create a CakePHP repo
-------------------------

{% highlight bash linenos %}
composer create-project --prefer-dist -s dev cakephp/app cakephp3-test
cd cakephp3-test
// add composer.phar
curl -sS https://getcomposer.org/installer | php
git init
// remove tmp/ and logs/ from .gitignore (temporarly)
// add plugins/DebugKit in .gitignore
git add --all
git commit -a -m "initialize cakephp3 project"
{% endhighlight %}

2.2 Push to Remote
------------------

{% highlight bash linenos %}
git remote add origin ssh://syno_git/volume1/repositories/prod/cakephp3-test.git
git push origin master
{% endhighlight %}


3 Remote
=========

3.1 Apache Config On Synology
-----------------------------

Panneau de Configuration/Applications/Services Web/
Click on Hôte Virtuel

{% highlight vim linenos %}
Nom du Sous-dossier		Nom d'hôte
cakephp3-test 	www.nomdomaine.com
{% endhighlight %}

3.2 Check the Website
---------------------

Go to your www.nomdomaine.com and watch debug info
- if a php extension is missing, you'll see it.
- if your directories are writable or not


3.3 Config of app.php on Server
-------------------------------

Go with ssh on remote and type `vi /volume1/web/cakephp3-test/config/app.php`.

Change the following sections:
- put debug to false.
- the database config
- Email config (utf8 to uncomment)
- Salt (normally already defined but check it)


4 Locally
==========

4.1 Gitignore
-------------

{% highlight bash linenos %}
// Re-add tmp/ and logs/ in .gitignore
git commit -a -m "add gitignore rules again"
git push origin master
{% endhighlight %}

4.2 Create your project, add Plugins
------------------------------------

Now you can add everything you need in your project and then each time you push on your remote, it will deploy it in the `/volume1/web/cakephp3-test` and launch a `composer install`.
