import React from "react";
import baseEnhancer from "enhances";
import { Actions } from "react-native-router-flux";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import {
  TopContentBar
} from "components";
import {
  ProfileImage
} from "atoms";
import {
  connect
} from "react-redux";
import {
  mapStateToProps
} from "utils";

import {
  getUser
} from "../profile/actions/get_user";

class ProfileTop extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.mainContainer}>
          <TopContentBar>マイページ</TopContentBar>
          <View style={styles.alignItemsCenter}>
            <TouchableOpacity onPress={Actions.profileEdit}>
              <ProfileImage style={styles.profileImage} imageSource={this.props.profile.userImageSource} size={100}/>
            </TouchableOpacity>
            <Image
              source={require("../../assets/img/my_page_center_design.png")}
            />
            <Text style={styles.myName}>{this.props.profile.userName}</Text>
            <View style={styles.gameSettingBorder}>
              <View style={styles.gameSettingTable} />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default connect(mapStateToProps)(baseEnhancer(ProfileTop));

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  gameSettingBorder: {
    marginTop: 10,
    padding: 5,
    backgroundColor: "rgba(0, 0, 0, 0)",
    borderWidth: 1.5,
    borderColor: "rgb(20, 35, 70)",
    borderRadius: 3
  },
  gameSettingTable: {
    width: 320,
    height: 245,
    justifyContent: "center",
    borderWidth: 1.5,
    borderColor: "rgb(20, 35, 70)",
    borderRadius: 3
  },
  myName: {
    position: "absolute",
    marginTop: 220,
    backgroundColor: "transparent",
    color: "#ffffff",
    fontSize: 20
  },
  alignItemsCenter: {
    alignItems: "center"
  },
  profileImage:{
    marginTop:30,
    marginBottom: 30
  }

});
