import React from 'react';
import { Dimensions,StyleSheet,Image, Text, View, TouchableHighlight } from 'react-native';

const win = Dimensions.get('window');

export class LeftOutFieldLength extends React.Component{

    constructor(props) {
        super(props);
    }

    render(){
        const {actions, positions, this_position, setParams, side} = this.props;
        return(
            <View style={styles.vartical_yellow_bar_left}></View>
        );
    }
}

const styles = StyleSheet.create({
  vartical_yellow_bar_left:{
     borderColor: '#A29A67',
     backgroundColor:"#A29A67",
     height: win.height*0.24,
     width: win.width*0.020,
     borderWidth: 1.3,
     borderRadius: 3,
     marginBottom:win.height*0.03,
     marginTop:win.height*0.03,
   },
})
