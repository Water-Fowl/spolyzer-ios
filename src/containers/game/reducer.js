import {
  SET_POSITION_AND_SIDE,
  SET_SHOT_TYPE,
  SCORE_REQUEST,
  SCORE_RECIEVED,
} from "./action_types";

const initialState = {
  positions: [],
  actions: [],
  sides: [],
};

export default function scoreReducer(state = initialState, action = {}) {
  switch (action.type) {
  case SET_SHOT_TYPE:
    return Object.assign({}, state, {
      actions: state.actions.concat([action.action]),
      positions: state.positions.concat([state.position]),
      sides: state.sides.concat([state.side]),
    });
  case SET_POSITION_AND_SIDE:
    return Object.assign({}, state, {
      position: action.position,
      side: action.side,
    });
  case SCORE_REQUEST:
    return state;
  case SCORE_RECIEVED:
    return Object.assign({}, state, {
      current_score_game_id: action.current_score_game_id,
    });
  default:
    return state;
  }
}
