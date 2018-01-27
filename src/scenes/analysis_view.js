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
import { baseHigherOrderComponentEnhancer } from '../enhances/'

const sample_data = [ 
    {hoge: 1, geho: 2},
    {hoge: 2, geho: 3},
]

class AnalysisView extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.subtitle_text}>
                    複合分析結果
                </Text>
                <VictoryBar 
                  data = {sample_data}
                  x='hoge'
                  y='geho'
                />
            </View>
        );
    }
}

export default baseHigherOrderComponentEnhancer(AnalysisView)

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    subtitle_text: {
        color: '#ffffff',
        fontSize: 19,
        alignSelf: 'center',
        marginTop: -28,
        backgroundColor: 'transparent',
        fontWeight: 'bold',       
    },
    
});
