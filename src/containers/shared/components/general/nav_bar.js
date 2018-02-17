import React from "react";
import {
  View,
  Image,
  StyleSheet,
} from "react-native";


export default class NavBar extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require("../../../../assets/img/spolyzer_header.png")} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: "rgba(46, 167, 224, 0.1)",
    height: 70,
    justifyContent: "flex-end",
    paddingLeft: 20,
    paddingBottom: 5,
  }
});
