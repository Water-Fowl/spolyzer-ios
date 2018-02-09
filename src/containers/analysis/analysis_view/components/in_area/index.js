import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

export default class InArea extends React.Component{
  render(){
    return(
      <View>
        <View style={styles.out_field_area_container}>
          <View style={styles.out_field_area}/>
          <View style={styles.out_field_area}/>
        </View>
        <View style={styles.in_field_area_container}>
          <View style={styles.in_field_area}/>
          <View style={styles.in_field_area}/>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  out_field_area_container:{
    width: 330,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent:'space-between',
  },
  out_field_area:{
    alignSelf: 'center',
    flex: 0.45,
    backgroundColor:'#FAEE00',
    opacity:0.3,
    height:170,
  },
  in_field_area_container:{
    width: 330,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent:'space-around',
    paddingLeft:10,
    paddingRight:10,
  },
  in_field_area:{
    flex: 0.4,
    alignSelf: 'center',
    backgroundColor:'black',
    height:138,
    marginTop:16,
    marginBottom:16,
  },
})

