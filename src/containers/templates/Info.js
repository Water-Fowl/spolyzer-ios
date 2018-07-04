import React from "react";
import { WebView } from "react-native";
import templateEnhancer from "./hoc";
import { connect } from "react-redux";
import { mapStateToProps } from "utils";

class Info extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let uri = "https://spolyzer.water-fowl.co.jp/info/";
    return <WebView source={{ uri: uri }} />;
  }
}
export default connect(mapStateToProps)(templateEnhancer(Info));
