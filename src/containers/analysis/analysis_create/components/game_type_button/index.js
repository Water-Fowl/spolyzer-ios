import React from "react";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";

import Button from "./components/button";

export default class GameTypeButton extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button current_game_type_id={0}>シングルス</Button>
        <Button current_game_type_id={1}>ダブルス</Button>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "transparent",
    borderRightColor: "#0a2444",
    borderTopColor: "#0a2444",
    borderLeftColor: "#0a2444",
    borderBottomColor: "#0a2444",
    height: 34,
    width: 222,
    borderWidth: 1.5,
    marginLeft: 30,
    borderRadius: 3,
    marginTop: 37,
    justifyContent: "center",
  },
});
