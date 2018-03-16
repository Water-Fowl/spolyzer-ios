import {
  setShotType
} from "../../../actions/set_score";
import {
  hideScoreCreateModal
} from "../../../actions/set_modal";

export function scoreCreateShotTypeButtonEnhancer(ComponentClass) {
  return class HOComponent extends ComponentClass {
    render() {
      return (
        super.render()
      );
    }
  };
}
