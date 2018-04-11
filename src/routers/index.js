import React from "react";
import configureStore from "../stores";
import { PersistGate } from "redux-persist/integration/react";
import { Provider, connect } from "react-redux";
import {
  Text
} from "react-native";

import Route from "./routes";
const { persistor, store } = configureStore();

export default class ReduxRoute extends React.Component{
  render(){
    return(
      <Provider store={store}>
        <PersistGate loading={<Text>読み込み中</Text>} persistor={persistor}>
          <Route />
        </PersistGate>
      </Provider>
    );
  }
}
