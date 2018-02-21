import React from "react";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from "react-native";

import Button from "./components/button";

export default class ShotTypeButton extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button currentShotTypeId={0}>スマッシュ</Button>
        <Button currentShotTypeId={1}>ドロップ</Button>
        <Button currentShotTypeId={2}>ヘアピン</Button>
        <Button currentShotTypeId={3}>クリア</Button>
        <Button currentShotTypeId={4}>プッシュ</Button>
        <Button currentShotTypeId={5}>ドライブ</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    borderRightColor: "#0a2444",
    borderTopColor: "#0a2444",
    borderLeftColor: "#0a2444",
    borderBottomColor: "#0a2444",
    height: 108,
    width: 222,
    borderWidth: 1.5,
    marginLeft: 58,
    borderRadius: 3,
    marginTop: 25,
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "center"
  }
});
