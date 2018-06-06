import ImagePicker from "react-native-image-crop-picker";
import React from "react";
import templateEnhancer from "./hoc";
import { ActionConst, Actions } from "react-native-router-flux";
import {
  Alert,
  Image,
  Picker,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView
} from "react-native";
import { NavigateButton, TopContentBar, ProfileImage } from "atoms";
import { SportPicker } from "molecules";
import { connect } from "react-redux";
import { emailReg } from "const";
import * as sportModules from "../../modules/sport";
import * as profileModules from "../../modules/profile";
import * as requestModules from "../../modules/request";

import { USERS_ENDPOINT } from "../../config/api";
import { mapStateToProps } from "../../modules/mapToProps";

class ProfileEdit extends React.Component {
  constructor(props) {
    super(props);
    this._selectPhotoTapped = this._selectPhotoTapped.bind(this);
    this._setPicker = this._setPicker.bind(this);
    this._hidePicker = this._hidePicker.bind(this);
    this.state = {
      imageSource: null,
      userEmail: this.props.profile.user.email,
      userImageSource: this.props.profile.user.image.url,
      userName: this.props.profile.user.name,
      sport_id: this.props.sport.id,
      isPickerVisible: false
    };
  }

  _selectPhotoTapped() {
    ImagePicker.openPicker({
      includeBase64: true,
      width: 200,
      height: 200
    }).then(image => {
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
    }).then(image => {
      this.setState({
        userImageSource: image.path,
        imageData: `data:image/png;base64, ${image.data}`
      });
    });
  }

  _setPicker() {
    this.setState({ isPickerVisible: true });
  }

  _hidePicker() {
    this.setState({ isPickerVisible: false });
  }

  completeButtonEvent() {
    const { dispatch } = this.props;
    const isEmail = emailReg.test(this.state.userEmail);
    if (!isEmail) {
      return Alert.alert(
        "エラー",
        "メールアドレスを入力してください",
        [{ text: "了解" }],
        { cancelable: false }
      );
    }
    const body = {
      name: this.state.userName,
      email: this.state.userEmail,
      sport_id: this.state.sport_id
    };
    if (this.state.imageData) {
      body["image"] = this.state.imageData;
    }
    this.props.dispatch(sportModules.setSport(this.state.sport_id));
    this.props
      .dispatch(
        requestModules.patchApiRequest(
          USERS_ENDPOINT + this.props.profile.user.id,
          body,
          this.props.authentication.header,
          profileModules.patchUserRequest,
          profileModules.patchUserReceived
        )
      )
      .then(() => {
        Actions.pop();
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <TopContentBar>
            <Text style={styles.topBar}>マイデータ編集</Text>
          </TopContentBar>
          <TouchableOpacity
            onPress={this._selectPhotoTapped}
            style={styles.photo}
          >
            <ProfileImage size={80} imageSource={this.state.userImageSource} />
          </TouchableOpacity>
          <ScrollView style={{ height: 210 }}>
            <Text style={styles.profileTitle}>ユーザーネーム</Text>
            <View style={styles.frameName}>
              <View style={styles.plateName}>
                <TextInput
                  ref="email"
                  style={styles.plateNameText}
                  onChangeText={userName => this.setState({ userName })}
                  defaultValue={this.props.profile.user.name}
                  placeholder="ユーザーネーム"
                  keyboardType="email-address"
                  returnKeyType="done"
                />
              </View>
            </View>
            <Text style={styles.profileTitle}>メールアドレス</Text>
            <View style={styles.frameName}>
              <View style={styles.plateName}>
                <TextInput
                  ref="email"
                  style={styles.plateNameText}
                  onChangeText={userEmail => this.setState({ userEmail })}
                  defaultValue={this.props.profile.user.email}
                  placeholder="メールアドレス"
                  keyboardType="email-address"
                  returnKeyType="done"
                />
              </View>
            </View>
            <Text style={styles.profileTitle}>競技</Text>
            <View style={styles.frameName}>
              <View style={styles.plateName}>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({ isPickerVisible: true });
                  }}
                >
                  <Text style={styles.plateNameText}>
                    {this.props.sport.sports[this.state.sport_id - 1].name_ja}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
        <NavigateButton
          action={() => {
            this.completeButtonEvent();
          }}
          style={styles.complete}
          text="完了"
        />
        <SportPicker
          _hidePicker={this._hidePicker}
          isVisible={this.state.isPickerVisible}
          selectedValue={this.state.sport_id}
          enabled={false}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ sport_id: itemValue })
          }
          sports={this.props.sport.sports}
        />
      </View>
    );
  }
}
export default connect(mapStateToProps)(templateEnhancer(ProfileEdit));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  contentContainer: {
    flex: 1,
    justifyContent: "flex-start",
    flexDirection: "column",
    position: "absolute"
  },
  photo: {
    alignItems: "center",
    margin: 15
  },
  topBar: {
    fontSize: 16
  },
  frameName: {
    borderColor: "#0a2444",
    height: 35,
    width: 230,
    borderWidth: 2,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15
  },
  plateName: {
    backgroundColor: "#0a2444",
    height: 25,
    width: 220,
    opacity: 1,
    justifyContent: "center"
  },
  profileTitle: {
    color: "white",
    fontWeight: "bold",
    backgroundColor: "transparent",
    fontSize: 12,
    paddingBottom: 5
  },

  complete: {
    bottom: 60,
    position: "absolute",
    alignSelf: "center"
  },
  plateNameText: {
    fontSize: 16,
    color: "white",
    textAlign: "center"
  }
});
