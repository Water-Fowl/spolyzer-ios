import { Actions } from "react-native-router-flux";
import { CALL_API } from "redux-api-middleware";

import { GET_GAMES_ENDPOINT } from "../../../config/api";
import {
  GET_GAME_RECEIVED,
  GET_GAME_RRQUEST
} from "../action_types";

export function getGames(informationBody) {
  return (dispatch) => {
    dispatch(getGamesRequest());
    return fetch(GET_GAMES_ENDPOINT, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(information_body)
    })
      .then(response => response.json())
      .then(json => dispatch(receivedGetGame(json.score_game_ids)))
      .then(Actions.analysisView())
      .catch((error) => {
      });
  };
}

function getGamesRequest() {
  return {
    type: GET_GAMES_RRQUEST
  };
}

function getGamesReceived(scoreGameIds) {
  return {
    type: GET_GAMES_RECEIVED,
    scoreGameIds
  };
}
