import { getScoreCounts } from "utils";

const GET_SEARCH_USER_REQUEST = "GET_SEARCH_USER_REQUEST_ON_GAME";
const GET_SEARCH_USER_RECEIVED = "GET_SEARCH_USER_RECEIVED_ON_GAME";
const SET_USER = "SET_USER";
const REMOVE_USER = "REMOVE_USER_ON_GAME";
const SET_SHOT_TYPE = "SET_SHOT_TYPE";
const SET_SHOT_TYPE_COUNTS = "SET_SHOT_TYPE_COUNTS";
const POST_GAME_REQUEST = "POST_GAME_REQUEST";
const POST_GAME_RECIEVED = "POST_GAME_RECIEVED";
const SET_SELECTED_USER_INDEX = "SET_SELECTED_USER_INDEX";
const GET_SHOT_TYPE_COUNTS_RECEIVED = "GET_SHOT_TYPE_COUNTS_RECEIVED";
const GET_SHOT_TYPE_COUNTS_REQUEST = "GET_SHOT_TYPE_COUNTS_REQUEST";
const GET_SHOT_TYPES_RECEIVED = "GET_SHOT_TYPES_RECEIVED";
const GET_SHOT_TYPES_REQUEST = "GET_SHOT_TYPES_REQUEST";
const SET_SCORE_CREATE_MODAL = "SET_SCORE_CREATE_MODAL";
const HIDE_SCORE_CREATE_MODAL = "HIDE_SCORE_CREATE_MODAL";
const RESET_STATE = "RESET_STATE_OF_GAME_REDUCER";
const REMOVE_SCORE = "REMOVE_SCORE";

export function getShotTypeCountsRequest() {
  return {
    type: GET_SHOT_TYPE_COUNTS_REQUEST
  };
}

export function getShotTypeCountsReceived(json) {
  return {
    type: GET_SHOT_TYPE_COUNTS_RECEIVED,
    scores: json
  };
}

export function getShotTypesRequest() {
  return {
    type: GET_SHOT_TYPES_REQUEST
  };
}

export function getSearchUserRequest() {
  return {
    type: GET_SEARCH_USER_REQUEST
  };
}

export function postGameRequest() {
  return {
    type: POST_GAME_REQUEST
  };
}

export function postGameReceived(json) {
  return {
    type: POST_GAME_RECIEVED,
    game: json
  };
}

export function getSearchUserReceived(json) {
  return {
    type: GET_SEARCH_USER_RECEIVED,
    users: json
  };
}

export function getShotTypesReceived(shotTypes) {
  const reshapedShotTypes = {};
  for (shotType in shotTypes) {
    reshapedShotTypes[shotType.id] = shotType.name_ja;
  }
  return {
    type: GET_SHOT_TYPES_RECEIVED,
    shotTypes: reshapedShotTypes
  };
}

export function setShotTypeCounts(position, side) {
  return {
    type: SET_SHOT_TYPE_COUNTS,
    position,
    side
  };
}

export function setShotType(shotType, isNetMiss, side, position, n_sets) {
  let unit_side;
  if (!isNetMiss) {
    unit_side = side == 1 ? 0 : 1;
  } else {
    unit_side = side;
  }

  return {
    type: SET_SHOT_TYPE,
    shotType,
    isNetMiss,
    side,
    unit_side,
    position,
    n_sets
  };
}

export function removeScore() {
  return {
    type: REMOVE_SCORE
  };
}

export function setUser(user) {
  return {
    type: SET_USER,
    user
  };
}

export function removeUser() {
  return {
    type: REMOVE_USER
  };
}

export function setUserIndex(selectedUnitIndex, selectedUserIndex) {
  return {
    type: SET_SELECTED_USER_INDEX,
    selectedUnitIndex,
    selectedUserIndex
  };
}

export function resetState() {
  return {
    type: RESET_STATE
  };
}

const initialState = {
  scores: [],
  scoreCounts: [0, 0],
  users: [],
  gameUnits: {
    ids: [],
    left: {
      users: [],
      count: 0
    },
    right: {
      users: [],
      count: 0
    }
  }
};

