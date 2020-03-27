import React from 'react';
import { Link } from 'gatsby';

const GoogleSheets = () => (
  <div className="google-sheets__wrapper">
    <div className="row">
      <div className="col-12 google-sheets__title">
        <h1>Google Sheets</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, voluptate ab molestiae totam nulla dolorum provident fugit dolore voluptatem tempore animi sequi tenetur nisi reiciendis eius quibusdam incidunt neque aspernatur.</p>
      </div>
    </div>
    <div className="row">
      <div className="col-12 google-sheets__call">
        <h3>Featured Sheets</h3>
        <Link to="/">A really long API/Sheet Name</Link>
        <Link to="/">View all Google sheets</Link>
        <Link to="/" className="btn">View all Google sheets</Link>
      </div>
    </div>
  </div>
);

export default GoogleSheets;
