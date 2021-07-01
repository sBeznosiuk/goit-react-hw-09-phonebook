import axios from 'axios';
import {
  registerRequest,
  registerError,
  registerSuccess,
  loginError,
  loginRequest,
  loginSuccess,
  logoutError,
  logoutSuccess,
  logoutRequest,
  getCurrentUserError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
} from './actions';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = credentials => async dispatch => {
  dispatch(registerRequest());

  console.log(credentials);

  try {
    const response = await axios.post('/users/signup', credentials);
    console.log(response.data);

    token.set(response.data.token);
    dispatch(registerSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(registerError(error));
  }
};

export const login = credentials => async dispatch => {
  dispatch(loginRequest());

  try {
    const response = await axios.post('/users/login', credentials);
    console.log(response.data);

    token.set(response.data.token);
    dispatch(loginSuccess(response.data));
  } catch (error) {
    dispatch(loginError(error));
  }
};

export const logout = () => async dispatch => {
  dispatch(logoutRequest());

  try {
    await axios.post('/users/logout');

    token.unset();
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutError(error));
  }
};

export const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);

  dispatch(getCurrentUserRequest());

  try {
    const response = await axios.get('/users/current');

    dispatch(getCurrentUserSuccess(response.data));
  } catch (error) {
    dispatch(getCurrentUserError(error));
  }
};
