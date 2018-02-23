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
  connect
} from "react-redux";

import {
  getUser
} from "../actions/get_user";

class ProfileTop extends React.Component {
  componentDidMount(){
    const sampleParams = "1";
    const { dispatch } = this.props;
    dispatch(getUser(sampleParams));
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.mainContainer}>
          <TopContentBar>マイページ</TopContentBar>
          <View style={styles.alignItemsCenter}>
            <TouchableOpacity onPress={Actions.profileEdit}>
              <Image
                source={require("../../../assets/img/my_page_user_icon.png")}
                style={styles.userIcon}
              />
            </TouchableOpacity>
            <Image
              source={require("../../../assets/img/my_page_center_design.png")}
            />
            <Text style={styles.myName}>{this.props.userName}</Text>
            <View style={styles.gameSettingBorder}>
              <View style={styles.gameSettingTable} />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default connect(mapToStateProps)(baseEnhancer(ProfileTop));

function mapToStateProps(state, props){
  const { profile } = state;
  const {
    userName,
    userEmail
  } = profile || {
    userName: "",
    userEmail: ""
  };
  return {
    userName,
    userEmail
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  userIcon: {
    margin: 15,
    opacity: 0.3
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
  }

});
