import React from 'react';
import { Dimensions,StyleSheet,Image, Text, View, TouchableHighlight } from 'react-native';

const win = Dimensions.get('window');

export class InFieldSide extends React.Component{

    constructor(props) {
        super(props);
    }

    render(){
        const {actions, positions, this_position, setParams, side} = this.props;
        return(
            <View style={styles.horizontal_blue_bar}></View>

        );
    }
}

const styles = StyleSheet.create({
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
})
