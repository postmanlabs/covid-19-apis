/* eslint-disable react/no-unused-state */
// this is the main page

import React from 'react';
import axios from 'axios';
import { useStaticQuery, graphql } from 'gatsby';

import SEO from '../../components/seo';
import Layout from '../../components/TestingSites/layout';

import Hero from '../../components/TestingSites/hero';
import About from '../../components/TestingSites/about';
import HowItWorks from '../../components/TestingSites/howItWorks';
import Disclaimer from '../../components/TestingSites/disclaimer';
import FAQs from '../../components/TestingSites/faqs';
import CallToAction from '../../components/TestingSites/callToAction';
import GoogleSheets from '../../components/TestingSites/googleSheets';
import State from '../../components/TestingSites/state';

class IndexPageComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      california: [],
      washington: [],
    };
  }

  componentDidMount() {
    const { usState } = this.props;

    usState.map((node) => {
      if (node.node.context.state !== null) {
        let { state } = node.node.context;

        axios.get(` https://covid-19-testing.github.io/locations/${state}/complete.json`).then((response) => {

          this.setState({ data: response.data });

          if (state === 'california') {
            this.setState({ california: response.data });
          }
          if (state === 'washington') {
            this.setState({ washington: response.data });
          }
        });
      }
      return this.state;
    });
  }


  render() {
    // const { data } = this.state;
    // const { washington } = this.state;
    // const { california } = this.state;

    return (
      <Layout>
        {/* {console.log('axios data 3 on data: ', data)}
        {console.log('axios data 3 on california: ', california)}
        {console.log('axios data 3 on washington: ', washington)} */}

        <SEO title="List of APIs and Blueprints" />
        <div className="">
          <Hero />
          <Disclaimer />
          <State state={this.state} />
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
  }
}

const IndexPage = () => {
  const usState = useStaticQuery(graphql`
  {
    allSitePage {
      edges {
        node {
          context {
            state
          }
        }
      }
    }
  }`);
  return (
    <>
      <IndexPageComponent usState={usState.allSitePage.edges} />
    </>
  );
};

export default IndexPage;
