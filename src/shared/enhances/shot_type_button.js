import { hideModal } from '../actions/score';

export function scoreCreateShotTypeButtonEnhancer(ComponentClass) {
  return class HOComponent extends ComponentClass {
    hideModalEvent() {
      const { dispatch } = this.props;
      dispatch(hideModal());
    }
    render() {
      return (
        super.render()
      );
    }
  };
}

