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

const win = Dimensions.get('window');

class InFieldLength extends React.Component{

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
            <View style={styles.vartical_blue_bar}/>
        );
    }
}

export default connect()(InFieldLength)

const styles = StyleSheet.create({
    container: {
      justifyContent: 'space-between',
    },
    vartical_blue_bar:{
      borderColor: '#2EA7E0',
      backgroundColor:"#2EA7E0",
      flex: 0.3,
      width: 20,
      borderWidth: 1.3,
      borderRadius: 3,
      opacity:0.3,
    },
})
