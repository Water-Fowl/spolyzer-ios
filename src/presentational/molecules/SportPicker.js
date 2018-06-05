import React from "react";
import { Picker, StyleSheet, Text, View } from "react-native";

export default class SportPicker extends React.Component {
  setSportsPicker() {
    if (!this.props.sports) return;
    const pickerItems = [];
    for (let sport of this.props.sports) {
      pickerItems.push(
        <Picker.Item label={sport.name_ja} value={sport.id} key="sport.id" />
      );
    }
    return (
      <Picker
        {...this.props}
        style={styles.picker}
        itemStyle={{ color: "white" }}
      >
        {pickerItems}
      </Picker>
    );
  }
  render() {
    if (this.props.isVisible) {
      return (
        <View style={styles.pickerContainer}>
          <View style={styles.pickerTextContainer}>
            <Text onPress={this.props._hidePicker} style={styles.pickerText}>
              完了
            </Text>
          </View>
          {this.setSportsPicker()}
        </View>
      );
    } else {
      return null;
    }
  }
}

const styles = StyleSheet.create({
  pickerTextContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.9)"
  },
  pickerContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%"
  },
  pickerText: {
    fontSize: 18,
    color: "white",
    padding: 10,
    backgroundColor: "rgba(0,0,0,0.9)"
  },
  picker: {
    backgroundColor: "rgba(0,0,0,0.9)"
  }
});
