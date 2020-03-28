import React from 'react';
import { Link } from 'gatsby';

const GoogleSheets = () => (
  <div className="container-fluid ts-section">
    <div className="container">
      <div className="row ts-google-sheets">
        <div className="col-sm-12 text-center">
          <h2>Google Sheets</h2>
        </div>
        <div className="col-md-6 text-center">
          <p>
            Key data for this project is stored in a series of publicly available spreadsheets that you can view and contribute to.
          </p>
        </div>
        <div className="col-md-6">
          <ul>
            <li><Link to="/">A really long API/Sheet Name</Link></li>
            <li><Link to="/">Another sheet name</Link></li>
          </ul>
          <button type="button" className="btn btn-dark">see all Google Sheets</button>
        </div>
      </div>
    </div>
  </div>
);

export default GoogleSheets;
