// on index (main) page
import React from 'react';
import { Link } from 'gatsby';

const State = () => (
  <>
    <div className="row">
      <div className="col-12">
        <h1>Find By State</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, neque? Sapiente, quod. Quaerat, vel libero sit maiores et dicta iusto excepturi saepe nam, sapiente itaque perferendis inventore illum odio obcaecati?</p>
      </div>
    </div>
    <div className="row">
      <div className="col-6">
        <h3>CA</h3>
        <Link to="/">Testing Site Name</Link>
        <Link to="/">Testing Site Name</Link>
        <Link to="/" className="btn">view all CA sites</Link>
      </div>
      <div className="col-6">
        <h3>NY</h3>
        <Link to="/">Testing Site Name</Link>
        <Link to="/">Testing Site Name</Link>
        <Link to="/" className="btn">view all NY sites</Link>
      </div>
    </div>
    <div className="row">
      <div className="col-6">
        <h3>MA</h3>
        <Link to="/">Testing Site Name</Link>
        <Link to="/">Testing Site Name</Link>
        <Link to="/" className="btn">view all MA sites</Link>
      </div>
      <div className="col-6">
        <h3>WA</h3>
        <Link to="/">Testing Site Name</Link>
        <Link to="/">Testing Site Name</Link>
        <Link to="/" className="btn">view all WA sites</Link>
      </div>
    </div>
  </>
);

export default State;
