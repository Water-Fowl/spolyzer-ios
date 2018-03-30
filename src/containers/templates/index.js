import ImagePicker from "react-native-image-crop-picker";
import React from "react";
import baseEnhancer from "enhances";
import {
  ActionConst,
  Actions
} from "react-native-router-flux";
import {
  Image,
  Picker,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import {
  NavigateButton,
  TopContentBar
} from "components";
import { connect } from "react-redux";

import {
  ProfileImage,
  SexPicker
} from "./components";
import { postUserUpdate } from "../actions/post_user_update";
import { mapStateToProps } from "utils";

class ProfileEdit extends React.Component {
  constructor(props) {
    super(props);
    this._selectPhotoTapped = this._selectPhotoTapped.bind(this);
    this._setPicker = this._setPicker.bind(this);
    this._hidePicker = this._hidePicker.bind(this);
    this.state = {
      imageSource: null,
      userEmail: this.props.profile.userEmail,
      userImageSource: this.props.profile.userImageSource,
      userName: this.props.profile.userName,
      sex: "男性",
      isPickerVisible: false
    };
  }
  _selectPhotoTapped() {
    ImagePicker.openPicker({
      includeBase64: true,
      width: 200,
      height: 200
    }).then((image) => {
      this._openCropper(image.path);
    });
  }
  _openCropper(path) {
    ImagePicker.openCropper({
      path,
      includeBase64: true,
      includeExif: true,
      width: 200,
      height: 200,
      cropperCircleOverlay: true
    }).then((image) => {
      this.setState({
        userImageSource: image.path,
        imageData: `data:image/png;base64, ${image.data}`
      });
    });
  }
  _setPicker(){
    this.setState({isPickerVisible: true});
  }
  _hidePicker(){
    this.setState({isPickerVisible: false});
  }
  completeButtonEvent(){
    const { dispatch } = this.props;
    const body = {
      name: this.state.userName,
      email: this.state.userEmail
    };
    if(this.state.imageData){
      body["image"] = this.state.imageData;
    }
    const params = {
      id: this.props.authentication.userId
    };
    dispatch(postUserUpdate(body, params, this.props.authentication.header)).then(() => {
      Actions.profileTop();
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <TopContentBar><Text style={styles.topBar}>マイデータ編集</Text></TopContentBar>
        <View style={styles.mostOut}>
          <View style={styles.rowDirecition}>
            <View style={styles.leftSide}>
              <TouchableOpacity
                onPress={this._selectPhotoTapped}
              >
                <ProfileImage imageSource={this.state.userImageSource} />
              </TouchableOpacity>
              <View style={styles.paddingtop22}>
                <Text style={styles.profileTitle}>性別</Text>
                <Text style={styles.profileTitle}>メールアドレス</Text>
              </View>
            </View>
            <View style={styles.rightSide}>
              <View style={styles.frameName}>
                <View style={styles.plateName}>
                  <TextInput
                    ref="email"
                    style={styles.userName}
                    onChangeText={userName => this.setState({ userName })}
                    defaultValue={this.props.profile.userName}
                    placeholder="ユーザーネーム"
                    keyboardType="email-address"
                    returnKeyType="done"
                  />
                </View>
              </View>
              <View style={styles.paddingtop40}>
                <View style={styles.frameProfile}>
                  <View style={styles.plateProfile}>
                    <View style={styles.paddingleft20}>
                      <Text onPress={this._setPicker} style={styles.profileTitle}>{this.state.sex}</Text>
                      <View style={styles.profileUnderline} />
                      <TextInput
                        ref="email"
                        style={styles.profileTitle}
                        onChangeText={userEmail => this.setState({ userEmail })}
                        defaultValue={this.props.profile.userEmail}
                        placeholder="メールアドレス"
                        keyboardType="email-address"
                        returnKeyType="done"
                      />
                      <View style={styles.profileUnderline} />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.container}>
          <NavigateButton action={() => {this.completeButtonEvent();}} style={styles.complete} text="完了" />
        </View>
        <SexPicker
          _hidePicker={this._hidePicker}
          isVisible={this.state.isPickerVisible}
          selectedValue={this.state.sex}
          enabled={false}
          onValueChange={(itemValue, itemIndex) => this.setState({sex: itemValue})}
        />
      </View>
    );
  }
}
export default connect(mapStateToProps)(baseEnhancer(ProfileEdit));


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  mostOut: {
    flex: 5,
    paddingTop: 40
  },
  rowDirecition: {
    flexDirection: "row"
  },
  leftSide: {
    flex: 3,
    alignItems: "center",
    backgroundColor: "transparent"
  },
  rightSide: {
    flex: 7,
    alignItems: "center",
    paddingTop: 30
  },
  topBar: {
    fontSize: 16
  },
  frameName: {
    borderColor: "#0a2444",
    height: 40,
    width: 230,
    borderWidth: 2,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center"
  },
  plateName: {
    backgroundColor: "#0a2444",
    height: 30,
    width: 220,
    opacity: 0.7
  },
  frameProfile: {
    marginTop: 8,
    borderColor: "#0a2444",
    height: 130,
    width: 230,
    borderWidth: 2,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center"
  },
  plateProfile: {
    backgroundColor: "#0a2444",
    height: 120,
    width: 220,
    opacity: 0.7
  },
  profileTitle: {
    color: "white",
    fontWeight: "bold",
    marginTop: 10
  },
  profileUnderline: {
    borderWidth: 0.5,
    borderColor: "#4780c6",
    marginRight: 20
  },
  complete: {
    alignSelf: "center"
  },
  userName: {
    fontSize: 23,
    color: "white",
    textAlign: "center"
  },
  paddingtop40: {
    paddingTop: 40
  },
  paddingtop22: {
    paddingTop: 22
  },
  paddingleft20: {
    paddingLeft: 20
  }
});
