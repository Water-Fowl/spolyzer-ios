import {
  SET_SCORE_CREATE_MODAL,
  HIDE_SCORE_CREATE_MODAL,
} from './action_types';

export function setScoreCreateModal() {
  return {
    type: SET_SCORE_CREATE_MODAL,
    score_create_modal: true,
  };
}

export function hideScoreCreateModal() {
  return {
    type: HIDE_SCORE_CREATE_MODAL,
    score_create_modal: false,
  };
}
