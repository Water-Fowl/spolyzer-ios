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
import { NavBar } from "../components";

export default class AnalysisView extends React.Component{
    componentDidMount() {
        Orientation.lockToPortrait();
    }
    render(){
        return(
            <View style={styles.container}>

               <Background/>
               <NavBar/>

               <Text style={styles.subtitle_text}>
                    複合分析結果
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
        fontSize: 18,
        alignSelf: 'center',
        marginTop: -26,
        backgroundColor: 'transparent',
        fontWeight: 'bold',       
    },
    
});
