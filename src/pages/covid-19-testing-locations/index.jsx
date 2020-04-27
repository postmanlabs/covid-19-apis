/* eslint-disable react/no-unused-state */
// this is the main page

import React from 'react';
import axios from 'axios';
import { useStaticQuery, graphql } from 'gatsby';

import SEOTS from '../../components/TestingSites/seots';
import Layout from '../../components/TestingSites/layout';

import Hero from '../../components/TestingSites/hero';
import CallToActionConsumers from '../../components/TestingSites/callToActionConsumers';
import CallToActionDevs from '../../components/TestingSites/callToActionDevs';
import State from '../../components/TestingSites/state';
import Resource from '../../components/TestingSites/resource';


class IndexPageComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      arizona: [],
      california: [],
      colorado: [],

      delaware: [],
      florida: [],
      idaho: [],

      illinois: [],
      massachusetts: [],
      minnesota: [],

      missouri: [],
      nevada: [],
      newjersey: [],

      newmexico: [],
      newyork: [],
      pennsylvania: [],

      texas: [],
      utah: [],
      washington: [],
    };
  }

  componentDidMount() {
    const { usState } = this.props;

    usState.map((node) => {
      if (node.node.context && node.node.context.state !== null) {
        // eslint-disable-next-line prefer-const
        let { state } = node.node.context;

        axios.get(`https://covid-19-testing.github.io/locations/${state}/complete.json`).then((response) => {
          // this.setState({ data: response.data });

          if (state === 'arizona') {
            this.setState({ arizona: response.data });
          }
          if (state === 'california') {
            this.setState({ california: response.data });
          }
          if (state === 'colorado') {
            this.setState({ colorado: response.data });
          }
          if (state === 'delaware') {
            this.setState({ delaware: response.data });
          }
          if (state === 'florida') {
            this.setState({ florida: response.data });
          }
          if (state === 'idaho') {
            this.setState({ idaho: response.data });
          }
          if (state === 'illinois') {
            this.setState({ illinois: response.data });
          }
          if (state === 'massachusetts') {
            this.setState({ massachusetts: response.data });
          }
          if (state === 'minnesota') {
            this.setState({ minnesota: response.data });
          }
          if (state === 'missouri') {
            this.setState({ missouri: response.data });
          }
          if (state === 'nevada') {
            this.setState({ nevada: response.data });
          }
          if (state === 'new-jersey') {
            this.setState({ newjersey: response.data });
          }
          if (state === 'new-mexico') {
            this.setState({ newmexico: response.data });
          }
          if (state === 'new-york') {
            this.setState({ newyork: response.data });
          }
          if (state === 'pennsylvania') {
            this.setState({ pennsylvania: response.data });
          }
          if (state === 'texas') {
            this.setState({ texas: response.data });
          }
          if (state === 'utah') {
            this.setState({ utah: response.data });
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
    return (
      <Layout>
       
        <SEOTS title="List of APIs and Blueprints" />
        <div className="">
          <Hero />
          <State state={this.state} />
          {console.log(this.state)}
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
