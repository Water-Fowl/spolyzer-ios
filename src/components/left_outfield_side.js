import React from 'react';
import { Dimensions,StyleSheet,Image, Text, View, TouchableHighlight } from 'react-native';

const win = Dimensions.get('window');

export class LeftOutFieldSide extends React.Component{

    constructor(props) {
        super(props);
    }

    render(){
        const {actions, positions, this_position, setParams, side} = this.props;
        return(
            <View style={styles.horizontal_yellow_bar_left}></View>
        );
    }
}

const styles = StyleSheet.create({
  horizontal_yellow_bar_left:{
    borderColor: '#A29A67',
    backgroundColor:"#A29A67",
    height: win.width*0.020,
    width: win.width*0.32,
    borderWidth: 1.3,
    borderRadius: 3,
    marginTop:win.height*0.33,
    marginBottom:win.height*0.33,
    marginLeft:win.width*0.12,
 },
})
