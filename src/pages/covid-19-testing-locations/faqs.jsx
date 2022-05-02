// this is the main page

import React from 'react';
import SEOTS from '../../components/TestingSites/seots';
import Layout from '../../components/TestingSites/layout';
import HeroPage from '../../components/TestingSites/heroPage';

import CallToActionConsumers from '../../components/TestingSites/callToActionConsumers';
import CallToActionDevs from '../../components/TestingSites/callToActionDevs';
import Resource from '../../components/TestingSites/resource';

function FaqPage() {
  return (
    <Layout>
      <SEOTS title="FAQs | COVID-19 Testing Locations" />
      <div className="">
        <HeroPage pageTitle="Frequently Asked Questions" />
        <div className="container-fluid ts-main-area ts-section">
          <div className="container">
            <div className="row mb-4">
              <div className="col-md-8">
                <p>These are some of the most common questions about this project. Please review before submitting a question via issue or email.</p>
              </div>
              <div className="col-md-8">
                <div className="card ts-cards">
                  <div className="card-body">
                    <h3 className="card-title">Why is having an API important for this data?</h3>
                    <p className="card-text">Having an API allows for real-time syndication of this crucial COVID-19 testing-location data across as many geographies as possible which dramatically increases the reach. At the same time, we can also maintain the accuracy and freshness of the API’s source data by centrally managing it via Google Sheets.</p>
                  </div>
                </div>

                <div className="card ts-cards">
                  <div className="card-body">
                    <h3 className="card-title">Why does the project use Google Sheets?</h3>
                    <p className="card-text">Google Sheets provides a free, easy-to-use, broadly accessible medium for managing the centralized testing-location data.</p>
                    <a href="/covid-19-testing-locations/how-it-works/" className="card-link">How it Works</a>
                  </div>
                </div>

                <div className="card ts-cards">
                  <div className="card-body">
                    <h3 className="card-title">Why does the project use Postman?</h3>
                    <p className="card-text">Postman provides a free, easy-to-use, broadly accessible medium for publishing and consuming APIs, making the testing-location data more accessible to developers.</p>
                    <a href="https://www.postman.com/" target="_blank" rel="noopener noreferrer" className="card-link">Learn more about Postman</a>
                  </div>
                </div>

                <div className="card ts-cards">
                  <div className="card-body">
                    <h3 className="card-title">Why are there separate tabs for organizations, locations, physical addresses, phones, and regular schedules?</h3>
                    <p className="card-text">We&apos;ve created separate tabs for each of these items because we are using the Open Referral standard. This approach makes the data available in a spreadsheet format while also providing a single complete endpoint that stitches it all together.</p>
                    <a href="https://openreferral.org" target="_blank" rel="noopener noreferrer" className="card-link">Visit Open Referral</a>
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
        <Resource />
      </div>
    </Layout>
  );
}

export default FaqPage;
