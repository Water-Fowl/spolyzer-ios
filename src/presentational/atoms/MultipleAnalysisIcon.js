import React from "react";
import { Image } from "react-native";

export default class MultipleAnalysisIcon extends React.Component {
  render() {
    return (
      <Image
        source={require("../../assets/img/multiple_analysis_icon.png")}
        style={{
          width: this.props.size
        }}
      />
    );
  }
}

