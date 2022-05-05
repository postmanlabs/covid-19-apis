import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';

class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);
    const { data } = this.props;

    this.state = {
      data: JSON.parse(data),
      isToggledOn: 'unset',
    };
  }

  // toggles the hamburger menu
  toggleMenu() {
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
        />
      </header>
    );
  }
}

function Header() {
  const data = useStaticQuery(graphql`
    query {
      headerLinks {
        value
      }
    }`);
  return (
    <HeaderComponent data={data.headerLinks.value} />
  );
}

export default Header;
