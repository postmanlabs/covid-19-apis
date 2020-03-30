// lists all States
import React from 'react';
import axios from 'axios';

class StateListComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    const state = this.props.usState;

    axios.get(` https://covid-19-testing.github.io/locations/${state}/complete.json`).then((response) => {
      this.setState({ data: response.data });
    });

    return this.state;
  }


  render() {
    const { data } = this.state;

    return (
      <div>
        {data.map((site) => (
          <p key={Math.random()}>
            this state name:
            {site.name}
          </p>
        ))}
      </div>
    );
  }
}


export default ({ pageContext: { state } }) => (
  <StateListComponent usState={state} />
);
