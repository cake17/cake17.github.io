---
title: Gandi Simple Hosting
description: Tips for Gandi Simple Hosting (Jekyll, backup, ...)
---

Gandi Simple Hosting is a website that is really nice for people who don't want to update themselves tools like MySQL, PHP versions, etc... on their remote. I'm one of them and I really like the easy way provided by Gandi to host web pages for a reasonnable price.

But, as you don't control everything that is installed on the server, there is sometimes limitations. I will try to overpass them and give some tips when i encountered them.

## Jekyll Configuration

If you want to use Jekyll static pages, do the following in config.yml:

```vim
source: "./_source"
destination: "./htdocs"
```

And then build locally your website and push everything in the remote. All your source files you can change will be in `/_source` and the static html pages will be in `/htdocs`.
That way, you keep all files in git and can push everything in gandi remote.

To deploy you can use traditionnal `ssh {login}@git.{datacenter_location}.gpaas.net 'deploy {vhost}.git` to deploy

## Backup

## Logs

## Cron tabs
