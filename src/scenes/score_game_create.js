import React from 'react';
import {
    Dimensions,
    StyleSheet,
    Image,
    Text,
    TouchableHighlight,
    View }
from 'react-native';
import{
    Background,
    TopBar,
    TopContentBar,
    NavigateButton,
}
from "../components";
import Orientation from 'react-native-orientation';
import { Actions } from 'react-native-router-flux';


const win = Dimensions.get('window');


export default class ScoreGameCreate extends React.Component {

    constructor(props){
        super(props);
    }
    componentWillMount() {
        Orientation.lockToPortrait();
    }

    render(){
        return (
            <View style={ styles.align_items_center }>
                <Background/>
                <TopContentBar content_name={"試合設定"} />
                <View style={styles.game_setting1} >
                  <View style={styles.game_setting2}>
                     <Text style={ styles.score_game_create_opponents}>対戦者</Text>
                     <View style={ styles.game_setting3}>
                        <View style={styles.game_setting4}>
                          <Image
                            source={require('../../assets/img/score_creat_person.png')}
                            style={ styles.score_game_create_competitor_person }
                           />

                          <Image
                            source={require('../../assets/img/simple_frame.png')}
                            style={ styles.score_game_create_competitor_frame }
                           ></Image>
                          <Image
                            source={require('../../assets/img/simple_circle.png')}
                            style={ styles.score_game_create_competitor_person }
                           ></Image>
                          <Image
                            source={require('../../assets/img/simple_frame.png')}
                            style={ styles.score_game_create_competitor_frame }
                           ></Image>
                        </View>

                        <View style={styles.game_setting5}>
                        </View>

                        <View style={styles.game_setting6} >
                          <Image
                            source={require('../../assets/img/score_creat_person.png')}
                            style={ styles.score_game_create_competitor_person }
                           />
                          <Image
                            source={require('../../assets/img/simple_frame.png')}
                            style={ styles.score_game_create_competitor_frame }
                           ></Image>
                          <Image
                            source={require('../../assets/img/simple_circle.png')}
                            style={ styles.score_game_create_competitor_person }
                           ></Image>
                         <Image
                            source={require('../../assets/img/simple_frame.png')}
                            style={ styles.score_game_create_competitor_frame }
                           ></Image>
                        </View>
                     </View>
                  </View>
                </View>
                <View
                  style={styles.game_setting7}  >
                  <Image
                  source={require('../../assets/img/frame_next_button.png')}
                  style={styles.game_setting8}
                  >
                  </Image>

                  <View>
                    <Text
                    onPress={Actions.score_create}
                    style={ styles.column_bar_text }
                    >Play</Text>
                  </View>

                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    align_items_center:{
        alignItems: "center",
    },
    game_setting1:{
      padding:5,
      backgroundColor: 'rgba(0, 0, 0, 0)',
      borderWidth: 2.5,
      marginTop:20,
      borderColor: "rgb(20, 35, 70)",
    },
    game_setting2:{
      width:320,
      height:270,
      backgroundColor:"rgb(20, 35, 70)",
      justifyContent: 'center',
    },
    game_setting3:{
      flexDirection: 'row',
      justifyContent: 'center',
      width:310,
      height:240,
      margin:5,
    },
    game_setting4:{
      flex:2,
      width: 70,
      height: 220,
      justifyContent: 'center',
    },
    game_setting5:{
      flex:1,
      width: 30,
      height: 220,
    },
    game_setting6:{
      flex: 2,
      width: 70,
      height: 220,
      justifyContent: 'center',
      textAlign:'center',
      alignItems: 'center',
    },
    game_setting7:{
      width:300,
      height:220,
      alignItems: 'center',
      justifyContent: 'center',
    },
    game_setting8:{
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign:"center",
  },
    game_setting9:{
      fontSize:10,
      color:"white",

      marginLeft:40,
      position:"absolute",


    },
    column_bar_text:{
        textAlign:"center",
        fontSize:25,
        color:"white",
        fontWeight:'bold',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    score_game_create_vs:{
        fontWeight: 'bold',
        color:"skyblue",
        paddingTop: 20,
        paddingRight:5,
        paddingLeft:5,
        fontSize:50,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',

    },
    score_game_create_opponents: {
        padding:0,
        marginTop:20,
        marginLeft:20,
        marginRight:240,
        marginBottom:5,
        fontSize:20,
        fontWeight:'bold',
        color:"white"
    },
    score_game_create_competitor_person:{
        marginRight:12,
        marginLeft:19,
        marginBottom:3,
        textAlign: "center",
    },
    score_game_create_competitor_frame:{
        marginTop:3,
        marginRight:12,
        marginLeft:14,
        marginBottom:8,
        textAlign: "center",
    },
})
