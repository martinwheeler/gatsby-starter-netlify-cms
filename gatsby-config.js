module.exports = {
  siteMetadata: {
    title: 'Lana Edit',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        include: /icons/
      }
    },
    'gatsby-plugin-glamor',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "The Lana Edit",
        short_name: "The Lana Edit",
        start_url: "/",
        background_color: 'white',
        theme_color: '#AD7293',
        display: "minimal-ui"
      },
    },
    'gatsby-plugin-offline'
  ],
};
