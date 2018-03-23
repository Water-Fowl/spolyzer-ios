import {
  getScoreByPositionAndSide
} from "utils";

import * as actionTypes from "./action_types";

const initialState = {
  scores: [],
  scoreCounts: [0, 0],
  users: "",
  gameUnits: {
    0:{
      users: [],
      count: 0
    },
    1:{
      users: [],
      count: 0
    }
  }
};

export default function gameReducer(state = initialState, action = {}) {
  switch (action.type) {
  case actionTypes.SET_SCORE_CREATE_MODAL:
    return Object.assign({}, state, {
      scoreCreateModal: true
    });
  case actionTypes.HIDE_SCORE_CREATE_MODAL:
    return Object.assign({}, state, {
      scoreCreateModal: false
    });
  case actionTypes.SET_SHOT_TYPE:
    /* 今回得られたスコアを取得し、配列に格納する */
    const currentScore = getScoreByPositionAndSide(state.position, state.side);
    const currentScores = [state.scoreCounts[0] + currentScore[0], state.scoreCounts[1] + currentScore[1]];
    return Object.assign({}, state, {
      scores: state.scores.concat({unit: state.side, dropped_at: state.position, shot_type: action.shotType, miss_type: action.missType, side: state.side}),
      scoreCounts: currentScores
    });
  case actionTypes.SET_POSITION_AND_SIDE:
    return Object.assign({}, state, {
      position: action.position,
      side: action.side
    });
  case actionTypes.POST_GAME_REQUEST:
    return state;
  case actionTypes.POST_GAME_RECIEVED:
    return Object.assign({}, state, {
      currentScoreGameId: action.currentScoreGameId
    });
  case actionTypes.GET_SEARCH_USER_REQUEST:
    return Object.assign({}, state, {
    });
  case actionTypes.GET_SEARCH_USER_RECEIVED:
    return Object.assign({}, state, {
      users: action.users
    });
  case actionTypes.GET_SHOT_TYPE_COUNTS_REQUEST:
    return state;
  case actionTypes.GET_SHOT_TYPE_COUNTS_RECEIVED:
    return Object.assign({}, state, {
      shotTypeCounts: action.shotTypeCounts
    });
  case actionTypes.SET_USER:
    if(state.gameUnits[action.selectedUnitIndex].users[action.selectedUserIndex]){
      state.gameUnits[action.selectedUnitIndex].users[action.selectedUserIndex] = action.user;
    }
    else{
      state.gameUnits[action.selectedUnitIndex].users.push(action.user);
    }
    state.gameUnits[action.selectedUnitIndex].count = state.gameUnits[action.selectedUnitIndex].users.length;
    return Object.assign({}, state, {
      gameUnits: state.gameUnits
    });
  case actionTypes.SET_SELECTED_USER_INDEX:
    return Object.assign({}, state, {
      selectedUserIndex: action.selectedUserIndex,
      selectedUnitIndex: action.selectedUnitIndex
    });
  case actionTypes.SET_SHOT_TYPE_COUNTS:
    if(state.shotTypeCounts[action.side]){
      return {
        ...state,
        selectedShotTypeCounts: state.shotTypeCounts[action.side][action.position]
      };
    }
    else {
      return {
        ...state,
        selectedShotTypeCounts: []
      };
    }
    return Object.assign({}, state, {
      selectedShotTypeCounts: selectedShotTypeCounts
    });
  case actionTypes.RESET_STATE:
    return initialState;
  default:
    return state;
  }
}
