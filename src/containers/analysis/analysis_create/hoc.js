import baseHigherOrderComponentEnhancer from "enhances";
import { getAnalysisGames } from "../actions/get_games";

export default function enhancer(ComponentClass) {
  const BaseHOComponentClass = baseHigherOrderComponentEnhancer(ComponentClass);
  return class AnalysisCreateHOC extends BaseHOComponentClass {
    constructor(props) {
      super(props);
      this.getGameInformationForm.bind(this);
    }
    getGameInformationForm() {
      const { dispatch } = this.props;
      const sampleData = {
        data: {
          user_id: 2,
          opponent_user: 1,
          victory: 1,
        },
      };
      dispatch(getAnalysisGames(sampleData));
    }
    render() {
      return (
        super.render()
      );
    }
  };
}

