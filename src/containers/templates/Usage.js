import React, { Component } from "react";
import { View, WebView } from "react-native";
import templateEnhancer from "./hoc";
import { connect } from "react-redux";
import { mapStateToProps } from "utils";

class Usage extends React.Component {
  constructor(props) {
    super(props);
    console.log("props:",this.props,"state:",this.state);
  }
  render() {
    let uri ="https://spolyzer.water-fowl.co.jp/?sport_id="+this.props.sport_id;
    return <WebView source={{ uri: uri }} />;
  }
}
export default connect(mapStateToProps)(templateEnhancer(Usage));
