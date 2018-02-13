import React from 'react';
import {
  Text,
} from 'react-native';

export default class EmailErrorMessage extends React.Component{
  render(){
    return(
      <Text style={styles.error_message_text}>
        メールアドレスを入力してください
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  error_message_text:{
    color: 'red',
  }
}
