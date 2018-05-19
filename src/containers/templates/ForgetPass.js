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
import * as authenticationModules from "../../modules/authentication";
import * as requestModules from "../../modules/request";

import { emailReg } from "const";
import { ErrorText } from "atoms";
import { connect } from "react-redux";
import { mapStateToProps, errorAlertCallback } from "utils";

function errorInstanceCallback(json) {
  return new Error(json.errors.full_messages);
}

class ForgetPass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      isErrorVisible: false
    };
    this.postForgetPassForm.bind(this);
  }
  postForgetPassForm() {
    const isEmail = emailReg.test(this.state.email);
    if (isEmail) {
      /* パスワードお忘れAPIをココに書く */
      // const body = {
      //   email: this.state.email
      // };
      // this.props
      //   .dispatch(
      //     requestModules.postApiRequest(
      //       REGISTRATION_ENDPOINT,
      //       body,
      //       (headers = {}),
      //       (requestCallback = authenticationModules.postRegistrationRequest),
      //       (receivedCallback = authenticationModules.postRegistrationReceived),
      //       (errorInstanceCallback = errorInstanceCallback),
      //       (errorCallback = errorAlertCallback),
      //       (returnHeader = false)
      //     )
      //   )
      //   .then(isValid => {
      //     if (isValid) {
      Actions.ForgetPassDone({ email: this.state.email });
      //   }
      // });
    } else {
      this.setState({ isErrorVisible: true });
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require("../../assets/img/spolyzer_top.png")}
        />
        <Text style={styles.text}>パスワード再設定メールを送る</Text>
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
        <ErrorText isVisible={this.state.isErrorVisible}>
          メールアドレスを入力してください
        </ErrorText>
        <View style={styles.button}>
          <TouchableOpacity
            onPress={() => {
              this.postForgetPassForm();
            }}
          >
            <Text style={styles.buttonText}>送信</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default connect(mapStateToProps)(templateEnhancer(ForgetPass));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  logo: {
    marginTop: 80,
    marginBottom: 70,
    alignSelf: "center"
  },
  text: {
    color: "white",
    fontSize: 20,
    backgroundColor: "transparent",
    fontWeight: "bold",
    textAlign: "center"
  },
  form: {
    borderColor: "#28a8de",
    height: 42,
    width: "80%",
    borderWidth: 1.3,
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginTop: 50,
    marginBottom: 9
  },
  textField: {
    fontSize: 20,
    color: "#ffffff",
    paddingLeft: 12,
    letterSpacing: 0
  },
  button: {
    borderColor: "#28a8de",
    height: 42,
    width: "80%",
    borderWidth: 1.3,
    alignSelf: "center",
    borderRadius: 5,
    marginTop: 18,
    justifyContent: "center"
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
