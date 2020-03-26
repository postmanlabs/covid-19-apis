/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';

import Header from './header';
import './styles/_allTesting.scss';

const Layout = ({ children }) => (
  <div>
    <Header />
    <main>{children}</main>
    {/* <Footer /> */}
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
