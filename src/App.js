import React, { Component, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import { getCurrentUser } from './redux/auth/operations';
import { connect } from 'react-redux';
import PrivateRoute from './Components/routes/PrivateRoute';
import PublicRoute from './Components/routes/PublicRoute';
import { Typography, Container, CssBaseline } from '@material-ui/core';
import AppBar from './Components/AppBar';

const ContactList = lazy(() => import('./Components/ContactList'));
const ContactForm = lazy(() => import('./Components/ContactForm'));
const Filter = lazy(() => import('./Components/Filter'));
const Login = lazy(() => import('./Components/Login'));
const Registration = lazy(() => import('./Components/Registration'));

class App extends Component {
  componentDidMount() {
    this.props.getUser();
  }
  render() {
    return (
      <>
        <AppBar />

        <Suspense fallback={null}>
          <Switch>
            <PublicRoute path="/register" component={Registration} />
            <PublicRoute path="/login" component={Login} />
            <PrivateRoute
              path="/contacts"
              render={props => (
                <>
                  <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div>
                      <ContactForm {...props} />
                      <Typography
                        component="h2"
                        variant="h5"
                        style={{ marginTop: 30 }}
                      >
                        Contacts
                      </Typography>
                      <Filter {...props} />
                      <ContactList {...props} />
                    </div>
                  </Container>
                </>
              )}
            />
          </Switch>
        </Suspense>
      </>
    );
  }
}

const mapDispatchToProps = {
  getUser: getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
