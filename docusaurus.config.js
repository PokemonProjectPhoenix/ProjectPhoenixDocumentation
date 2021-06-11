module.exports = {
    title: 'Pokemon Unity - Project Phoenix Documentation',
    url: 'https://pokemon-unity-project-phoenix.onrender.com',
    baseUrl: '/',
    favicon: 'img/favicon.ico',
    organizationName: 'PokemonProjectPhoenix', // Usually your GitHub org/user name.
    projectName: 'projectphoenix', // Usually your repo name.
    themeConfig: {
        navbar: {
            title: 'Project Phoenix Documentation',
            logo: {
                alt: 'Project Phoenix Logo',
                src: 'img/logo.png',
            },
            items: [{
                    to: 'docs/test/doc1',
                    activeBasePath: 'docs',
                    label: 'Docs',
                    position: 'left',
                },
                { to: 'blog', label: 'Blog', position: 'left' },
                {
                    href: 'https://github.com/PokemonProjectPhoenix',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [{
                    title: 'Docs',
                    items: [{
                            label: 'Style Guide',
                            to: 'docs/test/doc1',
                        },
                        {
                            label: 'Second Doc',
                            to: 'docs/doc2',
                        },
                    ],
                },
                {
                    title: 'Community',
                    items: [{
                            label: 'Youtube?',
                            href: 'https://youtube.com',
                        },
                        {
                            label: 'Discord',
                            href: 'https://discord.gg/VuKcN8M',
                        },
                    ],
                },
                {
                    title: 'Social',
                    items: [{
                            label: 'Blog',
                            to: 'blog',
                        },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/pokemonprojectphoenix',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Project Phoenix. Built with Docusaurus.`,
        },
        prism: {
            additionalLanguages: ['csharp'],
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};