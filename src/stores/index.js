import storage from "redux-persist/lib/storage";
import thunkMiddleware from "redux-thunk";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { createLogger } from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";

import { profileReducer, authenticationReducer } from "../containers";
import { analysisReducer } from "../modules/analysis";
import { gameReducer } from "../modules/game";
import { sportReducer } from "../modules/sport";

const authenticationConfig = {
  key: "authentication",
  storage
};

const loggerMiddleware = createLogger();
const middleware = [thunkMiddleware, loggerMiddleware];
const reducers = combineReducers({
  game: gameReducer,
  authentication: persistReducer(authenticationConfig, authenticationReducer),
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
  const persistor = persistStore(store);

  return { persistor, store };
}
