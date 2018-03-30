import React from "react";

import setShotTypeCounts from "../../../actions/set_shot_type_counts";

export function fieldButtonEnhancer(ComponentClass) {
  return class FieldButtonHOC extends ComponentClass {
    constructor(props) {
      super(props);
      this.setShotTypeCountsEvent.bind(this);
    }
    setShotTypeCountsEvent(missType=0) {
      const {
        dispatch,
        position,
        side
      } = this.props;
      dispatch(setShotTypeCounts(position, side, missType));
    }
    render() {
      return (
        super.render()
      );
    }
  };
}
