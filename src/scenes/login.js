import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    Text,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Login extends Component{
    render(){
        return(
            <View>
                <TouchableOpacity onPress={Actions.sign_up}>
                    <Text>サインアップ</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={Actions.tab}>
                    <Text>ログイン</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
