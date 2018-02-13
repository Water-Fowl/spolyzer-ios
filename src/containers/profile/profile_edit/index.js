import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Picker,
  TextInput,
} from "react-native";
import { 
  Actions,
  ActionConst,
} from "react-native-router-flux";
import { connect } from "react-redux";
import ImagePicker from "react-native-image-crop-picker";
import {
  NavigateButton,
  TopContentBar,
} from "components";
import baseHigherOrderComponentEnhancer from "enhances";
import { ProfileImage } from "./components";
import SexPicker from './components/sex_picker';


class ProfileEdit extends React.Component {
  constructor() {
    super();
    this._selectPhotoTapped = this._selectPhotoTapped.bind(this);
    this._setPicker = this._setPicker.bind(this);
    this._hidePicker = this._hidePicker.bind(this);
    this.state = {
      profileImageSource: null,
      sex: "男性",
      email: "yohiki@gmail.com",
      user_name: "yohikisex",
      is_picker_visible: false,
    };
  }
  _selectPhotoTapped() {
    ImagePicker.openPicker({
      width: 200,
      height: 200,
    }).then((image) => {
      this._openCropper(image.path);
    });
  }
  _openCropper(path) {
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
  _setPicker(){
    this.setState({is_picker_visible: true})
  }
  _hidePicker(){
    this.setState({is_picker_visible: false})
  }
  render() {
    return (
      <View style={styles.container}>
        <TopContentBar><Text style={styles.top_bar}>マイデータ編集</Text></TopContentBar>
        <View style={styles.most_out}>
          <View style={styles.row_direcition}>
            <View style={styles.left_side}>
              <TouchableOpacity
                onPress={this._selectPhotoTapped}
              >
                <ProfileImage profileImageSource={this.state.profileImageSource} />
              </TouchableOpacity>
              <View style={styles.paddingtop22}>
                <Text style={styles.profile_title}>性別</Text>
                <Text style={styles.profile_title}>メールアドレス</Text>
              </View>
            </View>
            <View style={styles.right_side}>
              <View style={styles.frame_name}>
                <View style={styles.plate_name}>
                  <TextInput
                    ref="email"
                    style={styles.user_name}
                    onChangeText={user_name => this.setState({ user_name })}
                    value={this.state.user_name}
                    placeholder="ユーザーネーム"
                    keyboardType="email-address"
                    returnKeyType="done"
                  />
                </View>
              </View>
              <View style={styles.paddingtop40}>
                <View style={styles.frame_profile}>
                  <View style={styles.plate_profile}>
                    <View style={styles.paddingleft20}>
                      <Text onPress={this._setPicker} style={styles.profile_title}>{this.state.sex}</Text>
                      <View style={styles.profile_underline} />
                      <TextInput
                        ref="email"
                        style={styles.profile_title}
                        onChangeText={email => this.setState({ email })}
                        value={this.state.email}
                        placeholder="メールアドレス"
                        keyboardType="email-address"
                        returnKeyType="done"
                      />
                      <View style={styles.profile_underline} />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.container}>
          <NavigateButton action={() => {Actions.profile_top({ type: ActionConst.BACK_ACTION})}} style={styles.complete} text="完了" />
        </View>
        <SexPicker
          _hidePicker={this._hidePicker}
          isVisible={this.state.is_picker_visible}
          selectedValue={this.state.sex}
          enabled={false}
          onValueChange={(itemValue, itemIndex) => this.setState({sex: itemValue})}
        />
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
  user_name: {
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
