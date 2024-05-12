import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  const activeStyle = {
    fontWeight: 'bold',
    color: 'black',
  };

  return (
    <nav className="navi">
      <NavLink exact="true" to="/" style={activeStyle}>
        HOME
      </NavLink>{' '}
      |{' '}
      <NavLink to="/movies" style={activeStyle}>
        MOVIES
      </NavLink>
    </nav>
  );
}

export default Navigation;
