module.exports = {
  siteMetadata: {
    title: 'classic.gg',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-svg',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'classic.gg',
        short_name: 'classic',
        start_url: '/',
        background_color: '#141414',
        theme_color: '#141414',
        display: 'minimal-ui',
        icon: 'src/images/classic-icon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
