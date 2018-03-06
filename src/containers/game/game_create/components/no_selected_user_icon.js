import React from "react";
import {
  StyleSheet,
  Text,
  View
} from "react-native";

export default class NoSelectedUserIcon extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.noSelectedContainer}>
          <Text style={styles.text}>not</Text>
          <Text style={styles.text}>selected</Text>
        </View>
        <Text style={styles.nameText}> ユーザを選択 </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  noSelectedContainer: {
    borderColor: "rgba(46, 167, 224, 0.4)",
    backgroundColor: "rgba(46, 167, 224, 0.4)",
    height: 75,
    width: 75,
    borderWidth: 2,
    borderRadius: 100,
    alignSelf: "center",
    margin: 7,
    justifyContent: "center"
  },
  text: {
    backgroundColor: "transparent",
    color: "white",
    alignSelf: "center",
    textAlign: "center"
  },
  nameText: {
    paddingTop: 2,
    paddingBottom: 2,
    fontSize: 12,
    color: "white",
    marginTop: 10,
    textAlign: "center",
    borderColor: "#2EA7E0",
    width: 100,
    borderWidth: 1.5,
    borderRadius: 5,
    alignSelf: "center"
  }
});
