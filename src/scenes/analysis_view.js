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

                    <View style={styles.name_outside_frame}>
                        <View style={styles.name_inside_frame}>
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
                <View style={styles.option}>
                    
                    <View style={styles.frame}>
                        <Text style={styles.option_text}>
                            １日トータル
                        </Text>
                    </View>
                    <View style={styles.frame}>
                        <Text style={styles.option_text}>
                            球種
                         </Text>
                    </View>
                    <View style={styles.frame}>
                        <Text style={styles.option_text}>
                            負け試合
                        </Text>
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
        marginLeft: 206,
        backgroundColor: "transparent",
    },

    name_outside_frame: {
        borderRightColor: '#0a2444',
        borderTopColor: '#0a2444',
        borderLeftColor: '#0a2444',
        borderBottomColor: '#0a2444',
        height: 30,
        width: 104,
        borderWidth: 1,
        marginLeft: 6,
        borderRadius: 4,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
     },

    name_inside_frame: {
        borderRightColor: '#0a2444',
        borderTopColor: '#0a2444',
        borderLeftColor: '#0a2444',
        borderBottomColor: '#0a2444',
        height: 26,
        width: 100,
        borderWidth: 1,
        borderRadius: 2,
        flexDirection:"row"
        
     },

     person: {
        marginTop: 2,
        marginLeft: 8,
        height: 20,
        width: 20,
        opacity: 0.5,
     },
     opponent_name: {
        backgroundColor: "transparent",
        color: "#ffffff",
        marginTop: 7,
        marginLeft: 7,
        fontWeight: 'bold', 
        fontSize: 12,
     },
     option: {
        flexDirection:"row",
        justifyContent: 'space-between',
        alignSelf: 'center',
        width: 310,
        marginTop: 4,

     },
     frame: {
        borderRightColor: '#0a2444',
        borderTopColor: '#0a2444',
        borderLeftColor: '#0a2444',
        borderBottomColor: '#0a2444',
        height: 30,
        width: 96,
        borderWidth: 1,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
     },

     option_text: {

        backgroundColor: '#0a2444',
        color: '#ffffff',
        fontSize: 13,
        fontWeight: 'bold',
        height: 24,
        width: 90,
        borderRadius: 2,
        textAlign: "center",
        paddingTop: 5,

     }


     
    
});
