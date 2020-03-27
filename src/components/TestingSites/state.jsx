// on index (main) page
import React from 'react';
import { Link } from 'gatsby';

const State = () => (
  <>
  <div className="container-fluid ts-main-area ts-section">
    <div className="container">
      <div className="row">
        <div className="col-md-10 offset-md-1 text-center">
          <h2>Find By State</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, neque? Sapiente, quod. Quaerat, vel libero sit maiores et dicta iusto excepturi saepe nam, sapiente itaque perferendis inventore illum odio obcaecati?</p>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-6">
          <div className="card ts-cards">
            <div className="card-body">
              <h3 className="card-title">CA</h3>
              <ul>
                <li><Link to="/">Testing Site with a really long Name that seems to go on forever and ever</Link></li>
                <li><Link to="/">Testing Site Name</Link></li>
              </ul>
              <a href="#" className="card-link">view all CA sites &#x2192;</a>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card ts-cards">
            <div className="card-body">
              <h3 className="card-title">MA</h3>
              <ul>
                <li><Link to="/">Testing Site with a really long Name that seems to go on forever and ever</Link></li>
                <li><Link to="/">Testing Site Name</Link></li>
              </ul>
              <a href="#" className="card-link">view all MA sites &#x2192;</a>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card ts-cards">
            <div className="card-body">
              <h3 className="card-title">NY</h3>
              <ul>
                <li><Link to="/">Testing Site with a really long Name that seems to go on forever and ever</Link></li>
                <li><Link to="/">Testing Site Name</Link></li>
              </ul>
              <a href="#" className="card-link">view all NY sites &#x2192;</a>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card ts-cards">
            <div className="card-body">
              <h3 className="card-title">WA</h3>
              <ul>
                <li><Link to="/">Testing Site with a really long Name that seems to go on forever and ever</Link></li>
                <li><Link to="/">Testing Site Name</Link></li>
              </ul>
              <a href="#" className="card-link">view all WA sites &#x2192;</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
);

export default State;
