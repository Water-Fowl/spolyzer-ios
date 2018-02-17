import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
  TextInput,
} from "react-native";
import { Actions } from "react-native-router-flux";
import Orientation from "react-native-orientation";
import { Background } from "components";
import { 
  postUserRegistration, 
  emailValidation 
} from "../actions/registration";
import { 
  isNotEmailInSignUp, 
  isEmailInSignUp 
} from "../../shared/redux/view/actions";
import { connect } from "react-redux";
import { emailReg } from "const";
import EmailErrorMessage from "./components/email_error_message";

const registrationUser = {
  name: "takumimuggle",
  email: "taumime@gmail.com",
  password: "takumimuggle",
  password_confirmation: "takumimuggle",
  confirm_success_url: "api.water-fowl.co.jp",
};
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
      const registration_body = { email: this.state.email,
        password: this.state.password,
        password_confirmation: this.state.password_confirmation,
        confirm_success_url: "api.water-fowl.co.jp",
      };
      dispatch(postUserRegistration(registration_body));
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
            style={styles.text_field}
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
            style={styles.text_field}
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
            style={styles.text_field}
            keyboardType="email-address"
            returnKeyType="done"
            secureTextEntry
          />
        </View>
        <EmailErrorMessage isVisible={this.props.sign_up_email_error} />
        <View style={styles.registration_form}>
          <TouchableOpacity onPress={() => {
            this.postRegistrationForm();
          }}
          >
            <Text style={styles.registration_button_text}>
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
    sign_up_email_error: sign_up_email_error
  } = view || {
    sign_up_email_error: false,
  };
  return{
    sign_up_email_error
  };
}

export default connect(mapStateToProps)(SignUp);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  logo: {
    marginTop: 80,
    marginBottom: 80,
    alignSelf: "center",
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
    marginBottom: 9,
  },
  text_field: {
    fontSize: 20,
    color: "#ffffff",
    paddingTop: 8,
    paddingLeft: 12,
    paddingBottom: 8,
    letterSpacing: 0,
  },
  registration_form: {
    borderRightColor: "#28a8de",
    borderTopColor: "#28a8de",
    borderLeftColor: "#28a8de",
    borderBottomColor: "#28a8de",
    height: 42,
    width: 324,
    borderWidth: 1.3,
    borderRadius: 5,
    marginTop: 120,
    marginBottom: 9,
  },
  registration_button_text: {
    color: "#28a8de",
    textAlign: "center",
    fontSize: 20,
    marginTop: 1,
    paddingTop: 8,
    paddingBottom: 8,
    marginBottom: 1,
    backgroundColor: "transparent",
  },
});
