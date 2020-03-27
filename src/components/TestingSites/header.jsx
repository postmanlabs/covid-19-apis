import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isToggledOn: 'unset',
    };
  }

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
      isToggledOn,
    } = this.state;
    return (
      <header className="header text-center navbar navbar-expand-xl navbar-light ts-topnav">
        <div className="navbar-brand header__brand">
          <a
            className="header__homelink"
            href="https://www.postman.com"
          >
            <img
              className="header__logo"
              src="https://assets.getpostman.com/common-share/postman-logo-horizontal-white.svg"
              alt="Postman"
            />
            <span className="header__title">Nav item </span>
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

export default Header;
