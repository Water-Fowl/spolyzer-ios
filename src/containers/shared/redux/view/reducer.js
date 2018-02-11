import {
  SET_SCORE_CREATE_MODAL,
  HIDE_SCORE_CREATE_MODAL,
} from "./action_types";

const initialState = {
  score_create_modal: false,
};
export default function viewReducer(state = initialState, action = {}) {
  switch (action.type) {
  case SET_SCORE_CREATE_MODAL:
    return Object.assign({}, state, {
      score_create_modal: true,
    });
  case HIDE_SCORE_CREATE_MODAL:
    return Object.assign({}, state, {
      score_create_modal: false,
    });
  default:
    return state;
  }
}
