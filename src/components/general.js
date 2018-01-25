import React from 'react';
import {
    Dimensions,
    StyleSheet,
    Image,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

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

export class NavigateButton extends React.Component {

    render(){
        return(
            <TouchableOpacity onPress={this.props.action} style={this.props.style}>                
                    <Image
                        source={require("../../assets/img/navigate_button.png")}
                        style={GeneralStyles.navigate_button}
                    />
                    <Text style={GeneralStyles.navigate_text}>
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
            <Text style={{
              backgroundColor:"rgb(30, 110, 155)",
                color:"white",
                fontSize:28,
                fontWeight:"bold",
                padding:10,
                paddingTop:12, 
                textAlign:"center", 
                height:60,  
                width: win.width}}>Spolyzer</Text>
            </View>
        )
    }
}

export class LandScapeBackground extends React.Component {
    render(){
        return(
            <Image
                source={require('../../assets/img/landscape_background.png')}
                style={GeneralStyles.landscape_background}
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
          <View style={{
            flex:1,
            alignItems: 'center'
          }}>
            <Text style={{
                fontSize:23,
                backgroundColor: 'rgb(20, 35, 70)',
                padding:5,
                paddingLeft:15,
                paddingRight:15,
                position:'absolute',
                textAlign:"center",
                color:"white"
            }}>
                { this.props.content_name }
            </Text>
          </View>
)
    }
}

const GeneralStyles = StyleSheet.create({
    background: {
        position:'absolute',
        width: '100%',
        height: '100%',
    },
    navibar: {
        justifyContent: 'center',
        width: '100%',
        marginTop: -10,
    },
    navigate_button: {
        opacity: 0.4,
        marginTop: 0,
    },
    navigate_text: {
        position: "absolute",
        top: 14, 
        fontSize: 20,
        backgroundColor: 'transparent',
        color: '#ffffff',
        alignSelf: 'center',
    },
    landscape_background: {
        zIndex:0,
        resizeMode: 'stretch',
        width: '100%',
        height: '100%',
        backgroundColor:"rgb(30, 55, 80)",
        position:"absolute",
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
