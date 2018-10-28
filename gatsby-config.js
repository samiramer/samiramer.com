module.exports = {
  siteMetadata: {
    title: 'CodeLoop',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'codeloop',
        short_name: 'codeloop',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
<<<<<<< HEAD
        icon: 'src/images/codeloop_logo_small.svg', // This path is relative to the root of the site.
=======
        icon: 'src/images/codeloop_logo_small.png', // This path is relative to the root of the site.
>>>>>>> develop
      },
    },
    'gatsby-plugin-offline',
    `gatsby-plugin-postcss`
  ],
}
