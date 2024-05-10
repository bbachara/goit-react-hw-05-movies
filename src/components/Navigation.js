import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <nav className="navi">
      <NavLink exact to="/" activeClassName="active">
        HOME
      </NavLink>{' '}
      |{' '}
      <NavLink to="/movies" activeClassName="active">
        MOVIES
      </NavLink>
    </nav>
  );
}

export default Navigation;
