import React from "react";
import {
  Dimensions,
} from "react-native";
import Orientation from "react-native-orientation";

export function scoreCreateEnhancer(ComponentClass) {
  return class ScoreCreateHOC extends ComponentClass {
    constructor(props) {
      super(props);
      this.state = {
        height: Dimensions.get("window").width,
        width: Dimensions.get("window").height,
      };
    }
    componentDidMount() {
      Orientation.lockToLandscape();
    }

    componentWillUnmount() {
      Orientation.lockToPortrait();
    }
    render() {
      return (
        super.render()
      );
    }
  };
}

