import React from 'react';
import { Dimensions,StyleSheet,Image, Text, View, TouchableHighlight } from 'react-native';

const win = Dimensions.get('window');

export class OutFieldSide extends React.Component{

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
    borderWidth: 1.3,
    borderRadius: 3,
    width: 90,
    height:20,
    alignSelf: 'center',
 },
})
