import { types } from "../types/types";

export const uiOpenModalProject = () => {
  return {
    type: types.uiOpenModalProject,
  };
};

export const uiCloseModalProject = () => {
  return {
    type: types.uiCloseModalProject,
  };
};

export const uiOpenModalTask = () => {
  return {
    type: types.uiOpenModalTask,
  };
};

export const uiCloseModalTask = () => {
  return {
    type: types.uiCloseModalTask,
  };
};
