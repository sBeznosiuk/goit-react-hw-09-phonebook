import React from 'react';
import { useSelector } from 'react-redux';
import { getIsAuthenticated } from '../redux/auth/auth-selectors';

import AuthNav from './AuthNav';
import UserMenu from './UserMenu';

const AppBar = () => {
  const isAuthenticated = useSelector(getIsAuthenticated);
  return (
    <header>
      <nav className="Header">
        {isAuthenticated ? <UserMenu /> : <AuthNav />}
      </nav>
    </header>
  );
};
export default AppBar;
