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
    InFieldLength,
    InFieldSide,
    InFieldCircle,
    LeftOutFieldLength,
    LeftOutFieldSide,
    RightOutFieldSide,
    RightOutFieldLength,
} from '../components';
import { postScoreGame } from '../actions/score'

const win = Dimensions.get('window');

class ScoreCreate extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidMount() {
        Orientation.lockToLandscape();
    }
    componentWillUnmount() {
        Orientation.lockToPortrait();
    }

    fetchScoreGame(){
        const { dispatch, players, actions, positions, time_to_drop_shuttle, score_users, conceded_users, sides } = this.props

        const score_game_request_body = {
            players: players,
            scores:{
                actions: actions,
                positions: positions,
                time_to_drop_shuttle: time_to_drop_shuttle,
                score_users: score_users,
                conceded_users: conceded_users,
                sides: sides
            }
        }
        const score_game_request_body_sample = {
            players:{
                left_user_id_1:2,
                right_user_id_1:1,
                left_user_id_2:2,
            },
            score_game:{
                game_time:"20171013T123030+0900",
                serve_user_id:3,
                match_point:7,
                deuce:true
            },
            scores:{
                action:[1,2,3,4,5,6,7,8,9,10,11,12],
                position:[0,4,2,5,6,7,5,6,6,4,3,4],
                time_to_drop_shuttle:[10,33,45,100,135,145,200,333,444,555,600,700],
                score_users:[3,19,3,3,3,19,19,19,3,19,3,3],
                conceded_users:[19,3,19,19,19,3,3,3,19,3,19,19],
                sides:[1,1,1,0,1,1,1,1,1,1,1,1]
            }
        }
        dispatch(postScoreGame(score_game_request_body_sample))
    }

    render(){

        return(
            <View style={styles.over_view}>
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
                          <View style={styles.score_return_button}><Text style={styles.white_text}>前ラリー</Text></View>
                          <View style={styles.frame_name}><Text style={styles.white_text}>ここにNameが表示される</Text></View>
                          <View style={styles.frame_score}><Text style={styles.score_text}>0</Text></View>
                          <Image
                            source={require('../../assets/img/score_create_triangle_left.png')}
                            style={styles.triangle}
                          />
                      </View>

                      <View style={styles.score_board_top_right}>
                          <Image
                            source={require('../../assets/img/score_create_triangle_right.png')}
                            style={styles.triangle}
                          />
                          <View style={styles.frame_score}><Text style={styles.score_text}>0</Text></View>
                          <View style={styles.frame_name}><Text style={styles.white_text}>ここにNameが表示される</Text></View>
                          <View style={styles.game_finish_button}><Text style={styles.white_text}>試合終了</Text></View>
                      </View>

                  </View>


                  <View style={styles.field_outer_view}>
                      <View style={styles.view_for_horizontal_yellow_bar_left}>
                        <LeftOutFieldSide/>
                        <LeftOutFieldSide/>
                      </View>

                        <View style={styles.field_outer_view_left_side}>

                            <View style={styles.view_for_vartical_yellow_bar_left}>
                              <LeftOutFieldLength/>
                              <LeftOutFieldLength/>
                            </View>

                            <View style={styles.view_for_vartical_blue_bar}>
                              <InFieldLength/>
                              <InFieldLength/>
                            </View>

                            <View style={styles.view_for_horizontal_blue_bar_and_circle}>
                              <InFieldSide/>
                              <InFieldCircle/>
                              <InFieldSide/>
                            </View>

                            <View style={styles.view_for_vartical_blue_bar_inner}>
                              <InFieldLength/>
                              <InFieldLength/>
                            </View>


                        </View>


                        <View style={styles.field_outer_view_right_side}>
                        <View style={styles.view_for_horizantal_yellow_bar_right}>
                          <RightOutFieldSide/>
                          <RightOutFieldSide/>
                        </View>
                          <View style={styles.reverse_view}>

                              <View style={styles.view_for_vartical_yellow_bar_right}>
                                <RightOutFieldLength/>
                                <RightOutFieldLength/>
                              </View>

                              <View style={styles.right_side_vartical_blue_bar}>
                                <InFieldLength/>
                                <InFieldLength/>
                              </View>

                              <View style={styles.right_side_horizontal_blue_bar_and_circle}>
                                <InFieldSide/>
                                <InFieldCircle/>
                                <InFieldSide/>
                              </View>

                              <View style={styles.right_side_vartical_blue_bar_inner}>
                                <InFieldLength/>
                                <InFieldLength/>
                              </View>

                              </View>

                        </View>
                  </View>
            </View>
        )
    }
}

function mapStateToProps(state, props){
    const { score } = state
    const {
        players: players,
        actions: actions,
        positions: positions,
        time_to_drop_shuttle: time_to_drop_shuttle,
        score_users: score_users,
        conceded_users: conceded_users,
        sides: sides
    } = score || {
    }
    return {
        players,
        actions,
        positions,
        time_to_drop_shuttle,
        score_users,
        conceded_users,
        sides,
    }
}

