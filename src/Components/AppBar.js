import React from 'react';
import { connect } from 'react-redux';
import { getIsAuthenticated } from '../redux/auth/auth-selectors';

import AuthNav from './AuthNav';
import UserMenu from './UserMenu';

const AppBar = ({ isAuthenticated }) => (
  <header>
    <nav className="Header">{isAuthenticated ? <UserMenu /> : <AuthNav />}</nav>
  </header>
);
const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
