import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  CameraRoll,
} from "react-native";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";
import ImagePicker from "react-native-image-crop-picker";
import {
  NavigateButton,
  TopContentBar,
} from "components";
import baseHigherOrderComponentEnhancer from "enhances";
import { ProfileImage } from "./components";


class ProfileEdit extends React.Component {
  constructor() {
    super();
    this.selectPhotoTapped = this.selectPhotoTapped.bind(this);
    this.state = {
      profileImageSource: null,
    };
  }
  selectPhotoTapped() {
    ImagePicker.openPicker({
      width: 200,
      height: 200,
    }).then((image) => {
      this.openCropper(image.path);
    });
  }
  openCropper(path) {
    ImagePicker.openCropper({
      path,
      width: 200,
      height: 200,
      cropperCircleOverlay: true,
    }).then((image) => {
      this.setState({
        profileImageSource: image.path,
      });
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <TopContentBar><Text style={styles.top_bar}>マイデータ編集</Text></TopContentBar>
        <View style={styles.most_out}>
          <View style={styles.row_direcition}>
            <View style={styles.left_side}>
              <TouchableOpacity
                onPress={this.selectPhotoTapped}
              >
                <ProfileImage profileImageSource={this.state.profileImageSource} />
              </TouchableOpacity>
              <View style={styles.paddingtop22}>
                <Text style={styles.profile_title}>Gender</Text>
                <Text style={styles.profile_title}>Phone</Text>
                <Text style={styles.profile_title}>Email</Text>
                <Text style={styles.profile_title}>Status</Text>
              </View>
              <View style={styles.paddingtop40}>
                <Text style={styles.profile_title}>Profile</Text>
              </View>
            </View>
            <View style={styles.right_side}>
              <View style={styles.frame_name}>
                <View style={styles.plate_name}>
                  <Text style={styles.name} >Ikeda Yoshiki</Text>
                </View>
              </View>
              <View style={styles.paddingtop40}>
                <View style={styles.frame_profile}>
                  <View style={styles.plate_profile}>
                    <View style={styles.paddingleft20}>
                      <Text style={styles.profile_title}>Male</Text>
                      <View style={styles.profile_underline} />
                      <Text style={styles.profile_title}>000000</Text>
                      <View style={styles.profile_underline} />
                      <Text style={styles.profile_title}>gmail.com</Text>
                      <View style={styles.profile_underline} />
                      <Text style={styles.profile_title}>single Player</Text>
                      <View style={styles.profile_underline} />
                    </View>
                  </View>
                </View>
                <View style={styles.frame_profile}>
                  <View style={styles.plate_profile} />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.container}>
          <NavigateButton action={Actions.profile_top} style={styles.complete} text="Complete" />
        </View>
      </View>
    );
  }
}
export default connect()(baseHigherOrderComponentEnhancer(ProfileEdit));

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  most_out: {
    flex: 5,
    paddingTop: 40,
  },
  row_direcition: {
    flexDirection: "row",
  },
  left_side: {
    flex: 3,
    alignItems: "center",
    backgroundColor: "transparent",
  },
  right_side: {
    flex: 7,
    alignItems: "center",
    paddingTop: 30,
  },
  top_bar: {
    fontSize: 16,
  },
  frame_name: {
    borderColor: "#0a2444",
    height: 40,
    width: 230,
    borderWidth: 2,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  plate_name: {
    backgroundColor: "#0a2444",
    height: 30,
    width: 220,
    opacity: 0.7,
  },
  frame_profile: {
    marginTop: 8,
    borderColor: "#0a2444",
    height: 130,
    width: 230,
    borderWidth: 2,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  plate_profile: {
    backgroundColor: "#0a2444",
    height: 120,
    width: 220,
    opacity: 0.7,
  },
  profile_title: {
    color: "white",
    fontWeight: "bold",
    marginTop: 10,
  },
  profile_underline: {
    borderWidth: 0.5,
    borderColor: "#4780c6",
    marginRight: 20,
  },
  complete: {
    alignSelf: "center",
  },
  name: {
    fontSize: 23,
    color: "white",
    textAlign: "center",
  },
  paddingtop40: {
    paddingTop: 40,
  },
  paddingtop22: {
    paddingTop: 22,
  },
  paddingleft20: {
    paddingLeft: 20,
  },
});
