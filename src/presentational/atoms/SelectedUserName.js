import React from "react";
import { StyleSheet, Text } from "react-native";

export default class SelectedUserName extends React.Component {
  render() {
    if (this.props.user) {
      return <Text style={styles.container}>{this.props.user.name}</Text>;
    } else {
      return <Text style={styles.container}>ユーザーを選択</Text>;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    color: "white",
    flexDirection: "row",
    backgroundColor: "transparent",
    borderColor: "#0a2444",
    paddingTop: 10,
    paddingBottom: 10,
    width: 108,
    borderWidth: 1.5,
    borderRadius: 3,
    textAlign: "center",
    marginBottom: 15
  }
});
