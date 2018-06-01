import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
  AsyncStorage
} from "react-native";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";
import { resetToken } from "../../modules/authentication";
import { mapStateToProps } from "../../modules/mapToProps";
import { toastPresent } from "utils";
import { ProfileImage } from "atoms";
import * as sportModules from "../../modules/sport";
import * as requestModules from "../../modules/request";
import * as profileModules from "../../modules/profile";
import {
  SHOT_TYPES_ENDPOINT,
  SPORTS_ENDPOINT,
  USERS_ENDPOINT
} from "../../config/api";

class DrawerContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sports: []
    };
    this.getSportsEvent.bind(this);
  }
  componentWillMount() {
    this.props.dispatch(
      requestModules.getApiRequest(
        (endpoint = SHOT_TYPES_ENDPOINT),
        (params = { sport_id: this.props.profile.user.sport_id }),
        this.props.authentication.header,
        (requestCallback = sportModules.getShotTypesRequest),
        (receivedCallback = sportModules.getShotTypesReceived)
      )
    );
    this.getSportsEvent();
  }
  sportName(id) {
    if (!this.state.sports.length || id === null) return;
    return this.state.sports[id - 1].name_ja;
  }
  getSportsEvent() {
    this.props
      .dispatch(
        requestModules.getApiRequest(
          (endpoint = SPORTS_ENDPOINT),
          (params = {}),
          this.props.authentication.header,
          sportModules.getSportsRequest,
          sportModules.getSportsReceived
        )
      )
      .then(json => {
        this.setState({ sports: json.sports });
      });
  }
  switchSport(id = "") {
    if (!id) return;
    const body = {
      sport_id: id
    };
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
        this.props.dispatch(
          requestModules.getApiRequest(
            SHOT_TYPES_ENDPOINT,
            (params = { sport_id: id }),
            this.props.authentication.header,
            sportModules.getShotTypesRequest,
            sportModules.getShotTypesReceived
          )
        );
        toastPresent(
          `競技を${this.sportName(
            this.props.profile.user.sport_id
          )}に変更しました`
        );
      });
  }
  setSportsList() {
    const sportsList = [];
    for (let sport of this.state.sports) {
      if (this.props.profile.user.sport_id !== sport.id) {
        sportsList.push(
          <TouchableOpacity
            onPress={() => {
              this.switchSport(sport.id);
            }}
            style={styles.sportsContainer}
            key={sport.id}
          >
            <Text style={styles.sportName}>{sport.name_ja}</Text>
          </TouchableOpacity>
        );
      }
    }
    return <ScrollView style={styles.scrollContainer}>{sportsList}</ScrollView>;
  }
  render() {
    return (
      <View style={styles.drawerContainer}>
        <TouchableOpacity
          onPress={Actions.profileEdit}
          style={styles.userContainer}
        >
          <ProfileImage
            size={40}
            imageSource={this.props.profile.userImageSource}
          />
          <Text style={styles.userName}>{this.props.profile.userName}</Text>
        </TouchableOpacity>
        <View style={styles.sportContainer}>
          <View style={styles.kyugiContainer}>
            <View style={styles.circle} />
            <Text style={styles.kyogi}>競技</Text>
          </View>
          <View style={styles.sportsContainer}>
            <Text style={styles.sportName}>
              {this.sportName(this.props.profile.user.sport_id)}
            </Text>
          </View>
          <View style={styles.kyugiContainer}>
            <Text style={styles.takyogi}>競技一覧(変更)</Text>
          </View>
          {this.setSportsList()}
        </View>
        <View style={styles.endContainer}>
          <Image source={{ url: "book_icon.png" }} style={styles.endImage} />
          <TouchableOpacity
            onPress={() => {
              Actions.usage();
            }}
          >
            <Text style={styles.endText}>使い方</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.endContainer}>
          <Image source={{ url: "logout.png" }} style={styles.endImage} />
          <TouchableOpacity
            onPress={() => {
              AsyncStorage.removeItem("header", () => {
                Actions.login();
                this.props.dispatch(resetToken());
              });
            }}
          >
            <Text style={styles.endText}>ログアウト</Text>
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
    marginTop: 10,
    borderBottomColor: "#2EA7E0",
    borderWidth: 3,
    marginTop: 20,
    flexDirection: "row"
  },
  userName: {
    color: "white",
    fontSize: 20,
    alignSelf: "center",
    marginLeft: 3
  },
  sportContainer: {
    height: 270,
    borderBottomColor: "#2EA7E0",
    borderWidth: 1
  },
  kyugiContainer: {
    borderBottomColor: "#2EA7E0",
    borderWidth: 1,
    flexDirection: "row",
    padding: 3
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
  takyogi: {
    marginTop: 16,
    marginLeft: 8,
    color: "white",
    fontSize: 16,
    marginBottom: 2
  },
  sportsContainer: {
    marginLeft: 42,
    borderBottomColor: "#2EA7E0",
    borderWidth: 1,
    padding: 5
  },
  sportName: {
    marginTop: 14,
    color: "white",
    fontWeight: "bold",
    fontSize: 18
  },
  endContainer: {
    borderBottomColor: "#2EA7E0",
    borderWidth: 1,
    flexDirection: "row"
  },
  endImage: {
    width: 20,
    height: 23,
    marginTop: 18,
    marginLeft: 10
  },
  endText: {
    marginTop: 20,
    marginLeft: 6,
    color: "white",
    fontSize: 21,
    marginBottom: 2
  }
});
