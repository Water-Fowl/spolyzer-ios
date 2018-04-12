import React from "react";
import { SegmentedControl } from "react-native-ios-kit";

export default class Segment extends React.Component {
  render() {
    return (
      <SegmentedControl
        values={this.props.values}
        selectedIndex={this.props.selectedIndex}
        onValueChange={(value, index) =>
          this.setState({
            selectedValue: value,
            selectedIndex: index
          })
        }
        style={{ width: 222, alignSelf: "center" }}
      />
    );
  }
}
