// this is the main page

import React from 'react';
import { Link } from 'gatsby';
import SEO from '../../components/seo';
import Layout from '../../components/TestingSites/layout';
import HeroPage from '../../components/TestingSites/heroPage';

import CallToActionConsumers from '../../components/TestingSites/callToActionConsumers';
import CallToActionDevs from '../../components/TestingSites/callToActionDevs';
import LegalCopy from '../../components/TestingSites/resource';

const AboutPage = () => (
  <Layout>
    <SEO title="About | COVID-19 Testing Locations" />
    <HeroPage pageTitle="About" />
    <div className="container-fluid ts-main-area ts-section">
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-8">
            <p>
              This is an effort to crowdsource and centralize the availability of
              {' '}
              <Link to="https://www.who.int/emergencies/diseases/novel-coronavirus-2019">COVID-19</Link>
              {' '}
              testing locations across all 50 US states using two freely available online tools while using APIs to make sure the location data can be syndicated and distributed as widely as possible. The preferred method is:
            </p>
          </div>
          <div className="col-md-8">
            <div className="card ts-cards">
              <div className="card-body">
                <h3 className="card-title">Postman Collections</h3>
                <p className="card-text">Using a Postman collection, data is pulled from Google using the Google Sheets API and then updates an API, documentation, and publishes data to GitHub for display to end users.</p>
                <a href="/" target="_blank" rel="noopener noreferrer" className="card-link">View COVID-19 Collections</a>
                <a href="https://learning.postman.com/docs/postman/collections/intro-to-collections/" target="_blank" rel="noopener noreferrer" className="card-link">Intro to Postman Collections</a>
              </div>
            </div>
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
    </div>
    <LegalCopy />
  </Layout>
);

export default AboutPage;
