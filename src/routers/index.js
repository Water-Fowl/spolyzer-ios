import React from "react";
import configureStore from "../stores";
import { PersistGate } from "redux-persist/integration/react";
import { Provider, connect } from "react-redux";
import { AppRegistry } from "react-native";
import { ThemeProvider } from "react-native-ios-kit";

import Route from "./routes";
const { persistor, store } = configureStore();

export default class ReduxRoute extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider>
            <Route />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    );
  }
}
AppRegistry.registerComponent("main", () => Main);
