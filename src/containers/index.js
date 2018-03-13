import AnalysisCreate from "./analysis/AnalysisCreate";
import AnalysisSearchUser from "./analysis/AnalysisSearchUser";
import AnalysisView from "./analysis/AnalysisView";
import GameCreate from "./game/GameCreate";
import GameSearchUser from "./game/GameSearchUser";
import Login from "./authentication/Login";
import ProfileEdit from "./profile/ProfileEdit";
import ProfileTop from "./profile/ProfileTop";
import ScoreCreate from "./game/ScoreCreate";
import ScoreView from "./game/ScoreView";
import SignUp from "./authentication/SignUp";
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
