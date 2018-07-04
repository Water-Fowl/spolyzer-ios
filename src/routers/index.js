import React from "react";
import configureStore from "../stores";
import { Provider } from "react-redux";
import { ThemeProvider } from "react-native-ios-kit";

import Route from "./routes";
const store = configureStore();

export default class ReduxRoute extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider>
          <Route />
        </ThemeProvider>
      </Provider>
    );
  }
}