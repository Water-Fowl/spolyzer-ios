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
        <View style={styles.shotTypeContainer}>
          <View style={styles.shotTypeHalfContainer}>
            <ScoreCreateShotTypeButton shotTypeId={0}> スマッシュ</ScoreCreateShotTypeButton>
            <ScoreCreateShotTypeButton shotTypeId={1}> スマッシュ</ScoreCreateShotTypeButton>
            <ScoreCreateShotTypeButton shotTypeId={2}> スマッシュ</ScoreCreateShotTypeButton>
          </View>
          <View style={styles.shotTypeHalfContainer}>
            <ScoreCreateShotTypeButton shotTypeId={3}> スマッシュ</ScoreCreateShotTypeButton>
            <ScoreCreateShotTypeButton shotTypeId={4}> スマッシュ</ScoreCreateShotTypeButton>
            <ScoreCreateShotTypeButton shotTypeId={5}> スマッシュ</ScoreCreateShotTypeButton>
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
  shotTypeContainer: {
    padding: 10,
    borderColor: "#2EA7E0",
    borderWidth: 1,
    flexDirection: "row"
  }
});
