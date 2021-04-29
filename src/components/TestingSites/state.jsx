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
              state={state.alabama}
              title="Alabama"
              abbr="AL"
              endpoint="alabama"
            />
            <Site
              state={state.alaska}
              title="Alaska"
              abbr="AK"
              endpoint="alaska"
            />
            <Site
              state={state.arizona}
              title="Arizona"
              abbr="AZ"
              endpoint="arizona"
            />
          </div>
        </div>

        <div className="row">
          <div className="card-deck">
            <Site
              state={state.arkansas}
              title="Arkansas"
              abbr="AR"
              endpoint="arkansas"
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
              state={state.connecticut}
              title="Connecticut"
              abbr="CT"
              endpoint="connecticut"
            />
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
          </div>
        </div>

        <div className="row">
          <div className="card-deck">
            <Site
              state={state.georgia}
              title="Georgia"
              abbr="GA"
              endpoint="georgia"
            />
            <Site
              state={state.hawaii}
              title="Hawaii"
              abbr="HI"
              endpoint="hawaii"
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
              state={state.indiana}
              title="Indiana"
              abbr="IN"
              endpoint="indiana"
            />
            <Site
              state={state.kansas}
              title="Kansas"
              abbr="KS"
              endpoint="kansas"
            />
          </div>
        </div>

        <div className="row">
          <div className="card-deck">
            <Site
              state={state.kentucky}
              title="Kentucky"
              abbr="KY"
              endpoint="kentucky"
            />
            <Site
              state={state.louisiana}
              title="Louisiana"
              abbr="LA"
              endpoint="louisiana"
            />
            <Site
              state={state.maine}
              title="Maine"
              abbr="ME"
              endpoint="maine"
            />
          </div>
        </div>

        <div className="row">
          <div className="card-deck">
            <Site
              state={state.massachusetts}
              title="Massachusetts"
              abbr="MA"
              endpoint="massachusetts"
            />
            <Site
              state={state.michigan}
              title="Michigan"
              abbr="MI"
              endpoint="michigan"
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
              state={state.mississippi}
              title="Mississippi"
              abbr="MS"
              endpoint="mississippi"
            />
            <Site
              state={state.missouri}
              title="Missouri"
              abbr="MO"
              endpoint="missouri"
            />
            <Site
              state={state.montana}
              title="Montana"
              abbr="MT"
              endpoint="montana"
            />
          </div>
        </div>

        <div className="row">
          <div className="card-deck">
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
            <Site
              state={state.newmexico}
              title="New Mexico"
              abbr="NM"
              endpoint="new-mexico"
            />
          </div>
        </div>

        <div className="row">
          <div className="card-deck">
            <Site
              state={state.newyork}
              title="New York"
              abbr="NY"
              endpoint="new-york"
            />
            <Site
              state={state.northcarolina}
              title="North Carolina"
              abbr="NC"
              endpoint="north-carolina"
            />
            <Site
              state={state.oklahoma}
              title="Oklahoma"
              abbr="OK"
              endpoint="oklahoma"
            />
          </div>
        </div>

        <div className="row">
          <div className="card-deck">
            <Site
              state={state.pennsylvania}
              title="Pennsylvania"
              abbr="PA"
              endpoint="pennsylvania"
            />
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
          </div>
        </div>

        <div className="row">
          <div className="card-deck">
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
