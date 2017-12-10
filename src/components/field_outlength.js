import React from 'react';
import { Dimensions,StyleSheet,Image, Text, View, TouchableHighlight } from 'react-native';


export class FieldOutLength extends React.Component{
    
    constructor(props) {
        super(props);
    }      
    
    render(){
        const {actions, positions, this_position, setParams, side} = this.props; 
        return(
            <View style={ styles.container }>
                <TouchableHighlight onPress={() =>{
                    this.props.setModalVisible(true) 
                    this.props.setParams({ this_position: this.props.this_position, this_side: side});
                }}> 
                    <View style={{
                        width:11, 
                        height:55,
                        marginTop:2,
                        marginBottom:2,
                        backgroundColor:"rgba(250, 238, 0, 0.5)"}}/>
                </TouchableHighlight>    
                <TouchableHighlight onPress={() =>{
                    this.props.setModalVisible(true) 
                    this.props.setParams({ this_position: this.props.this_position + 1, this_side: side });
                }}> 
                    <View style={{
                        width: 11, 
                        height:55,
                        marginTop:2,
                        marginBottom:2,
                        backgroundColor:"rgba(250, 238, 0, 0.5)"}}/>
                </TouchableHighlight>    
            </View>        
        );
    }
}

const styles = StyleSheet.create({
    container: {
        zIndex:0,
        marginBottom:0,
        justifyContent: 'space-between', 
    },
})
