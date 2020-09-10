import {combineReducers} from "redux";
import {authReducer} from "../redux/auth/reducer";
import {reposReducer} from "../redux/repos/reducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  repos: reposReducer,
});