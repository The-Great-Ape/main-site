require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

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
    {
      resolve: `gatsby-plugin-anchor-links`,
      options: {
        duration: 1000
      }
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-5JKTX5R",
  
        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,
  
        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },
  
        // Specify optional GTM environment details.
        //gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        //gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        //dataLayerName: "YOUR_DATA_LAYER_NAME",
  
        // Name of the event that is triggered
        // on every Gatsby route change.
        //
        // Defaults to gatsby-route-change
        routeChangeEventName: "virtualPageView",
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
          spaceId: process.env.CONT_SPACE_ID,
          accessToken: process.env.CONT_ACCESS_TOKEN,
      },
    }
  ],
};
