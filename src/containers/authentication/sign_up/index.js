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
import { emailReg } from "const";

import EmailErrorMessage from "./components/email_error_message";
import {
  emailValidation,
  postRegistration
} from "../actions/registration";
import {
  isEmailInSignUp,
  isNotEmailInSignUp
} from "../../shared/redux/view/actions";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.postRegistrationForm.bind(this);
  }
  componentWillMount() {
    Orientation.lockToPortrait();
  }
  postRegistrationForm() {
    const { dispatch } = this.props;
    const isEmail = emailReg.test(this.state.email);
    dispatch(emailValidation(isEmail));
    if (isEmail){
      dispatch(isEmailInSignUp());
      /*
      const registration_form = { email: this.state.email,
        password: this.state.password,
        password_confirmation: this.state.password_confirmation,
        confirm_success_url: "api.water-fowl.co.jp",
      };
      dispatch(postRegistration(registration_form));
      */
      Actions.tab();
    }
    else{
      dispatch(isNotEmailInSignUp());
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Background />
        <Image
          style={styles.logo}
          source={require("../../../assets/img/spolyzer_top.png")}
        />
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
            onChangeText={passwordConfirmation => this.setState({ passwordConfirmation })}
            placeholder="パスワード（確認用）"
            placeholderTextColor="#666677"
            style={styles.textField}
            keyboardType="email-address"
            returnKeyType="done"
            secureTextEntry
          />
        </View>
        <EmailErrorMessage isVisible={this.props.signUpEmailError} />
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

function mapStateToProps(state, props){
  const { view } = state;
  const {
    signUpEmailError: signUpEmailError
  } = view || {
    signUpEmailError: false
  };
  return{
    signUpEmailError
  };
}

export default connect(mapStateToProps)(SignUp);

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
