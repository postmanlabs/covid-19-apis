
// import React from 'react';
// import SEO from '../../components/seo';
// import Layout from '../../components/TestingSites/layout';

// import StateTestingSites from '../../components/TestingSites/stateTestingSite';

// const StatePage = () => (
//   <Layout>
//     <SEO title="List of APIs and Blueprints" />
//     <div className="test">
//       <h1>Hi! you are on the testing site, State.jsx</h1>
//       <StateTestingSites />
//     </div>
//   </Layout>
// );

// export default StatePage;

import React from 'react';
// import { Link } from 'gatsby';
import axios from 'axios';
// import { graphql } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';

class StateComponent extends React.Component {
  // access context
  constructor(props) {
    super(props);

    this.state = {
      data: '',
    };
  }

  componentDidMount() {
    axios.get(`https://covid-19-testing.github.io/locations/${state}/complete.json`).then((response) => {
      this.setState({ data: response });
    });
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        {console.log('data: ', data)}

        {data.data.map((value) => (
          <h1>{value.name}</h1>
        )) }
      </div>
    );
  }
}


const State = () => {
  const state = useStaticQuery(graphql`
  {
    allSitePage {
      edges {
        node {
          context {
            state
          }
        }
      }
    }
  }`);
  return (
    <>
      <StateComponent state={state.allSitePage.edges} />
      <div>{console.log('state from graphql call....', state)}</div>
    </>
  );
};

export default State;
