import { CALL_API } from 'redux-api-middleware'
import { Actions } from 'react-native-router-flux';

const BASE_URL = "http://52.198.150.98/api/v1";
export const REQUEST = "REQUEST"
export const RECIEVED = "RECIEVED"


export function postUserAuthentication(body){
  return dispatch => {
    dispatch(requestAuthentication(body));
    return fetch(BASE_URL + "/auth/sign_in", {
      method: 'POST',
      headers:{
        'Accept': 'application/json',
				'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    })
    .then(response => response.json())
    .then(json => console.log(json))
    .then(dispatch(receivedAuthentication(true)))
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

function receivedAuthentication(is_authentication){
  return {
    type: RECIEVED,
    is_authenticated: is_authentication,
  }
}
