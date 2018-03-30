import React from "react";
import {
  View,
  Text,
  StyleSheet
} from "react-native";

export default class TextBox extends React.Component {
  render(){
    if (this.props.content){
      return(
        <Text style={styles.textBox}></Text>
      );
    }
  }
}

const styles = StyleSheet.create({
  textBox: {
    color: "white",
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
