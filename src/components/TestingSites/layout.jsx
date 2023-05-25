/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Microsite/Header/Header';
import Footer from './footer';
import ReferrerCookie from '../ReferrerCookie';
import SEO from '../seo';
import './styles/_allTesting.scss';

const delay = 1000;

let throttle;

function Layout({ children }) {
  if (typeof document === 'object') {
    window.clearTimeout(throttle);

    throttle = setTimeout(() => {
      if (window.pmt) {
        window.pmt('scalp', ['pm-analytics', 'load', document.location.pathname]);
        clearTimeout(throttle);
      }
    }, delay);
  }

  return (
    <div>
      <SEO title="COVID-19 Testing Locations" />
      <Header />
      <main>{children}</main>
      <ReferrerCookie />
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
