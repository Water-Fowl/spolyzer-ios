import React from "react";
import {
  Image,
  StyleSheet,
  View
} from "react-native";

export default class TopBar extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={{ url: "spolyzer_header.png" }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(46, 167, 224, 0.5)"
  }
});
