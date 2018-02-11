import React from "react";
import { setScoreCreateModal } from "../../../../shared/redux/view/actions";
import { setPositionAndSide } from "../../../actions";

export function fieldButtonEnhancer(ComponentClass) {
  return class FieldButtonHOC extends ComponentClass {
    constructor(props) {
      super(props);
      this.setModalEvent.bind(this);
    }
    setModalEvent() {
      const { dispatch } = this.props;
      dispatch(setScoreCreateModal());
      dispatch(setPositionAndSide(this.props.position, this.props.side));
    }
    render() {
      return (
        super.render()
      );
    }
  };
}

