import {
  EMAIL_VALIDATION,
  POST_LOGIN_RECIEVED,
  POST_LOGIN_REQUEST,
  POST_REGISTRATION_RECEIVED,
  POST_REGISTRATION_REQUEST,
} from "./action_type";

const initialState = {
  is_authenticated: false,
  login_error: false,
  registration_error: false,
};

export default function authenticationReducer(state = initialState, action = {}) {
  switch (action.type) {
  case POST_LOGIN_REQUEST:
    return state;
  case POST_LOGIN_RECIEVED:
    return Object.assign({}, state, {
      is_authenticated: action.is_authenticated,
      login_error: action.error,
    });
  case POST_REGISTRATION_REQUEST:
    return state;
  case POST_REGISTRATION_RECEIVED:
    return Object.assign({}, state, {
      is_authenticated: action.is_authenticated,
      registration_error: action.error,
    });
  case EMAIL_VALIDATION:
    return Object.assign({}, state, {
      is_email: action.is_email,
    });
  default:
    return state;
  }
}
