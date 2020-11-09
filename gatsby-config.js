const { createProxyMiddleware } = require('http-proxy-middleware');

const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development';

require('dotenv').config({
  path: `.env.${activeEnv}`,
});

const cgf = {
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
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
  // proxy: {
  //   prefix: '/api',
  //   url: `${activeEnv.SERVICE_BASE}`,

  // },
  developMiddleware: app => {
    app.use(
      '/api/',
      createProxyMiddleware({
        target: `${process.env.REDIRECT_BASE}`,
        changeOrigin: true,
        pathRewrite: {
          '/api/': '',
        },
      }),
    );
  },
};

// if (
//   process.env.GATSBY_ACTIVE_ENV === 'production' ||
//   process.env.GATSBY_ACTIVE_ENV === 'staging'
// ) {
//   const googleAnalyticsCfg = {
//     resolve: `gatsby-plugin-google-analytics`,
//     options: {
//       trackingId: 'UA-181513542-1',
//       head: true,
//       anonymize: true,
//     },
//   };
//   cgf.plugins.push(googleAnalyticsCfg);
// }

module.exports = cgf;
