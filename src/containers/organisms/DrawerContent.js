import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity
} from "react-native";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";
import { resetToken } from "../../modules/authentication";
import { mapStateToProps } from "utils";
import {
  ProfileImage
} from "atoms";

class DrawerContent extends React.Component {

  render() {
    return (
    	<View style={styles.drawerContainer}>
        <View style={styles.userContainer}>
          <ProfileImage size={40} imageSource={this.props.profile.userimageSource} />
          <Text　style={styles.userName}>
            { this.props.profile.userName }
          </Text>
        </View>
        <View style={styles.sportContainer}>
          <View style={styles.kyugiContainer}>
            <View style={styles.circle} />
            <Text style={styles.kyogi}>
              競技
            </Text>
          </View>
          <Text style={styles.bad}>
            バドミントン
          </Text>
        </View>
        <View style={styles.logoutContainer}>
          <Image
            source={require("../../assets/img/logout.png")}
            style={styles.logoutImage}
          />
          <TouchableOpacity onPress={() => {
            Actions.login();
            this.props.dispatch(resetToken());
          }}>
            <Text style={styles.logoutText}>
              ログアウト
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default connect(mapStateToProps)(DrawerContent);

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    backgroundColor: "black"
  },
  userContainer: {
    borderBottomColor: "#2EA7E0",
    borderWidth: 3,
    flexDirection: "row"
  },
  userIcon: {
    marginTop: 12,
    marginLeft: 6,
    marginBottom: 6,
    width: 50,
    height: 50
  },
  userName: {
    marginTop: 38,
    marginLeft: 8,
    color: "white",
    fontSize: 20
  },
  sportContainer: {
    height: 270,
    borderBottomColor: "#2EA7E0",
    borderWidth: 1
  },
  kyugiContainer: {
    borderBottomColor: "#2EA7E0",
    borderWidth: 1,
    flexDirection: "row"
  },
  circle: {
    width: 16,
    height: 16,
    borderRadius: 10,
    backgroundColor: "#2EA7E0",
    marginTop: 20,
    marginLeft: 10
  },
  kyogi: {
    marginTop: 16,
    marginLeft: 8,
    color: "white",
    fontSize: 22,
    marginBottom: 2
  },
  bad: {
    marginTop: 14,
    marginLeft: 10,
    color: "white",
    fontSize: 20,
    marginBottom: 4
  },
  logoutContainer: {
    borderBottomColor: "#2EA7E0",
    borderWidth: 1,
    flexDirection: "row"
  },
  logoutImage: {
    width: 20,
    height: 23,
    marginTop: 18,
    marginLeft: 10
  },
  logoutText: {
    marginTop: 20,
    marginLeft: 6,
    color: "white",
    fontSize: 21,
    marginBottom: 2
  }
});
