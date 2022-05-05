/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
// lists all States
import React from 'react';
import axios from 'axios';
import moment from 'moment';
import SEOTS from '../components/TestingSites/seots';
import Layout from '../components/TestingSites/layout';
import HeroLight from '../components/TestingSites/heroLight';
import CallToActionConsumers from '../components/TestingSites/callToActionConsumers';
import CallToActionDevs from '../components/TestingSites/callToActionDevs';
import Resource from '../components/TestingSites/resource';

class StateListComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    const { usState } = this.props;
    const state = usState;
    axios.get(`https://covid-19-testing.github.io/locations/${state}/complete.json`).then((response) => {
      this.setState({ data: response.data });
    });

    return this.state;
  }

  render() {
    const { data } = this.state;
    const { usState } = this.props;
    return (
      <Layout>
        <SEOTS title="State Specific List of testing locations" />
        <HeroLight usState={usState} />
        <div className="container-fluid">
          <div className="container">
            {data.map((site) => (
              <div className="row" key={Math.random()}>
                <div className="col-12 ts-state ts-cards">
                  <h2 id={`${site.name.replace(/\s/g, '')}`} key={Math.random()}>
                    {site.name}
                  </h2>
                  <p className="lastUpdated">
                    Last updated:
                    {' '}
                    {moment(site.updated).fromNow()}
                  </p>
                  <div className="row">
                    <div className="col-12 ts-state-site__description">
                      <div className="row">
                        <div className="col-sm-8">
                          <p>{site.description}</p>
                        </div>
                        <div className="col-sm-4">

                          {site.physical_address.map((deets) => (
                            <div className="ts-state-site__address" key={Math.random()}>
                              <p className="address">
                                {deets.address_1}
                                {' '}
                              </p>
                              <p className="address">
                                {deets.city}
                                {', '}
                                {deets.state_province}
                                {' '}
                                {deets.postal_code}
                              </p>
                              <p><a href={`https://www.google.com/maps/place/${deets.address_1}${',+'}${deets.city}${',+'}${deets.state_province}${'+'}${deets.postal_code}`} target="_blank" rel="noopener noreferrer">View on map</a></p>
                            </div>
                          ))}
                          {site.phones.map((tel) => (
                            <>
                              <p className="address">
                                Telephone number:
                                {' '}
                                <a href="tel:{tel.number}">{tel.number}</a>
                              </p>
                              <p className="address">
                                Language:
                                {' '}
                                {tel.language}
                              </p>
                            </>
                          ))}

                        </div>
                        {site.regular_schedule.map((time) => {
                          // Monday:
                          if (time.weekday === '1') {
                            return (
                              <div className="col">
                                <strong>Monday</strong>
                                <p className="mb-0">
                                  {time.opens_at}
                                </p>
                                <p>
                                  {time.closes_at}
                                </p>
                              </div>
                            );
                          }
                          // Tuesday:
                          if (time.weekday === '2') {
                            return (
                              <div className="col">
                                <strong>Tuesday</strong>
                                <p className="mb-0">
                                  {time.opens_at}
                                </p>
                                <p>
                                  {time.closes_at}
                                </p>
                              </div>
                            );
                          }
                          // Wednesday:
                          if (time.weekday === '3') {
                            return (
                              <div className="col">
                                <strong>Wednesday</strong>
                                <p className="mb-0">
                                  {time.opens_at}
                                </p>
                                <p>
                                  {time.closes_at}
                                </p>
                              </div>
                            );
                          }
                          // Thursday:
                          if (time.weekday === '4') {
                            return (
                              <div className="col">
                                <strong>Thursday</strong>
                                <p className="mb-0">
                                  {time.opens_at}
                                </p>
                                <p>
                                  {time.closes_at}
                                </p>
                              </div>
                            );
                          }
                          // Friday:
                          if (time.weekday === '5') {
                            return (
                              <div className="col">
                                <strong>Friday</strong>
                                <p className="mb-0">
                                  {time.opens_at}
                                </p>
                                <p>
                                  {time.closes_at}
                                </p>
                              </div>
                            );
                          }
                          // Saturday:
                          if (time.weekday === '6') {
                            return (
                              <div className="col">
                                <strong>Saturday</strong>
                                <p className="mb-0">
                                  {time.opens_at}
                                </p>
                                <p>
                                  {time.closes_at}
                                </p>
                              </div>
                            );
                          }
                          // Sunday:
                          if (time.weekday === '7') {
                            return (
                              <div className="col">
                                <strong>Sunday</strong>
                                <p className="mb-0">
                                  {time.opens_at}
                                </p>
                                <p>
                                  {time.closes_at}
                                </p>
                              </div>
                            );
                          }
                        })}
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
        <Resource />
      </Layout>
    );
  }
}

function StateTemplate({ pageContext: { state } }) {
  return <StateListComponent usState={state} />;
}

export default StateTemplate;
