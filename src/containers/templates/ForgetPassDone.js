import Orientation from "react-native-orientation";
import React from "react";
import templateEnhancer from "./hoc";
import { Actions } from "react-native-router-flux";
import {
  StyleSheet,
  Image,
  Text, TextInput, TouchableOpacity, View
} from "react-native";
import { connect } from "react-redux";
import { mapStateToProps } from "utils";

class ForgetPassDone extends React.Component {


  constructor(props) {
    super(props);
    console.log(this.props);
  }


  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require("../../assets/img/spolyzer_top.png")}
        />
        <Text style={styles.mainText}>
          パスワード再設定メールを送信しました
        </Text>
        <View style={styles.textContainer}>
          <Text style={styles.subText}>
            {this.props.email}にメールを送信しました。メールに記載されたリンクをクリックするとパスワードをリセットできます。
            {"\n"}{"\n"}メールが届かない場合、迷惑メールやスパムフォルダーなどもご確認ください。
          </Text>
        </View>
        <TouchableOpacity onPress={() => {Actions.popTo("login");}}>
          <Text style={styles.actionText}>
            ログイン
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}


export default connect(mapStateToProps)(templateEnhancer(ForgetPassDone));

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  logo: {
    marginTop: 80,
    marginBottom: 70,
    alignSelf: "center"
  },
  mainText: {
    color: "white",
    fontSize: 19,
    backgroundColor: "transparent",
    fontWeight: "bold",
    textAlign: "center"
  },
  textContainer: {
    marginTop: 60,
    width: "90%",
    alignSelf: "center"
  },
  subText: {
    color: "white",
    fontSize: 12,
    backgroundColor: "transparent",
    fontWeight: "bold",
    lineHeight: 18
  },
  actionText: {
    color: "#28a8de",
    textDecorationLine: "underline",
    textDecorationColor: "#28a8de",
    marginTop: 40,
    marginLeft: 20,
    fontSize: 16,
    backgroundColor: "transparent"
  }
});
