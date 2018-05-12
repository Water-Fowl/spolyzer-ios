import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class PlayersDisplay extends React.Component {
  renderUnitUsersName(users) {
    const unitUserNameComponentList = [];
    for (let user of users) {
      unitUserNameComponentList.push(
        <Text style={styles.userNameText}> {user.name} </Text>
      );
    }
    return <View style={styles.userNameBox}>{unitUserNameComponentList}</View>;
  }
  render() {
    return (
      <View
        style={[
          styles.userNameContainer,
          { paddingTop: this.props.padding||15, paddingBottom: this.props.padding||15 }
        ]}
      >
        {this.renderUnitUsersName(this.props.leftUsers)}
        <Text style={styles.vsText}>{this.props.children}</Text>
        {this.renderUnitUsersName(this.props.rightUsers)}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  userNameContainer: {
    flexDirection: "row"
  },
  userNameBox: {
    flex: 1,
    borderBottomColor: "#28a8de",
    borderBottomWidth: 1,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  userNameText: {
    color: "white",
    alignSelf: "center",
    textAlign: "center",
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 15,
    backgroundColor: "transparent"
  },
  vsText: {
    backgroundColor: "transparent",
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
    color: "skyblue",
    fontSize: 18
  }
});
