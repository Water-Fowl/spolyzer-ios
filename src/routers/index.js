import React from "react";
import configureStore from "../stores";
import { PersistGate } from "redux-persist/integration/react";
import { Provider, connect } from "react-redux";
import {
  Text
} from "react-native";
import { ThemeProvider } from "react-native-ios-kit";
import {
  $spolyzerBlue,
  $spolyzerDarkBlue,
  $transparent
} from "../const/color";

import Route from "./routes";
const store = configureStore();
const theme = {
  barColor: $transparent,
  textColor: "white",
  placeholderColor: "white",
  footnoteColor: $spolyzerDarkBlue
};

export default class ReduxRoute extends React.Component{
  render(){
    return(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Route />
        </ThemeProvider>
      </Provider>
    );
  }
}
