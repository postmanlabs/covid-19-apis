/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
// import { useStaticQuery, graphql } from 'gatsby';

// import Header from './header';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import ReferrerCookie from '../ReferrerCookie';
import './styles/_all.scss';

const delay = 1000;

let throttle;

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `);

  if (typeof document === 'object') {
    window.clearTimeout(throttle);

    throttle = setTimeout(() => {
      if (window.pm) {
        if (typeof window.pm.scalp === 'function') {
          window.pm.scalp(
            'pm-analytics',
            'load',
            document.location.pathname,
          );
        }
        clearTimeout(throttle);
      }
    }, delay);
  }

  return (
    <div>
      <Header />
      <main>{children}</main>
      <ReferrerCookie />
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
