import { Actions } from "react-native-router-flux";

import { POST_GAME_ENDPOINT } from "../../../config/api";
import {
  POST_GAME_RECIEVED,
  POST_GAME_REQUEST
} from "../action_types.js";

export function postGame(body) {
  return (dispatch) => {
    dispatch(requestScoreGame());
    return fetch(POST_GAME_ENDPOINT, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(response => response.json())
      .then(json => dispatch(receivedScoreGame(json.score_game_id)))
      .then(Actions.scoreView())
      .catch((error) => {
      });
  };
}

function requestScoreGame() {
  return {
    type: POST_GAME_REQUEST
  };
}

function receivedScoreGame(scoreGameId) {
  return {
    type: POST_GAME_RECIEVED,
    currentScoreGameId: scoreGameId
  };
}
