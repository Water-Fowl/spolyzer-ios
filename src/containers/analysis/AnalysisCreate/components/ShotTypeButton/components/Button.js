import PropTypes from "prop-types";
import React from "react";
import {
  StyleSheet,
  Text,
  TouchableHighlight
} from "react-native";
import { connect } from "react-redux";

import { setShotType } from "../../../../actions/set_query";
import { mapStateToProps } from "utils";

class Button extends React.Component {
  constructor(props) {
    super(props);
    const pressed = false;
    this.pressButtonEvent.bind(this);
    this.state = { pressed };
  }
  componentWillReceiveProps(nextProps) {
    const pressed = this.props.currentShotTypeId == nextProps.analysis.shotTypeId;
    this.setState({ pressed });
  }
  pressButtonEvent(shotTypeId) {
    const { dispatch } = this.props;
    dispatch(setShotType(shotTypeId));
    const pressed = !this.state.pressed;
    this.setState({ pressed });
  }

  render() {
    return (
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="transparent"
        style={this.state.pressed ? styles.buttonPressed : styles.button}
        onPress={() => {
          this.pressButtonEvent(this.props.currentShotTypeId);
        }}
      >
        <Text style={this.state.pressed ? styles.textPressed : styles.text}>
          {this.props.children}
        </Text>
      </TouchableHighlight>
    );
  }
}
export default connect(mapStateToProps)(Button);

const styles = StyleSheet.create({
  textPressed: {
    color: "#ffffff",
    fontSize: 15,
    backgroundColor: "transparent",
    fontWeight: "bold"
  },

  text: {
    color: "#ffffff",
    fontSize: 15,
    backgroundColor: "transparent",
    fontWeight: "bold"
  },

  buttonPressed: {
    backgroundColor: "#0a2444",
    height: 28,
    width: 90,
    marginRight: 3,
    marginLeft: 3,
    marginTop: 4,
    marginBottom: 3,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 3
  },

  button: {
    backgroundColor: "transparent",
    height: 28,
    width: 90,
    marginRight: 3,
    marginLeft: 3,
    marginTop: 4,
    marginBottom: 3,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 3
  }
});
