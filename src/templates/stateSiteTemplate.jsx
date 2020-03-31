// lists all States
import React from 'react';
import axios from 'axios';
import SEO from '../components/seo';
import Layout from '../components/TestingSites/layout';

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
      <Layout>
        <SEO title="State Specific List of testing sites" />
        <div>
          {data.map((site) => (
            <>
              <h1 key={Math.random()}>
                {site.name}
              </h1>
              <p>{site.description}</p>
            </>
          ))}
        </div>
      </Layout>
    );
  }
}


export default ({ pageContext: { state } }) => (
  <StateListComponent usState={state} />
);
