import AnalysisCreate from "./templates/AnalysisCreate";
import AnalysisSearchUser from "./templates/AnalysisSearchUser";
import AnalysisView from "./templates/AnalysisView";
import GameCreate from "./templates/GameCreate";
import GameSearchUser from "./templates/GameSearchUser";
import Login from "./templates/Login";
import ProfileEdit from "./templates/ProfileEdit";
import ProfileTop from "./templates/ProfileTop";
import ScoreCreate from "./templates/ScoreCreate";
import ScoreView from "./templates/ScoreView";
import SignUp from "./templates/SignUp";
import Confirmation from "./templates/Confirmation";
/* Reducersのimport  */
import analysisReducer from "./analysis/reducer";
import authenticationReducer from "./authentication/reducer";
import gameReducer from "./game/reducer";
import profileReducer from "./profile/reducer";

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
  Confirmation,
  /* Reducersのexport */
  analysisReducer,
  gameReducer,
  profileReducer,
  authenticationReducer
};
