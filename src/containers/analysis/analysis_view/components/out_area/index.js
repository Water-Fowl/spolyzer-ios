import React from "react";
import {
  View,
  StyleSheet,
} from "react-native";

export default class OutArea extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.in_field_area} />
        <View style={styles.in_field_area} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 330,
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingLeft: 20,
    paddingRight: 20,
  },
  in_field_area: {
    flex: 0.35,
    alignSelf: "center",
    backgroundColor: "rgba(46, 167, 224, 0.8)",
    height: 120,
    marginTop: 25,
    marginBottom: 25,
  },
});
