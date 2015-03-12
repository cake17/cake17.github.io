source "https://rubygems.org"

gem "sass", "~> 3.4.0"
gem "compass", "~> 1.0"

require 'json'
require 'open-uri'
versions = JSON.parse(open('https://pages.github.com/versions.json').read)

gem 'github-pages', versions['github-pages']
