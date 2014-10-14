---
layout: post
tags: [General]
description: Some tips for git.
---

## Git

### Installation

Install git with homebrew : `brew install git`
See GIT version : `git --version`

### Config

See this [french article](http://www.git-attitude.fr/2013/04/03/configuration-git/) for more information on git configs.

See config of a project : `git config –list`
Edit global config of git : `git config --global --edit`

See my [global config](https://gist.github.com/cake17/6624482)

### Autocompletion

This is a great way to have access to all the params for git commands, using
Tab keystroke.

To install git autocompletion : `brew install git bash-completion`

Then open your .bash_profile and add this :

	if [ -f $(brew --prefix)/etc/bash_completion ]; then
		. $(brew --prefix)/etc/bash_completion
	fi
