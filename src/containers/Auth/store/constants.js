export const MODULE_NAME = 'AUTH';

/* actions */
export const CHECK_USER = 'CHECK_USER';
export const LOGOUT = 'LOGOUT';
export const LOGIN = 'LOGIN';
export const REGISTRATION = 'REGISTRATION';
export const SET_LOGIN_LOADING = 'SET_LOGIN_LOADING';
export const SET_LOADING = 'SET_LOADING';

/* validation */
const isRequired = name => `${name} is required!`;

export const EMAIL_NOT_VALID = 'E-mail is not valid';
export const EMAIL_REQUIRED = isRequired('E-mail');
export const PASSWORD_REQUIRED = isRequired('Password');
export const PASSWORD_MIN = 'Password has to be longer than 6 characters!';
export const FIRST_NAME_REQUIRED = isRequired('First name');
export const LAST_NAME_REQUIRED = isRequired('Last name');
