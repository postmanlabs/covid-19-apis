// lists all States
import React from 'react';
import axios from 'axios';
import SEO from '../components/seo';
import Layout from '../components/TestingSites/layout';
import HeroLight from '../components/TestingSites/heroLight';
import CallToActionConsumers from '../components/TestingSites/callToActionConsumers';
import CallToActionDevs from '../components/TestingSites/callToActionDevs';

class StateListComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    const state = this.props.usState;

    axios.get(` https://covid-19-testing.github.io/locations/${state}/complete.json`).then((response) => {
      this.setState({ data: response.data });
    });

    return this.state;
  }


  render() {
    const { data } = this.state;
    const { usState } = this.props;
    return (
      <Layout>
        <SEO title="State Specific List of testing sites" />
        <HeroLight usState={usState} />
        <div className="container-fluid">
          <div className="container">
            {data.map((site) => (
              <div className="row">
                <div className="col-12 ts-state ts-cards">
                  <h2 key={Math.random()}>
                    {site.name}
                  </h2>
                  <div className="row">
                    <div className="col-12 ts-state-site__description">
                      <div className="row">
                        <div className="col-sm-8">
                          <p className="lastUpdated">Last updated: Mar 31, 2020</p>
                          <p>{site.description}</p>
                        </div>
                        <div className="col-sm-4">
                          <p>
                            Transportation:
                            {' '}
                            {site.transportation}
                            {site.physical_address.map((deets) => (
                              <div className="ts-state-site__address">
                                <p className="address">
                                  {deets.address_1}
                                  {' '}
                                </p>
                                <p className="address">
                                  {deets.city}
                                  {' '}
                                  {deets.state_province}
                                  {' '}
                                  {deets.postal_code}
                                </p>
                              </div>
                            ))}
                            {site.phones.map((tel) => (
                              <>
                                <p className="address">
                                  Telephone number:
                                  {' '}
                                  {tel.number}
                                </p>
                                <p className="address">
                                  Language:
                                  {' '}
                                  {tel.language}
                                </p>
                              </>
                            ))}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
      </Layout>
    );
  }
}


export default ({ pageContext: { state } }) => (
  <StateListComponent usState={state} />
);
