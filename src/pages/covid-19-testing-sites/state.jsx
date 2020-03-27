
import React from 'react';
import SEO from '../../components/seo';
import Layout from '../../components/TestingSites/layout';

import StateTestingSites from '../../components/TestingSites/stateTestingSite';

const StatePage = () => (
  <Layout>
    <SEO title="List of APIs and Blueprints" />
    <div className="test">
      <h1>Hi! you are on the testing site, State.jsx</h1>
      <StateTestingSites />
    </div>
  </Layout>
);

export default StatePage;
