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
import { postUserRegistration } from "../actions/registration";
import { connect } from "react-redux";

const registrationUser = {
  name: "takumimuggle",
  email: "taumime@gmail.com",
  password: "takumimuggle",
  password_confirmation: "takumimuggle",
  confirm_success_url: "api.water-fowl.co.jp",
};
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
    this.postRegistrationForm.bind(this);
  }

  componentWillMount() {
    Orientation.lockToPortrait();
  }

  postRegistrationForm() {
    const { dispatch } = this.props;
    const registration_body = {
      email: this.state.email,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation,
      confirm_success_url: "api.water-fowl.co.jp",
    };
    dispatch(postUserRegistration(registration_body));
  }

  render() {
    return (
      <View style={styles.container}>

        <Background />

        <Text style={styles.logo_text}>
                    Spolyzer
        </Text>

        <View style={styles.form}>
          <TextInput
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

export default connect()(SignUp);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  form: {
    borderRightColor: "#28a8de",
    borderTopColor: "#28a8de",
    borderLeftColor: "#28a8de",
    borderBottomColor: "#28a8de",
    height: 42,
    width: 324,
    borderWidth: 1.3,
    marginLeft: 25,
    marginRight: 25,
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

  logo_text: {
    color: "#000000",
    fontSize: 60,
    textAlign: "center",
    alignSelf: "center",
    marginTop: 60,
    textShadowOffset: { width: 1, height: 1 },
    textShadowOffset: { width: -1, height: -1 },
    textShadowRadius: 4,
    textShadowColor: "#ffffff",
    marginBottom: 40,
    backgroundColor: "transparent",
  },

  registration_form: {
    borderRightColor: "#28a8de",
    borderTopColor: "#28a8de",
    borderLeftColor: "#28a8de",
    borderBottomColor: "#28a8de",
    height: 42,
    width: 324,
    borderWidth: 1.3,
    marginLeft: 25,
    marginRight: 25,
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
