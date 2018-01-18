import { CALL_API } from 'redux-api-middleware'
import { Actions } from 'react-native-router-flux';
import { SIGN_IN_ENDPOINT } from '../config/api';

export const LOGIN_REQUEST = "LOGIN_REQUEST"
export const LOGIN_RECIEVED = "LOGIN_RECIEVED"


export function postUserLogin(body){
  return dispatch => {
    dispatch(requestLogin(body));
    return fetch(SIGN_IN_ENDPOINT, {
      method: 'POST', headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    })
      .then(response => response.json())
      .then(json => json.errors)
      .then(errors => dispatch(receivedLogin(errors)))
      .catch(function(error){
        console.log(error.message)
      })
  }
}

function requestLogin(){
  return {
    type: LOGIN_REQUEST
  }
}

function receivedLogin(errors){
  if(errors == null){
    Actions.tab();
    return {
      type: LOGIN_RECIEVED,
      is_authenticated: true,
      error: false
    }
  }
  else{
    return {
      type: LOGIN_RECIEVED,
      is_authenticated: false,
      error: true
    }
  }
}
