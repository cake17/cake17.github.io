---
layout: post
title: Nombre binaires en informatique
tags: [General]
description: Utilisation des nombres binaires en informatique
langs: [fr]
---

Introduction
============

Les nombres binaires sont très utilisés dans le monde informatique. En effet,
un ordinateur ne comprend que les 0 et les 1. Cette notion m'a toujours été
floue et c'est pourquoi je voulais clarifier tout le chmilblick de ma tête.

Nombre selon la base
====================

Il existe plusieurs systèmes pour les nombres (ah les cours de math de
terminal...) et les plus couramment utilisés sont les suivants:
- système binaire (base 2) : on a la possibilité d'avoir que 2 chiffres, le 0 et le 1.
- système décimal (base 10) : celui que l'on utilise dans la vie de tous les jours
  pour compter qui comprend les nombres suivants 0, 1, 2, 3, 4, 5, 6, 7, 8, 9.
- système hexadécimal : en plus des nombres du système en base 10, on ajoute les lettres A, B, C, D, E et F

Le système hexadécimal est notamment utilisé pour les adresses MAC (qui sont des identifiants unique de chaque appareil fabriqué dans le monde). Je me focaliserai plutôt sur les systèmes en base 2 et en base 10.

Transformer des nombres en base 10 (système décimal) en nombre en base 2 (système binaire)
---------------------------------------------------------------------------------------------

On va transformer les chiffres de 0 à 255 du système décimal en système binaire. Voilà quelques valeurs d'exemple:

| base 10 (décimal) | base 2 (binaire) |
|-------------------|------------------|
| 0                 | 0000 0000        |
| 1                 | 1000 0000        |
| 2                 | 0100 0000        |
| ...               | ...              |
| 168               | 0001 0101        |
| ...               | ...              |
| 255               | 1111 1111        |

Technique
---------

On va se servir de la table de correspondance suivante:

| 2° | 2^1 | 2^2 | 2^3 | 2^4 | 2^5 | 2^6 | 2^7 |
|----|-----|-----|-----|-----|-----|-----|-----|
| 1  | 2   | 4   | 8   | 16  | 32  | 64  | 128 |

Il s'agit juste de la suite des puissances pour le nombre 2.

Prenons un exemple: on souhaite transformer 34 en binaire. On part de la droite, et on va voir si 34 est supérieur à 128. Si c'est le cas, on met 0. Dans l'autre cas on met 1.

| 2° | 2^1 | 2^2 | 2^3 | 2^4 | 2^5 | 2^6 | 2^7 |
|----|-----|-----|-----|-----|-----|-----|-----|
| 1  | 2   | 4   | 8   | 16  | 32  | 64  | 128 |
|    |     |     |     |     |     |     | 0   |

Puis on continue avec le 2^6. On a toujours 34 < 64, donc on met 0. En revanche, quand on arrive à 2^5, on a 34 > 32. Donc on "consomme" nos 32. Il ne nous reste plus que 2 (= 34 - 32).

| 2° | 2^1 | 2^2 | 2^3 | 2^4 | 2^5 | 2^6 | 2^7 |
|----|-----|-----|-----|-----|-----|-----|-----|
| 1  | 2   | 4   | 8   | 16  | 32  | 64  | 128 |
|    |     |     |     |     | 1   | 0   | 0   |

Avec les 2 qui nous restent, on va refaire la même technique en partant de la droite : 2 < 2^4, 2 < 2^3, 2 < 2^2, donc dans ces 3 cas on met 0. Et à 2, on met 1, c'est-à-dire on "consomme" 2, on a plus rien à répartir, donc 0 pour 2°. Au final, on a:

| 2° | 2^1 | 2^2 | 2^3 | 2^4 | 2^5 | 2^6 | 2^7 |
|----|-----|-----|-----|-----|-----|-----|-----|
| 1  | 2   | 4   | 8   | 16  | 32  | 64  | 128 |
| 0  | 1   | 0   | 0   | 0   | 1   | 0   | 0   |

Un peu de vocabulaire
=====================

Un bit (Définition de wikipédia)
--------------------------------

Le bit est un chiffre binaire, c'est-à-dire 0 ou 1.
Il est donc aussi une unité de mesure en informatique, celle désignant la quantité élémentaire d'information représentée par un chiffre du système binaire.
On en doit l'invention à John Tukey et la popularisation à Claude Shannon.

Un octet
--------

Un octet est ensemble de 8 bits. Un moyen de s'en souvenir est de prendre la racine "oct" qui vient de octo = huit en latin et en grec.

Représentation
--------------

img à insérer

Application pour les adresses IP
================================

Une adresse IP s'écrit sur 4 octets (donc 4 x 8 bits).

On simplifie l'écriture en écrivant en décimal car l'écriture en binaire serait trop longue.

Par exemple : 192.168.0.1 qui s'écrirait en binaire 00000011.00010101.00000000.11111111

Application pour les encodages
==============================
