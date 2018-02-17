import React from "react";
import {
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";


export default class NavigateButton extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.action} style={this.props.style}>
        <Image
          source={require("../../../../assets/img/navigate_button.png")}
          style={styles.navigate_button}
        />
        <Text style={styles.navigate_text}>
          {this.props.text}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  navigate_button: {
    marginTop: 0,
    alignSelf: "center",
    position: "absolute",
  },
  navigate_text: {
    top: 15,
    fontSize: 20,
    backgroundColor: "transparent",
    color: "#ffffff",
    alignSelf: "center",
  },
})
