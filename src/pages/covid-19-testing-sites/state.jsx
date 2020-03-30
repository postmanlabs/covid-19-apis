
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
      data: [],
      california: [],
      washington: [],
    };
  }

  componentDidMount() {
    const { usState } = this.props;

    // console.log('axios 1 usState props', usState);

    usState.map((node) => {
      if (node.node.context.state !== null) {
        // console.log('axios node 2 ', node);
        let { state } = node.node.context;
        // let usState = node.context.state;
        axios.get(` https://covid-19-testing.github.io/locations/${state}/complete.json`).then((response) => {
          console.log('axios 5 response', response.data);
          console.log('axios 5 state', state);
          this.setState({ data: response.data });

          if (state === 'california') {
            this.setState({ california: response.data });
          }
          if (state === 'washington') {
            this.setState({ washington: response.data });
          }
        });
      }
      return this.state;
    });
  }

  render() {
    const { data } = this.state;
    const { washington } = this.state;
    const { california } = this.state;

    return (
      <div>
        {console.log('axios data 3 on data: ', data)}
        {console.log('axios data 3 on california: ', california)}
        {console.log('axios data 3 on washington: ', washington)}
        <h1>build /state/</h1>
        {/* {data.map((value) => (
          <>
            <h1>{value.name}</h1>
            <p>{value.description}</p>
          </>
        )) } */}
        {california.map((value) => (
          <>
            <h1>California: {value.name}</h1>
            <p>{value.description}</p>
          </>
        )) }
        {washington.map((value) => (
          <>
            <h1>Washington: {value.name}</h1>
            <p>{value.description}</p>
          </>
        )) }
      </div>
    );
  }
}


const State = () => {
  const usState = useStaticQuery(graphql`
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
      <StateComponent usState={usState.allSitePage.edges} />
      {/* <div>{console.log('state from graphql call....', usState)}</div> */}
    </>
  );
};

export default State;
