module.exports = {
  siteMetadata: {
    title: 'CodeLoop',
    siteUrl: 'https://codeloop.co',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'CodeLoop',
        short_name: 'CodeLoop',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/codeloop_logo_small.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    `gatsby-plugin-postcss`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-122326285-1',
        // Puts tracking script in the head instead of the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ['/preview/**', '/do-not-track/me/too/'],
        // Any additional create only fields (optional)
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: 'codeloop.co',
      },
    },
  ],
}