const initialProps = {
  scores: [],
  scoreCounts: [0, 0],
  users: [],
  gameUnits: {
    ids: [],
    left: {
      users: [],
      count: 0
    },
    right: {
      users: [],
      count: 0
    }
  }
};

export function gameReducer(state = initialState, action = {}) {
  switch (action.type) {
  case SET_SCORE_CREATE_MODAL:
    return Object.assign({}, state, {
      scoreCreateModal: true
    });
  case HIDE_SCORE_CREATE_MODAL:
    return Object.assign({}, state, {
      scoreCreateModal: false
    });
  case SET_SHOT_TYPE:
    /* 今回得られたスコアを取得し、配列に格納する */
    state.scores = state.scores.concat({
      unit: action.unit_side,
      dropped_at: action.position,
      shot_type: action.shotType,
      is_net_miss: action.isNetMiss,
      side: action.side,
      n_sets: action.n_sets
    });
    let currentScores = getScoreCounts(state.scores);
    return Object.assign({}, state, {
      scores: state.scores,
      scoreCounts: currentScores
    });
  case REMOVE_SCORE:
    state.scores.pop();
    let removedScores = getScoreCounts(state.scores);
    return Object.assign({}, state, {
      scores: state.scores,
      scoreCounts: removedScores
    });
  case POST_GAME_REQUEST:
    return state;
  case POST_GAME_RECIEVED:
    return Object.assign({}, state, {
      game: action.game
    });
  case GET_SEARCH_USER_REQUEST:
    return Object.assign({}, state, {});
  case GET_SEARCH_USER_RECEIVED:
    return Object.assign({}, state, {
      users: action.users
    });
  case GET_SHOT_TYPE_COUNTS_REQUEST:
    return state;
  case GET_SHOT_TYPE_COUNTS_RECEIVED:
    return Object.assign({}, state, {
      scores: action.scores
    });
  case SET_USER:
    if (
      state.gameUnits[state.selectedUnitIndex].users[state.selectedUserIndex]
    ) {
      state.gameUnits.ids.splice(
        state.gameUnits.ids.indexOf(
          state.gameUnits[state.selectedUnitIndex].users[
            state.selectedUserIndex
          ].id
        ),
        1
      );
      state.gameUnits[state.selectedUnitIndex].users[
        state.selectedUserIndex
      ] =
          action.user;
    } else {
      state.gameUnits[state.selectedUnitIndex].users.push(action.user);
    }
    state.gameUnits[state.selectedUnitIndex].count =
        state.gameUnits[state.selectedUnitIndex].users.length;
    state.gameUnits.ids.push(action.user.id);
    return Object.assign({}, state, {
      gameUnits: state.gameUnits,
      users: []
    });

  case REMOVE_USER:
    let selectedUser =
        state.gameUnits[state.selectedUnitIndex].users[state.selectedUserIndex];
    if (selectedUser) {
      state.gameUnits[state.selectedUnitIndex].users.splice(
        state.selectedUserIndex,
        1
      );
      state.gameUnits.ids.splice(
        state.gameUnits.ids.indexOf(selectedUser.id),
        1
      );
    }
    state.gameUnits[state.selectedUnitIndex].count =
        state.gameUnits[state.selectedUnitIndex].users.length;
    return Object.assign({}, state, {
      gameUnits: state.gameUnits
    });
  case SET_SELECTED_USER_INDEX:
    return Object.assign({}, state, {
      selectedUserIndex: action.selectedUserIndex,
      selectedUnitIndex: action.selectedUnitIndex
    });
  case SET_SHOT_TYPE_COUNTS:
    if (state.scores[action.side]) {
      return {
        ...state,
        selectedscores: state.scores[action.side][action.position]
      };
    } else {
      return {
        ...state,
        selectedShotTypeCounts: []
      };
    }
    return Object.assign({}, state, {
      selectedShotTypeCounts: selectedShotTypeCounts
    });
  case RESET_STATE:
    let newInitial = JSON.stringify(initialProps);
    newInitial = JSON.parse(newInitial);
    return newInitial;
  default:
    return state;
  }
}
