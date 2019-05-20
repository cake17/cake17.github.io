(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{194:function(e,t,n){"use strict";n.r(t);var a=n(0),s=Object(a.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[e._m(0),e._v(" "),n("p",[e._v("CodeSniffer is used in the terminal and is a way to check that files\nfollow code conventions. In our case, we follow the PSR-4 recommandations and "),n("a",{attrs:{href:"http://book.cakephp.org/3.0/en/contributing/cakephp-coding-conventions.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("CakePHP coding standards"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("p",[e._v("You can now add the plugin "),n("a",{attrs:{href:"https://github.com/cakephp/cakephp-codesniffer",target:"_blank",rel:"noopener noreferrer"}},[e._v("cakephp-codesniffer"),n("OutboundLink")],1),e._v(" to the composer.json of your project like this:")]),e._v(" "),e._m(1),n("p",[e._v("This will also add a symlink to phpcs in bin/ directory.")]),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),n("p",[e._v("PHPUnit, a member of the xUnit family of testing frameworks, provides an easy-to-use framework for testing and analyzing your PHP applications.")]),e._v(" "),n("p",[e._v("It is now installed in each project in dev mode\nJust add the package in your composer.json's require-dev")]),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),n("p",[e._v("PHPUnit will generate a set of static HTML files containing the coverage results. You can generate coverage for a test case by doing the following:")]),e._v(" "),e._m(7),n("p",[e._v("Go in to http://localhost/your_app/coverage to see the results")]),e._v(" "),e._m(8),e._v(" "),n("p",[e._v("You can use directly "),n("a",{attrs:{href:"https://github.com/apigen/apigen",target:"_blank",rel:"noopener noreferrer"}},[e._v("ApiGen"),n("OutboundLink")],1),e._v(" in your projects to generate a complete html website with your Api.")]),e._v(" "),n("p",[e._v("Install")]),e._v(" "),e._m(9),n("p",[e._v("Config")]),e._v(" "),n("p",[e._v("The config file "),n("code",[e._v("apigen.neon")]),e._v(" is written in "),n("a",{attrs:{href:"http://ne-on.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("neon format"),n("OutboundLink")],1),e._v(" and is at the root of your project (or create it). Remove the brackets if they exist. Example:")]),e._v(" "),e._m(10),n("p",[e._v("Generate Api")]),e._v(" "),e._m(11)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"plugin-cakephp-codesniffer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#plugin-cakephp-codesniffer","aria-hidden":"true"}},[this._v("#")]),this._v(" Plugin cakephp-codesniffer")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("php composer.phar require cakephp/cakephp-codesniffer\nbin/phpcs --config-set installed_paths vendor/cakephp/cakephp-codesniffer\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("To use it, do this at the root of your website in your terminal : "),t("code",[this._v("./bin/phpcs --standard=CakePHP path/to/code/to/check")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Example to check a plugin : "),t("code",[this._v("./bin/phpcs --standard=CakePHP plugins/PluginName")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"phpunit"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#phpunit","aria-hidden":"true"}},[this._v("#")]),this._v(" PhpUnit")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Usage : "),t("code",[this._v("./bin/phpunit")]),this._v("\nWill launch every test defined in phpunit.xml.dist")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"code-coverage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#code-coverage","aria-hidden":"true"}},[this._v("#")]),this._v(" Code Coverage")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("./bin/phpunit --coverage-html webroot/coverage tests/TestCase/Model/Table/ArticlesTableTest\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"apigen"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#apigen","aria-hidden":"true"}},[this._v("#")]),this._v(" ApiGen")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("composer require apigen/apigen --dev\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-yml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("source:\n  - src\n\ndestination: api\nextensions:\n  - php\n\nexclude:\n  - tests/\n  - vendor/\n  - *Factory.php\n\nskipDocPath:\n  - * <mask>```\n\nskipDocPrefix:\n  - Nette\n\ncharset:\n  - UTF-8\n\nmain: Project\ntitle: Project API\ntemplateTheme: bootstrap\ngroups: auto\nautocomplete:\n  - classes\n  - constants\n  - functions\n  - methods\n  - properties\n  - classconstants\n\naccessLevels:\n  - public\n  - protected\n\ninternal: false\nphp: true\ntree: true\ndeprecated: false\ntodo: false\ndownload: false\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("php vendor/bin/apigen generate\n")])])])}],!1,null,null,null);t.default=s.exports}}]);