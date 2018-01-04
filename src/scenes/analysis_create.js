import React from "react";
import {
    Text,
    Image,
    View,
    Dimensions,
    TouchableHighlight,
    BackgroundImage,
    StyleSheet,
} from "react-native";
import { connect } from 'react-redux';
import Orientation from 'react-native-orientation';
import { Background } from "../components";


export default class AnalysisCreate extends React.Component{
    componentWillMount() {
        Orientation.lockToPortrait();
    }
    render(){
        return(
            <View style={styles.container}>

               <Background/>

               <Text style={styles.subtitle_text}>
                    検索条件
                </Text>


                <View style={{flexDirection:"row"}}>
                    <Text style={styles.game_style_text}>
                    試合形式
                    </Text>
                    <View style={styles.frame}>
                        <Text style={styles.singles_text}>
                            シングルス 
                         </Text>
                         <Text style={styles.doubles_text}>
                           ダブルス
                         </Text>
                    </View>
                </View>

             
            </View>









        
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
     },

    subtitle_text: {
        color: '#ffffff',
        fontSize: 22,
        textAlign: 'center',
        alignSelf: 'center',
        marginTop: 66,
        backgroundColor: 'transparent',
        fontWeight: 'bold',
        
     },
    
    game_style_text: {
        color: '#ffffff',
        fontSize: 15,
        marginTop: 45,
        marginLeft: 40,
        backgroundColor: 'transparent',
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        
     },

     frame: {
        flexDirection: "row",
        backgroundColor: 'transparent',
        borderRightColor: '#0a2444',
        borderTopColor: '#0a2444',
        borderLeftColor: '#0a2444',
        borderBottomColor: '#0a2444',
        height: 34,
        width: 222,
        borderWidth: 1.5,
        marginLeft: 30,
        borderRadius: 3,
        marginTop: 37,

     },

      singles_text: {
        color: '#ffffff',
        fontSize: 15,
        backgroundColor: 'transparent',
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        paddingTop: 5,
        paddingLeft: 14,
        paddingBottom: 5,
        paddingRight: 14,
        marginLeft: 10,
        marginRight: 6,
        marginTop: 2,
        marginBottom: 3,
        
     },

      doubles_text: {
        color: '#ffffff',
        fontSize: 15,
        backgroundColor: 'transparent',
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        paddingTop: 5,
        paddingLeft: 17,
        paddingBottom: 5,
        paddingRight: 17,
        marginTop: 2,
        marginBottom: 3,
        
     },


});
