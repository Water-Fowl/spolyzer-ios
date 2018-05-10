import React from "react";
import { Image } from "react-native";

export default class AnalysisIcon extends React.Component {
  render() {
    return (
      <Image
        source={require("../../assets/img/analysis_icon.png")}
        style={{
          width: this.props.size,
          height: this.props.size * 0.64
        }}
      />
    );
  }
}
