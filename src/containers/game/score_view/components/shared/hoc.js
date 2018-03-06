import React from "react";

import setShotTypeCounts from "../../../actions/set_shot_type_counts";

export function fieldButtonEnhancer(ComponentClass) {
  return class FieldButtonHOC extends ComponentClass {
    constructor(props) {
      super(props);
      this.setShotTypeCountsEvent.bind(this);
    }
    setShotTypeCountsEvent() {
      console.log("sss");
      const {
        dispatch,
        position,
        side
      } = this.props;
      dispatch(setShotTypeCounts(position, side));
    }
    render() {
      return (
        super.render()
      );
    }
  };
}

