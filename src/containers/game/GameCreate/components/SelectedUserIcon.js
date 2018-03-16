import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View
} from "react-native";

export default class SelectedUserIcon extends React.Component{
  constructor(props){
    super(props);
  }
  setUserIndexEvent(selectedUserIndex){
    const { dispatch } = this.props;
    dispatch(setUserIndex(selectedUserIndex));
    Actions.gameSearchUser();
  }
  render(){
    return(
      <View style={styles.cotainer}>
        <Image style={styles.imageStyle} source={require("../../../../assets/img/my_page_user_icon.png")} />
        <Text style={styles.nameText}> {this.props.user.name} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageStyle: {
    alignSelf: "center",
    opacity: 0.5,
    width: 80,
    height: 80,
    borderRadius:40
  },
  nameText: {
    color: "white",
    marginTop: 10,
    textAlign: "center",
    borderColor: "#2EA7E0",
    height: 20,
    width: 88,
    borderWidth: 1.5,
    borderRadius: 5,
    alignSelf: "center"
  }
});
