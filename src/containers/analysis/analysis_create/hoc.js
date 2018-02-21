import baseEnhancer from "enhances";

import { getGames } from "../actions/get_games";

export default function enhancer(ComponentClass) {
  const BaseHOComponentClass = baseEnhancer(ComponentClass);
  return class AnalysisCreateHOC extends BaseHOComponentClass {
    constructor(props) {
      super(props);
      this.getGameInformationForm.bind(this);
    }
    getGameInformationForm() {
      const { dispatch } = this.props;
      const sampleData = {
        data: {
          userId: 2,
          opponentUser: 1,
          victory: 1
        }
      };
      dispatch(getGames(sampleData));
    }
    render() {
      return (
        super.render()
      );
    }
  };
}
