import * as utils from "../utils";

const initialState = {
  gameUserCount: 1,
  shotTypeId: 1,
  term: 1,
  outcome: "all",
  analysisUsers: [],
  analysisUsersIds: []
};

const GAME_TYPE_SETTING = "GAME_TYPE_SETTING";
const SHOT_TYPE_SETTING = "SHOT_TYPE_SETTING";
const TERM_SETTING = "TERM_SETTING";
const OUTCOME_SETTING = "OUTCOME_SETTING";
const OPPONENT_USER_SETTING = "OPPONENT_USER_SETTING";
const GET_GAMES_REQUEST = "GET_GAMES_REQUEST";
const GET_GAMES_RECEIVED = "GET_GAMES_RECEIVED";
const GET_SEARCH_USER_RECEIVED = "GET_SEARCH_USER_RECEIVED";
const GET_SEARCH_USER_REQUEST = "GET_SEARCH_USER_REQUEST";
const GET_RECENTLY_GAMES_REQUEST = "GET_RECENTLY_GAMES_REQUEST";
const GET_RECENTLY_GAMES_RECEIVED = "GET_RECENTLY_GAMES_RECEIVED";
const GET_ACTIONS_REQUEST = "GET_ACTIONS_REQUEST";
const GET_ACTIONS_RECEIVED = "GET_ACTIONS_RECEIVED";
const GET_POSITIONS_COUNTS_REQUEST = "GET_POSITIONS_COUNTS_REQUEST";
const GET_POSITIONS_COUNTS_RECEIVED = "GET_POSITIONS_COUNTS_RECEIVED";
const SET_USER = "SET_USER_ANALYSIS";
const REMOVE_USER = "REMOVE_USER_ON_ANALYSIS";
const REMOVE_DOUBLES_USER = "REMOVE_DOUBLES_USER";
const SET_SELECTED_USER_INDEX = "SET_SELECTED_USER_INDEX";
const SET_POSITIONS_COUNTS = "SET_POSITIONS_COUNTS";

export function requestGetActions() {
  return {
    type: GET_ACTIONS_REQUEST
  };
}

export function reveivedGetActions(actions) {
  return {
    type: GET_ACTIONS_RECEIVED,
    actions: actions
  };
}

export function getGamesRequest() {
  return {
    type: GET_GAMES_REQUEST
  };
}

export function getGamesReceived(games) {
  return {
    type: GET_GAMES_RECEIVED,
    games
  };
}
export function getPositionsCountsRequest() {
  return {
    type: GET_POSITIONS_COUNTS_REQUEST
  };
}

export function getPositionsCountsReceived(json) {
  return {
    type: GET_POSITIONS_COUNTS_RECEIVED,
    scores: json
  };
}

export function getSearchUserRequest() {
  return {
    type: GET_SEARCH_USER_REQUEST
  };
}

export function getSearchUserReceived(json) {
  return {
    type: GET_SEARCH_USER_RECEIVED,
    users: json
  };
}

export function removeUser() {
  return {
    type: REMOVE_USER
  };
}

export function setPositionsCount(minPosition, maxPosition, side) {
  return {
    type: SET_POSITIONS_COUNTS,
    minPosition,
    maxPosition,
    side
  };
}

export function setGameType(gameUserCount) {
  return {
    type: GAME_TYPE_SETTING,
    gameUserCount
  };
}

export function setShotType(shotTypeId) {
  return {
    type: SHOT_TYPE_SETTING,
    shotTypeId
  };
}

export function setTerm(term) {
  return {
    type: TERM_SETTING,
    term
  };
}

export function setGameOutcome(outcome) {
  return {
    type: OUTCOME_SETTING,
    outcome
  };
}

export function setUser(selectedUserIndex, user) {
  return {
    type: SET_USER,
    selectedUserIndex,
    user
  };
}

export function setUserIndex(selectedUserIndex) {
  return {
    type: SET_SELECTED_USER_INDEX,
    selectedUserIndex
  };
}

export function removeDoublesUser() {
  return {
    type: REMOVE_DOUBLES_USER
  };
}

export function analysisReducer(state = initialState, action = {}) {
  switch (action.type) {
  case GET_GAMES_REQUEST:
    return state;
  case GET_GAMES_RECEIVED:
    return Object.assign({}, state, {
      games: action.games
    });
  case GAME_TYPE_SETTING:
    return Object.assign({}, state, {
      gameUserCount: action.gameUserCount
    });
  case SHOT_TYPE_SETTING:
    return Object.assign({}, state, {
      shotTypeId: action.shotTypeId
    });
  case TERM_SETTING:
    return Object.assign({}, state, {
      term: action.term
    });
  case OUTCOME_SETTING:
    return Object.assign({}, state, {
      outcome: action.outcome
    });
  case GET_SEARCH_USER_REQUEST:
    return state;
  case GET_SEARCH_USER_RECEIVED:
    return Object.assign({}, state, {
      users: action.users
    });
  case GET_POSITIONS_COUNTS_REQUEST:
    return Object.assign({}, state, {});
  case GET_POSITIONS_COUNTS_RECEIVED:
    return Object.assign({}, state, {
      scores: action.scores
    });
  case REMOVE_USER:
    let selectedUser = state.analysisUsers[state.selectedUserIndex];
    if (selectedUser) {
      state.analysisUsersIds.splice(
        state.analysisUsersIds.indexOf(selectedUser.id),
        1
      );
      state.analysisUsers.splice(state.selectedUserIndex, 1);
    }
    return Object.assign({}, state, {
      analysisUsers: state.analysisUsers,
      analysisUsersIds: state.analysisUsersIds
    });
  case REMOVE_DOUBLES_USER:
    return state;
  case SET_USER:
    if (state.analysisUsers[state.selectedUserIndex]) {
      let selectedUser = state.analysisUsers[state.selectedUserIndex];
      state.analysisUsersIds.splice(
        state.analysisUsersIds.indexOf(selectedUser.id),
        1
      );
      state.analysisUsers[state.selectedUserIndex] = action.user;
    } else {
      state.analysisUsers.push(action.user);
    }
    state.analysisUsersIds.push(action.user.id);
    return Object.assign({}, state, {
      analysisUsers: state.analysisUsers,
      analysisUsersIds: state.analysisUsersIds
    });
  case SET_SELECTED_USER_INDEX:
    return Object.assign({}, state, {
      selectedUserIndex: action.selectedUserIndex
    });
  case SET_POSITIONS_COUNTS:
    const { positionsCountList } = utils.aggregatedMultipleAnalysis(
      state.positionCounts,
      action.side,
      action.minPosition,
      action.maxPosition
    );
    return Object.assign({}, state, {
      selectedPositionsCount: positionsCountList
    });
  default:
    return state;
  }
}
