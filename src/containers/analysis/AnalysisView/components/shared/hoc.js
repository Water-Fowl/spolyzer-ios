import React from "react";

import setPositionsCount from "../../../actions/set_positions_count";

export function fieldButtonEnhancer(ComponentClass) {
  return class FieldButtonHOC extends ComponentClass {
    constructor(props) {
      super(props);
      this.setPositionEvent.bind(this);
    }
    setPositionEvent() {
      const { dispatch } = this.props;
      dispatch(setPositionsCount(this.state.minPosition, this.state.maxPosition, this.props.side));
    }
    render() {
      return (
        super.render()
      );
    }
  };
}

