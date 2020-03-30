// this is the main page

import React from 'react';
import SEO from '../../components/seo';
import Layout from '../../components/TestingSites/layout';

import About from '../../components/TestingSites/about';
import HowItWorks from '../../components/TestingSites/howItWorks';
import Disclaimer from '../../components/TestingSites/disclaimer';
import CallToActionConsumers from '../../components/TestingSites/callToActionConsumers';
import CallToActionDevs from '../../components/TestingSites/callToActionDevs';

const FaqPage = () => (
  <Layout>
    <SEO title="FAQs | COVID-19 Testing Locations" />
    <div className="">
      <div className="container-fluid ts-hero ts-section">
        <div className="row">
          <div className="col-sm-12 text-center">
            <h1 className="mb-0">Frequently Asked Questions</h1>
          </div>
        </div>
      </div>
      <Disclaimer />
      <div className="container-fluid ts-main-area ts-section">
        <div className="container">
          <div className="row mb-4">
            <div className="col-sm-12">
              <p>These are some of the most common questions about this project. Please review before submitting a question via issue or email.</p>
            </div>
            <div className="col-sm-12">
              <dl className="ts-definition-list">
                <dt>Why is having an API important for this data?</dt>
                <dd>Having an API allows for real-time syndication of this crucial COVID-19 testing-location data across as many geographies as possible which dramatically increases the reach. At the same time, we can also maintain the accuracy and freshness of the API’s source data by centrally managing it via Google Sheets.</dd>
                <dt>Why does the project use Google Sheets?</dt>
                <dd>
                  Google Sheets provides a free, easy-to-use, broadly accessible medium for managing the centralized testing-location data. Learn more in
                  <a href="/covid-19-testing-sites/how-it-works/">How it Works</a>
                  .
                </dd>
                <dt>Why does the project use Postman?</dt>
                <dd>
                  <a href="https://www.postman.com/">Postman</a>
                  {' '}
                  provides a free, easy-to-use, broadly accessible medium for publishing and consuming APIs, making the testing-location data more accessible to developers.
                </dd>
                <dt>Why are there separate tabs for organizations, locations, physical addresses, phones, and regular schedules?</dt>
                <dd>
                  We&apos;ve created separate tabs for each of these items because we are using the
                  <a href="https://openreferral.org" target="_blank" rel="noopener noreferrer">Open Referral standard</a>
                  . This approach makes the data available in a spreadsheet format while also providing a single complete endpoint that stitches it all together.
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
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
              <div className="col-sm-6">
                <About />
              </div>
              <div className="col-sm-6">
                <HowItWorks />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default FaqPage;
