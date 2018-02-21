import React from "react";
import {
  StyleSheet,
  View
} from "react-native";

export default class InArea extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.outFieldAreaContainer}>
          <View style={styles.outFieldArea} />
          <View style={styles.outFieldArea} />
        </View>
        <View style={styles.inFieldAreaContainer}>
          <View style={styles.inFieldArea} />
          <View style={styles.inFieldArea} />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  outFieldAreaContainer: {
    width: 330,
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  outFieldArea: {
    alignSelf: "center",
    flex: 0.45,
    backgroundColor: "#FAEE00",
    opacity: 0.3,
    height: 170
  },
  inFieldAreaContainer: {
    width: 330,
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingLeft: 10,
    paddingRight: 10
  },
  inFieldArea: {
    flex: 0.4,
    alignSelf: "center",
    backgroundColor: "black",
    height: 138,
    marginTop: 16,
    marginBottom: 16
  }
});
