import AnalysisView from "./analysis/analysis_view";
import ScoreCreate from "./game/score_create";
import GameCreate from "./game/game_create";
import ScoreView from "./game/score_view";
import ProfileTop from "./profile/profile_top";
import ProfileEdit from "./profile/profile_edit";
import Login from "./authentication/login";
import SignUp from "./authentication/sign_up";
import AnalysisCreate from './analysis/analysis_create';
import UserSearch from './shared/components/user_search';

/* Reducersのimport  */
import analysisReducer from "./analysis/reducer";
import gameReducer from "./game/reducer";
import authenticationReducer from "./authentication/reducer";
import viewReducer from "./shared/redux/view/reducer";

export {
  /* Componentのexport */
  AnalysisCreate,
  AnalysisView,
  ScoreCreate,
  GameCreate,
  ScoreView,
  ProfileTop,
  ProfileEdit,
  SignUp,
  Login,
  UserSearch,
  /* Reducersのexport */
  analysisReducer,
  gameReducer,
  authenticationReducer,
  viewReducer,
};
