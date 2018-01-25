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
import { Background } from "../components";

import { connect } from 'react-redux';
import { postUserLogin } from '../actions/login';

class Login extends React.Component{

  constructor(props) {
    super(props);
    this.postLoginInformation.bind(this);
    this.state = {
      email: '',
      password: '',
      login_error: false,
    };
  }

  componentWillMount() {
    Orientation.lockToPortrait();
  }

  componentWillReceiveProps(nextProps){
    const { login_error } = nextProps
    this.setState({login_error: login_error})
  }

  postLoginInformation(){
    const { dispatch } = this.props
    formLoginInformation = {
      email: this.state.email,
      password: this.state.password,
    }
    dispatch(postUserLogin(formLoginInformation))
  }

  render(){
    return(
      <View style={styles.container}>
        <Background/>
        <Text style={styles.logo_text}>
          Spolyzer
        </Text>
        <View style={styles.form_container}>
          <View style={styles.form}>
            <TextInput onChangeText={(email) => this.setState({email})}
              placeholder={"メールアドレス"}
              placeholderTextColor={'#666677'}
              style={styles.text_field}
              keyboardType={'email-address'}
              returnKeyType={'done'}
            />
          </View>
          <View style={styles.form}>
            <TextInput onChangeText={(password) => this.setState({password})}
              placeholder={"パスワード"}
              placeholderTextColor={'#666677'}
              style={styles.text_field}
              keyboardType={'email-address'}
              returnKeyType={'done'}
              secureTextEntry
            />
          </View>
          {(() => {
            if (this.state.login_error) {
              return (
                <View style={{flexDirection:"row"}}>
                <Text style={styles.auto_login_text}>
                メールアドレスかパスワードが間違っています。
                </Text>
                </View>
              )
            }
          })()}
          <View style={{flexDirection:"row"}}>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={() =>{
              Actions.tab();
              /*
               * Rails環境なしでもログインできるようにここはコメントアウト
               * this.postLoginInformation()
               */
            }}>
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
    )
  }
}

function mapStateToProps(state, props){
  const { authentication } = state
  const {
    login_error: login_error,
  } = authentication ||{
    login_error: false
  }
  return {
    login_error,
  }
}

export default connect(mapStateToProps)(Login)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  form_container: {
    alignSelf: 'center',
    width: "80%",
  },
  form: {
    borderRightColor: '#28a8de',
    borderTopColor: '#28a8de',
    borderLeftColor: '#28a8de',
    borderBottomColor: '#28a8de',
    height: 42,
    width: '100%',
    borderWidth: 1.3,
    alignSelf: "center",
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
    alignSelf: "center",
    borderRadius: 5,
    marginTop: 9,
    marginBottom: 9,
    justifyContent: 'center',
  },


  logo_text: {
    color: '#000000',
    fontSize: 60,
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: 60,
    textShadowOffset: {width: 1, height: 1},
    textShadowOffset: {width: -1, height: -1},
    textShadowRadius: 4,
    textShadowColor: '#ffffff',
    marginBottom: 40,
    backgroundColor: 'transparent',
  },

  text_field: {
    fontSize: 20,
    color: '#ffffff',
    paddingLeft: 12,
    letterSpacing: 0,
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
})
