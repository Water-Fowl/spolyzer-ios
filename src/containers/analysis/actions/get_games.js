import { Actions } from "react-native-router-flux";

import { GAMES_ENDPOINT } from "../../../config/api";
import {
  GET_GAMES_RECEIVED,
  GET_GAMES_REQUEST
} from "../action_types";

export function getGames(params) {
  return (dispatch) => {
    dispatch(getGamesRequest());
    return fetch(GET_GAMES_ENDPOINT + params, {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(json => dispatch(getGamesReceived(json.game.id)))
      .then(Actions.analysisView())
      .catch((error) => {
      });
  };
}

function getGamesRequest() {
  return {
    type: GET_GAMES_REQUEST
  };
}

function getGamesReceived(gameId) {
  return {
    type: GET_GAMES_RECEIVED,
    gameId
  };
}
