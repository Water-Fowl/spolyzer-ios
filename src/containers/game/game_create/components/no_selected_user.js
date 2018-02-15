import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";

export default class NoSelectedUser extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.text}>not</Text>
        <Text style={styles.text}>selected</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    borderColor: "rgba(46, 167, 224, 0.4)",
    backgroundColor: "rgba(46, 167, 224, 0.4)",
    height: 75,
    width: 75,
    borderWidth: 2,
    borderRadius: 100,
    alignSelf: "center",
    margin: 7,
    justifyContent: "center",
  },
  text: {
    backgroundColor: "transparent",
    color: "white",
    alignSelf: "center",
    textAlign: "center",
  },
})
