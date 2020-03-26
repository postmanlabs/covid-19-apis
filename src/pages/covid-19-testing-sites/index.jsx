// this is the main page

import React from 'react';
import SEO from '../../components/seo';
import Layout from '../../components/TestingSites/layout';
import About from '../../components/TestingSites/about';

const IndexPage = () => (
  <Layout>
    <SEO title="List of APIs and Blueprints" />
    <div className="test">
      <h1>Hi! you are on the testing site, index.jsx</h1>
      <About />
    </div>
  </Layout>
);

export default IndexPage;
