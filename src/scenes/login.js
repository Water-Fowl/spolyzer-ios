import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
  TextInput
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
                style={styles.textfield} />
                    
                 </View>
                    
                <View style={styles.frame}>
                    <TextInput onChangeText={(text) => this.setState({text})} 
                placeholder={"パスワード"} 
                placeholderTextColor={'#666677'} 
                secureTextEntry={true}
                style={styles.textfield} />
                </View>
            
                <View style={{flexDirection:"row"}}>
                    <View style={styles.sqf} />
                    <Text style={styles.auto_text}>
                        次回から自動でログインする
                    </Text>
                </View>
                
                <View style={styles.frame}> 
                    <TouchableOpacity onPress={Actions.mypage_top}>
                        <Text style={styles.debr_text}>
                            ログイン
                        </Text>
                    </TouchableOpacity>
                </View>

                    
                    <Text style={styles.forget_text}>
                        パスワードをお忘れの方
                    </Text>

                <View style={styles.frame}>
                    <TouchableOpacity onPress={Actions.sign_up}>
                    
                            <Text style={styles.debr_text2}>
                                新規登録(無料)
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

    textfield: {
       
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


    sqf: {

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



    auto_text: {
        color: '#ffffff',
        marginTop: 10,
        fontSize: 15,
        marginLeft: 6,
        marginBottom: 16,
        backgroundColor: 'transparent',
    },
    


    debr_text: {
        color: '#28a8de',
        textAlign: 'center',
        fontSize: 20,
        marginTop: 1,
        paddingTop: 8,
        paddingBottom: 8,
        marginBottom: 1,
        backgroundColor: 'transparent',

    },
    debr_text2: {
        color: '#28a8de',
        textAlign: 'center',
        fontSize: 19,
        marginTop: 1,
        paddingTop: 6,
        paddingBottom: 8,
        marginBottom: 1,
        backgroundColor: 'transparent',
        
    },
    forget_text: {
        color: '#28a8de',
        textDecorationLine: 'underline',
        textDecorationColor: '#28a8de',
        marginBottom: 55,
        marginTop: 8,
        marginLeft: 34,
        fontSize: 16,
        backgroundColor: 'transparent',
    },
    
})