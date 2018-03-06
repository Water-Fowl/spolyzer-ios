import AnalysisCreate from "./analysis/analysis_create";
import AnalysisSearchUser from "./analysis/analysis_search_user";
import AnalysisView from "./analysis/analysis_view";
import GameCreate from "./game/game_create";
import GameSearchUser from "./game/game_search_user";
import Login from "./authentication/login";
import ProfileEdit from "./profile/profile_edit";
import ProfileTop from "./profile/profile_top";
import ScoreCreate from "./game/score_create";
import ScoreView from "./game/score_view";
import SignUp from "./authentication/sign_up";
/* Reducersのimport  */
import analysisReducer from "./analysis/reducer";
import authenticationReducer from "./authentication/reducer";
import gameReducer from "./game/reducer";
import profileReducer from "./profile/reducer";
import viewReducer from "./shared/redux/view/reducer";

export {
  /* Componentのexport */
  AnalysisCreate,
  AnalysisSearchUser,
  AnalysisView,
  ScoreCreate,
  GameCreate,
  GameSearchUser,
  ScoreView,
  ProfileTop,
  ProfileEdit,
  SignUp,
  Login,
  /* Reducersのexport */
  analysisReducer,
  gameReducer,
  profileReducer,
  authenticationReducer,
  viewReducer
};
