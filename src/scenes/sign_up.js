import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    Text,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
export default class SignUp extends Component{
    render(){
        return(
            <View>
                <TouchableOpacity onPress={Actions.tab}>
                    <Text>ログイン</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
