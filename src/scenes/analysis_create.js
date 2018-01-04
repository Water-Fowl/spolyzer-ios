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
import { Navibar } from "../components";

export default class AnalysisCreate extends React.Component{
    componentWillMount() {
        Orientation.lockToPortrait();
    }
    render(){
        return(
            <View style={styles.container}>

               <Background/>


                <Navibar/>

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

                <View style={{flexDirection:"row"}}>
                    <Text style={styles.shot_type_text}>
                    球種
                    </Text>
                    <View style={styles.shot_type_frame}>
                        <View style={{flexDirection:"row"}}>
                            <Text style={styles.singles_text}>
                                スマッシュ 
                             </Text>
                             <Text style={styles.doubles_text}>
                                クリアー
                            </Text>
                        </View>

                        <View style={{flexDirection:"row"}}>
                            <Text style={styles.doubles_text}>
                                ドロップ 
                            </Text>
                             <Text style={styles.doubles_text}>
                                プッシュ 
                            </Text>
                        </View>

                         <View style={{flexDirection:"row"}}>
                            <Text style={styles.doubles_text}>
                                ヘアピン
                            </Text>
                            <Text style={styles.doubles_text}>
                               ドライブ
                            </Text>
                        </View>
                    </View>
                </View>

                 <View style={{flexDirection:"row"}}>
                    <Text style={styles.period_text}>
                    期間
                    </Text>
                    <View style={styles.period_frame}>
                        <Text style={styles.singles_text}>
                            Day
                         </Text>
                         <Text style={styles.doubles_text}>
                            Week
                         </Text>
                         <Text style={styles.doubles_text}>
                            Month
                         </Text>
                    </View>
                </View>

                 <View style={{flexDirection:"row"}}>
                    <Text style={styles.opponent_text}>
                    対戦相手
                    </Text>
                    <View style={styles.opponent_frame}/>
                    <View style={styles.opponent_frame}/>
                </View>

                 <View style={{flexDirection:"row"}}>
                    <Text style={styles.game_select_text}>
                    試合選択
                    </Text>
                    <View style={styles.game_select_frame}/>
                </View>

                <Image
                source={require("../../assets/img/analyze_button.png")}
                style={styles.analyze_button}
                />

                <Text style={styles.analyze_text}>
                    Analyze
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
        alignSelf: 'center',
        marginTop: -30,
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
        paddingLeft: 12,
        paddingBottom: 5,
        paddingRight: 12,
        marginLeft: 10,
        marginTop: 2,
        marginBottom: 4,
        
     },

      doubles_text: {
        color: '#ffffff',
        fontSize: 15,
        backgroundColor: 'transparent',
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        paddingTop: 5,
        paddingLeft: 20,
        paddingBottom: 5,
        paddingRight: 20,
        marginTop: 2,
        marginBottom: 8,
        marginLeft: 6,
     },




      shot_type_text: {
        color: '#ffffff',
        fontSize: 15,
        marginTop: 68,
        marginLeft: 40,
        backgroundColor: 'transparent',
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        
     },

    shot_type_frame: {
        backgroundColor: 'transparent',
        borderRightColor: '#0a2444',
        borderTopColor: '#0a2444',
        borderLeftColor: '#0a2444',
        borderBottomColor: '#0a2444',
        height: 108,
        width: 222,
        borderWidth: 1.5,
        marginLeft: 58,
        borderRadius: 3,
        marginTop: 25,

     },

    period_text: {
        color: '#ffffff',
        fontSize: 15,
        marginTop: 30,
        marginLeft: 40,
        backgroundColor: 'transparent',
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        
     },

    period_frame: {
        
        flexDirection: "row",
        backgroundColor: 'transparent',
        borderRightColor: '#0a2444',
        borderTopColor: '#0a2444',
        borderLeftColor: '#0a2444',
        borderBottomColor: '#0a2444',
        height: 34,
        width: 222,
        borderWidth: 1.5,
        marginLeft: 57,
        borderRadius: 3,
        marginTop: 25,

     },

    opponent_text: {
        color: '#ffffff',
        fontSize: 15,
        marginTop: 32,
        marginLeft: 40,
        backgroundColor: 'transparent',
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        marginRight: 22,
        
     },
     opponent_frame: {
        
        flexDirection: "row",
        backgroundColor: 'transparent',
        borderRightColor: '#0a2444',
        borderTopColor: '#0a2444',
        borderLeftColor: '#0a2444',
        borderBottomColor: '#0a2444',
        height: 34,
        width: 108,
        borderWidth: 1.5,
        marginLeft: 6,
        borderRadius: 3,
        marginTop: 25,

     },

    game_select_text: {
        color: '#ffffff',
        fontSize: 15,
        marginTop: 36,
        marginLeft: 40,
        backgroundColor: 'transparent',
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        
     },

    game_select_frame: {
        
        flexDirection: "row",
        backgroundColor: 'transparent',
        borderRightColor: '#0a2444',
        borderTopColor: '#0a2444',
        borderLeftColor: '#0a2444',
        borderBottomColor: '#0a2444',
        height: 34,
        width: 222,
        borderWidth: 1.5,
        marginLeft: 28,
        borderRadius: 3,
        marginTop: 25,

     },

     analyze_button: {

        marginTop: 524,
        marginLeft: 96,
        opacity: 0.4,
        position:'absolute',


     },

     analyze_text: {

        marginTop: 66,
        marginLeft: 154,
        fontSize: 20,
        backgroundColor: 'transparent',
        color: '#ffffff',


     }


});
