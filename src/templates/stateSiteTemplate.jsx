/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
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
              <div className="row" key={Math.random()}>
                <div className="col-12 ts-state ts-cards">
                  <h2 key={Math.random()}>
                    {site.name}
                  </h2>
                  <div className="row">
                    <div className="col-12 ts-state-site__description">
                      <div className="row">
                        <div className="col-sm-8">
                          <p className="lastUpdated">
                            Last updated:
                            {site.updated}
                          </p>
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
                            {/* {console.log('regular schedule', site.regular_schedule)} */}
                            {site.regular_schedule.map((time) => {
                              // Monday:
                              if (time.weekday === '1') {
                                return (
                                  <>
                                    <h5>Monday</h5>
                                    <p>
                                      Opens at
                                      {time.opens_at}
                                    </p>
                                    <p>
                                      Closes at
                                      {time.closes_at}
                                    </p>
                                  </>
                                );
                              }
                              // Tuesday:
                              if (time.weekday === '2') {
                                return (
                                  <>
                                    <h5>Tueday</h5>
                                    <p>
                                      Opens at
                                      {time.opens_at}
                                    </p>
                                    <p>
                                      Closes at
                                      {time.closes_at}
                                    </p>
                                  </>
                                );
                              }
                              // Wednesday:
                              if (time.weekday === '3') {
                                return (
                                  <>
                                    <h5>Wednesday</h5>
                                    <p>
                                      Opens at
                                      {time.opens_at}
                                    </p>
                                    <p>
                                      Closes at
                                      {time.closes_at}
                                    </p>
                                  </>
                                );
                              }
                              // Thursday:
                              if (time.weekday === '4') {
                                return (
                                  <>
                                    <h5>Thursday</h5>
                                    <p>
                                      Opens at
                                      {time.opens_at}
                                    </p>
                                    <p>
                                      Closes at
                                      {time.closes_at}
                                    </p>
                                  </>
                                );
                              }
                              // Friday:
                              if (time.weekday === '5') {
                                return (
                                  <>
                                    <h5>Friday</h5>
                                    <p>
                                      Opens at
                                      {time.opens_at}
                                    </p>
                                    <p>
                                      Closes at
                                      {time.closes_at}
                                    </p>
                                  </>
                                );
                              }
                              // Saturday:
                              if (time.weekday === '6') {
                                return (
                                  <>
                                    <h5>Saturday</h5>
                                    <p>
                                      Opens at
                                      {time.opens_at}
                                    </p>
                                    <p>
                                      Closes at
                                      {time.closes_at}
                                    </p>
                                  </>
                                );
                              }
                              // Sunday:
                              if (time.weekday === '7') {
                                return (
                                  <>
                                    <h5>Sunday</h5>
                                    <p>
                                      Opens at
                                      {time.opens_at}
                                    </p>
                                    <p>
                                      Closes at
                                      {time.closes_at}
                                    </p>
                                  </>
                                );
                              }
                            })}
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
