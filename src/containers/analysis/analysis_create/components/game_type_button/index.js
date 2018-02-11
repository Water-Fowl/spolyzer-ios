import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from "react-native";
import Button from "./components/button";

export default class GameTypeButton extends React.Component {
  render() {
    return (
      <View style={styles.frame}>
        <Button current_game_type_id={0}>シングルス</Button>
        <Button current_game_type_id={1}>ダブルス</Button>
      </View>
    );
  }
}
const styles = StyleSheet.create({

  game_style_button_pressed: {
    backgroundColor: "#0a2444",
    width: 90,
    marginRight: 3,
    marginLeft: 3,
    marginTop: 2,
    marginBottom: 2,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 3,
  },

  game_style_button: {
    backgroundColor: "transparent",
    width: 90,
    marginRight: 3,
    marginLeft: 3,
    marginTop: 2,
    marginBottom: 2,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 3,
  },

  select_text_pressed: {
    color: "#ffffff",
    fontSize: 15,
    backgroundColor: "transparent",
    fontWeight: "bold",
  },

  select_text: {
    color: "#ffffff",
    fontSize: 15,
    backgroundColor: "transparent",
    fontWeight: "bold",
  },

  shot_type_button_pressed: {
    backgroundColor: "#0a2444",
    height: 28,
    width: 90,
    marginRight: 3,
    marginLeft: 3,
    marginTop: 4,
    marginBottom: 3,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 3,
  },

  shot_type_button: {
    backgroundColor: "transparent",
    height: 28,
    width: 90,
    marginRight: 3,
    marginLeft: 3,
    marginTop: 4,
    marginBottom: 3,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 3,
  },

  term_button_pressed: {
    backgroundColor: "#0a2444",
    width: 60,
    marginRight: 3,
    marginLeft: 3,
    marginTop: 2,
    marginBottom: 2,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 3,
  },

  term_button: {
    backgroundColor: "transparent",
    width: 60,
    marginRight: 3,
    marginLeft: 3,
    marginTop: 2,
    marginBottom: 2,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 3,
  },

  frame: {
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

  shot_type_frame: {
    backgroundColor: "transparent",
    borderRightColor: "#0a2444",
    borderTopColor: "#0a2444",
    borderLeftColor: "#0a2444",
    borderBottomColor: "#0a2444",
    height: 108,
    width: 222,
    borderWidth: 1.5,
    marginLeft: 58,
    borderRadius: 3,
    marginTop: 25,
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "center",
  },

  term_frame: {
    flexDirection: "row",
    backgroundColor: "transparent",
    borderRightColor: "#0a2444",
    borderTopColor: "#0a2444",
    borderLeftColor: "#0a2444",
    borderBottomColor: "#0a2444",
    height: 34,
    width: 222,
    borderWidth: 1.5,
    marginLeft: 57,
    borderRadius: 3,
    marginTop: 25,
    justifyContent: "center",
  },

});
