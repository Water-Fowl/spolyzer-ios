import {
  EMAIL_VALIDATION,
  POST_LOGIN_RECIEVED,
  POST_LOGIN_REQUEST,
  POST_REGISTRATION_RECEIVED,
  POST_REGISTRATION_REQUEST
} from "./action_type";

const initialState = {
  isAuthenticated: false,
  loginError: false,
  registrationError: false
};

export default function authenticationReducer(state = initialState, action = {}) {
  switch (action.type) {
  case POST_LOGIN_REQUEST:
    return state;
  case POST_LOGIN_RECIEVED:
    return Object.assign({}, state, {
      isAuthenticated: action.isAuthenticated,
      loginError: action.error
    });
  case POST_REGISTRATION_REQUEST:
    return state;
  case POST_REGISTRATION_RECEIVED:
    return Object.assign({}, state, {
      isAuthenticated: action.isAuthenticated,
      registrationError: action.error
    });
  case EMAIL_VALIDATION:
    return Object.assign({}, state, {
      isEmail: action.isEmail
    });
  default:
    return state;
  }
}
