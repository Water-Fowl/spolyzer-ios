import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';


export default class TabBar extends React.Component{
  render(){
    return(
      <View style={styles.tab_bar} />
    )
  }
}

const styles = StyleSheet.create({
  tab_bar:{
    backgroundColor: 'blue',
    opacity:0.1,
    height: 100,
  }
})
