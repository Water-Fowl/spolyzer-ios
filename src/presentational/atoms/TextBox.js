import React from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet
} from "react-native";

export default class TextBox extends React.Component {
  render(){
    return(
      <TouchableOpacity onPress={this.props.callback}>
        <Text style={styles.textBox}>{this.props.children}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  textBox: {
    margin: 5,
    color: "white",
    alignSelf: "center",
    textAlign: "center",
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 15,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "transparent",
    borderColor: "#28a8de",
    borderRadius: 3,
    borderWidth: 1
  }

});
