/**
 * @providesModule components
 */
import React from "react";
import {
  Dimensions,
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

const win = Dimensions.get("window");

export class Background extends React.Component {
  render() {
    return (
      <Image
        source={require("../assets/img/background.png")}
        style={styles.background}
      />
    );
  }
}

export class NavBar extends React.Component {
  render() {
    return (
      <View style={{
        backgroundColor: "rgba(46, 167, 224, 0.1)",
        height: 70,
        justifyContent: "flex-end",
        paddingLeft: 20,
        paddingBottom: 5,
      }}
      >
        <Image source={require("../assets/img/spolyzer_header.png")} />
      </View>
    );
  }
}

export class NavigateButton extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.action} style={this.props.style}>
        <Image
          source={require("../assets/img/navigate_button.png")}
          style={styles.navigate_button}
        />
        <Text style={styles.navigate_text}>
          {this.props.text}
        </Text>
      </TouchableOpacity>
    );
  }
}

export class TopBar extends React.Component {
  render() {
    return (
      <View style={{
        backgroundColor: "rgba(46, 167, 224, 0.5)",
      }}
      >
        <Image source={require("../assets/img/spolyzer_header.png")} />
      </View>
    );
  }
}

export class LandScapeBackground extends React.Component {
  render() {
    return (
      <Image
        source={require("../assets/img/landscape_background.png")}
        style={styles.landscape_background}
      />
    );
  }
}

export class TopContentBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.top_content_bar_container}>
        <Image
          style={styles.top_content_bar_img}
          source={require("../assets/img/top_content_bar.png")}
        />
        <Text style={styles.top_content_bar_text}>{this.props.children}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  navibar: {
    justifyContent: "center",
    width: "100%",
    marginTop: -10,
  },
  navigate_button: {
    marginTop: 0,
    alignSelf: "center",
    position: "absolute",
  },
  navigate_text: {
    top: 15,
    fontSize: 20,
    backgroundColor: "transparent",
    color: "#ffffff",
    alignSelf: "center",
  },
  landscape_background: {
    zIndex: 0,
    resizeMode: "stretch",
    width: "100%",
    height: "100%",
    backgroundColor: "rgb(30, 55, 80)",
    position: "absolute",
  },
  bar: {
    zIndex: 2,
    margin: 0,
    padding: 0,
    backgroundColor: "rgba(46, 167, 224, 1)",
    width: win.width,
  },
  trapezoid: {
    width: 120,
    height: 0,
    borderTopWidth: 40,
    borderTopColor: "rgb(30, 110, 155)",
    borderLeftWidth: 20,
    borderLeftColor: "transparent",
    borderRightWidth: 20,
    borderRightColor: "transparent",
    borderStyle: "solid",
  },
  bar_text: {
    fontWeight: "bold",
    fontSize: 25,
    color: "white",
    paddingTop: 13,
    paddingBottom: 13,
    textAlign: "center",
  },
  top_bar: {
    zIndex: 3,
    alignItems: "center",
    width: win.width,
  },
  top_content_bar_text: {
    color: "#ffffff",
    fontSize: 18,
    alignSelf: "center",
    backgroundColor: "transparent",
    fontWeight: "bold",
    marginTop: 5,
    marginBottom: 7,
  },
  top_content_bar_img: {
    alignSelf: "center",
    position: "absolute",
  },
  top_content_bar_container: {
    backgroundColor: "transparent",
  },
});
