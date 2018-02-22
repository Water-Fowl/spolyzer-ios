import React from "react";
import {
  Image,
  View
} from "react-native";

export default class SelectedUserIcon extends React.Component{
  render(){
    return(
      <View style={styles.cotainer}>
        <Image source={require("../../../../assets/img/my_page_user_icon.png")} />
      </View>
    );
  }
}
