import React from "react";
import configureStore from "../stores";
import { Provider, connect } from "react-redux";
import {
  Text
} from "react-native";

import Route from "./routes";
const store = configureStore();

export default class ReduxRoute extends React.Component{
  render(){
    return(
      <Provider store={store}>
        <Route />
      </Provider>
    );
  }
}
