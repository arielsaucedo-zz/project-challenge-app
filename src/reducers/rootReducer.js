import { combineReducers } from "redux";

import { uiReducer } from "./uiReducer";
import { projectReducer } from "./projectReducer";

export const rootReducer = combineReducers({
  ui: uiReducer,
  projects: projectReducer,
});
