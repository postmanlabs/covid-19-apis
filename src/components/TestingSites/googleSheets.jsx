import React from 'react';
import { Link } from 'gatsby';

const GoogleSheets = () => (
  <div className="container-fluid ts-google-sheets ts-section">
    <div className="container">
      <div className="row">
        <div className="col-md-10 offset-md-1 text-center">
          <h2>Google Sheets</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta eos facilis velit sunt blanditiis numquam, obcaecati cumque!
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12">
          <div class="card ts-cards">
            <div class="card-body">
              <h3 class="card-title">Featured Sheets</h3>
              <ul>
                <li><Link to="/">A really long API/Sheet Name</Link></li>
                <li><Link to="/">Another sheet name</Link></li>
              </ul>
            <button type="button" className="btn btn-dark">see all Google Sheets</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default GoogleSheets;
