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
import { VictoryBar } from "victory-native";
import Orientation from 'react-native-orientation';

const sample_data = [ 
    {hoge: 1, geho: 2},
    {hoge: 2, geho: 3},
]

export default class AnalysisView extends React.Component{
    componentDidMount() {
        Orientation.lockToPortrait();
    }
    render(){
        return(
            <VictoryBar 
              data = {sample_data}
              x='hoge'
              y='geho'
            />
        );
    }
}

const styles = StyleSheet.create({
    
});
