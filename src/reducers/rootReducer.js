import { combineReducers } from "redux";
import { projectReducer } from "./projectReducer";

import { uiReducer } from "./uiReducer";

export const rootReducer = combineReducers({
  ui: uiReducer,
  projects: projectReducer,
});
