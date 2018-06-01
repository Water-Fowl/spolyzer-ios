import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity
} from "react-native";

export default class NavigateButton extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.action} style={this.props.style}>
        <Image
          source={{ url: "navigate_button.png" }}
          style={styles.navigateButton}
        />
        <Text style={styles.navigateText}>
          {this.props.text}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  navigateButton: {
    marginTop: 0,
    alignSelf: "center",
    position: "absolute",
    width:184,
    height:54
  },
  navigateText: {
    top: 15,
    fontSize: 20,
    backgroundColor: "transparent",
    color: "#ffffff",
    alignSelf: "center"
  }
});
