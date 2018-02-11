import { combineReducers } from "redux";
import scoreReducer from "../containers/game/reducer";
import authenticationReducer from "../containers/authentication/reducer";
import gameReducer from "../containers/analysis/reducer";
import viewReducer from "../containers/shared/redux/view/reducer";

export { gameReducer, scoreReducer, authenticationReducer, viewReducer };

