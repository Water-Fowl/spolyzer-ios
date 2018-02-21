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
          source={require("../../../../assets/img/navigate_button.png")}
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
    position: "absolute"
  },
  navigateText: {
    top: 15,
    fontSize: 20,
    backgroundColor: "transparent",
    color: "#ffffff",
    alignSelf: "center"
  }
});
