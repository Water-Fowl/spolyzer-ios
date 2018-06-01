import React from "react";
import { AssetsImage } from "atoms";

export default class MultipleAnalysisIcon extends React.Component {
  render() {
    return (
      <AssetsImage
        name="multiple_analysis_icon.png"
        width={this.props.size * 111 || 111}
        height={this.props.size * 78 || 78}
      />
    );
  }
}
