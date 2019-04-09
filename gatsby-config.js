module.exports = {
  siteMetadata: {
    title: 'Front end developer & UX Designer',
    description: 'Developer, Designer making something awesome :)',
    author: '@hamzaerbay',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-svg-sprite',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: `UA-8863328-2`,
        // Puts tracking script in the head instead of the body
        head: false,
        // enable ip anonymization
        anonymize: true,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Source Sans Pro`,
            subsets: [`latin`],
            variants: [`200`, `400`, `700`,`900`]
          },
        ],
      },
    },
    {
      siteMetadata: {
        siteUrl: `https://www.hamzaerbay.com`,
      },
      plugins: [`gatsby-plugin-sitemap`]
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
};
