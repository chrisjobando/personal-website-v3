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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: 'UA-162154867-1',
        head: true,
        pageTransitionDelay: 0,
      },
    },
  ],
};
