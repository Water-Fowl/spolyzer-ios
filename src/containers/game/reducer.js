import {
  getScoreByPositionAndSide
} from "utils";

import {
  POST_GAME_RECIEVED,
  POST_GAME_REQUEST,
  SET_POSITION_AND_SIDE,
  SET_SHOT_TYPE
} from "./action_types";

const initialState = {
  positions: [],
  actions: [],
  sides: [],
  scores: [0, 0]
};

export default function gameReducer(state = initialState, action = {}) {
  switch (action.type) {
  case SET_SHOT_TYPE:
    /* 今回得られたスコアを取得し、配列に格納する */
    const currentScore = getScoreByPositionAndSide(state.position, state.side);
    const currentScores = [state.scores[0] + currentScore[0], state.scores[1] + currentScore[1]];
    return Object.assign({}, state, {
      actions: state.actions.concat([action.action]),
      positions: state.positions.concat([state.position]),
      sides: state.sides.concat([state.side]),
      scores: currentScores
    });
  case SET_POSITION_AND_SIDE:
    return Object.assign({}, state, {
      position: action.position,
      side: action.side
    });
  case POST_GAME_REQUEST:
    return state;
  case POST_GAME_RECIEVED:
    return Object.assign({}, state, {
      currentScoreGameId: action.currentScoreGameId
    });
  default:
    return state;
  }
}
