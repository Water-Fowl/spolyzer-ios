import React from "react";
import configureStore from "../stores";
import { PersistGate } from "redux-persist/integration/react";
import { Provider, connect } from "react-redux";

import Route from "./routes";
const { persistor, store } = configureStore();

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
