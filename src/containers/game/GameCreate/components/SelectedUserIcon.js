import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View
} from "react-native";
import {
  ProfileImage
} from "components";

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
      <View style={styles.container}>
        <ProfileImage size={80} imageSource={this.props.user.image.url}/>
        <Text style={styles.nameText}> {this.props.user.name} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    alignItems: "center",
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
