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

export default class AnalysisView extends React.Component{
    componentDidMount() {
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
