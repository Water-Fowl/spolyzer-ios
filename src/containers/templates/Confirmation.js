import React from "react";
import {
  View,
  Text,
  StyleSheet
} from "react-native";
import {
  Background,
  NavigateButton
} from "components";
import { Actions } from "react-native-router-flux";


export default class Confirmation extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Background />
        <Text style={styles.text}>確認メールを送信しました。{"\n"}メールのリンクを踏んで登録を完了してください。</Text>
        <NavigateButton text="ログインへ" action={Actions.login}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    textAlign: "center",
    color: "white",
    fontSize: 17,
    backgroundColor: "transparent",
    marginBottom: 30
  }
});

