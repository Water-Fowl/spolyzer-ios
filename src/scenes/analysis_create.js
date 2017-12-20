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

export default class AnalysisCreate extends React.Component{
    componentWillMount() {
        Orientation.lockToPortrait();
    }
    render(){
        return(
            <View/>
        );
    }
}

const styles = StyleSheet.create({
    
});
