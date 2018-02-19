import { Actions } from "react-native-router-flux";
import { CALL_API } from "redux-api-middleware";

import { GET_GAMES_ENDPOINT } from "../../../config/api";
import {
  GET_GAME_RECEIVED,
  GET_GAME_RRQUEST,
} from "../action_type";

export function getGames(information_body) {
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
      .then(json => dispatch(receivedGetGame(json.score_game_ids)))
      .then(Actions.analysis_view())
      .catch((error) => {
        console.log(error);
      });
  };
}

function getGamesRequest() {
  return {
    type: GET_GAMES_RRQUEST,
  };
}

function getGamesReceived(score_game_ids) {
  console.log(score_game_ids);
  return {
    type: GET_GAMES_RECEIVED,
    score_game_ids,
  };
}
