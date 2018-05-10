module.exports = {
    title: 'Cake17\'s Blog',
    description: 'Dev tips',
    // base: 'https://blog.cake-websites.com',
    themeConfig: {
        nav: [
            {
                text: 'Dev',
                items: [
                    {
                        text: 'Backend (PHP)',
                        link: '/backend/2013-03-17-contributing-to-cakephp-docs'
                    },
                    {
                        text: 'Frontend (HTML, CSS, Javascript, ...)',
                        link: '/frontend/2015-03-30-grunt-gulp'
                    },
                    {
                        text: 'Tools',
                        link: '/devtools/2014-10-15-ssh-keys'
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
            '/backend/': [
                '/backend/2013-03-17-contributing-to-cakephp-docs',
                '/backend/2014-10-15-tips-cakephp3',
                '/backend/2014-11-29-cakephp-deploy',
                '/backend/2015-06-12-php-extensions'
            ],
            '/frontend/': [
                '/frontend/2015-03-30-grunt-gulp',
                '/frontend/2016-06-07-show-presentation',
                '/frontend/2018-05-10-css-sass'
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
                '/devtools/2014-10-14-jekyll-github',
                '/devtools/2014-11-04-sphinx',
                '/devtools/2015-06-18-dependancy-managers',
                '/devtools/2015-08-20-atom',
                '/devtools/2016-05-20-docker'
            ],

            // fallback
            '/': [
                '/2015-07-25-markup-languages',
                '/2015-07-25-nombres-binaires-informatiques',
                '/2014-10-20-gandi-simple-hosting',
                '/2016-06-07-rooter-android-galaxy-s4',
            ]
        }
    }
}
