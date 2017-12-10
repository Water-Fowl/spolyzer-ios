import React from 'react';
import { Dimensions,StyleSheet,Image, Text, View, TouchableHighlight } from 'react-native';


export class FieldOutSide extends React.Component{
    
    constructor(props) {
        super(props);
    }      
    
    render(){
        const {actions, positions, this_position, setParams} = this.props; 
        return(
            <View style={ styles.container }>
                <TouchableHighlight onPress={() =>{
                    this.props.setModalVisible(true) 
                    this.props.setParams({ this_position: this.props.this_position, this_side: 1});
                }}> 
                    <View style={{
                        width:106, 
                        height:11,
                        marginTop:3,
                        marginBottom:3,
                        marginLeft:15,
                        marginRight:15,
                        backgroundColor:"rgba(250, 238, 0, 0.5)"}}/>
                </TouchableHighlight>    
                <TouchableHighlight onPress={() =>{
                    this.props.setModalVisible(true) 
                    this.props.setParams({ this_position: this.props.this_position, this_side: 0 });
                }}> 
                    <View style={{
                        width:106, 
                        height:11,
                        marginTop:3,
                        marginBottom:3,
                        marginLeft:15,
                        marginRight:15,
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
        flexDirection: "row",
        justifyContent: 'space-between', 
    }
})
