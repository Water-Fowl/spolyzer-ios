import React from 'react';
import {
    Dimensions,
    StyleSheet,
    Image,
    Text,
    View,
    TouchableHighlight,
    TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const win = Dimensions.get('window');

export class Background extends React.Component {
    render(){
        return(
            <Image
                source={require('../../assets/img/background.png')}
                style={GeneralStyles.background}
            />
        );
    }
}

export class NavBar extends React.Component {
    render(){
        return(
            <Image
                source={require("../../assets/img/navibar.png")}
                style={GeneralStyles.navibar}
            />
               
        );
    }
}


export class ActionButton extends React.Component {


    render(){
        return(
            <TouchableOpacity onPress={this.props.action} style={this.props.style}>                
                    <Image
                        source={require("../../assets/img/action_button.png")}
                        style={GeneralStyles.action_button}
                    />
                    <Text style={GeneralStyles.action_text}>
                        {this.props.text}
                    </Text>
                </TouchableOpacity>
        );
    }
}


export class TopBar extends React.Component{
    render(){
        return(
            <View>
            <Text style={{backgroundColor:"rgb(30, 110, 155)",color:"white", fontSize:28, fontWeight:"bold", padding:10,paddingTop:12, textAlign:"center", height:60,  width: win.width}}>Spolyzer</Text>
            </View>
        )
    }
}

export class LandScapeBackground extends React.Component {
    render(){
        return(
            <Image
                source={require('../../assets/img/landscape_background.png')}
                style={GeneralStyles.background}
            />
        )
    }
}
export class TopContentBar extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
        <View>
            <Text style={{
                fontSize:23,
                backgroundColor: 'rgb(20, 35, 70)',
                padding:5,
                paddingLeft:15,
                paddingRight:15,
                textAlign:"center",
                color:"white"
            }}>
                { this.props.content_name }
            </Text>
        </View>
)
    }
}

export class NavigateButton extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <Text style={GeneralStyles.button_text}>{ this.props.content_name }</Text>
        )
    }
}

const GeneralStyles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        position:'absolute',
        alignSelf: 'stretch',
        width:win.width,
    },
    navibar: {
        justifyContent: 'center',
        marginLeft: -20,
        marginTop: -10,
    },
    action_button: {
        opacity: 0.4,
        marginTop: 0,
    },
    action_text: {
        position: "absolute",
        top: 14, 
        fontSize: 20,
        backgroundColor: 'transparent',
        color: '#ffffff',
        alignSelf: 'center',
    },
    landscape_background: {
        zIndex:0,
        flex: 1,
        top:0,
        backgroundColor:"rgb(30, 55, 80)",
        position:"absolute",
        alignSelf: 'stretch',
        width: win.height,
        height: win.width,
    },
    bar:{
        zIndex:2,
        margin:0,
        padding:0,
        backgroundColor: 'rgba(46, 167, 224, 1)',
        width: win.width,
    },
    trapezoid: {
        width: 120,
        height: 0,
        borderTopWidth: 40,
        borderTopColor: 'rgb(30, 110, 155)',
        borderLeftWidth: 20,
        borderLeftColor: 'transparent',
        borderRightWidth: 20,
        borderRightColor: 'transparent',
        borderStyle: 'solid'
    },
    bar_text:{
        fontWeight: "bold",
        fontSize: 25,
        color: "white",
        paddingTop: 13,
        paddingBottom: 13,
        textAlign: "center",
    },
    top_bar:{
        zIndex:3,
        alignItems: "center",
        width: win.width,
    },
    top_content_bar:{
        paddingTop: 10,
        alignItems: "center",
    },
    top_content_bar_text:{
        fontWeight: "bold",
        fontSize: 22,
        color: "white",
        backgroundColor: 'rgba(0,0,0,0)',
    },
    button_text: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 23,
        color: "white",
        backgroundColor: 'rgb(30, 110, 155)',
    },
    marginTop10:{
        marginTop: 10
    },
    marginTop30: {
        marginTop: 30
    },
    paddingTop30:{
        paddingTop:30,
    },
    paddingTop50:{
        paddingTop:50,
    },
    paddingTop10:{
        paddingTop:10,
    },
    paddingTop105:{
        paddingTop:105,
    },

})
