import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import porfile from "./profile";

export default combineReducers({
  alert,
  auth,
  porfile,
});
