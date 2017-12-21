import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    Text,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Orientation from 'react-native-orientation';


export default class SignUp extends Component{
    componentWillMount() {
        Orientation.lockToPortrait();
    }
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
