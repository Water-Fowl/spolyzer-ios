import {
  Alert
} from "react-native";

function queryParmasGenerator(list){
  var params = "?";
  for (key in list){
    params += `${key}=${list[key]}&`;
  }
  return params;
}

function responseToHeader(responseHeader){
  const header = {
    "access-token": responseHeader.get("access-token"),
    "expiry": responseHeader.get("expiry"),
    "uid": responseHeader.get("uid"),
    "client": responseHeader.get("client"),
    "token-type": responseHeader.get("token-type")
  };
  return header;
}

function errorInstanceCallback(json){
  return new Error(json.error.message)
}

export function postApiRequest(
  endPoint,
  body,
  headers={},
  requestCallback,
  receivedCallback,
  errorInstanceCallback=errorInstanceCallback,
  errorCallback=console.log,
  returnHeader=false
){
  return (dispatch) => {
    dispatch(requestCallback());
    return fetch(endPoint, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        ...headers
      },
      body: JSON.stringify(body)
    })
      .then(async (response) => {
        let json = await response.json();

        /* status code が200でなかったときにエラー*/
        if(response.status != 200){
          throw errorInstanceCallback(json);
        }

        /* returnHeaderがtrueのときは、headerを変換したものをcallbackに渡す*/
        if(returnHeader){
          let header = await responseToHeader(response.headers);
          dispatch(receivedCallback(json, header));
          return header;
        }

        dispatch(receivedCallback(json));
        return json;
      })
      .catch((error) => {
        errorCallback(error.message)
        return false
      })
  };
}

export function patchApiRequest(endPoint, body, headers={}, requestCallback, receivedCallback){
  return (dispatch) => {
    dispatch(requestCallback());
    return fetch(endPoint, {
      method: "PATCH",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        ...headers
      },
      body: JSON.stringify(body)
    })
      .then((response) => response.json())
      .then(function(json){
        dispatch(receivedCallback(json));
        return json;
      });
  };
}

export function getApiRequest(endpoint, params, header={}, requestCallback, receivedCallback){
  let queryParams = queryParmasGenerator(params);
  return (dispatch) => {
    dispatch(requestCallback());
    return fetch(endpoint + queryParams, {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        ...header
      }
    })
      .then((response) => response.json())
      .then(function(json){
        dispatch(receivedCallback(json));
        return json;
      })
      .catch((error) => {
      });
  };
}

