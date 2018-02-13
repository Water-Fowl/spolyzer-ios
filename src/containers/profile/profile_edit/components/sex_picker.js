import React from "react";
import { lightBlue } from "const";
import {
  View,
  Text,
  Picker,
  StyleSheet,
} from "react-native";

export default class SexPicker extends React.Component{
  render(){
    if (this.props.isVisible){
      return(
        <View style={styles.picker_container}>
          <View style={styles.picker_text_container}>
            <Text onPress={this.props._hidePicker} style={styles.picker_text}>完了</Text>
          </View>
          <Picker
            {...this.props}
            style={styles.picker}
          >
            <Picker.Item label="男性" value="男性" />
            <Picker.Item label="女性" value="女性" />
          </Picker>
        </View>
      );
    }
    else{
      return(
        null
      );
    }
  }
}

const styles = StyleSheet.create({
  picker_text_container:{
    flexDirection: "row",
    justifyContent: "flex-end",
    backgroundColor: "white",
  },
  picker_container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  picker_text: {
    fontSize: 18,
    color: lightBlue,
    padding: 10,
    backgroundColor: "white",
  },
  picker: {
    backgroundColor: "white",
  },
});
