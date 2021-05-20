module.exports = {
  siteMetadata: {
    title: 'main-site',
  },
  plugins: [
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-react-helmet',
    //"gatsby-plugin-sitemap",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-fontawesome-css',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Aldrich`],
        display: 'swap',
      },
    },
  ],
};
