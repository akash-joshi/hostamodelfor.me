module.exports = {
  siteMetadata: {
    title: `Lotus A.I.`,
    description: `A new kind of collabarative marketplace for AI.`,
    author: `@akashtrikon`,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Lotus A.I.`,
        short_name: `Lotus`,
        start_url: `/`,
        background_color: `#ffa726`,
        theme_color: `#ffa726`,
        display: `minimal-ui`,
        icon: `static/lotus.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
