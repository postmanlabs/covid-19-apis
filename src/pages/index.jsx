import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Microsite/layout';
import SEO from '../components/seo';
import {Hero} from 'aether-marketing'
// import Hero from '../components/Microsite/Shared/Hero';
import Welcome from '../components/Microsite/Shared/Welcome';
import Collection from '../components/Microsite/Collections/Collection';
import Nonprofit from '../components/Microsite/NonProfits/Nonprofits';

const data = {
  heroLayout: "sideXSide",
  sideXSideLayout: "medium",
  title: ["Postman COVID-19 API Resource Center"],
  divider: true,
  backgroundColor: "",
  textColor: "",
  subtitle: [],
  media: {
    class: "",
    src: 'https://voyager.postman.com/illustration/api-monitoring-microscope-postman-illustration.svg',
    alt: "Isolated COVID-19 virus in space. Illustration.",
  },
};


function IndexPage() {
  return (
    <Layout>
      <SEO title="List of APIs and Blueprints" />
      <Hero
          heroLayout={data.heroLayout}
          sideXSideLayout={data.sideXSideLayout}
          divider={data.divider}
          backgroundColor={data.backgroundColor}
          title={data.title}
          media={data.media}
          textColor={data.textColor}
        />
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
}

export default IndexPage;
