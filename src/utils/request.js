export function postApiRequest(
  endPoint,
  body,
  headers = {},
  requestCallback,
  receivedCallback
) {
  return dispatch => {
    dispatch(requestCallback());
    return fetch(endPoint, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        ...headers
      },
      body: JSON.stringify(body)
    }).then(response => {
      dispatch(receivedCallback());
      return response;
    });
  };
}

export function getApiRequest(
  endPoint,
  params,
  headers = {},
  requestCallback,
  receivedCallback
) {
  return dispatch => {
    dispatch(requestCallback());
    return fetch(endPoint, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        ...headers
      },
      body: JSON.stringify(body)
    }).then(response => {
      dispatch(receivedCallback());
      return response;
    });
  };
}
