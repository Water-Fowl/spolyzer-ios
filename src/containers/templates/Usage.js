import React, { Component } from "react";
import { View, WebView } from "react-native";
import templateEnhancer from "./hoc";
import { connect } from "react-redux";
import { mapStateToProps } from "utils";

class Usage extends React.Component {
  render() {
    return (
      <WebView
        source={{ uri: "http://water-fowl.co.jp" }}
      />
    );
  }
}
export default connect(mapStateToProps)(templateEnhancer(Usage));
