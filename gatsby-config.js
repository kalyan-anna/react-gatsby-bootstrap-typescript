module.exports = {
  siteMetadata: {
    title: `Rego Shop`,
    description: `Gatsby bootstrap sample.`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rego Shop`,
        short_name: `sample`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    // {
    //   resolve: `gatsby-plugin-typography`,
    //   options: {
    //     pathToConfigModule: `src/utils/typography`,
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: 'UA-178903400-1',
    //     head: true,
    //     anonymize: true,
    //   },
    // },
  ],
};
