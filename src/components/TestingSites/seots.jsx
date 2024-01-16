/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEOTS({
  lang, meta,
}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            description
            author
            social_card_media
            twitter_handle
          }
        }
      }
    `,
  );

  // const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title="COVID-19 Testing Locations"
      titleTemplate="%s"
      meta={[
        {
          name: 'description',
          content: 'This is an effort to crowdsource and centralize the availability of COVID-19 testing locations',
        },
        {
          property: 'og:title',
          content: 'COVID-19 Testing Locations',
        },
        {
          property: 'og:description',
          content: 'This is an effort to crowdsource and centralize the availability of COVID-19 testing locations',
        },
        {
          property: 'og:image',
          content: 'https://voyager.postman.com/social-preview/postman-covid-19-api-resource-center-social-preview.jpg',
        },
        {
          property: 'og:url',
          content: 'https://covid-19-apis.postman-beta.com/covid-19-testing-locations/',
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          property: 'twitter:image',
          content: 'https://voyager.postman.com/social-preview/postman-covid-19-api-resource-center-social-preview.jpg',
        },
        {
          name: 'twitter:creator',
          content: site.siteMetadata.author,
        },
        {
          name: 'twitter:title',
          content: 'COVID-19 Testing Locations',
        },
        {
          name: 'twitter:description',
          content: 'This is an effort to crowdsource and centralize the availability of COVID-19 testing locations',
        },
        {
          name: 'twitter:site',
          content: '@getpostman',
        },
      ].concat(meta)}
    >
      {/* fonts */}
      <link href="https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600&display=swap" rel="stylesheet" />
      {/* Bootstrap */}
      <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
    </Helmet>
  );
}

SEOTS.defaultProps = {
  lang: 'en',
  meta: [],
};

SEOTS.propTypes = {
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.shape({})),
};

export default SEOTS;
