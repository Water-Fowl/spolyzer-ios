import {
  HIDE_SCORE_CREATE_MODAL,
  SET_SCORE_CREATE_MODAL
} from "../action_types";

export function setScoreCreateModal() {
  return {
    type: SET_SCORE_CREATE_MODAL,
    scoreCreateModal: true
  };
}

export function hideScoreCreateModal() {
  return {
    type: HIDE_SCORE_CREATE_MODAL,
    scoreCreateModal: false
  };
}

