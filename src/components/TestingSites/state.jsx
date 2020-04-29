import React from 'react';
import Site from './site';

const State = ({ state }) => (
  <>
    <div className="container-fluid ts-main-area ts-section">
      <div className="container">
        <div className="row">
          <div className="col-md-10 offset-md-1 text-center mb-4">
            <h2>Find By State</h2>
          </div>
        </div>

        <div className="row">
          <div className="card-deck">
            <Site
              state={state.arizona}
              title="Arizona"
              abbr="AZ"
              endpoint="arizona"
            />
            <Site
              state={state.california}
              title="California"
              abbr="CA"
              endpoint="california"
            />
            <Site
              state={state.colorado}
              title="Colorado"
              abbr="CO"
              endpoint="colorado"
            />
          </div>
        </div>

        <div className="row">
          <div className="card-deck">
            <Site
              state={state.delaware}
              title="Delaware"
              abbr="DE"
              endpoint="delaware"
            />
            <Site
              state={state.florida}
              title="Florida"
              abbr="FL"
              endpoint="florida"
            />
            <Site
              state={state.idaho}
              title="Idaho"
              abbr="ID"
              endpoint="idaho"
            />
          </div>
        </div>

        <div className="row">
          <div className="card-deck">
            <Site
              state={state.illinois}
              title="Illinois"
              abbr="IL"
              endpoint="illinois"
            />
            <Site
              state={state.massachusetts}
              title="Massachusetts"
              abbr="MA"
              endpoint="massachusetts"
            />
            <Site
              state={state.minnesota}
              title="Minnesota"
              abbr="MN"
              endpoint="minnesota"
            />
          </div>
        </div>

        <div className="row">
          <div className="card-deck">
            <Site
              state={state.missouri}
              title="Missouri"
              abbr="MO"
              endpoint="missouri"
            />
            <Site
              state={state.nevada}
              title="Nevada"
              abbr="NV"
              endpoint="nevada"
            />
            <Site
              state={state.newjersey}
              title="New Jersey"
              abbr="NJ"
              endpoint="new-jersey"
            />
          </div>
        </div>

        <div className="row">
          <div className="card-deck">
            <Site
              state={state.newmexico}
              title="New Mexico"
              abbr="NM"
              endpoint="new-mexico"
            />
            <Site
              state={state.newyork}
              title="New York"
              abbr="NY"
              endpoint="new-york"
            />
            <Site
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
              state={state.texas}
              title="Texas"
              abbr="TX"
              endpoint="texas"
            />
            <Site
              state={state.utah}
              title="Utah"
              abbr="UT"
              endpoint="utah"
            />
            <Site
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


export default State;