export default connect(mapStateToProps)(ScoreCreate)

const styles = StyleSheet.create({
    over_view:{
      alignItems:"center"
    },
    field_line:{
      position: 'absolute',
      height: win.height,
      resizeMode: 'contain'
    },
    field_outer_view:{
      flexDirection:"row",position:"absolute"
    },
    field_outer_view_left_side:{
      flex:1,
      height:win.height,
      flexDirection:"row",
    },
    field_outer_view_right_side:{
      flex:1,
    },
    white_text:{
      color:"white"
    },
    score_text:{
      color:"white",fontSize:30,
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
      paddingTop:10,
      paddingBottom:8,
    },
    score_board_top_right:{
      backgroundColor:"transparent",
      flexDirection:"row",
      flex:1,
      paddingTop:10,
      paddingBottom:8,
      justifyContent:"flex-end",
    },
    score_return_button:{
      borderRightColor: '#28a8de',
      borderTopColor: '#28a8de',
      borderLeftColor: '#28a8de',
      borderBottomColor: '#28a8de',
      height:  30,
      width: 40,
      borderWidth: 1.3,
      borderRadius: 5,
      marginRight:3,
      marginLeft:15,
      justifyContent:"center",
      alignItems: "center",
    },
    frame_name: {
      borderRightColor: '#28a8de',
      borderTopColor: '#28a8de',
      borderLeftColor: '#28a8de',
      borderBottomColor: '#28a8de',
      height:  30,
      width: 110,
      borderWidth: 1.3,
      borderRadius: 5,
      marginRight:3,
      marginLeft:3,
      justifyContent:"center",
      alignItems: "center",
    },
    frame_score:{
      borderRightColor: '#28a8de',
      borderTopColor: '#28a8de',
      borderLeftColor: '#28a8de',
      borderBottomColor: '#28a8de',
      height:  30,
      width: 40,
      borderWidth: 1.3,
      borderRadius: 5,
      marginRight:3,
      marginLeft:3,
      justifyContent:"center",
      alignItems: "center",
    },
    game_finish_button:{
      borderRightColor: '#28a8de',
      borderTopColor: '#28a8de',
      borderLeftColor: '#28a8de',
      borderBottomColor: '#28a8de',
      height:  30,
      width: 40,
      borderWidth: 1.3,
      borderRadius: 5,
      marginRight:15,
      marginLeft:3,
      justifyContent:"center",
      alignItems: "center",
    },
    view_for_horizontal_yellow_bar_left:{
      position:"absolute",
      height:win.height,
      width:win.width*0.5,
      justifyContent:"center",
      alignItems:"center"
    },
    view_for_vartical_yellow_bar_left:{
      flex:1,
      height:win.height,
      justifyContent:"center",
      marginLeft:win.width*0.10,
    },
    view_for_vartical_yellow_bar_right:{
      flex:1,
      height:win.height,
      justifyContent:"center",
      marginRight:win.width*0.10,
    },
    view_for_vartical_blue_bar:{
      flex:1,
      height:win.height,
      justifyContent:"center",
      alignItems:"center",
      marginLeft:-win.width*0.025,
    },
    view_for_horizantal_yellow_bar_right:{
      position:"absolute",
      height:win.height,
      width:win.width*0.5,
      alignItems:"center",
      justifyContent:"center"
    },
    view_for_horizontal_blue_bar_and_circle:{
      flex:2,
      height:win.height,
      justifyContent:"center",
      alignItems:"center",
      marginLeft:-win.width*0.035,
      marginRight:-win.width*0.035
    },
    view_for_vartical_blue_bar_inner:{
      flex:1,
      height:win.height,
      justifyContent:"center",
      alignItems:"center",
      marginRight:win.width*0.030,
    },
    reverse_view:{
      flex:1,
      height:win.height,
      flexDirection:"row-reverse",
    },
    right_side_vartical_blue_bar:{
      flex:1,
      height:win.height,
      justifyContent:"center",
      alignItems:"center",
      marginRight:-win.width*0.025,
    },
    right_side_horizontal_blue_bar_and_circle:{
      flex:2,
      height:win.height,
      justifyContent:"center",
      alignItems:"center",
      marginLeft:-win.width*0.035,
      marginRight:-win.width*0.035
    },
   right_side_vartical_blue_bar_inner:{
     flex:1,
     height:win.height,
     justifyContent:"center",
     alignItems:"center",
     marginLeft:win.width*0.030,
   },
   right_view_for_horizontal_yellow_bar:{
      flexDirection:"row",
      flex:1,
      justifyContent:"flex-end",
      marginTop:30,
      marginRight:108,
    },
   left_view_for_horizontal_yellow_bar:{
      flexDirection:"row",
      flex:1,
      marginTop:30,
      marginLeft:108,
      },
   triangle:{
      marginTop:5,
      marginRight:3,
      marginLeft:3,
      width:27,
      height:24,
   },

    })
