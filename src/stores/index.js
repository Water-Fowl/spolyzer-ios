import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { gameReducer, scoreReducer, authenticationReducer } from '../reducers'

const authenticationConfig = {
  key: 'authentication',
  storage,
}
const scoreConfig = {
  key: 'score',
  storage,
}

const loggerMiddleware = createLogger();
const middleware = [thunkMiddleware, loggerMiddleware];
const reducers = combineReducers({
  score: scoreReducer,
  /*
  authentication: persistReducer(authenticationConfig, authenticationReducer),
  */
  authentication: authenticationReducer,
  game: gameReducer,
})

export function configureStore () {
  let store = createStore(
    reducers,
    undefined,
    compose(
      applyMiddleware(...middleware),
    )
  )
  let persistor = persistStore(store)

  return { persistor, store }
}
