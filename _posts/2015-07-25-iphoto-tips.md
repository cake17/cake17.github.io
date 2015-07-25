---
layout: post
title: Iphoto Tips
tags: [General]
description: Iphoto and Mac software Tips & Reminders
langs: [en]
---

Iphoto 11
=========

To save all images in a folder with sub-folder, go to `File/Export` and Tick
`SubFolder : event`

To stop face detection, open a terminal : `defaults write com.apple.iPhoto
PKFaceDetectionEnabled 0`

To remove duplicate images :

- download `Duplicate Cleaner For Iphoto`
- Open Iphoto
- Open Duplicate Cleaner For Iphoto
- Select your librairy

You can also use `fdupes` to get duplicates files in a path. To install it, do
`brew install fdupes` and use `man fdupes` to see commands.
