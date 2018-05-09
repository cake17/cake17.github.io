module.exports = {
    title: 'Blog',
    description: 'Dev tips',
    // base: 'https://blog.cake-websites.com',
    themeConfig: {
        nav: [
            { text: 'CakePHP', link: '/cakephp/2013-03-17-contributing-to-cakephp-docs' },
            { text: 'Others', link: '/2013-04-12-terminal-mac' },
            { text: 'Projects', link: '/2014-09-16-list-of-projects' },
        ],
        sidebar: {
            '/cakephp/': [
                '2013-03-17-contributing-to-cakephp-docs',
                '2014-10-15-tips-cakephp3',
                '2014-11-29-cakephp-deploy'
            ],

            // fallback
            '/': [
                '2013-04-12-terminal-mac',
                '2014-10-14-git',
                '2014-10-14-jekyll-github',
                '2014-10-15-softwares-installation',
                '2014-10-15-ssh-keys',
                '2014-10-15-virtual-machines',
                '2014-10-20-gandi-simple-hosting',
                '2014-10-25-install-os-x',
                '2014-11-04-sphinx',
                '2015-06-18-dependancy-managers',
                '2015-07-25-iphoto-tips',
                '2015-07-25-markup-languages',
                '2015-07-25-nombres-binaires-informatiques',
                '2015-08-20-atom',
                '2016-05-20-docker',
                '2016-06-07-rooter-android-galaxy-s4',
                '2016-06-07-show-presentation'
            ]
        }
    }
}
