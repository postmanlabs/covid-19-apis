// this is the main page

import React from 'react';
import SEO from '../../components/seo';
import Layout from '../../components/TestingSites/layout';

import Hero from '../../components/TestingSites/hero';
import About from '../../components/TestingSites/about';
import HowItWorks from '../../components/TestingSites/howItWorks';
import Disclaimer from '../../components/TestingSites/disclaimer';
import FAQs from '../../components/TestingSites/faqs';
import CallToAction from '../../components/TestingSites/callToAction';
import GoogleSheets from '../../components/TestingSites/googleSheets';
import State from '../../components/TestingSites/state';

const IndexPage = () => (
  <Layout>
    <SEO title="List of APIs and Blueprints" />
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <Hero />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Disclaimer />
        </div>
      </div>
      <div className="row">
        <State />
      </div>
      <div className="row">
        <div className="col-12">
          <CallToAction />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <About />
        </div>
        <div className="col-sm-6">
          <HowItWorks />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <FAQs />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <GoogleSheets />
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
