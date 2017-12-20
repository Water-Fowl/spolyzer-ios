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

const win = Dimensions.get('window');

export default class ScoreCreate extends React.Component {
    constructor(props){
        super(props);
    } 
    componentWillMount() {
        Orientation.lockToLandscape();
    }

    render(){

        return(
            <View style={{alignItems:"center"}}>
            <LandScapeBackground/>
            <TopContentBar content_name="Score Sheet" />
                {/*書き直す*/}
                <ActionModal />
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
                <TouchableHighlight style={{ marginTop:10, marginBottom:10 }} onPress={Actions.score_view}>
                    <Text>ScoreView</Text>
                </TouchableHighlight>
            </View>
        )
    }
}   

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
