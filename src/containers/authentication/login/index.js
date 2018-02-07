import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
  TextInput,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Orientation from 'react-native-orientation';
import { Background } from 'components';

import { connect } from 'react-redux';
import { postUserLogin } from '../actions/login';
import { enhancer } from './hoc';

class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Background />
        <Image
          style={styles.logo}
          source={require('../../../assets/img/spolyzer_top.png')}
        />
        <View style={styles.form_container}>
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
          {(() => {
            if (this.state.login_error) {
              return (
                <View style={{ flexDirection: 'row' }}>
                  <Text style={styles.auto_login_text}>
                メールアドレスかパスワードが間違っています。
                  </Text>
                </View>
              );
            }
          })()}
          <View style={{ flexDirection: 'row' }} />
          <View style={styles.button}>
            <TouchableOpacity onPress={() => {
              Actions.tab();
              /*
               * Rails環境なしでもログインできるようにここはコメントアウト
               * this.postLoginInformation()
               */
            }}
            >
              <Text style={styles.button_text}>
                ログイン
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.forget_password_text}>
            パスワードをお忘れの方
          </Text>
          <View style={styles.button}>
            <TouchableOpacity onPress={Actions.sign_up}>
              <Text style={styles.button_text}>
                新規登録(無料)
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state, props) {
  const { authentication } = state;
  const {
    login_error,
  } = authentication || {
    login_error: false,
  };
  return {
    login_error,
  };
}

export default connect(mapStateToProps)(enhancer(Login));

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  form_container: {
    alignSelf: 'center',
    width: '80%',
  },
  form: {
    borderRightColor: '#28a8de',
    borderTopColor: '#28a8de',
    borderLeftColor: '#28a8de',
    borderBottomColor: '#28a8de',
    height: 42,
    width: '100%',
    borderWidth: 1.3,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 9,
    marginBottom: 9,
  },
  button: {
    borderRightColor: '#28a8de',
    borderTopColor: '#28a8de',
    borderLeftColor: '#28a8de',
    borderBottomColor: '#28a8de',
    height: 42,
    width: '100%',
    borderWidth: 1.3,
    alignSelf: 'center',
    borderRadius: 5,
    marginTop: 9,
    marginBottom: 9,
    justifyContent: 'center',
  },
  logo: {
    marginTop: 80,
    marginBottom: 80,
    alignSelf: 'center',
  },
  square: {
    borderRightColor: '#28a8de',
    borderTopColor: '#28a8de',
    borderLeftColor: '#28a8de',
    borderBottomColor: '#28a8de',
    height: 19,
    width: 19,
    borderWidth: 1,
    borderRadius: 3,
    marginTop: 7,
    marginBottom: 5,
  },
  text_field: {
    fontSize: 20,
    color: '#ffffff',
    paddingLeft: 12,
    letterSpacing: 0,
  },

  auto_login_text: {
    color: '#ffffff',
    marginTop: 10,
    fontSize: 15,
    marginLeft: 6,
    marginBottom: 16,
    backgroundColor: 'transparent',
  },

  forget_password_text: {
    color: '#28a8de',
    textDecorationLine: 'underline',
    textDecorationColor: '#28a8de',
    marginBottom: 35,
    marginTop: 8,
    fontSize: 16,
    backgroundColor: 'transparent',
  },
  button_text: {
    color: '#28a8de',
    textAlign: 'center',
    fontSize: 19,
    marginTop: 1,
    marginBottom: 1,
    backgroundColor: 'transparent',
  },
});
