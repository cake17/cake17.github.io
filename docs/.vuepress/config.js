module.exports = {
    title: 'Cake17\'s Blog',
    description: 'Dev tips',
    // base: 'https://blog.cake-websites.com',
    themeConfig: {
        nav: [
            {
                text: 'Languages',
                items: [
                    {
                        text: 'PHP',
                        link: '/php/2013-03-17-contributing-to-cakephp-docs'
                    },
                    {
                        text: 'Javascript',
                        link: '/javascript/2015-03-30-grunt-gulp'
                    }
                ]
            },
            {
                text: 'Others',
                items: [
                    {
                        text: 'MAC OS',
                        link: '/macos/2014-10-25-install-os-x'
                    },
                    {
                        text: 'Dev Tools',
                        link: '/devtools/2014-10-15-ssh-keys'
                    },
                    {
                        text: 'Deploy',
                        link: '/deploy/2014-10-20-gandi-simple-hosting'
                    },
                    {
                        text: 'General',
                        link: '/2015-07-25-nombres-binaires-informatiques'
                    }
                ]
            },
            {
                text: 'Projects',
                link: '/2014-09-16-list-of-projects'
            },
        ],
        sidebar: {
            '/php/': [
                '/php/2013-03-17-contributing-to-cakephp-docs',
                '/php/2014-10-15-tips-cakephp3',
                '/php/2014-11-29-cakephp-deploy',
                '/php/2015-06-12-php-extensions'
            ],
            '/javascript/': [
                '/javascript/2015-03-30-grunt-gulp',
                '/javascript/2016-06-07-show-presentation'
            ],
            '/macos/': [
                '/macos/2014-10-25-install-os-x',
                '/macos/2014-10-15-softwares-installation',
                '/macos/2013-04-12-terminal-mac',
                '/macos/2015-07-25-iphoto-tips'
            ],
            '/devtools/': [
                '/devtools/2014-10-14-git',
                '/devtools/2014-10-15-ssh-keys',
                '/devtools/2014-10-15-virtual-machines',
                '/devtools/2015-06-18-dependancy-managers',
                '/devtools/2015-08-20-atom',
                '/devtools/2016-05-20-docker',
                '/devtools/2014-11-04-sphinx',
                '/devtools/2014-10-14-jekyll-github'
            ],

            // fallback
            '/': [
                '/2015-07-25-markup-languages',
                '/2015-07-25-nombres-binaires-informatiques',
                '/deploy/2014-10-20-gandi-simple-hosting',
                '/2016-06-07-rooter-android-galaxy-s4',
            ]
        }
    }
}
