import Config from "react-native-config";
export const SCHEME = Config.SCHEME_URL;

export const SIGN_IN_ENDPOINT = `${SCHEME}/auth/sign_in/`;
export const REGISTRATION_ENDPOINT = `${SCHEME}/auth/`;
export const USERS_ENDPOINT = `${SCHEME}/users/`;
export const USERS_GAMES_ENDPOINT = `${SCHEME}/users/games/`;
export const SEARCH_USER_ENDPOINT = `${SCHEME}/users/search`;
export const GAMES_ENDPOINT = `${SCHEME}/games/`;
export const GAMES_COUNT_ENDPOINT = `${SCHEME}/games/count`;
export const RECENTLY_GAMES_ENDPOINT = `${SCHEME}/games/recently`;
export const POSITIONS_COUNTS_ENDPOINT = `${SCHEME}/positions/counts`;
export const SCORES_ENDPOINT = `${SCHEME}/scores/`;
export const SHOT_TYPE_COUNTS_ENDPOINT = `${SCHEME}/shot_types/counts`;
export const SHOT_TYPES_ENDPOINT = `${SCHEME}/shot_types/`;
export const AGGREGATED_SCORES_ENDPOINT = `${SCHEME}/aggregated_scores/`;
export const SPORTS_ENDPOINT = `${SCHEME}/sports/`;
export const VALIDATE_TOKEN_ENDPOINT = `${SCHEME}/auth/validate_token/`;
export const CONFIRMATION_ENDPOINT = `${SCHEME}/api/v1/auth/confirmation/`;

export function analysisEndpointGenerator(params) {
  var endpoint = SHOT_TYPES_ENDPOINT;
  endpoint += params.shot_type_id;
  endpoint += "/aggregated_scores/";
  return endpoint;
}

export function gameCountEndpointGenerator(params) {
  var endpoint = GAMES_ENDPOINT;
  endpoint += params.game_id;
  endpoint += "/aggregated_scores/";
  return endpoint;
}