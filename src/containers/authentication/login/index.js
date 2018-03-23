import Orientation from "react-native-orientation";
import React, { Component } from "react";
import { Actions } from "react-native-router-flux";
import { Background } from "components";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { connect } from "react-redux";

import { postLogin } from "../actions/login";
import { mapStateToProps } from "utils";

class Login extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.postLoginEvent.bind(this);
    this.state = {
      name: "yamad07",
      email: "",
      password: "",
      loginError: false
    };
  }

  componentWillMount() {
    Orientation.lockToPortrait();
  }

  postLoginEvent() {
    const { dispatch } = this.props;
    const loginForm = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    };
    dispatch(postLogin(loginForm));
  }
  render() {
    return (
      <View style={styles.container}>
        <Background />
        <Image
          style={styles.logo}
          source={require("../../../assets/img/spolyzer_top.png")}
        />
        <View style={styles.formContainer}>
          <View style={styles.form}>
            <TextInput
              onChangeText={email => this.setState({ email })}
              placeholder="メールアドレス"
              placeholderTextColor="#666677"
              style={styles.textField}
              keyboardType="email-address"
              returnKeyType="done"
            />
          </View>
          <View style={styles.form}>
            <TextInput
              onChangeText={password => this.setState({ password })}
              placeholder="パスワード"
              placeholderTextColor="#666677"
              style={styles.textField}
              keyboardType="email-address"
              returnKeyType="done"
              secureTextEntry
            />
          </View>
          {(() => {
            if (this.state.loginError) {
              return (
                <View style={styles.rowContainer}>
                  <Text style={styles.autoLoginText}>
                メールアドレスかパスワードが間違っています。
                  </Text>
                </View>
              );
            }
          })()}
          <View style={styles.rowContainer} />
          <View style={styles.button}>
            <TouchableOpacity onPress={() => {
              this.postLoginEvent();
            }}
            >
              <Text style={styles.buttonText}>
                ログイン
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.forgetPasswordText}>
            パスワードをお忘れの方
          </Text>
          <View style={styles.button}>
            <TouchableOpacity onPress={Actions.signUp}>
              <Text style={styles.buttonText}>
                新規登録(無料)
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}


export default connect(mapStateToProps)(Login);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rowContainer: {
    flexDirection: "row"
  },
  formContainer: {
    alignSelf: "center",
    width: "80%"
  },
  form: {
    borderRightColor: "#28a8de",
    borderTopColor: "#28a8de",
    borderLeftColor: "#28a8de",
    borderBottomColor: "#28a8de",
    height: 42,
    width: "100%",
    borderWidth: 1.3,
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginTop: 9,
    marginBottom: 9
  },
  button: {
    borderRightColor: "#28a8de",
    borderTopColor: "#28a8de",
    borderLeftColor: "#28a8de",
    borderBottomColor: "#28a8de",
    height: 42,
    width: "100%",
    borderWidth: 1.3,
    alignSelf: "center",
    borderRadius: 5,
    marginTop: 9,
    marginBottom: 9,
    justifyContent: "center"
  },
  logo: {
    marginTop: 80,
    marginBottom: 80,
    alignSelf: "center"
  },
  textField: {
    fontSize: 20,
    color: "#ffffff",
    paddingLeft: 12,
    letterSpacing: 0
  },

  autoLoginText: {
    color: "#ffffff",
    marginTop: 10,
    fontSize: 15,
    marginLeft: 6,
    marginBottom: 16,
    backgroundColor: "transparent"
  },

  forgetPasswordText: {
    color: "#28a8de",
    textDecorationLine: "underline",
    textDecorationColor: "#28a8de",
    marginBottom: 35,
    marginTop: 8,
    fontSize: 16,
    backgroundColor: "transparent"
  },
  buttonText: {
    color: "#28a8de",
    textAlign: "center",
    fontSize: 19,
    marginTop: 1,
    marginBottom: 1,
    backgroundColor: "transparent"
  }
});
