import React from 'react';

export function fieldButtonEnhancer(ComponentClass) {
  return class FieldButtonHOC extends ComponentClass {
    constructor(props) {
      super(props);
      this.postPositionEvent();
    }
    postPositionEvent() {
      const { dispatch } = this.props;
    }
    render() {
      return (
        super.render()
      );
    }
  };
}

