import {
  LOGIN_REQUEST,
  LOGIN_RECIEVED,
} from "../actions/login"
import {
  REGISTRATION_REQUEST,
  REGISTRATION_RECEIVED,
} from "../actions/registration"

const initialState = {
  is_authenticated: false,
  error: false
}

export default function authenticationReducer(state=initialState, action={}){
  switch (action.type){
    case LOGIN_REQUEST:
      return state
    case LOGIN_RECIEVED:
      return Object.assign({}, state, {
        is_authenticated: action.is_authenticated,
        login_error: action.error 
      })
    case REGISTRATION_REQUEST:
      return state
    case REGISTRATION_RECEIVED:
      return Object.assign({}, state, {
        is_authenticated: action.is_authenticated,
        registration_error: action.error 
      })
    default:
      return state
  }
}
