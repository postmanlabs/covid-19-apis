import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Microsite/layout';
import SEO from '../components/seo';
import Hero from '../components/Microsite/Shared/Hero';
import Welcome from '../components/Microsite/Shared/Welcome';
import Collection from '../components/Microsite/Collections/Collection';
import Nonprofit from '../components/Microsite/NonProfits/Nonprofits';

function IndexPage() {
  return (
    <Layout>
      <SEO title="List of APIs and Blueprints" />
      <div className="">
        <Hero />
        <Welcome />
        <div className="container">
          <div className="row collection__header text-center">
            <div className="col-md-12">
              <h2 className="h1">
                API Collections to Help in the COVID-19 Fight
              </h2>
            </div>
          </div>
          <div />
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
            >
              See Reference Implementation
            </Link>
          </div>
        </div>
      </div>
      <Nonprofit />

    </Layout>
  );
}

export default IndexPage;
