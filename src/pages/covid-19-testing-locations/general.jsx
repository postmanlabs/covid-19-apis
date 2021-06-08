import React from 'react';
import SEOTS from '../../components/TestingSites/seots';
import Layout from '../../components/TestingSites/layout';

const GeneralPage = () => (
  <Layout>
    <SEOTS title="List of APIs and Blueprints" />
    <div className="test">
      <h1>Hi! you are on the testing site, General.jsx</h1>
    </div>
  </Layout>
);

export default GeneralPage;
