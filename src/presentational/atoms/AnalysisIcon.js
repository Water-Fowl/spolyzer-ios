import React from "react";
import { Image } from "react-native";

export default class AnalysisIcon extends React.Component {
  render() {
    return (
      <Image
        source={{ url: "analysis_icon.png" }}
        style={{
          width: this.props.size * 50 || 50,
          height: this.props.size * 32 || 32
        }}
      />
    );
  }
}
