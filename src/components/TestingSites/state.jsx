/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
// on index (main) page
import React from 'react';
import { Link } from 'gatsby';

const State = ({ state }) => (
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
                <h3 className="card-title">CA</h3>
                <p>Last updated: Mar 31, 2020</p>
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
                <h3 className="card-title">MA</h3>
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
                <h3 className="card-title">NY</h3>
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
                <h3 className="card-title">WA</h3>
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
                <h3 className="card-title">TX</h3>
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
                <h3 className="card-title">FL</h3>
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
                <h3 className="card-title">NJ</h3>
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
                <h3 className="card-title">State</h3>
                <p>Last updated: Mar 31, 2020</p>
                {state.florida.map((site) => {
                  if (site.id === '100000') {
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
                <Link to="/covid-19-testing-sites/florida/" className="btn btn-dark ts-button">view all sites</Link>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  </>
);

export default State;
