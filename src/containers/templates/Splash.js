import React from "react";
import {
  View,
  Text
} from "react-native";
import SplashScreen from 'react-native-splash-screen'

export default class Splash extends React.Component {
  componentWillMount(){
    SplashScreen.hide();
  }
  render(){
    return (
      <View>
        <Text>SplashScrenn</Text>
      </View>
    );
  }
}
