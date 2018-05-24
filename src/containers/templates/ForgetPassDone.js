import Orientation from "react-native-orientation";
import React from "react";
import templateEnhancer from "./hoc";
import { Actions } from "react-native-router-flux";
import {
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { connect } from "react-redux";
import { mapStateToProps } from "utils";
import { NavigateButton } from "atoms";

class ForgetPassDone extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={{ url: "spolyzer_top.png" }}
        />
        <Text style={styles.mainText}>
          パスワード再設定メールを送信しました
        </Text>
        <View style={styles.textContainer}>
          <Text style={styles.subText}>
            {this.props.email}にメールを送信しました。メールに記載されたリンクをクリックするとパスワードをリセットできます。
            {"\n"}
            {
              "\n"
            }メールが届かない場合、迷惑メールやスパムフォルダーなどもご確認ください。
          </Text>
        </View>
        <NavigateButton
          style={styles.navigateButton}
          text="ログインへ"
          action={() => {
            Actions.popTo("login");
          }}
        />
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
    fontSize: 14,
    backgroundColor: "transparent",
    fontWeight: "bold",
    lineHeight: 18
  },
  navigateButton: {
    marginTop: 26
  }
});
