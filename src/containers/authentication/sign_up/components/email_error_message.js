import React from "react";
import {
  StyleSheet,
  Text
} from "react-native";

export default class EmailErrorMessage extends React.Component{
  componentWillReceiveProps(nextProps){
    console.log(nextProps.isVisible);
    this.forceUpdate();
  }
  render(){
    if(this.props.isVisible){
      return(
        <Text style={styles.error_message_text}>
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
  error_message_text:{
    color: "red",
    backgroundColor: "transparent"
  }
});
