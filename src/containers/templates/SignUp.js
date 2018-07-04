import Orientation from "react-native-orientation";
import React from "react";
import { Actions } from "react-native-router-flux";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  SafeAreaView
} from "react-native";
import { connect } from "react-redux";

import { emailReg } from "const";
import { ErrorText, Background } from "atoms";

import * as authenticationModules from "../../modules/authentication";
import * as requestModules from "../../modules/request";
import { errorAlertCallback } from "utils";
import { REGISTRATION_ENDPOINT } from "../../config/api";

function errorInstanceCallback(json) {
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
    if (isEmail) {
      const body = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        password_confirmation: this.state.password_confirmation
      };
      this.props
        .dispatch(
          requestModules.postApiRequest(
            REGISTRATION_ENDPOINT,
            body,
            (headers = {}),
            (requestCallback = authenticationModules.postRegistrationRequest),
            (receivedCallback = authenticationModules.postRegistrationReceived),
            (errorInstanceCallback = errorInstanceCallback),
            (errorCallback = errorAlertCallback),
            (returnHeader = false)
          )
        )
        .then(isValid => {
          if (isValid) {
            Actions.confirmation();
          }
        });
    } else {
      this.setState({ isErrorVisible: true });
    }
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
                ref="password"
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
                onChangeText={password_confirmation =>
                  this.setState({ password_confirmation })
                }
                placeholder="パスワード（確認用）"
                placeholderTextColor="#666677"
                style={styles.textField}
                keyboardType="email-address"
                returnKeyType="done"
                secureTextEntry
              />
            </View>
            <ErrorText isVisible={this.state.isErrorVisible}>
              メールアドレスを入力してください
            </ErrorText>
            <View style={styles.rowContainer} />
            <View style={styles.registrationForm}>
              <TouchableOpacity
                onPress={() => {
                  this.postRegistrationForm();
                }}
              >
                <Text style={styles.registrationButtonText}>登録</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

export default connect()(SignUp);

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
  logo: {
    marginBottom: 40,
    alignSelf: "center",
    width: 209,
    height: 64
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
    width: "100%",
    borderWidth: 1.3,
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginTop: 9,
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
