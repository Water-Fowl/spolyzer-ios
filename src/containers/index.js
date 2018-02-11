import AnalysisCreate from "./analysis/analysis_create";
import AnalysisView from "./analysis/analysis_view";
import ScoreCreate from "./game/score_create";
import GameCreate from "./game/game_create";
import ScoreView from "./game/score_view";
import ProfileTop from "./profile/profile_top";
import ProfileEdit from "./profile/profile_edit";
import Login from "./authentication/login";
import SignUp from "./authentication/sign_up";

/* Reducersのimport  */
import gameReducer from "./analysis/reducer";
import scoreReducer from "./game/reducer";
import authenticationReducer from "./authentication/reducer";

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
  /* Reducersのexport */
  gameReducer,
  scoreReducer,
  authenticationReducer,
};
