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
import CookieAlert from './Shared/CookieAlert';
import ReferrerCookie from '../ReferrerCookie';
import './styles/_all.scss';

const Layout = ({ children }) => (
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `);

  // return (
  <div>
    <Header />
    <main>{children}</main>
    <ReferrerCookie />
    <Footer />
    <CookieAlert />
  </div>
);
// };

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
