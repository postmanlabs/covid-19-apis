import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
// import './Header.scss';

// import DynamicLink from '../Shared/DynamicLink';
// import postmanLogo from '../../images/postman-logo-horizontal-orange.svg';

// changes button in navbar based on cookie presence
// const LoginCheck = (props) => {
//   const { cookie } = props;
//   if (cookie !== 'yes') {
//     return (
//       <a href="https://identity.getpostman.com/login" className="btn btn__primary">Sign In</a>
//     );
//   }
//   return (
//     <a href="https://app.getpostman.com" className="btn btn__primary">Dashboard</a>
//   );
// };

class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);

    this.getCookie = this.getCookie.bind(this);
    const { data } = this.props;

    this.state = {
      data: JSON.parse(data),
      isToggledOn: 'unset',
    };
  }

  getCookie = (a) => {
    if (typeof document !== 'undefined') {
      const b = document.cookie.match(`(^|;)\\s*${a}\\s*=\\s*([^;]+)`);
      return b ? b.pop() : '';
    }
    return false;
  };

  // toggles the hamburger menu
  toggleMenu = () => {
    this.setState((state) => {
      if (state.isToggledOn === 'unset') {
        return ({
          isToggledOn: true,
        });
      }
      return ({
        isToggledOn: !state.isToggledOn,
      });
    });
  }

  render() {
    const {
      isToggledOn, data,
    } = this.state;
    return (
      <header className="header text-center navbar navbar-expand-xl navbar-light">
        <div className="navbar-brand header__brand">
          <a
            className="header__homelink"
            href="https://www.postman.com"
          >
            {/* <img className="header__logo" src={postmanLogo} alt="postman logo" /> */}
            <img
              className="header__logo"
              src="https://assets.getpostman.com/common-share/postman-logo-horizontal-white.svg"
              alt="Postman"
            />
            <span className="header__title">{data.title}</span>
          </a>
        </div>

        {/* hamburger toggle */}
        <button className="navbar-toggler" type="button" onClick={this.toggleMenu}>
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className={`header__right-links justify-content-end navbar-nav mr-auto navbar-collapse collapse show
            ${(isToggledOn === true) ? 'animate-open' : ''}
            ${(isToggledOn === false) ? 'animate-close' : ''}
            ${isToggledOn === 'unset' ? 'closed' : ''}
            `}
          id="navbarSupportedContent"
        >
          {/* {data.links.map((link) => (
            <div className="nav-item" key={Math.random()}>
              {link.cta ? <LoginCheck cookie={this.getCookie('getpostmanlogin')} /> : <DynamicLink className="nav-link" url={link.url} name={link.name} />}
            </div>
          ))} */}
        </div>
      </header>
    );
  }
}

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      headerLinks {
        value
      }
    }`);
  return (
    <HeaderComponent data={data.headerLinks.value} />
  );
};

export default Header;
