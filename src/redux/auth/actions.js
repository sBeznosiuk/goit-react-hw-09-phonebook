import { createAction } from '@reduxjs/toolkit';

export const registerRequest = createAction('contact/registerRequest');
export const registerSuccess = createAction('contact/registerSuccess');
export const registerError = createAction('contact/registerError');

export const loginRequest = createAction('contact/loginRequest');
export const loginSuccess = createAction('contact/loginSuccess');
export const loginError = createAction('contact/loginError');

export const logoutRequest = createAction('contact/logoutRequest');
export const logoutSuccess = createAction('contact/logoutContactSuccess');
export const logoutError = createAction('contact/logoutContactError');

export const getCurrentUserRequest = createAction(
  'contact/getCurrentUserRequest',
);
export const getCurrentUserSuccess = createAction(
  'contact/getCurrentUserSuccess',
);
export const getCurrentUserError = createAction('contact/getCurrentUserError');
