import { Actions } from 'react-native-router-flux';
import { REGISTRATION_ENDPOINT } from '../config/api';

export const REGISTRATION_REQUEST = "REGISTRATION_REQUEST"
export const REGISTRATION_RECIEVED = "REGISTRATION_RECIEVED"


export function postUserRegistration(body){
  return dispatch => {
    dispatch(requestRegistration());
    return fetch( REGISTRATION_ENDPOINT, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    })
      .then(response => response.json())
      .then(json => console.log(json))
      /* 一時的に絶対ログインできるようにする*/
      .then(dispatch(receivedRegistration(json.error)))
      .then(Actions.tab())
      .catch(function(error){
        console.log(error.message)
      })
  }
}

function requestRegistration(){
  return{
    type: REGISTRATION_REQUEST
  }
}

function receivedRegistration(error){
  if (error != nil) {
    Action.tab()
    return {
      type: REGISTRATION_RECIEVED,
      is_authenticated: true,
      error: false,
    }
  }
  else{
    return {
      type: RECIEVED,
      is_authenticated: false,
      error: true
    }
  }
}
