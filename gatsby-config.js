module.exports = {
  siteMetadata: {
    title: 'Cornyn Therapeutics',
    author: 'Cosmic Fisherman',
    description: 'Therapeutic Massage by Charles Cornyn',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/charles.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-plausible`,
      options: {
        domain: `cornyntherapeutics.ltd`,
      },
    },
  ],
}
