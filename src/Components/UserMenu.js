import React from 'react';
import { connect } from 'react-redux';
import { getUserEmail } from '../redux/auth/auth-selectors';
import { logout } from '../redux/auth/operations';
import { Link } from 'react-router-dom';
import { Button, Typography } from '@material-ui/core';

const UserMenu = ({ email, onLogout }) => (
  <>
    <div className="left">
      <Typography>
        <Link to="/contacts">Список контактов</Link>
      </Typography>
    </div>
    <div className="right">
      <Typography className="text" component="p" variant="overline">
        {email}
      </Typography>
      <Button
        type="button"
        onClick={onLogout}
        className="button"
        variant="contained"
        color="primary"
      >
        Log out
      </Button>
    </div>
  </>
);

const mapStateToProps = state => ({
  email: getUserEmail(state),
});

const mapDispatchToProps = {
  onLogout: logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
