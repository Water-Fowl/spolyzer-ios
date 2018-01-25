import React from 'react';
import { Dimensions,StyleSheet,Image, Text, View, TouchableHighlight } from 'react-native';

const win = Dimensions.get('window');

export class InFieldCircle extends React.Component{

    constructor(props) {
        super(props);
    }

    render(){
        const {actions, positions, this_position, setParams, side} = this.props;
        return(
            <View style={styles.blue_circle}></View>

        );
    }
}

const styles = StyleSheet.create({
  container: {
      justifyContent: 'space-between',
    },
    blue_circle:{
      borderColor: '#2EA7E0',
      backgroundColor:"#2EA7E0",
      height: 70,
      width: 70,
      borderWidth: 1,
      borderRadius: 100,
      opacity:0.3,
      alignSelf:"center",
    },
})
