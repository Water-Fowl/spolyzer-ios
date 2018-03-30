import React from "react";
import {
  Image,
  StyleSheet
} from "react-native";

export default class Background extends React.Component {
  render() {
    return (
      <Image
        source={require("../assets/img/background.png")}
        style={styles.background}
      />
    );
  }
}

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    width: "100%",
    height: "100%"
  }
});
