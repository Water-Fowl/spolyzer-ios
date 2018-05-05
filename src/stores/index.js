import storage from "redux-persist/lib/storage";
import thunkMiddleware from "redux-thunk";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { createLogger } from "redux-logger";
import { AsyncStorage } from "react-native";
import { persistReducer, persistStore } from "redux-persist";

import { profileReducer } from "../modules/profile";
import { authenticationReducer } from "../modules/authentication";
import { analysisReducer } from "../modules/analysis";
import { gameReducer } from "../modules/game";
import { sportReducer } from "../modules/sport";

const loggerMiddleware = createLogger();
const middleware = [thunkMiddleware, loggerMiddleware];
const reducers = combineReducers({
  game: gameReducer,
  authentication: authenticationReducer,
  profile: profileReducer,
  analysis: analysisReducer,
  sport: sportReducer
});

export default function configureStore() {
  const store = createStore(
    reducers,
    undefined,
    compose(applyMiddleware(...middleware)),
  );

  return store;
}
