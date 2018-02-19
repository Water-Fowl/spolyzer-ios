import {
  GET_RECENTLY_GAMES_RECEIVED,
  GET_RECENTLY_GAMES_REQUEST
} from "../action_types";

export function getRecentlyGames(body) {
  return (dispatch) => {
    dispatch(requestGetGames());
    return fetch(GAME_SETTING_REQUEST, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(response => response.json())
      .catch((error) => {
        console.log(error.message);
      });
  };
}

function GetRecentlyGamesRequest() {
  return {
    type: GET_RECENTLY_GAMES_REQUEST
  };
}

function GetRecentlyGamesReceived() {
  return {
    type: GET_RECENTLY_GAMES_RECEIVED
  };
}

