import storage from "redux-persist/lib/storage";
import thunkMiddleware from "redux-thunk";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { createLogger } from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";

import { analysisReducer, authenticationReducer, gameReducer, profileReducer } from "../containers";

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
  analysis: analysisReducer
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
