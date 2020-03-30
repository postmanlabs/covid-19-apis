// lists all States
import React from 'react';
// import { Link } from 'gatsby';

// problem is taht I only pass in the page context. we need all the data
export default (data) => (
  <div>
    <h1>State Site Template</h1>
    <div>
      <p>{data}</p>
      {/* {console.log('state', state)} */}
      {console.log('state', data)}
    </div>
  </div>
);
