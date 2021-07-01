import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router';
import { getIsAuthenticated } from '../../redux/auth/auth-selectors';

const PrivateRoute = ({
  render: Component,
  isAuthenticated,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={props =>
      isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(PrivateRoute);
