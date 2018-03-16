import { Actions } from "react-native-router-flux";

import getShotTypeCounts from "./get_shot_type_counts";
import { GAMES_ENDPOINT } from "../../../config/api";
import {
  POST_GAME_RECIEVED,
  POST_GAME_REQUEST
} from "../action_types.js";

export function postGame(body, authHeaders) {
  return (dispatch) => {
    dispatch(requestScoreGame());
    return fetch(GAMES_ENDPOINT, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        ...authHeaders
      },
      body: JSON.stringify(body)
    })
      .then(response => response.json())
      .then(json => dispatch(getShotTypeCounts(json.game.id)))
      .catch((error) => {
        console.log(error);
      });
  };
}

function requestScoreGame() {
  return {
    type: POST_GAME_REQUEST
  };
}

function receivedScoreGame(gameId) {
  return {
    type: POST_GAME_RECIEVED,
    gameId: gameId
  };
}
