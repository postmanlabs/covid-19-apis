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
    <div className="">
      <Hero />
      <Disclaimer />
      <State />
      <div className="youmayalsolike">
        <CallToAction />
        <div className="container-fluid ts-section">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 ts-about">
                <About />
              </div>
              <div className="col-sm-6">
                <HowItWorks />
              </div>
            </div>
          </div>
        </div>
        <FAQs />
        <GoogleSheets />
      </div>
    </div>
  </Layout>
);

export default IndexPage;
