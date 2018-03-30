import React from "react";
import { Actions } from "react-native-router-flux";
import { Provider, connect } from "react-redux";
import {
  Router,
  Scene,
  Tabs
} from "react-native-router-flux";
import { applyMiddleware, compose, createStore } from "redux";

import configureStore from "../stores";
import {
  AnalysisCreate,
  AnalysisSearchUser,
  AnalysisView,
  GameCreate,
  GameSearchUser,
  Login,
  ProfileEdit,
  ProfileTop,
  ScoreCreate,
  ScoreView,
  SignUp
} from "../containers";
import {
  mapStateToProps
} from "utils";
import { PersistGate } from "redux-persist/integration/react";

const { persistor, store } = configureStore();
import Route from "./routes";

export default class ReduxRoute extends React.Component{
  render(){
    return(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Route />
        </PersistGate>
      </Provider>
    );
  }
}
