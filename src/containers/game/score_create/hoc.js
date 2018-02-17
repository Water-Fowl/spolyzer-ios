import Orientation from "react-native-orientation";
import React from "react";
import {
  Dimensions,
} from "react-native";

import { postGame } from "../actions/post_game";

export default function enhancer(ComponentClass) {
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
    componentWillReceiveProps(nextProps){
      this.forceUpdate();
    }
    navigateEvent(){
      const { dispatch } = this.props;
      dispatch(postGame());
      Action.score_view();
    }
    render() {
      return (
        super.render()
      );
    }
  };
}

