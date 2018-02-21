import { hideScoreCreateModal } from "../../../../shared/redux/view/actions";
import { setShotType } from "../../../actions/set_score";

export function scoreCreateShotTypeButtonEnhancer(ComponentClass) {
  return class HOComponent extends ComponentClass {
    setShotTypeEvent(shotTypeId) {
      const { dispatch } = this.props;
      dispatch(setShotType(shot_type_id));
    }
    hideModalEvent() {
      const { dispatch } = this.props;
      dispatch(hideScoreCreateModal());
    }
    render() {
      return (
        super.render()
      );
    }
  };
}
