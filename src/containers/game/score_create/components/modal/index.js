import React from "react";
import {
  StyleSheet,
  Text,
  View
} from "react-native";

import ScoreCreateShotTypeButton from "../shot_type_button";
import {
  scoreCreateModalEnhancer
} from "./hoc";

class Modal extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.shot_type_container}>
          <View style={styles.shot_type_half_container}>
            <ScoreCreateShotTypeButton shot_type_id={0}> スマッシュ</ScoreCreateShotTypeButton>
            <ScoreCreateShotTypeButton shot_type_id={1}> スマッシュ</ScoreCreateShotTypeButton>
            <ScoreCreateShotTypeButton shot_type_id={2}> スマッシュ</ScoreCreateShotTypeButton>
          </View>
          <View style={styles.shot_type_half_container}>
            <ScoreCreateShotTypeButton shot_type_id={3}> スマッシュ</ScoreCreateShotTypeButton>
            <ScoreCreateShotTypeButton shot_type_id={4}> スマッシュ</ScoreCreateShotTypeButton>
            <ScoreCreateShotTypeButton shot_type_id={5}> スマッシュ</ScoreCreateShotTypeButton>
          </View>
        </View>
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
  shot_type_container: {
    padding: 10,
    borderColor: "#2EA7E0",
    borderWidth: 1,
    flexDirection: "row"
  }
});
