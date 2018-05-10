import React from "react";
import {
  Image
} from "react-native";

export default class CompareImage extends React.Component{
  render(){
    return(
      <Image source={require("../../assets/img/compare_up.png")} />
    );
  }
}
