require('dotenv').config({
  path: `.env.${process.env.GATSBY_ACTIVE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: 'Postman COVID-19 API Resource Center',
    description: 'View our growing list of novel coronavirus (COVID-19) API collections to help fight this pandemic. And learn how to use our blueprints for quickly deploying new APIs from existing data sets.',
    author: 'Postman',
    social_card_media: 'https://assets.getpostman.com/covid-19/postman-covid-19-social-image.jpg',
    twitter_handle: '@getpostman',
    siteUrl: 'https://covid-19-apis.postman.com/',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: 'UA-43979731-18',
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is also optional
        respectDNT: true,
        alwaysSendReferrer: true,
        forceSSL: true,
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content`,
      },
    },
    'gatsby-plugin-anchor-links',
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'postman-covid-19-apis',
        short_name: 'postman-covid-19-apis',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        excludes: ['/thankyou/', '/frontmatter', '/content/*'],
      },
    },
    {
      resolve: 'gatsby-plugin-newrelic',
      options: {
        config: {
          instrumentationType: 'proAndSPA',
          accountId: process.env.RELIC_ACCOUNT_ID,
          trustKey: process.env.RELIC_TRUST_KEY,
          agentID: process.env.RELIC_AGENT_ID,
          licenseKey: process.env.RELIC_LICENSE_KEY,
          applicationID: process.env.RELIC_APPLICATION_ID,
          beacon: 'bam.nr-data.net',
          errorBeacon: 'bam.nr-data.net'
        }
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://covid-19-apis.postman.com/',
        sitemap: 'https://covid-19-apis.postman.com/sitemap.xml',
        resolveEnv: () => process.env.GATSBY_ACTIVE_ENV,
        env: {
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }],
          },
          production: {
            policy: [{ userAgent: '*', allow: '/' }],
          },
        },
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-meta-redirect',
    {
      resolve: 'gatsby-plugin-gdpr-cookies',
      options: {
        googleAnalytics: {
          trackingId: 'UA-43979731-4',
          anonymize: true,
        },
        environments: ['production', 'development'],
      },
    },
  ],
};
