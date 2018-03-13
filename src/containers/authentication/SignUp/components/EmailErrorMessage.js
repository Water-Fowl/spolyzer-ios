import React from "react";
import {
  StyleSheet,
  Text
} from "react-native";

export default class EmailErrorMessage extends React.Component{
  componentWillReceiveProps(nextProps){
    this.forceUpdate();
  }
  render(){
    if(this.props.isVisible){
      return(
        <Text style={styles.errorMessageText}>
          メールアドレスを入力してください
        </Text>
      );
    }
    else{
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
