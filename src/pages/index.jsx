import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Microsite/layout';
import SEO from '../components/seo';
import Hero from '../components/Microsite/Shared/Hero';
import Welcome from '../components/Microsite/Shared/Welcome';
import Collection from '../components/Microsite/Collections/Collection';
import Apis from '../components/Microsite/Apis/Apis';
import Nonprofit from '../components/Microsite/NonProfits/Nonprofits';


const IndexPage = () => (
  <Layout>
    <SEO title="List of APIs and Blueprints" />
    <Hero />
    <Welcome />
    <div className="collection__wrapper">
      <div className="container">
        <div className="row collection__header text-center">
          <div className="col-md-12">
            <h2 className="h1">API Collections to Help in the COVID-19 Fight</h2>
          </div>
        </div>
        <div>
          <Collection />
        </div>
        <div className="row">
          <div className="col-md-12">
            <p className="collection__end">
              To submit an API to add to the list, please email us at
              <br />
              <span><a className="link-style" href="mailto:covid-19@postman.com"> COVID-19@postman.com</a></span>
              or
              <span>
                <a href="https://github.com/postmanlabs/covid-19-apis/issues" className="link-style"> submit an issue on Github</a>
                .
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="api__wrapper">
      <div className="container">
        <div className="row collection__header">
          <div className="col-md-12 text-center">
            <h2 className="h1">Helping You Publish New COVID-Related APIs </h2>
          </div>
          <div className="col-md-10 offset-md-1">
            <p>
              In addition to the fast-growing list of existing APIs and API resources listed above, the Postman team is also working around the clock to create new API collections which will provide you with access to vital data sets that aren&apos;t presently served by any existing APIs, using the following blueprints for quickly deploying new APIs from existing data sets:
            </p>
          </div>
        </div>
        <div>
          <Apis />
        </div>
        <div className="row mb-4">
          <div className="col-md-12">
            <p className="collection__end">
              If you have a pandemic-related project you’d like deployed as an API, please email us at
              <br />
              <span><a className="link-style" href="mailto:covid-19@postman.com"> COVID-19@postman.com</a></span>
              or
              <span>
                <a href="https://github.com/postmanlabs/covid-19-apis/issues" className="link-style"> submit an issue on Github</a>
                .
              </span>
            </p>
            <p className="collection__end_p">
              If you&apos;d like additional help or guidance on using APIs to retrieve or expose critical data about the pandemic, the Postman developer relations team can provide consultations to get you going in the right direction. Contact us anytime at
              <span><a className="link-style" href="mailto:covid-19@postman.com"> COVID-19@postman.com</a></span>
              .
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="container-fluid">
      <div className="row blurb text-center">
        <div className="col-md-12">
          <h2> COVID-19 Testing Locations (Example Project)</h2>
          <p className="collection__end_p">
            An example implementation showing how Google Sheets, Postman, and GitHub can be used to crowdsource public data.
          </p>
        </div>
        <div className="col-md-12 blurb_padding">
          <Link className="btn btn__secondary-light" to="/covid-19-testing-locations/">See Reference Implementation</Link>
        </div>
      </div>
    </div>

    <Nonprofit />
    {/* <Link to="/thankyou">Go to page 2</Link> */}
  </Layout>
);

export default IndexPage;
