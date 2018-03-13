import PropTypes from "prop-types";
import React from "react";
import {
  $spolyzerDarkBlue,
  $transparent,
  $white
} from "const";
import {
  StyleSheet,
  Text,
  TouchableHighlight
} from "react-native";
import { connect } from "react-redux";

import { setGameType } from "../../../../actions/set_query";

class Button extends React.Component {
  constructor(props) {
    super(props);
    const pressed = false;
    this.pressButtonEvent.bind(this);
    this.state = { pressed };
  }
  componentWillReceiveProps(nextProps) {
    const pressed = this.props.currentGameTypeId == nextProps.gameTypeId;
    this.setState({ pressed });
  }
  pressButtonEvent(gameTypeId) {
    const { dispatch } = this.props;
    dispatch(setGameType(gameTypeId));
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
          this.pressButtonEvent(this.props.currentGameTypeId);
        }}
      >
        <Text style={this.state.pressed ? styles.textPressed : styles.text}>
          {this.props.children}
        </Text>
      </TouchableHighlight>
    );
  }
}

function mapStateToProps(state, props) {
  const { analysis } = state;
  const {
    gameTypeId
  } = analysis || {
    gameTypeId: null
  };
  return {
    gameTypeId
  };
}
export default connect(mapStateToProps)(Button);

const styles = StyleSheet.create({
  textPressed: {
    color: $white,
    fontSize: 15,
    backgroundColor: $transparent,
    fontWeight: "bold"
  },

  text: {
    color: $white,
    fontSize: 15,
    backgroundColor: $transparent,
    fontWeight: "bold"
  },

  buttonPressed: {
    backgroundColor: $spolyzerDarkBlue,
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
    backgroundColor: $transparent,
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
