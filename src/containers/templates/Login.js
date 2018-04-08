import Orientation from "react-native-orientation";
import React, { Component } from "react";
import { Actions } from "react-native-router-flux";
import { Background } from "atoms";
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

import {
  postLoginRequest,
  postLoginReceived
} from "../../modules/authentication";
import {
  getShotTypesRequest,
  getShotTypesReceived
} from "../../modules/sport";
import {
  getUserRequest,
  getUserReceived
} from "../../modules/profile";
import {
  postApiRequest,
  getApiRequest
} from "../../modules/request";
import {
  SIGN_IN_ENDPOINT,
  USERS_ENDPOINT,
  SHOT_TYPES_ENDPOINT
} from "../../config/api";
import {
  mapStateToProps,
  errorAlertCallback
} from "utils";
import SplashScreen from 'react-native-splash-screen'

function errorInstanceCallback(json){
  console.log(json);
  return new Error(json.errors);
}

class Login extends React.Component {
  constructor(props) {
    super(props);
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

  componentDidMount(){
      SplashScreen.hide();
  }

  postLoginEvent() {
    const sportId = 1;
    var body = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    };
    this.props.dispatch(
      postApiRequest(
        SIGN_IN_ENDPOINT,
        body,
        headers={},
        postLoginRequest,
        postLoginReceived,
        errorInstanceCallback=errorInstanceCallback,
        errorCallback=errorAlertCallback,
        returnHeader=true,
      )
    ).then((header) => {
      if(header){
        this.props.dispatch(
          getApiRequest(
            endpoint=USERS_ENDPOINT,
            params={},
            headers=header,
            requestCallback=getUserRequest,
            receivedCallback=getUserReceived
          )
        );
        this.props.dispatch(
          getApiRequest(
            SHOT_TYPES_ENDPOINT,
            params={sport_id: 1},
            header,
            getShotTypesRequest,
            getShotTypesReceived
          )
        );
        Actions.tab();
      }
      else {
      }
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Background />
        <Image
          style={styles.logo}
          source={require("../../assets/img/spolyzer_top.png")}
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
