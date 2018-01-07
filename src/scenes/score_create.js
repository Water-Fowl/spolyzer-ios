import React from "react";
import {
    Text,
    Image,
    View,
    Dimensions,
    TouchableHighlight,
    BackgroundImage,
    StyleSheet,
    TriangleCorner,
} from "react-native";
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Orientation from 'react-native-orientation';
import {
    TopBar,
    LandScapeBackground,
    TopContentBar,
    NavigateButton,
    ActionModal,
    FieldInLength,
    FieldInSide,
    FieldOutLength,
    FieldOutSide,
} from '../components';

const win = Dimensions.get('window');

export default class ScoreCreate extends React.Component {
    constructor(props){
        super(props);
    }
    componentWillMount() {
        Orientation.lockToLandscape();
    }
    componentWillUnmount() {
        Orientation.lockToPortrait();
    }

    fetchScoreGame(){
        const { dispatch, players, score_game, actions, positions, time_to_drop_shuttle, score_users, conceded_users, sides } = this.props

        const score_game_request_body = {
            players: players,
            score_game: score_game,
            scores:{
                actions: actions,
                positions: positions,
                time_to_drop_shuttle: time_to_drop_shuttle,
                score_users: score_users,
                conceded_users: conceded_users,
                sides: sides
            }
        }
        dispatch(postScoreGame(score_game_request_body))
    }

    render(){

        return(
            <View style={{
              alignItems:"center"}}>
              <LandScapeBackground/>
              <Image
                  source={ require('../../assets/img/field-line.png')}
                  style={ styles.field_line}
              />

              <TopContentBar
                  content_name="スコアシート"
               />
                <View style={style=styles.score_board_top}>
                      <View style={styles.score_board_top_left}>
                          {/*ここのマークは変更予定ゆえ空白。スコアの戻しのボタンとなる*/}
                          <Image
                            source={ require('../../assets/img/score_create_score_return_button.png')}
                            style={styles.score_return_button}
                            />
                          <View style={styles.frame_name}><Text style={{color:"white"}}>Nameが表示される</Text></View>
                          <View style={styles.frame_score}><Text style={{color:"white",fontSize:40,}}>0</Text></View>
                          {/*この三角形の中は何もかかなくなった*/}
                          <Image
                            source={require('../../assets/img/score_create_triangle_left.png')}
                            style={styles.triangle}
                          />
                      </View>

                      <View style={styles.score_board_top_right}>
                          {/*この三角形の中は何もかかなくなった*/}
                          <Image
                            source={require('../../assets/img/score_create_triangle_right.png')}
                            style={styles.triangle}
                          />
                          <View style={styles.frame_score}><Text style={{color:"white",fontSize:40,}}>0</Text></View>
                          <View style={styles.frame_name}><Text style={{color:"white"}}>Nameが表示される</Text></View>
                          <Image
                            source={ require('../../assets/img/score_create_reset_button.png')}
                            style={styles.score_reset_button}
                            />
                      </View>

                  </View>


                  <View style={{flexDirection:"row",position:"absolute"}}>
                      <View style={{position:"absolute",height:win.height,width:win.width*0.5,justifyContent:"center",alignItems:"center"}}>
                        <View style={styles.horizontal_yellow_bar}></View>
                        <View style={styles.horizontal_yellow_bar}></View>
                      </View>

                        <View style={{flex:1, height:win.height,flexDirection:"row",}}>

                            <View style={{flex:1, height:win.height,justifyContent:"center",marginLeft:win.width*0.10,}}>
                              <View style={styles.vartical_yellow_bar}></View>
                              <View style={styles.vartical_yellow_bar}></View>
                            </View>

                            <View style={{flex:1, height:win.height,justifyContent:"center",alignItems:"center",marginLeft:-win.width*0.025,}}>
                              <View style={styles.vartical_blue_bar}></View>
                              <View style={styles.vartical_blue_bar}></View>
                            </View>

                            <View style={{flex:2, height:win.height,justifyContent:"center",alignItems:"center",marginLeft:-win.width*0.035,marginRight:-win.width*0.035}}>
                              <View style={styles.horizontal_blue_bar}></View>
                              <View style={styles.blue_circle}></View>
                              <View style={styles.horizontal_blue_bar}></View>
                            </View>

                            <View style={{flex:1, height:win.height,justifyContent:"center",alignItems:"center",marginRight:win.width*0.030,}}>
                              <View style={styles.vartical_blue_bar}></View>
                              <View style={styles.vartical_blue_bar}></View>
                            </View>


                        </View>


                        <View style={{flex:1,}}>


                        </View>
                  </View>


            </View>
        )
    }
}

