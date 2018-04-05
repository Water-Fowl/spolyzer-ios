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

function responseToHeader(responseHeader, status){
  if (status != 200){
    return false;
  }
  const header = {
    "access-token": responseHeader.get("access-token"),
    "expiry": responseHeader.get("expiry"),
    "uid": responseHeader.get("uid"),
    "client": responseHeader.get("client"),
    "token-type": responseHeader.get("token-type")
  };
  return header;
}

export function postApiRequest(endPoint, body, headers={}, requestCallback, receivedCallback, returnHeader=false){
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
      .then(async function(response){
        let json = await response.json();

        if(returnHeader){
          let header = await responseToHeader(response.headers, response.status);
          if(!header){
            let messages = json.errors.join("\n");
            return new Promise((resolve) => {
              Alert.alert("エラー", messages, [{ text: "了解", onPress: () => { resolve(false); } }]);
            });
          }
          dispatch(receivedCallback(json, header));
          return header;
        }
        dispatch(receivedCallback(json));
        return json;

      });
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
        console.log(json);
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
        console.log(json);
        dispatch(receivedCallback(json));
        return json;
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

