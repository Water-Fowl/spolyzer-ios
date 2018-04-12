import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import {
  GameIcon,
  MultipleAnalysisIcon,
  TopContentBar,
  Background
} from "atoms";
import { Actions } from "react-native-router-flux";

export default class AnalysisCreate extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TopContentBar>分析機能</TopContentBar>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => {
              Actions.GameAnalysisCreate();
            }}
            style={styles.gameButton}
          >
            <GameIcon size={60} />
            <Text style={styles.gameAnalysisText}>単分析</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Actions.MultipleAnalysisCreate();
            }}
            style={styles.gameButton}
          >
            <MultipleAnalysisIcon size={60} />
            <Text style={styles.multipleAnalysisText}>複合分析</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(6, 6, 25, 1)",
    alignItems: "center"
  },
  buttonContainer: {
    flexDirection: "row"
  },
  gameButton: {
    marginTop: "50%",
    margin: 5,
    flex: 1,
    alignItems: "center",
    backgroundColor: "rgba(46, 167, 224, 0.4)",
    padding: 10,
    paddingTop: 40,
    height: 130
  },
  multipleAnalysisText: {
    marginTop: 15,
    color: "white",
    fontSize: 18
  },
  gameAnalysisText: {
    marginTop: 20,
    color: "white",
    fontSize: 18
  }
});
