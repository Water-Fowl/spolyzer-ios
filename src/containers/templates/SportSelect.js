import Orientation from "react-native-orientation";
import React, { Component } from "react";
import { Actions } from "react-native-router-flux";
import { Background } from "atoms";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView
} from "react-native";
import { connect } from "react-redux";
import * as sportModules from "../../modules/sport";
import * as requestModules from "../../modules/request";
import * as profileModules from "../../modules/profile";
import {
  SHOT_TYPES_ENDPOINT,
  SPORTS_ENDPOINT,
  USERS_ENDPOINT
} from "../../config/api";
import { mapStateToProps } from "../../modules/mapToProps";

class SportSelect extends React.Component {
  constructor(props) {
    super(props);
    this.setSportEvent.bind(this);
    this.setSportsSelect.bind(this);
    this.state = {
      sports: []
    };
    this.getSportsEvent.bind(this);
    this.getSportsEvent();
  }

  componentWillMount() {
    Orientation.lockToPortrait();
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
  setSportsSelect() {
    const sportsList = [];
    for (let sport of this.state.sports) {
      sportsList.push(
        <View style={styles.button} key={sport.id}>
          <TouchableOpacity
            onPress={() => {
              this.setSportEvent(sport.id);
            }}
          >
            <Text style={styles.buttonText}>{sport.name_ja}</Text>
          </TouchableOpacity>
        </View>
      );
    }
    return <ScrollView>{sportsList}</ScrollView>;
  }
  setSportEvent(id) {
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
        Actions.tab();
      });
  }
  render() {
    return (
      <View style={styles.container}>
        <Background />
        <Image style={styles.logo} source={{ url: "spolyzer_top.png" }} />
        <View style={styles.formContainer}>
          <Text style={styles.titleText}>主に行う競技を選んでください</Text>
          <Text style={styles.subText}>※後から変更することもできます</Text>
          {this.setSportsSelect()}
        </View>
      </View>
    );
  }
}

export default connect(mapStateToProps)(SportSelect);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  formContainer: {
    alignSelf: "center",
    width: "80%"
  },
  button: {
    borderRightColor: "#28a8de",
    borderTopColor: "#28a8de",
    borderLeftColor: "#28a8de",
    borderBottomColor: "#28a8de",
    height: 42,
    width: "100%",
    borderWidth: 1.3,
    alignSelf: "center",
    borderRadius: 5,
    marginTop: 9,
    marginBottom: 9,
    justifyContent: "center"
  },
  logo: {
    marginTop: 80,
    marginBottom: 80,
    alignSelf: "center",
    width: 209,
    height: 64
  },
  buttonText: {
    color: "#28a8de",
    textAlign: "center",
    fontSize: 19,
    marginTop: 1,
    marginBottom: 1,
    backgroundColor: "transparent"
  },
  titleText: {
    color: "white",
    textAlign: "center",
    fontSize: 21,
    marginTop: 10,
    marginBottom: 5,
    backgroundColor: "transparent"
  },
  subText: {
    color: "white",
    textAlign: "right",
    fontSize: 14,
    marginBottom: 40,
    backgroundColor: "transparent"
  }
});
