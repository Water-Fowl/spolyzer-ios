import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import DatePicker from "react-native-datepicker";

import { mapStateToProps } from "../../modules/mapToProps";
import { $spolyzerDarkBlue } from "const";
import { connect } from "react-redux";

class DatePickerButtonList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: ""
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <DatePicker
          style={{
            width: this.props.width,
            justifyContent: "center"
          }}
          date={this.props.date}
          mode="date"
          placeholder={this.props.placeholder}
          format="YYYY/MM/DD"
          minDate={this.props.minDate}
          maxDate={this.props.maxDate}
          confirmBtnText="決定"
          cancelBtnText="キャンセル"
          showIcon={false}
          customStyles={{
            dateText: {
              color: "white",
              fontWeight: "bold"
            },
            placeholderText: {
              color: "white",
              fontWeight: "bold"
            },
            dateInput: {
              borderColor: "transparent"
            },
            btnTextConfirm: {
              color: $spolyzerDarkBlue
            }
          }}
          onDateChange={date => {
            this.props.callback(date);
          }}
        />
      </View>
    );
  }
}

export default connect(mapStateToProps)(DatePickerButtonList);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "transparent",
    borderColor: "#0a2444",
    height: 34,
    borderWidth: 1.5,
    borderRadius: 3,
    marginTop: 20
  }
});
