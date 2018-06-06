import Orientation from "react-native-orientation";
import React, { Component } from "react";
import { Actions } from "react-native-router-flux";
import { Background } from "atoms";
import {
  AsyncStorage,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  SafeAreaView
} from "react-native";
import { connect } from "react-redux";
import * as authenticationModules from "../../modules/authentication";
import * as sportModules from "../../modules/sport";
import * as profileModules from "../../modules/profile";
import * as requestModules from "../../modules/request";
import {
  SIGN_IN_ENDPOINT,
  USERS_ENDPOINT,
  SHOT_TYPES_ENDPOINT
} from "../../config/api";
import { mapStateToProps } from "../../modules/mapToProps";
import { errorAlertCallback } from "utils";

function errorInstanceCallback(json) {
  return new Error(json.errors);
}

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.postLoginEvent.bind(this);
    this.state = {
      email: "",
      password: "",
      loginError: false
    };
  }

  componentWillMount() {
    Orientation.lockToPortrait();
  }

  postLoginEvent() {
    var body = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    };
    this.props
      .dispatch(
        requestModules.postApiRequest(
          SIGN_IN_ENDPOINT,
          body,
          (headers = {}),
          authenticationModules.postLoginRequest,
          authenticationModules.postLoginReceived,
          (errorInstanceCallback = errorInstanceCallback),
          (errorCallback = errorAlertCallback),
          (returnHeader = true)
        )
      )
      .then(async header => {
        if (header) {
          await AsyncStorage.setItem("header", JSON.stringify(header));
          this.props
            .dispatch(
              requestModules.getApiRequest(
                (endpoint = USERS_ENDPOINT),
                (params = {}),
                (headers = header),
                (requestCallback = profileModules.getUserRequest),
                (receivedCallback = profileModules.getUserReceived)
              )
            )
            .then(user => {
              user.sport_id === null ? Actions.sportSelect() : Actions.tab();
            });
        }
      });
  }
  render() {
    return (
      <View style={styles.container}>
        <Background />
        <SafeAreaView style={styles.safeAreaContainer}>
          <Image style={styles.logo} source={{ url: "spolyzer_top.png" }} />
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
              <TouchableOpacity
                onPress={() => {
                  this.postLoginEvent();
                }}
              >
                <Text style={styles.buttonText}>ログイン</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={Actions.ForgetPass}>
              <Text style={styles.forgetPasswordText}>
                パスワードをお忘れの方
              </Text>
            </TouchableOpacity>
            <View style={styles.button}>
              <TouchableOpacity onPress={Actions.signUp}>
                <Text style={styles.buttonText}>新規登録(無料)</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

export default connect(mapStateToProps)(Login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between"
  },
  safeAreaContainer: {
    flex: 1,
    justifyContent: "center"
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
    marginBottom: 40,
    alignSelf: "center",
    width: 209,
    height: 64
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
