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

const win = Dimensions.get('window');

export default class Login extends Component{
    componentWillMount() {
        Orientation.lockToPortrait();
    }

    constructor(props) {
        super(props);
        this.state = {
            text: '',
        };
    }

    render(){
        return(
            <View style={styles.container}>

               <Background/>
                
                <Text style={styles.logo_text}>
                    Spolyzer
                </Text>
                
                <View style={styles.frame}>    
                    <TextInput onChangeText={(text) => this.setState({text})} 
                        placeholder={"メールアドレス"} 
                        placeholderTextColor={'#666677'} 
                        style={styles.text_field}
                        keyboardType={'email-address'}
                        returnKeyType={'done'}
                     />    
                </View>
                    
                <View style={styles.frame}>    
                    <TextInput onChangeText={(text) => this.setState({text})} 
                        placeholder={"パスワード"} 
                        placeholderTextColor={'#666677'} 
                        style={styles.text_field}
                        keyboardType={'email-address'}
                        returnKeyType={'done'}
                        secureTextEntry
                     />    
                </View>

                 <View style={styles.frame}>    
                    <TextInput onChangeText={(text) => this.setState({text})} 
                        placeholder={"パスワード（確認用）"} 
                        placeholderTextColor={'#666677'} 
                        style={styles.text_field}
                        keyboardType={'email-address'}
                        returnKeyType={'done'}
                        secureTextEntry
                     />    
                </View>
            
                
                <View style={styles.frame_2}> 
                    <TouchableOpacity onPress={Actions.tab}>
                        <Text style={styles.sign_up_button_text}>
                            登録
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
     },

    text_field: {
        fontSize: 20,
        color: '#ffffff',
        paddingTop: 8,
        paddingLeft: 12,
        paddingBottom: 8,
        letterSpacing: 0,
     },

    frame: {
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

     frame_2: {
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
        marginTop: 120,
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
    
    sign_up_button_text: {
        color: '#28a8de',
        textAlign: 'center',
        fontSize: 20,
        marginTop: 1,
        paddingTop: 8,
        paddingBottom: 8,
        marginBottom: 1,
        backgroundColor: 'transparent',
    },

})