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
    const pressed = this.props.current_game_type_id == nextProps.game_type_id;
    this.setState({ pressed });
  }
  pressButtonEvent(game_type_id) {
    const { dispatch } = this.props;
    dispatch(setGameType(game_type_id));
    const pressed = !this.state.pressed;
    this.setState({ pressed });
  }

  render() {
    return (
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="transparent"
        style={this.state.pressed ? styles.button_pressed : styles.button}
        onPress={() => {
          this.pressButtonEvent(this.props.current_game_type_id);
        }}
      >
        <Text style={this.state.pressed ? styles.text_pressed : styles.text}>
          {this.props.children}
        </Text>
      </TouchableHighlight>
    );
  }
}

function mapStateToProps(state, props) {
  const { analysis } = state;
  const {
    game_type_id
  } = analysis || {
    game_type_id: null
  };
  return {
    game_type_id
  };
}
export default connect(mapStateToProps)(Button);

const styles = StyleSheet.create({
  text_pressed: {
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

  button_pressed: {
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
