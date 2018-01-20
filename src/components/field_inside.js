import React from 'react';
import { Dimensions,StyleSheet,Image, Text, View, TouchableHighlight } from 'react-native';


export class FieldInSide extends React.Component{

    constructor(props) {
        super(props);
    }

    render(){
        const {actions, positions, this_position, setParams, side} = this.props;
        return(
            <View style={ styles.container }>
                <TouchableHighlight onPress={() =>{
                    this.props.setModalVisible(true)
                    this.props.setParams({ this_position: this.props.this_position, this_side: side });
                }}>
                    <View style={{width:40, height:19, backgroundColor:"rgba(46, 167, 224, 0.5)"}}/>
                </TouchableHighlight>
                <TouchableHighlight onPress={() =>{
                    this.props.setModalVisible(true)
                    this.props.setParams({ this_position: this.props.this_position + 3, this_side: side });
                }}>
                    <View style={{width:28, height:28, borderRadius: 100/2, backgroundColor:"rgba(46, 167, 224, 0.5)"}}/>
                </TouchableHighlight>
                <TouchableHighlight onPress={() =>{
                    this.props.setModalVisible(true)
                    this.props.setParams({ this_position: this.props.this_position + 6, this_side: side});
                }}>
                    <View style={{width:40, height:19, backgroundColor:"rgba(46, 167, 224, 0.5)"}}/>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        zIndex:0,
        marginLeft:17,
        marginRight:17,
        marginBottom:0,
        justifyContent: 'space-between',
    },
})
