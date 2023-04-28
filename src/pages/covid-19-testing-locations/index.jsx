/* eslint-disable react/no-unused-state */
// this is the main page

import React from 'react';
import axios from 'axios';
import { useStaticQuery, graphql } from 'gatsby';
import { Hero } from 'aether-marketing';
import SEOTS from '../../components/TestingSites/seots';
import Layout from '../../components/TestingSites/layout';

// import Hero from '../../components/TestingSites/hero';
import CallToActionConsumers from '../../components/TestingSites/callToActionConsumers';
import CallToActionDevs from '../../components/TestingSites/callToActionDevs';
import State from '../../components/TestingSites/state';
import Resource from '../../components/TestingSites/resource';

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


class IndexPageComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      alabama: [],
      alaska: [],
      arizona: [],
      arkansas: [],
      california: [],
      colorado: [],
      connecticut: [],
      delaware: [],
      florida: [],
      georgia: [],
      hawaii: [],
      idaho: [],
      illinois: [],
      indiana: [],
      kansas: [],
      kentucky: [],
      louisiana: [],
      maine: [],
      massachusetts: [],
      michigan: [],
      minnesota: [],
      mississippi: [],
      missouri: [],
      montana: [],
      nevada: [],
      newjersey: [],
      newmexico: [],
      newyork: [],
      northcarolina: [],
      oklahoma: [],
      pennsylvania: [],
      texas: [],
      utah: [],
      washington: [],
    };
  }

  componentDidMount() {
    const { usState } = this.props;

    usState.map((data) => {
      if (data.node.pageContext && data.node.pageContext.state !== undefined) {
        const { state } = data.node.pageContext;
        axios.get(`https://covid-19-testing.github.io/locations/${state}/complete.json`).then((response) => {
          if (state === 'alabama') {
            this.setState({ alabama: response.data });
          }
          if (state === 'alaska') {
            this.setState({ alaska: response.data });
          }
          if (state === 'arizona') {
            this.setState({ arizona: response.data });
          }
          if (state === 'arkansas') {
            this.setState({ arkansas: response.data });
          }
          if (state === 'california') {
            this.setState({ california: response.data });
          }
          if (state === 'colorado') {
            this.setState({ colorado: response.data });
          }
          if (state === 'connecticut') {
            this.setState({ connecticut: response.data });
          }
          if (state === 'delaware') {
            this.setState({ delaware: response.data });
          }
          if (state === 'florida') {
            this.setState({ florida: response.data });
          }
          if (state === 'georgia') {
            this.setState({ georgia: response.data });
          }
          if (state === 'hawaii') {
            this.setState({ hawaii: response.data });
          }
          if (state === 'idaho') {
            this.setState({ idaho: response.data });
          }
          if (state === 'illinois') {
            this.setState({ illinois: response.data });
          }
          if (state === 'indiana') {
            this.setState({ indiana: response.data });
          }
          if (state === 'kansas') {
            this.setState({ kansas: response.data });
          }
          if (state === 'kentucky') {
            this.setState({ kentucky: response.data });
          }
          if (state === 'louisiana') {
            this.setState({ louisiana: response.data });
          }
          if (state === 'maine') {
            this.setState({ maine: response.data });
          }
          if (state === 'massachusetts') {
            this.setState({ massachusetts: response.data });
          }
          if (state === 'michigan') {
            this.setState({ michigan: response.data });
          }
          if (state === 'minnesota') {
            this.setState({ minnesota: response.data });
          }
          if (state === 'mississippi') {
            this.setState({ mississippi: response.data });
          }
          if (state === 'missouri') {
            this.setState({ missouri: response.data });
          }
          if (state === 'montana') {
            this.setState({ montana: response.data });
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
          if (state === 'north-carolina') {
            this.setState({ northcarolina: response.data });
          }
          if (state === 'oklahoma') {
            this.setState({ oklahoma: response.data });
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
        <Hero
          heroLayout={data.heroLayout}
          sideXSideLayout={data.sideXSideLayout}
          divider={data.divider}
          backgroundColor={data.backgroundColor}
          title={data.title}
          media={data.media}
          textColor={data.textColor}
        />
          <div className="alert_banner">This is an Example Implementation -- Does Not Contain Live Data!</div>
          <State state={this.state} />
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

function IndexPage() {
  const usState = useStaticQuery(graphql`
  {
    allSitePage {
      edges {
        node {
          pageContext 
        }
      }
    }
  }`);
  return (
    <IndexPageComponent usState={usState.allSitePage.edges} />
  );
}

export default IndexPage;
