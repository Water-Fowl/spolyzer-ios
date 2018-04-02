import React from "react";
import {
  StyleSheet,
  Text
} from "react-native";

export default class ErrorText extends React.Component{
  render(){
    if(this.props.isVisible){
      return(
        <Text style={styles.errorMessageText}>
          { this.props.children }
        </Text>
      );
    }
    else {
      return(
        null
      );
    }
  }
}

const styles = StyleSheet.create({
  errorMessageText:{
    color: "red",
    backgroundColor: "transparent"
  }
});
