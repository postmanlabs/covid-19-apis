// this is the main page

import React from 'react';
import SEO from '../../components/seo';
import Layout from '../../components/TestingSites/layout';

import Hero from '../../components/TestingSites/hero';
import About from '../../components/TestingSites/about';
import HowItWorks from '../../components/TestingSites/howItWorks';
import Disclaimer from '../../components/TestingSites/disclaimer';
import FAQs from '../../components/TestingSites/faqs';
import CallToActionConsumers from '../../components/TestingSites/callToActionConsumers';
import CallToActionDevs from '../../components/TestingSites/callToActionDevs';
import State from '../../components/TestingSites/state';

const IndexPage = () => (
  <Layout>
    <SEO title="List of APIs and Blueprints" />
    <div className="">
      <Hero />
      <Disclaimer />
      <State />
      <div className="youmayalsolike">
        <div className="container-fluid ts-section">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <CallToActionConsumers />
              </div>
              <div className="col-sm-6">
                <CallToActionDevs />
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid ts-section">
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <About />
              </div>
              <div className="col-sm-4">
                <HowItWorks />
              </div>
              <div className="col-sm-4">
                <FAQs />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
