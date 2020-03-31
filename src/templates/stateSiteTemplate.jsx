// lists all States
import React from 'react';
import axios from 'axios';
import SEO from '../components/seo';
import Layout from '../components/TestingSites/layout';
import Hero from '../components/TestingSites/hero';

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

    return (
      <Layout>
        <SEO title="State Specific List of testing sites" />
        <Hero />
        <Disclaimer />
        <div className="container-fluid">
          <div className="container">
            {data.map((site) => (
              <div className="row">
                <div className="col-12 ts-state">
                  <h1 key={Math.random()}>
                    {site.name}
                  </h1>
                  <div className="row">
                    <div className="col-12 ts-state-site__description">
                      <p>{site.description}</p>
                      <p>
                        Transportation:
                        {' '}
                        {site.transportation}
                      </p>
                    </div>
                    <div className="col-12">
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
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    );
  }
}


export default ({ pageContext: { state } }) => (
  <StateListComponent usState={state} />
);
