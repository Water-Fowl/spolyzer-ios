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
import { Background } from "../components";
import { NavBar } from "../components";

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
            

            <View style={styles.container}>

                <Background/>
                <NavBar/>

                <Text style={styles.subtitle_text}>
                    複合分析結果
                </Text>

                <View style={{flexDirection:"row"}}>
                    <Text　style={styles.analysis_view_vs}>
                        vs
                    </Text>

                    <View style={styles.name_frame}>
                        <View style={styles.opponent_name_frame}>
                            <Image
                            source={require('../../assets/img/score_creat_person.png')}
                            style={ styles.person }
                           />

                            <Text style={styles.opponent_name}>
                                池田　社長
                            </Text>
                        </View>

                    </View>
                </View>





                <VictoryBar 
                  data = {sample_data}
                  x='hoge'
                  y='geho'
                />

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
        fontSize: 19,
        alignSelf: 'center',
        marginTop: -28,
        backgroundColor: 'transparent',
        fontWeight: 'bold',       
    },

    analysis_view_vs:{
        fontWeight: 'bold',
        color:"skyblue",
        fontSize:26,
        alignSelf: 'flex-start',
        marginTop: 16,
        marginLeft: 210,
        backgroundColor: "transparent",
    },

    name_frame: {
        borderRightColor: '#0a2444',
        borderTopColor: '#0a2444',
        borderLeftColor: '#0a2444',
        borderBottomColor: '#0a2444',
        height: 30,
        width: 110,
        borderWidth: 1,
        marginLeft: 6,
        borderRadius: 4,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
     },

    opponent_name_frame: {
        borderRightColor: '#0a2444',
        borderTopColor: '#0a2444',
        borderLeftColor: '#0a2444',
        borderBottomColor: '#0a2444',
        height: 26,
        width: 106,
        borderWidth: 1,
        borderRadius: 2,
        flexDirection:"row"
        
     },

     person: {
        marginTop: 1,
        marginLeft: 8,
        height: 20,
        width: 20,
        opacity: 0.5,
     },
     opponent_name: {
        backgroundColor: "transparent",
        color: "#ffffff",
        marginTop: 5,
        marginLeft: 7,
        fontWeight: 'bold', 
        fontSize: 13,
     }
    
});
