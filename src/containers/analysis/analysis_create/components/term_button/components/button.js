import PropTypes from "prop-types";
import React from "react";
import {
  StyleSheet,
  Text,
  TouchableHighlight
} from "react-native";
import { connect } from "react-redux";

import { setTerm } from "../../../../actions/set_query";

class Button extends React.Component {
  constructor(props) {
    super(props);
    const pressed = false;
    this.pressButtonEvent.bind(this);
    this.state = { pressed };
  }
  componentWillReceiveProps(nextProps) {
    const pressed = this.props.current_term_id == nextProps.term_id;
    this.setState({ pressed });
  }
  pressButtonEvent(term_id) {
    const { dispatch } = this.props;
    dispatch(setTerm(term_id));
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
          this.pressButtonEvent(this.props.current_term_id);
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
    term_id
  } = analysis || {
    term_id: null
  };
  return {
    term_id
  };
}
export default connect(mapStateToProps)(Button);

const styles = StyleSheet.create({
  text_pressed: {
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

  button_pressed: {
    backgroundColor: "#0a2444",
    height: 28,
    width: 60,
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
    width: 60,
    marginRight: 3,
    marginLeft: 3,
    marginTop: 4,
    marginBottom: 3,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 3
  }
});
