import React from "react";
import {
  StyleSheet,
  Text,
  View
} from "react-native";

import ScoreCreateShotTypeButton from "../ShotTypeButton";
import {
  scoreCreateModalEnhancer
} from "./hoc";

class Modal extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScoreCreateShotTypeButton/>
      </View>
    );
  }
}
export default scoreCreateModalEnhancer(Modal);

const styles = StyleSheet.create({
  container: {
    zIndex: 2,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  shotTypeContainer: {
    padding: 10,
    borderColor: "#2EA7E0",
    borderWidth: 1,
    flexDirection: "row"
  }
});
