import Orientation from "react-native-orientation";
import React, { Component } from "react";
import { Actions } from "react-native-router-flux";
import {
  Dimensions, Image, StyleSheet, Text,
  TextInput, TouchableOpacity, View
} from "react-native";
import { connect } from "react-redux";

import { emailReg } from "const";
import { ErrorText, Background } from "atoms";

import { GET_USER_ENDPOINT } from "../../config/api";
import * as authenticationModules from "../../modules/authentication";
import { errorAlertCallback } from "utils";
import { REGISTRATION_ENDPOINT } from "../../config/api";

function errorInstanceCallback(json){
  return new Error(json.errors.full_messages);
}

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      isErrorVisible: false
    };
    this.postRegistrationForm.bind(this);
  }
  componentWillMount() {
    Orientation.lockToPortrait();
  }
  postRegistrationForm() {

    const isEmail = emailReg.test(this.state.email);
    if (isEmail){
      const body = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        password_confirmation: this.state.password_confirmation
      };
      this.props.dispatch(requestModules.postApiRequest(
        REGISTRATION_ENDPOINT,
        body,
        headers={},
        requestCallback=authenticationModules.postRegistrationRequest,
        receivedCallback=authenticationModules.postRegistrationReceived,
        errorInstanceCallback=errorInstanceCallback,
        errorCallback=errorAlertCallback,
        returnHeader=false
      ))
        .then((isValid) => {if(isValid) {Actions.confirmation();}}
        );
    }
    else{
      this.setState({isErrorVisible: true});
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Background />
        <Image
          style={styles.logo}
          source={require("../../assets/img/spolyzer_top.png")}
        />
        <View style={styles.form}>
          <TextInput
            ref="name"
            onChangeText={name => this.setState({ name })}
            placeholder="名前"
            placeholderTextColor="#666677"
            style={styles.textField}
            keyboardType="email-address"
            returnKeyType="done"
          />
        </View>
        <View style={styles.form}>
          <TextInput
            ref="email"
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
            ref='password'
            onChangeText={password => this.setState({ password })}
            placeholder="パスワード"
            placeholderTextColor="#666677"
            style={styles.textField}
            keyboardType="email-address"
            returnKeyType="done"
            secureTextEntry
          />
        </View>
        <View style={styles.form}>
          <TextInput
            onChangeText={password_confirmation => this.setState({ password_confirmation })}
            placeholder="パスワード（確認用）"
            placeholderTextColor="#666677"
            style={styles.textField}
            keyboardType="email-address"
            returnKeyType="done"
            secureTextEntry
          />
        </View>
        <ErrorText isVisible={this.state.isErrorVisible}>メールアドレスを入力してください</ErrorText>
        <View style={styles.registrationForm}>
          <TouchableOpacity onPress={() => {
            this.postRegistrationForm();
          }}
          >
            <Text style={styles.registrationButtonText}>
              登録
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}


export default connect()(SignUp);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  logo: {
    marginTop: 80,
    marginBottom: 80,
    alignSelf: "center"
  },
  form: {
    borderRightColor: "#28a8de",
    borderTopColor: "#28a8de",
    borderLeftColor: "#28a8de",
    borderBottomColor: "#28a8de",
    height: 42,
    width: 324,
    borderWidth: 1.3,
    borderRadius: 5,
    marginTop: 9,
    marginBottom: 9
  },
  textField: {
    fontSize: 20,
    color: "#ffffff",
    paddingTop: 8,
    paddingLeft: 12,
    paddingBottom: 8,
    letterSpacing: 0
  },
  registrationForm: {
    borderRightColor: "#28a8de",
    borderTopColor: "#28a8de",
    borderLeftColor: "#28a8de",
    borderBottomColor: "#28a8de",
    height: 42,
    width: 324,
    borderWidth: 1.3,
    borderRadius: 5,
    marginTop: 120,
    marginBottom: 9
  },
  registrationButtonText: {
    color: "#28a8de",
    textAlign: "center",
    fontSize: 20,
    marginTop: 1,
    paddingTop: 8,
    paddingBottom: 8,
    marginBottom: 1,
    backgroundColor: "transparent"
  }
});
