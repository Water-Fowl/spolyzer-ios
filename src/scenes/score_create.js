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
                  style={{position:'absolute',
               }}
               />
                <View style={{
                  flexDirection:"row",
                  flex:1,
                  position:"absolute",
                }}>
                      <View style={{
                        backgroundColor:"transparent",
                        flexDirection:"row",
                        flex:1,
                        paddingTop:18,
                        paddingBottom:8,
                      }}>
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
                        style={styles.triangle_left}
                      />
                      </View>

                      <View style={{
                        backgroundColor:"pink",
                        flex:1,
                        height:10,
                      }}>
                      <Text>右上のview</Text>
                      </View>
                  </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({

    field_line:{
      position: 'absolute',
      height: 360,
      resizeMode: 'contain'
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
        justifyContent:"center",
        alignItems: "center",
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
         marginRight:5,
         justifyContent:"center",
         alignItems: "center",
      },
      triangle_left:{
        marginTop:10,
      },
    align_items_center:{
        alignItems: "center",
    },
    score_create_field: {
        zIndex:1
    },
    score_game_create_score_text:{
        color:"white",
        paddingTop: 5,
        paddingBottom: 5,
        marginLeft:5,
        marginRight:5,
        width: 50,
        textAlign:"center",
        backgroundColor: 'rgb(30, 110, 155)',
    },
    score_create_text: {
        padding: 5,
        margin: 5,
        width: 200,
        textAlign: "center",
        backgroundColor: "rgb(217, 55, 142)",
        fontWeight: 'bold',
        color: "white",
    },
    score_create_outcort_side: {
        zIndex:0,
        marginLeft:20,
        marginRight:20,
        marginBottom:0,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    score_create_incort_side: {
        zIndex:0,
        marginLeft:10,
        marginRight:10,
        marginBottom:0,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    score_create_outcort_length: {
    },
    score_create_incort_img: {
        zIndex:0,
        marginLeft: 15,
        marginRight: 15,
    },
    score_create_outcort_img: {
        marginLeft: 5,
        marginRight: 5,
    },
})
