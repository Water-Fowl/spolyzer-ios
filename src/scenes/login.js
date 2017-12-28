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
import { postAuthenticationUser } from '../actions/authentication';

class Login extends React.Component{
    constructor(props) {
        super(props);
        this.postAuthenticationForm.bind(this);
        this.state = {
            text: '',
        };
    }
    componentWillMount() {
        Orientation.lockToPortrait();
    }

    postAuthenticationForm(){
        const { dispatch } = this.props
        dispatch(postAuthenticationUser())
    }

    render(){
        return(
            <View style={styles.container}>

               <Background/>
                
                <Text style={styles.logo_text}>
                    Spolyzer
                </Text>
                
                <View style={styles.form}>    
                    <TextInput onChangeText={(text) => this.setState({text})} 
                        placeholder={"メールアドレス"} 
                        placeholderTextColor={'#666677'} 
                        style={styles.text_field}
                        keyboardType={'email-address'}
                        returnKeyType={'done'}
                     />    
                </View>
                    
                <View style={styles.form}>    
                    <TextInput onChangeText={(text) => this.setState({text})} 
                        placeholder={"パスワード"} 
                        placeholderTextColor={'#666677'} 
                        style={styles.text_field}
                        keyboardType={'email-address'}
                        returnKeyType={'done'}
                        secureTextEntry
                     />    
                </View>
            
                <View style={{flexDirection:"row"}}>
                    <View style={styles.square} />
                    <Text style={styles.auto_login_text}>
                        次回から自動でログインする
                    </Text>
                </View>
                
                <View style={styles.form}> 
                    <TouchableOpacity onPress={Actions.tab}>
                        <Text style={styles.login_button_text}>
                            ログイン
                        </Text>
                    </TouchableOpacity>
                </View>

                    
                <Text style={styles.forget_password_text}>
                    パスワードをお忘れの方
                </Text>

                <View style={styles.form}>
                    <TouchableOpacity onPress={Actions.sign_up}>
                        <Text style={styles.sign_up_button_text}>
                            新規登録(無料)
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}

export default connect()(Login)
const styles = StyleSheet.create({
    container: {
        flex: 1,
     },

    form: {
        borderRightColor: '#28a8de',
        borderTopColor: '#28a8de',
        borderLeftColor: '#28a8de',
        borderBottomColor: '#28a8de',
        height: 42,
        width: 324,
        borderWidth: 1.3,
        marginLeft: 25,
        marginRight: 25,
        borderRadius: 5,
        marginTop: 9,
        marginBottom: 9,
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
        paddingTop: 8,
        paddingLeft: 12,
        paddingBottom: 8,
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
        marginLeft: 25,
        marginRight: 5,
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
        marginBottom: 55,
        marginTop: 8,
        marginLeft: 34,
        fontSize: 16,
        backgroundColor: 'transparent',
    },

    login_button_text: {
        color: '#28a8de',
        textAlign: 'center',
        fontSize: 20,
        marginTop: 1,
        paddingTop: 8,
        paddingBottom: 8,
        marginBottom: 1,
        backgroundColor: 'transparent',
    },

    sign_up_button_text: {
        color: '#28a8de',
        textAlign: 'center',
        fontSize: 19,
        marginTop: 1,
        paddingTop: 6,
        paddingBottom: 8,
        marginBottom: 1,
        backgroundColor: 'transparent',
    },
    
})
