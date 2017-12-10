import React from 'react';
import { 
    Dimensions,
    StyleSheet,
    Image, 
    Text, 
    View, 
    TouchableHighlight 
} from 'react-native';

import { connect } from 'react-redux';
import { setModal } from '../actions/score';

class FieldInLength extends React.Component{
    
    constructor(props) {
        super(props);
        this.setScoreData.bind(this);
    }

    setScoreData(position, side){
        const { dispatch } = this.props
        dispatch(setModal(position, side))
    }

    render(){
        const { position, side } = this.props;
        return(

            <View style={ styles.container}>
            
                <TouchableHighlight onPress={() =>{
                    this.setScoreData(position, side)
                }}> 
                    <View style={{width:19, height:50, backgroundColor:"rgba(46, 167, 224, 0.5)"}}/>
                </TouchableHighlight>
                <TouchableHighlight onPress={() =>{
                    this.setScoreData(position, side)
                }}> 
                    <View style={{width:19, height:50, backgroundColor:"rgba(46, 167, 224, 0.5)"}}/>
                </TouchableHighlight>
            </View>
        );
    }
}

export default connect()(FieldInLength)

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between', 
    },
})
