import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Microsite/layout';
import SEO from '../components/seo';
import Hero from '../components/Microsite/Shared/Hero';
import Welcome from '../components/Microsite/Shared/Welcome';
import Collection from '../components/Microsite/Collections/Collection';
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
            <h2 className="h1">
              API Collections to Help in the COVID-19 Fight
            </h2>
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
              <span>
                <a className="link-style" href="mailto:covid-19@postman.com">
                  {' '}
                  COVID-19@postman.com
                </a>
              </span>
              or
              <span>
                <a
                  href="https://github.com/postman-toolboxes/covid-19/issues"
                  className="link-style"
                >
                  {' '}
                  submit an issue on Github
                </a>
                .
              </span>
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
            An example implementation showing how Google Sheets, Postman, and
            GitHub can be used to crowdsource public data.
          </p>
        </div>
        <div className="col-md-12 blurb_padding">
          <Link
            className="btn btn__secondary-light"
            to="/covid-19-testing-locations/"
            onClick={() => {
              if (window.pm) {
                if (typeof window.pm.scalp === 'function') {
                  window.pm.scalp(
                    'pm-analytics',
                    'click',
                    `${document.location.pathname}:See Reference Implementation`,
                  );
                }
              }
            }}
          >
            See Reference Implementation
          </Link>
        </div>
      </div>
    </div>
    <Nonprofit />
    {/* <Link to="/thankyou">Go to page 2</Link> */}
  </Layout>
);

export default IndexPage;
