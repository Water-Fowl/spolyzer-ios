import React from "react";
import {
  View,
  Image,
  StyleSheet,
} from "react-native";

export default class TopBar extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require("../../../../assets/img/spolyzer_header.png")} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(46, 167, 224, 0.5)",
  }
})
