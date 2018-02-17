import { Actions } from "react-native-router-flux";
import { CALL_API } from "redux-api-middleware";

import {
  GAME_INFORMATION_RECEIVED,
  GAME_INFORMATION_REQUEST,
} from "../action_type";
import { GET_GAMES_ENDPOINT } from "../../../config/api";

export function getAnalysisGames(information_body) {
  return (dispatch) => {
    console.log(JSON.stringify(information_body));
    dispatch(requestGameInformation());
    return fetch(GET_GAMES_ENDPOINT, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(information_body),
    })
      .then(response => response.json())
      .then(json => dispatch(receivedGameInformation(json.score_game_ids)))
      .then(Actions.analysis_view())
      .catch((error) => {
        console.log(error);
      });
  };
}

function requestGameInformation() {
  return {
    type: GAME_INFORMATION_REQUEST,
  };
}

function receivedGameInformation(score_game_ids) {
  console.log(score_game_ids);
  return {
    type: GAME_INFORMATION_RECEIVED,
    score_game_ids,
  };
}
