import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';

const AuthNav = () => (
  <>
    <div className="left">
      <Typography>
        <Link to="/register" className="left">
          Регистрация
        </Link>
      </Typography>
    </div>
    <div className="right">
      <Typography>
        <Link to="/login" className="right">
          Логин
        </Link>
      </Typography>
    </div>
  </>
);

export default AuthNav;
