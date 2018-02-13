import {
  LOGIN_REQUEST,
  LOGIN_RECIEVED,
  REGISTRATION_REQUEST,
  REGISTRATION_RECEIVED,
  EMAIL_VALIDATION,
} from "./action_type";

const initialState = {
  is_authenticated: false,
  login_error: false,
  registration_error: false,
};

export default function authenticationReducer(state = initialState, action = {}) {
  switch (action.type) {
  case LOGIN_REQUEST:
    return state;
  case LOGIN_RECIEVED:
    return Object.assign({}, state, {
      is_authenticated: action.is_authenticated,
      login_error: action.error,
    });
  case REGISTRATION_REQUEST:
    return state;
  case REGISTRATION_RECEIVED:
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
