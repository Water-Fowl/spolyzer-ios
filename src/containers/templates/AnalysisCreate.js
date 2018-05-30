import React from "react";
import templateEnhancer from "./hoc";
import { connect } from "react-redux";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { TopContentBar, Background } from "atoms";
import { GameIcon, MultipleAnalysisIcon } from "molecules";
import { Actions } from "react-native-router-flux";
import { mapStateToProps } from "../../modules/mapToProps";

class AnalysisCreate extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TopContentBar>分析機能</TopContentBar>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => {
              Actions.GameAnalysisCreate();
            }}
            style={styles.leftGameButton}
          >
            <GameIcon size={1.2} />
            <Text style={styles.gameAnalysisText}>単分析</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Actions.MultipleAnalysisCreate();
            }}
            style={styles.rightGameButton}
          >
            <MultipleAnalysisIcon size={0.54}/>
            <Text style={styles.multipleAnalysisText}>複合分析</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default connect(mapStateToProps)(templateEnhancer(AnalysisCreate));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  buttonContainer: {
    flexDirection: "row"
  },
  leftGameButton: {
    marginTop: "50%",
    marginLeft: 15,
    marginRight: 5,
    flex: 1,
    alignItems: "center",
    backgroundColor: "rgba(46, 167, 224, 0.4)",
    padding: 10,
    paddingTop: 40,
    height: 130
  },
  rightGameButton: {
    marginTop: "50%",
    marginRight: 15,
    marginLeft: 5,
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