const styles = StyleSheet.create({

    field_line:{
      position: 'absolute',
      height: win.height,
      resizeMode: 'contain'
    },
    score_board_top:{
      flexDirection:"row",
      flex:1,
      position:"absolute",
    },
    score_board_top_left:{
      backgroundColor:"transparent",
      flexDirection:"row",
      flex:1,
      paddingTop:18,
      paddingBottom:8,
    },
    score_return_button:{
      marginLeft:25,
      marginRight:5,
    },
    frame_name: {
        borderRightColor: '#28a8de',
        borderTopColor: '#28a8de',
        borderLeftColor: '#28a8de',
        borderBottomColor: '#28a8de',
        height:  40,
        width: 130,
        borderWidth: 1.3,
        borderRadius: 5,
        marginRight:3,
        marginLeft:3,
        justifyContent:"center",
        alignItems: "center",
     },
     horizontal_yellow_bar:{
         borderColor: '#BDB76B',
         backgroundColor:"#BDB76B",
         height: win.width*0.020,
         width: win.width*0.32,
         borderWidth: 1.3,
         borderRadius: 3,
         marginTop:win.height*0.33,
         marginBottom:win.height*0.33,
         marginLeft:win.width*0.12,
      },
      right_view_for_horizontal_yellow_bar:{
        flexDirection:"row",
        flex:1,
        justifyContent:"flex-end",
        marginTop:30,
        marginRight:108,},
      left_view_for_horizontal_yellow_bar:{
        flexDirection:"row",
        flex:1,
        marginTop:30,
        marginLeft:108,
      },
      triangle:{
        marginTop:10,
        marginRight:3,
        marginLeft:3,
      },
      score_board_top_right:{
        backgroundColor:"transparent",
        flexDirection:"row",
        flex:1,
        paddingTop:18,
        paddingBottom:8,
        justifyContent:"flex-end",
      },
      score_reset_button:{
        marginLeft:5,
        marginRight:25,
      },
      frame_score:{
          borderRightColor: '#28a8de',
          borderTopColor: '#28a8de',
          borderLeftColor: '#28a8de',
          borderBottomColor: '#28a8de',
          height:  40,
          width: 50,
          borderWidth: 1.3,
          borderRadius: 5,
          marginRight:3,
          marginLeft:3,
          justifyContent:"center",
          alignItems: "center",
       },
       vartical_yellow_bar:{
           borderColor: '#BDB76B',
           backgroundColor:"#BDB76B",
           height: win.height*0.24,
           width: win.width*0.020,
           borderWidth: 1.3,
           borderRadius: 3,
           marginBottom:win.height*0.03,
           marginTop:win.height*0.03,
        },
        vartical_blue_bar:{
            borderColor: '#2EA7E0',
            backgroundColor:"#2EA7E0",
            height: win.height*0.24,
            width: win.width*0.040,
            borderWidth: 1.3,
            borderRadius: 3,
            opacity:0.3,
            marginBottom:win.height*0.03,
            marginTop:win.height*0.03,
         },
         horizontal_blue_bar:{
             borderColor: '#2EA7E0',
             backgroundColor:"#2EA7E0",
             height: win.width*0.040,
             width: win.height*0.22,
             borderWidth: 1.3,
             borderRadius: 3,
             opacity:0.3,
             alignSelf:"center",
          },
          blue_circle:{
              borderColor: '#2EA7E0',
              backgroundColor:"#2EA7E0",
              height: win.height*0.17,
              width: win.height*0.17,
              borderWidth: 1,
              borderRadius: 100,
              opacity:0.3,
              marginTop:win.height*0.11,
              marginBottom:win.height*0.11,
              alignSelf:"center",
          },
    })
