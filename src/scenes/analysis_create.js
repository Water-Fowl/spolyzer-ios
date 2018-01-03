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

                <Text style={styles.game_style_text}>
                    試合形式
                </Text>

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
        fontSize: 16,
        marginTop: 42,
        marginLeft: 40,
        backgroundColor: 'transparent',
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        
     },
});
