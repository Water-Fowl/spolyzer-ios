import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    Text,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Orientation from 'react-native-orientation';

import { connect } from 'react-redux';
import { postAuthenticationUser } from '../actions/authentication';

class Login extends Component{
    componentWillMount() {
        Orientation.lockToPortrait();
    }

    postAuthenticationForm(){
        const { dispatch } = this.props
        dispatch(postAuthenticationUser())
    }

    render(){
        return(
            <View>
                <TouchableOpacity onPress={Actions.sign_up}>
                    <Text>サインアップ</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.postAuthenticationForm}>
                    <Text>ログイン</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default connect()(Login)
