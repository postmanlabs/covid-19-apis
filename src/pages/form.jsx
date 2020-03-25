import React from 'react';
// import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const FormPage = () => (
  <Layout>
    <SEO title="Contact Postman Form" />
    <div className="container">
      <div className="row">
        <div className="col-12 contact-form">
          <h2 className="h3">Tell us about your organization</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-2" />
        <div className="col-sm-10 contact-us">
          <form id="mktoForm_1376" className="nonprofit__form" />
        </div>
      </div>
    </div>
  </Layout>
);

export default FormPage;
