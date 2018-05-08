---
layout: post
title: Online Serveur - Debian 8
tags: [General]
description: Installation et configuration
langs: [fr]
---

Installation depuis l'interface web de online de [l'OS Debian 8 "Jessie"](https://www.debian.org/News/2015/20150426) sortie le 25 avril 2015.

Mise à jour des paquets
-----------------------

J'utilise le [gestionnaire de paquet `aptitude`](https://www.debian.org/doc/manuals/debian-reference/ch02.fr.html) installé par défaut:

```bash
# Synchronise la liste des paquets
aptitude update
# Mise à jour des paquets
aptitude safe-upgrade
```

Installation de paquets
-----------------------

- aptitude install vim

Configuration de ssh
--------------------

- Changer le port
- installer fail2ban : `aptitude install fail2ban`
