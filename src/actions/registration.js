import { Actions } from 'react-native-router-flux';
import { REGISTRATION_ENDPOINT } from '../config/api';

export function postUserRegistration(body){
  return dispatch => {
    dispatch(requestRegistration());
    return fetch( REGISTRATION_ENDPOINT, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
				'Content-Type': 'application/json',
      }
      body: JSON.stringify(body)
    })
    .then(response => response.json())
    .then(json => console.log(json))
    .then(dispatch(receivedRegistration()))
    .then(Actions.tab())
    .catch(function(error){
      console.log(error.message)
    })
  }
}

function requestRegistration(){
  return{
    type: REQUEST
  }
}

function receivedAuthentication(is_authentication){
  return {
    type: RECIEVED,
    is_authenticated: is_authentication,
  }
}
