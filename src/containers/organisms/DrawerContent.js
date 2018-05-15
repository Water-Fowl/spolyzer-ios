import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";
import { resetToken } from "../../modules/authentication";
import { mapStateToProps } from "utils";
import { ProfileImage } from "atoms";
import * as sportModules from "../../modules/sport";
import * as requestModules from "../../modules/request";
import { SHOT_TYPES_ENDPOINT, SPORTS_ENDPOINT } from "../../config/api";

class DrawerContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sports: []
    };
    this.getSportsEvent.bind(this);
    this.getSportsEvent();
  }
  sportName(id) {
    if (!this.state.sports.length) return;
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
    this.props.dispatch(sportModules.setSport(id));
    this.props.dispatch(
      requestModules.getApiRequest(
        SHOT_TYPES_ENDPOINT,
        (params = { sport_id: id }),
        this.props.authentication.header,
        sportModules.getShotTypesRequest,
        sportModules.getShotTypesReceived
      )
    );
  }
  setSportsList() {
    const sportsList = [];
    for (let sport of this.state.sports) {
      if (this.props.sport.id !== sport.id) {
        sportsList.push(
          <TouchableOpacity
            onPress={() => {
              this.switchSport(sport.id);
            }}
            style={styles.sportsContainer}
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
              {this.sportName(this.props.sport.id)}
            </Text>
          </View>
          <View style={styles.kyugiContainer}>
            <Text style={styles.takyogi}>競技一覧(変更)</Text>
          </View>
          {this.setSportsList()}
        </View>
        <View style={styles.logoutContainer}>
          <Image
            source={require("../../assets/img/logout.png")}
            style={styles.logoutImage}
          />
          <TouchableOpacity
            onPress={() => {
              Actions.login();
              this.props.dispatch(resetToken());
            }}
          >
            <Text style={styles.logoutText}>ログアウト</Text>
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
