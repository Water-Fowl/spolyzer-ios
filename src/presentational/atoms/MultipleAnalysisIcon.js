import React from "react";
import { Image } from "react-native";

export default class MultipleAnalysisIcon extends React.Component {
  render() {
    return (
      <Image
        source={{ url: "multiple_analysis_icon.png" }}
        style={{
          width: this.props.size,
          height: this.props.size * 0.7
        }}
      />
    );
  }
}
