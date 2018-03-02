import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";

export default class DrawerContent extends React.Component {

  render() {
    return (
    	<View style={styles.container}>
        <Text　style={styles.logout}>
          ログアウト
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  },
  logout: {
    fontSize: 16,
    marginTop: 30
  }
});
