import React from 'react';

const headerStyle = {
    fontSize: '26px',
    color: 'DarkGreen'
}

const Header = () => (
  <React.Fragment>
    <nav className="navbar navbar-light bg-light">
      <div className="container">
      <a style={headerStyle} className="navbar-brand" href="/"><strong>DRINKS</strong>DB</a>
        <span className="navbar-text">
          Drinks search
        </span>
      </div>
    </nav>
  </React.Fragment>
);

export default Header;
