function queryParmasGenerator(list){
  var params = "?";
  for (key in list){
    params += `${key}=${list[key]}`;
  }
  return params;
}

export function postApiRequest(endPoint, body, headers={}, requestCallback, receivedCallback){
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
        console.log(error);
      });
  };
}

