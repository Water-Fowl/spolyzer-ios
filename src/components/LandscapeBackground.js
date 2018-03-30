import React from "react";
import {
  Image,
  StyleSheet
} from "react-native";

export default class LandScapeBackground extends React.Component {
  render() {
    return (
      <Image
        source={require("../assets/img/landscape_background.png")}
        style={styles.landscapeBackground}
      />
    );
  }
}

const styles = StyleSheet.create({
  landscapeBackground: {
    zIndex: 0,
    resizeMode: "stretch",
    width: "100%",
    height: "100%",
    backgroundColor: "rgb(30, 55, 80)",
    position: "absolute"
  }
});
