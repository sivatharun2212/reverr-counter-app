import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  counters: counterReducer,
  user: userReducer,
});

export default rootReducer;