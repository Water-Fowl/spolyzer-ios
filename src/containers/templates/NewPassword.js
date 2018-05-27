import React from "react";
import { View, TextInput, TouchableOpacity, StyleSheet, Image, Text } from "react-native";
import { connect } from "react-redux";

import * as requestModules from "../../modules/request";
import * as authenticationModules from "../../modules/authentication";
import { PASSWORD_ENDPOINT } from "../../config/api";

import { Background } from "atoms";


class NewPassword extends React.Component{
  postPasswordEvent(){
    console.log(this.props.token)
    const body = {
      password: this.state.password,
      password_confirmation: this.state.password_confirmation
    }
    const header = {
      "access-token": this.props.token
    }
    this.props.dispatch(
      requestModules.patchApiRequest(
        PASSWORD_ENDPOINT,
        body,
        headers,
        authenticationModules.patchPasswordRequest,
        authenticationModules.patchPasswordReceived,
      )
    );
  }
  render(){
    return (
      <View style={styles.container}>
        <Background />
        <Image
          style={styles.logo}
          source={require("../../assets/img/spolyzer_top.png")}
        />
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
        <View style={styles.registrationForm}>
          <TouchableOpacity onPress={() => {
            this.postPasswordEvent();
          }}>
            <Text style={styles.buttonText}>登録</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default connect()(NewPassword);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  logo: {
    marginTop: 80,
    marginBottom: 80,
    alignSelf: "center"
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
  buttonText: {
    color: "#28a8de",
    textAlign: "center",
    fontSize: 19,
    marginTop: 1,
    marginBottom: 1,
    backgroundColor: "transparent"
  }
})
