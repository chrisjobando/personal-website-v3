module.exports = {
  siteMetadata: {
    title: `Christopher Obando's Portfolio Website`,
    description: `My Personal Website`,
    author: `@chrisjobando`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-remove-trailing-slashes`,
    'gatsby-plugin-eslint',
    'gatsby-plugin-smoothscroll',
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Karla`,
            variants: [`400`, `700`],
          },
          {
            family: `Montserrat`,
            variants: [`400`, `700`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     // The property ID; the tracking code won't be generated without it
    //     trackingId: 'YOUR_GOOGLE_ANALYTICS_TRACKING_ID',
    //     // Defines where to place the tracking script - `true` in the head and `false` in the body
    //     head: false,
    //     // Setting this parameter is optional
    //     anonymize: true,
    //     // Setting this parameter is also optional
    //     respectDNT: true,
    //     // Avoids sending pageview hits from custom paths
    //     exclude: ['/preview/**', '/do-not-track/me/too/'],
    //     // Delays sending pageview hits on route update (in milliseconds)
    //     pageTransitionDelay: 0,
    //     // Enables Google Optimize using your container Id
    //     optimizeId: 'YOUR_GOOGLE_OPTIMIZE_TRACKING_ID',
    //     // Enables Google Optimize Experiment ID
    //     experimentId: 'YOUR_GOOGLE_EXPERIMENT_ID',
    //     // Set Variation ID. 0 for original 1,2,3....
    //     variationId: 'YOUR_GOOGLE_OPTIMIZE_VARIATION_ID',
    //     // Any additional optional fields
    //     sampleRate: 5,
    //     siteSpeedSampleRate: 10,
    //     cookieDomain: 'example.com',
    //   },
    // },
  ],
};
