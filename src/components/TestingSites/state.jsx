/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
// on index (main) page
import React from 'react';
import moment from 'moment';

import Site from './site';

const State = ({ state }) => {
  const dateCA = state.california;
  const updatedCA = new Date(Math.max.apply(null, dateCA.map((e) => new Date(e.updated))));
  const nowCA = moment(updatedCA).fromNow();

  const dateMA = state.massachusetts;
  const updatedMA = new Date(Math.max.apply(null, dateMA.map((e) => new Date(e.updated))));
  const nowMA = moment(updatedMA).fromNow();

  const dateNY = state.newyork;
  const updatedNY = new Date(Math.max.apply(null, dateNY.map((e) => new Date(e.updated))));
  const nowNY = moment(updatedNY).fromNow();

  const dateWA = state.washington;
  const updatedWA = new Date(Math.max.apply(null, dateWA.map((e) => new Date(e.updated))));
  const nowWA = moment(updatedWA).fromNow();

  const dateTX = state.texas;
  const updatedTX = new Date(Math.max.apply(null, dateTX.map((e) => new Date(e.updated))));
  const nowTX = moment(updatedTX).fromNow();

  const dateFL = state.florida;
  const updatedFL = new Date(Math.max.apply(null, dateFL.map((e) => new Date(e.updated))));
  const nowFL = moment(updatedFL).fromNow();

  const dateNJ = state.newjersey;
  const updatedNJ = new Date(Math.max.apply(null, dateNJ.map((e) => new Date(e.updated))));
  const nowNJ = moment(updatedNJ).fromNow();

  const dateDE = state.delaware;
  const updatedDE = new Date(Math.max.apply(null, dateDE.map((e) => new Date(e.updated))));
  const nowDE = moment(updatedDE).fromNow();

  const dateNV = state.nevada;
  const updatedNV = new Date(Math.max.apply(null, dateNV.map((e) => new Date(e.updated))));
  const nowNV = moment(updatedNV).fromNow();

  const datePA = state.pennsylvania;
  const updatedPA = new Date(Math.max.apply(null, datePA.map((e) => new Date(e.updated))));
  const nowPA = moment(updatedPA).fromNow();

  const dateUT = state.utah;
  const updatedUT = new Date(Math.max.apply(null, dateUT.map((e) => new Date(e.updated))));
  const nowUT = moment(updatedUT).fromNow();

  const dateAZ = state.arizona;
  const updatedAZ = new Date(Math.max.apply(null, dateAZ.map((e) => new Date(e.updated))));
  const nowAZ = moment(updatedAZ).fromNow();

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
              <Site
                now={nowAZ}
                state={state.arizona}
                title="Arizona"
                abbr="AZ"
                endpoint="arizona"
              />
              <Site
                now={nowCA}
                state={state.california}
                title="California"
                abbr="CA"
                endpoint="california"
              />
              <Site
                now={nowDE}
                state={state.delaware}
                title="Delaware"
                abbr="DE"
                endpoint="delaware"
              />
            </div>
          </div>

          <div className="row">
            <div className="card-deck">
              <Site
                now={nowFL}
                state={state.florida}
                title="Florida"
                abbr="FL"
                endpoint="florida"
              />
              <Site
                now={nowMA}
                state={state.massachusetts}
                title="Massachusetts"
                abbr="MA"
                endpoint="massachusetts"
              />
              <Site
                now={nowNV}
                state={state.nevada}
                title="Nevada"
                abbr="NV"
                endpoint="nevada"
              />
            </div>
          </div>

          <div className="row">
            <div className="card-deck">
              <Site
                now={nowNJ}
                state={state.newjersey}
                title="New Jersey"
                abbr="NJ"
                endpoint="new-jersey"
              />
              <Site
                now={nowNY}
                state={state.newyork}
                title="New York"
                abbr="NY"
                endpoint="new-york"
              />
              <Site
                now={nowPA}
                state={state.pennsylvania}
                title="Pennsylvania"
                abbr="PA"
                endpoint="pennsylvania"
              />
            </div>
          </div>

          <div className="row">
            <div className="card-deck">
              <Site
                now={nowTX}
                state={state.texas}
                title="Texas"
                abbr="TX"
                endpoint="texas"
              />
              <Site
                now={nowUT}
                state={state.utah}
                title="Utah"
                abbr="UT"
                endpoint="utah"
              />
              <Site
                now={nowWA}
                state={state.washington}
                title="Washington"
                abbr="WA"
                endpoint="washington"
              />
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default State;
