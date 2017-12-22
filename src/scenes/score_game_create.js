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
            <Image
                  style={{width: win.width, height: win.height, zIndex: 0, position: 'absolute'}}
                  source={require('../../assets/aaaa-16.png')} />
                <Background/>
                <TopContentBar content_name={"Game Setting"} />
                <Text onPress={Actions.score_create}>ScoreCreate</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    align_items_center:{
        alignItems: "center",
    },
    score_game_create: {
        backgroundColor:"rgb(20, 35, 70)",
        marginTop: 50,
    },
    score_game_create_main: {
        margin:10
    },
    score_game_create_column: {
        zIndex: 5,
        textAlign: "center",
        fontWeight: "bold",
        margin:10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    score_game_create_column_contents:{
        flex:3,
        padding:5,
        marginLeft:15,
        flexDirection: 'row',
    },
    score_game_create_vs:{
        fontWeight: 'bold',
        color:"white",
        paddingTop: 10,
        backgroundColor: 'rgba(0,0,0,0)',
    },
    score_game_create_text:{
        fontWeight: 'bold',
        color:"white",
        paddingTop: 12,
        paddingLeft: 12,
        paddingRight:12,
        backgroundColor: 'rgba(0,0,0,0)',
    },
    score_game_create_competitor_text:{
        color:"white",
        width: 120,
        paddingTop: 5,
        paddingBottom: 5,
        textAlign: "center",
        backgroundColor: 'rgb(30, 110, 155)',
    },
    score_game_create_columns_set: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    score_game_create_columns_sets: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    score_game_create_column_vs: {
        flex: 0.2,
        color:"white",
        backgroundColor: 'rgba(0,0,0,0)',
    },
    score_game_create_deuce_text: {
        textAlign: "center",
        marginTop: 10,
        color:"white",
        backgroundColor: 'rgba(0,0,0,0)',
    },
    column_bar: {
        margin:10,
        opacity:0.7,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    column_bar_num_img: {
        marginRight:3,
        marginLeft:3,
    },
    column_bar_text:{
        flex:1,
        lineHeight:20,
        color:"white",
        alignItems: 'center',
        paddingTop: 12,
        paddingLeft: 12,
        backgroundColor: 'rgba(0,0,0,0)',
    },
})
