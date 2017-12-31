import { CALL_API } from 'redux-api-middleware'
import { Actions } from 'react-native-router-flux';
import { SIGN_IN_ENDPOINT } from '../config/api';

export const REQUEST = "REQUEST"
export const RECIEVED = "RECIEVED"


export function postUserAuthentication(body){
  return dispatch => {
    dispatch(requestAuthentication(body));
    return fetch(SIGN_IN_ENDPOINT, {
      method: 'POST',
      headers:{
        'Accept': 'application/json',
				'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    })
    .then(response => response.json())
    .then(json => json.errors)
    .then(errors => dispatch(receivedAuthentication(errors)))
    .catch(function(error){
      console.log(error.message)
    })
  }
}

function requestAuthentication(){
  return {
    type: REQUEST
  }
}

function receivedAuthentication(errors){
    if(errors == null){
        Actions.tab();
        return {
            type: RECIEVED,
            is_authenticated: true,
            occurs_invalid_login_error: false
        }
    }
    else{
        console.log(errors)
        return {
            type: RECIEVED,
            is_authenticated: false,
            occurs_invalid_login_error: true
        }
    }
}