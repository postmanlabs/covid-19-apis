// this is the main page

import React from 'react';
import SEOTS from '../../components/TestingSites/seots';
import Layout from '../../components/TestingSites/layout';
import HeroPage from '../../components/TestingSites/heroPage';

import CallToActionConsumers from '../../components/TestingSites/callToActionConsumers';
import CallToActionDevs from '../../components/TestingSites/callToActionDevs';
import blueprintImage from '../../images/covid-19-data-api-blueprint.jpg';
import Resource from '../../components/TestingSites/resource';

function HowPage() {
  return (
    <Layout>
      <SEOTS title="How it Works | COVID-19 Testing Locations" />
      <HeroPage pageTitle="How it Works" />
      <div className="container-fluid ts-main-area ts-section">
        <div className="container">
          <div className="row mb-4">
            <div className="col-sm-12">
              <p>This crowdsourced, regularly-updated listing of COVID-19 testing locations leverages two common services to make data more manageable and accessible:</p>
            </div>
            <div className="col-sm-6">
              <div className="card ts-cards">
                <div className="card-body">
                  <h3 className="card-title">Postman Collections</h3>
                  <p className="card-text">Using a Postman collection, data is pulled from Google using the Google Sheets API and then updates an API, documentation, and publishes data to GitHub for display to end users.</p>
                  <a href="https://covid-19-apis.postman.com/" target="_blank" rel="noopener noreferrer" className="card-link">View COVID-19 Collections</a>
                  <a href="https://learning.postman.com/docs/postman/collections/intro-to-collections/" target="_blank" rel="noopener noreferrer" className="card-link">Intro to Postman Collections</a>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card ts-cards">
                <div className="card-body">
                  <h3 className="card-title">GitHub</h3>
                  <p className="card-text">GitHub is used to publish machine-readable open data for wider consumption, and is also used for the hosting of web and mobile applications.</p>
                  <a href="https://github.com/postmanlabs/covid-19-apis" className="card-link">View project on GitHub</a>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-sm-12 text-center">
              <img className="img-fluid" src={blueprintImage} alt="Diagram of the API blueprint. Illustration." />
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-sm-12 text-center">
              <p>This approach to delivering a data API is a low-cost way to easily make data available across multiple applications using services that anyone can put to work without coding or much training, thereby allowing non-developers to easily publish APIs from small, more manageable data sets stored within spreadsheets.</p>
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
    </Layout>
  );
}

export default HowPage;
