import React from "react";
import {
  $spolyzerDarkBlue,
  $transparent
} from "const";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from "react-native";

import Button from "./components/Button";

export default class GameTypeButton extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button gameUserCount={1}>シングルス</Button>
        <Button gameUserCount={2}>ダブルス</Button>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "transparent",
    borderRightColor: $spolyzerDarkBlue,
    borderTopColor: $spolyzerDarkBlue,
    borderLeftColor: $spolyzerDarkBlue,
    borderBottomColor: $spolyzerDarkBlue,
    height: 34,
    width: 222,
    borderWidth: 1.5,
    marginLeft: 30,
    borderRadius: 3,
    marginTop: 37,
    justifyContent: "center"
  }
});
