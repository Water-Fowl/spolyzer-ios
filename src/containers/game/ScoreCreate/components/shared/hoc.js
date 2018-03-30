import React from "react";

import {
  setPositionAndSide,
  setScoreCreateModal
} from "../../../actions";

export function fieldButtonEnhancer(ComponentClass) {
  return class FieldButtonHOC extends ComponentClass {
    constructor(props) {
      super(props);
      this.setModalEvent.bind(this);
    }
    setModalEvent(position, side) {
      const { dispatch } = this.props;
      dispatch(setScoreCreateModal());
      dispatch(setPositionAndSide(position, side));
    }
    render() {
      return (
        super.render()
      );
    }
  };
}

