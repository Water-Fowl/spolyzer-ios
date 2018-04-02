import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View
} from "react-native";
import { ProfileImage } from "atoms";

export default class UserListItem extends React.Component{
  render(){
    return(
      <View style={styles.userAccount}>
        <View style={styles.userImage}>
          <ProfileImage size={45} imageSource={ this.props.userImageSource }/>
        </View>
        <View style={styles.userName}>
          <Text style={styles.userNameText}>{ this.props.userName }</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  userAccount: {
    height: 45,
    flex: 1,
    borderRadius: 3,
    backgroundColor: "rgba(23,82,155,0.3)",
    flexDirection: "row",
    alignSelf: "center"
  },
  userImage: {
    width: "10%",
    backgroundColor: "transparent"
  },
  userName: {
    width: "90%",
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center"
  },
  userNameText: {
    fontWeight: "bold",
    fontSize: 18,
    color: "white",
    textAlign: "center"
  },
});

