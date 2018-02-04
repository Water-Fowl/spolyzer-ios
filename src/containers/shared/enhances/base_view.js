/**
 * @providesModule enhances 
 */
import React from "react";
import {
  View,
  StyleSheet,
} from 'react-native';
import {
  Background,
  NavBar,
} from 'components';
import Orientation from 'react-native-orientation';

export function baseHigherOrderComponentEnhancer(ComponentClass){
  return class BaseHightOrderComponent extends React.Component{
    constructor(props){
      super(props)
    }
    componentWillMount() {
      Orientation.lockToPortrait();
    }
    render(){
      return(
        <View style={styles.container}>
          <Background/>
          <NavBar/>
          <ComponentClass {...this.props} />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
})
