require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  host: process.env.CONTENTFUL_HOST,
  environment: process.env.CONTENTFUL_ENVIRONMENT_ID,
}

module.exports = {
  siteMetadata: {
    site_name: `Jason Rundell`,
    author: `@jasonrundell`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-axe`,
    `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyzer',
      options: {
        openAnalyzer: true,
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        data: `@import "./src/styles/main.scss";`,
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `JasonRundell.com`,
        short_name: `JasonRundell.com`,
        start_url: `/`,
        background_color: `#11161d`,
        theme_color: `#11161d`,
        display: `standalone`,
        icon: `src/images/icon192x192.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: contentfulConfig,
    },
    {
      resolve: `gatsby-plugin-load-script`,
      options: {
        disable: !process.env.SENTRY_DSN, // When do you want to disable it ?
        src: process.env.SENTRY_SRC,
        onLoad: `() => Sentry.init({dsn:"${process.env.SENTRY_DSN}"})`,
      },
    },
  ],
}
