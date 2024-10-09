module.exports = {
  siteMetadata: {
    title: "My Gatsby Blog",
    description: "A blog about tech and coding",
    author: "@yourname",
  },
  plugins: [
    // This plugin allows Gatsby to source content from your filesystem
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/posts`, // Path to your markdown files
      },
    },
    
    // This plugin transforms markdown into HTML
    `gatsby-transformer-remark`,

    // Optional plugins for images and site metadata
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    
    // PWA + Offline functionality
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // Path to your site icon
      },
    },
    `gatsby-plugin-offline`,
  ],
};
