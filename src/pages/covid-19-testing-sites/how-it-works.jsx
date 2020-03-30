// this is the main page

import React from 'react';
import SEO from '../../components/seo';
import Layout from '../../components/TestingSites/layout';

import About from '../../components/TestingSites/about';
import HowItWorks from '../../components/TestingSites/howItWorks';
import Disclaimer from '../../components/TestingSites/disclaimer';
import FAQs from '../../components/TestingSites/faqs';
import CallToAction from '../../components/TestingSites/callToAction';
import GoogleSheets from '../../components/TestingSites/googleSheets';

const HowPage = () => (
  <Layout>
    <SEO title="How it Works | COVID-19 Testing Locations" />
    <div className="">
      <div className="container-fluid ts-hero ts-section">
        <div className="row">
          <div className="col-sm-12 text-center">
            <h1 className="mb-0">How it Works</h1>
          </div>
        </div>
      </div>
      <Disclaimer />
      <div className="container-fluid ts-main-area ts-section">
        <div className="container">
            <div className="row mb-4">
                <div className="col-sm-12">
                    <p>This crowdsourced, regularly-updated listing of COVID-19 testing locations leverages three common services to make data more manageable and accessible:</p>
                </div>
                <div className="col-sm-4">
                    <div class="card">
                        <div class="card-body">
                            <h3 class="card-title">Google Sheets</h3>
                            <p class="card-text">The core data for this project is stored in a single Google Sheet for each US state, providing a central data source that can be managed by multiple trusted stakeholders.</p>
                            <a href="#" class="card-link">Another link</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div class="card">
                        <div class="card-body">
                            <h3 class="card-title">Postman Collections</h3>
                            <p class="card-text">Using a Postman collection, data is pulled from Google using the Google Sheets API and then updates an API, documentation, and publishes data to GitHub for display to end users.</p>
                            <a href="/" target="_blank" class="card-link">View COVID-19 Collections</a>
                            <a href="https://learning.postman.com/docs/postman/collections/intro-to-collections/" target="_blank" class="card-link">Intro to Postman Collections</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div class="card">
                        <div class="card-body">
                            <h3 class="card-title">GitHub</h3>
                            <p class="card-text">GitHub is used to publish machine-readable open data for wider consumption, and is also used for the hosting of web and mobile applications.</p>
                            <a href="https://github.com/postmanlabs/covid-19-apis" class="card-link">View project on GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
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

export default HowPage;
