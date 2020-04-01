/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
// on index (main) page
import React from 'react';
import { Link } from 'gatsby';
import moment from 'moment';

const State = ({ state }) => {
  const dateCA = state.california;

  dateCA.map((foo) => (
      new Date(Math.max.apply(null, dateCA.map(function(e) {
        return new Date(e.updated);
      })))
  ))
  console.log(foo);
  // for (var california in state) {
  //   if (state.hasOwnProperty(california)) {
  //     console.log('state mapping', california);
  //     // new Date(Math.max.apply(null, a.map(function(e) {
  //     //   return new Date(e.MeasureDate);
  //     // })));
  //   }
  // }

  return (
    <>
    <div className="container-fluid ts-main-area ts-section">
      <div className="container">
        <div className="row">
          <div className="col-md-10 offset-md-1 text-center mb-4">
            <h2>Find By State</h2>
            <p>Click on any testing site name to see the full details of that site, or click the “View All” button to see all testing locations in that state.</p>
          </div>
        </div>
        <div className="row">
          <div className="card-deck">
            <div className="card ts-cards col-sm-6">
              <div className="card-body">
                <h3 className="card-title">California</h3>
                <p>
                  Last updated:
                  {moment('2020-03-31').fromNow()}
                </p>
                {state.california.map((site) => {
                  if (site.id === '1' || site.id === '2' || site.id === '3') {
                    return (
                      <ul>
                        <li key={Math.random()}>
                          <Link to="/covid-19-testing-sites/california/">
                            {' '}
                            {site.name}
                          </Link>
                        </li>
                      </ul>
                    );
                  }
                })}
              </div>
              <div className="card-footer">
                <Link to="/covid-19-testing-sites/california/" className="btn btn-dark ts-button">view all CA sites</Link>
              </div>
            </div>
            <div className="card ts-cards col-sm-6">
              <div className="card-body">
                <h3 className="card-title">Massachusetts</h3>
                <p>Last updated: Mar 31, 2020</p>
                {state.massachusetts.map((site) => {
                  if (site.id === '1' || site.id === '2' || site.id === '3') {
                    return (
                      <ul>
                        <li key={Math.random()}>
                          <Link to="/covid-19-testing-sites/massachusetts/">
                            {' '}
                            {site.name}
                          </Link>
                        </li>
                      </ul>
                    );
                  }
                })}
              </div>
              <div className="card-footer">
                <Link to="/covid-19-testing-sites/massachusetts/" className="btn btn-dark ts-button">view all MA sites</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="card-deck">
            <div className="card ts-cards col-sm-6">
              <div className="card-body">
                <h3 className="card-title">New York</h3>
                <p>Last updated: Mar 31, 2020</p>
                {state.newyork.map((site) => {
                  if (site.id === '1' || site.id === '2' || site.id === '3') {
                    return (
                      <ul>
                        <li key={Math.random()}>
                          <Link to="/covid-19-testing-sites/new-york/">
                            {' '}
                            {site.name}
                          </Link>
                        </li>
                      </ul>
                    );
                  }
                })}
              </div>
              <div className="card-footer">
                <Link to="/covid-19-testing-sites/new-york/" className="btn btn-dark ts-button">view all NY sites</Link>
              </div>
            </div>
            <div className="card ts-cards col-sm-6">
              <div className="card-body">
                <h3 className="card-title">Washington</h3>
                <p>Last updated: Mar 31, 2020</p>
                {state.washington.map((site) => {
                  if (site.id === '1' || site.id === '2' || site.id === '3') {
                    return (
                      <ul>
                        <li>
                          <Link to="/covid-19-testing-sites/washington/">
                            {site.name}
                          </Link>
                        </li>
                      </ul>
                    );
                  }
                })}
              </div>
              <div className="card-footer">
                <Link to="/covid-19-testing-sites/washington/" className="btn btn-dark ts-button">view all WA sites</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="card-deck">
            <div className="card ts-cards col-sm-6">
              <div className="card-body">
                <h3 className="card-title">Texas</h3>
                <p>Last updated: Mar 31, 2020</p>
                {state.texas.map((site) => {
                  if (site.id === '1' || site.id === '2' || site.id === '3') {
                    return (
                      <ul>
                        <li key={Math.random()}>
                          <Link to="/covid-19-testing-sites/texas/">
                            {' '}
                            {site.name}
                          </Link>
                        </li>
                      </ul>
                    );
                  }
                })}
              </div>
              <div className="card-footer">
                <Link to="/covid-19-testing-sites/texas/" className="btn btn-dark ts-button">view all TX sites</Link>
              </div>
            </div>
            <div className="card ts-cards col-sm-6">
              <div className="card-body">
                <h3 className="card-title">Florida</h3>
                <p>Last updated: Mar 31, 2020</p>
                {state.florida.map((site) => {
                  if (site.id === '1' || site.id === '2' || site.id === '3') {
                    return (
                      <ul>
                        <li>
                          <Link to="/covid-19-testing-sites/florida/">
                            {site.name}
                          </Link>
                        </li>
                      </ul>
                    );
                  }
                })}
              </div>
              <div className="card-footer">
                <Link to="/covid-19-testing-sites/florida/" className="btn btn-dark ts-button">view all FL sites</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="card-deck">
            <div className="card ts-cards col-sm-6">
              <div className="card-body">
                <h3 className="card-title">New Jersey</h3>
                <p>Last updated: Mar 31, 2020</p>
                {state.newjersey.map((site) => {
                  if (site.id === '1' || site.id === '2' || site.id === '3') {
                    return (
                      <ul>
                        <li key={Math.random()}>
                          <Link to="/covid-19-testing-sites/new-jersey/">
                            {' '}
                            {site.name}
                          </Link>
                        </li>
                      </ul>
                    );
                  }
                })}
              </div>
              <div className="card-footer">
                <Link to="/covid-19-testing-sites/new-jersey/" className="btn btn-dark ts-button">view all NJ sites</Link>
              </div>
            </div>
            <div className="card ts-cards col-sm-6">
              <div className="card-body">
                <h3 className="card-title">Delaware</h3>
                <p>Last updated: Mar 31, 2020</p>
                {state.delaware.map((site) => {
                  if (site.id === '1' || site.id === '2' || site.id === '3') {
                    return (
                      <ul>
                        <li>
                          <Link to="/covid-19-testing-sites/delaware/">
                            {site.name}
                          </Link>
                        </li>
                      </ul>
                    );
                  }
                })}
              </div>
              <div className="card-footer">
                <Link to="/covid-19-testing-sites/delaware/" className="btn btn-dark ts-button">view all DE sites</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="card-deck">
            <div className="card ts-cards col-sm-6">
              <div className="card-body">
                <h3 className="card-title">Nevada</h3>
                <p>Last updated: Mar 31, 2020</p>
                {state.nevada.map((site) => {
                  if (site.id === '1' || site.id === '2' || site.id === '3') {
                    return (
                      <ul>
                        <li key={Math.random()}>
                          <Link to="/covid-19-testing-sites/nevada/">
                            {' '}
                            {site.name}
                          </Link>
                        </li>
                      </ul>
                    );
                  }
                })}
              </div>
              <div className="card-footer">
                <Link to="/covid-19-testing-sites/nevada/" className="btn btn-dark ts-button">view all NV sites</Link>
              </div>
            </div>
            <div className="card ts-cards col-sm-6">
              <div className="card-body">
                <h3 className="card-title">[ state ]</h3>
                <p>Last updated: Mar 31, 2020</p>
                {state.florida.map((site) => {
                  if (site.id === '10000') {
                    return (
                      <ul>
                        <li>
                          <Link to="/covid-19-testing-sites/delaware/">
                            {site.name}
                          </Link>
                        </li>
                      </ul>
                    );
                  }
                })}
              </div>
              <div className="card-footer">
                <Link to="/covid-19-testing-sites/delaware/" className="btn btn-dark ts-button">view all [ state ] sites</Link>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  </>
);
              }
export default State;
