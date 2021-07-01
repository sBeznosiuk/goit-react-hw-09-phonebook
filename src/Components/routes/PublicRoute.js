import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router';
import { getIsAuthenticated } from '../../redux/auth/auth-selectors';

const PublicRoute = ({
  component: Component,
  isAuthenticated,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={props =>
      isAuthenticated ? <Redirect to="/contacts" /> : <Component {...props} />
    }
  />
);

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(PublicRoute);
