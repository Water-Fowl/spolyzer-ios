import { Actions } from "react-native-router-flux";

import { POST_SCORE_GAME_ENDPOINT } from "../../../config/api";
import {
  SCORE_RECIEVED,
  SCORE_REQUEST,
} from "../action_types.js";

export function postGame(body) {
  return (dispatch) => {
    dispatch(requestScoreGame());
    return fetch(POST_SCORE_GAME_ENDPOINT, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then(response => response.json())
      .then(json => dispatch(receivedScoreGame(json.score_game_id)))
      .then(Actions.score_view())
      .catch((error) => {
        console.log(error);
      });
  };
}

function requestScoreGame() {
  return {
    type: SCORE_REQUEST,
  };
}

function receivedScoreGame(score_game_id) {
  return {
    type: SCORE_RECIEVED,
    current_score_game_id: score_game_id,
  };
}
