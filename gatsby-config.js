/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `hhs`,
    siteUrl: `localhost:8000`
  },
  plugins: [
    "gatsby-plugin-postcss", 
    "gatsby-plugin-image", 
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp", 
    {
      resolve: 'gatsby-source-filesystem', 
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Hughes Home Services`,  // Full name of your site
        short_name: `HHS`,  // Short name of your site
        start_url: `/`,  // Start URL when the site is launched
        background_color: `#ffffff`,  // Background color of the app
        theme_color: `#000000`,  // Theme color of the app
        display: `standalone`,  // Display mode, like a native app
        icon: `./static/favicon.svg`,  // Path to your favicon image
      },
    },
  ],
};
