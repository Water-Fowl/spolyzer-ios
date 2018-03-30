import React from "react-native";

export default class Button extends React.Component {
  render() {
    return (
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="transparent"
        style={this.props.isPressed ? styles.buttonPressed : styles.button}
        onPress={this.props.onPress}
      >
        <Text style={styles.text}>
          {this.props.children}
        </Text>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
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
