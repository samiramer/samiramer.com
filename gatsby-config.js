module.exports = {
  siteMetadata: {
    title: 'Samir Amer',
    siteUrl: 'https://samiramer.com',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Samir Amer',
        short_name: 'Samir Amer',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/codeloop_logo_small.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    `gatsby-plugin-postcss`,
  ],
}
