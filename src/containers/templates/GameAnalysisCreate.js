import React from "react";
import { View } from "react-native";
import { Segment } from "atoms";

export default class GameAnalysisCreate extends React.Component {
  render() {
    return (
      <View>
        <Segment values={["シングルス", "ダブルス"]} selectedIndex={0} />
      </View>
    );
  }
}
