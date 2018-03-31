import React from "react";
import {
  Picker,
  StyleSheet,
  Text,
  View
} from "react-native";
import { lightBlue } from "const";

export default class SexPicker extends React.Component{
  render(){
    if (this.props.isVisible){
      return(
        <View style={styles.pickerContainer}>
          <View style={styles.pickerTextContainer}>
            <Text onPress={this.props.hidePickerCallback} style={styles.pickerText}>完了</Text>
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
  pickerTextContainer:{
    flexDirection: "row",
    justifyContent: "flex-end",
    backgroundColor: "white"
  },
  pickerContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%"
  },
  pickerText: {
    fontSize: 18,
    color: lightBlue,
    padding: 10,
    backgroundColor: "white"
  },
  picker: {
    backgroundColor: "white"
  }
});
