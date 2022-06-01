module.exports = {
    title: 'Evoli',
    description: 'The one Go framework you will ever need',
    base: '/',

    themeConfig: {
        repo: 'dex/docs',
        docsDir: 'docs',
        docsBranch: 'main',
        editLinks: false,
        editLinkText: 'Edit this page on GitHub',
        // navbar: false,
        // lastUpdated: 'Last Updated',

        nav: [
            { text: 'Guide', link: '/', activeMatch: '^/$|^/guide/' },
        ],

        sidebar: {
            '/guide/': getGuideSidebar(),
            '/': getGuideSidebar()
        }
    }
}

function getGuideSidebar() {
    return [
        {
            text: 'The Basics',
            children: [
                { text: 'Routing', link: '/routing' },
            ]
        },
    ]
}
