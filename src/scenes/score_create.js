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
import { postScoreGame } from '../actions/score'

const win = Dimensions.get('window');

class ScoreCreate extends React.Component {
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
            <View style={{alignItems:"center"}}>
            <LandScapeBackground/>
            <TopContentBar content_name="Score Sheet" />
                {/*書き直す*/}
                <ActionModal />
                <TouchableHighlight 
                    style={{ marginTop:10, marginBottom:10 }} 
                    onPress={() =>{
                        this.fetchScoreGame()
                }}>
                    <Text style={{color: 'white'}}>ScoreView</Text>
                </TouchableHighlight>
                <View style={{marginTop:10, alignItems: "center"}}>
                    <FieldOutSide
                        position = { 9 }
                    />
                    <View style={{ marginTop: 6, marginBottom: 6, padding:4, flexDirection: "row" }}>
                        <FieldOutLength
                            position = { 10 }
                            side = { 1 }
                        />
                        <View style = {{marginLeft: 16,marginRight: 17, flexDirection:"row"}}>
                            <FieldInLength
                                position = { 2 }
                                side = { 0 }
                            />
                            <FieldInSide
                                position = { 1 }
                                side = { 0 }
                            />
                            <FieldInLength
                                position = { 0 }
                                side = { 0 }
                            />
                        </View>
                        <View style={{marginLeft: 17, marginRight: 16, flexDirection:"row"}}>
                            <FieldInLength
                                position = { 0 }
                                side = { 1 }
                            />
                            <FieldInSide
                                position = { 1 }
                                side = { 1 }
                            />
                            <FieldInLength
                                position = { 2 }
                                side = { 1 }
                            />
                        </View>
                        <FieldOutLength
                            position = { 10 }
                            side = { 0 }
                        />
                    </View>
                    <FieldOutSide
                        position = { 12 }
                    />
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
