module.exports = {
  siteMetadata: {
    title: 'Vechile Registration',
    description: 'Gatsby styled-components sample.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    // {
    //   resolve: 'gatsby-plugin-google-analytics',
    //   options: {
    //     trackingId: "UA-178903400-1",
    //     head: true,
    //     anonymize: true,
    //   },
    // },
  ],
};
