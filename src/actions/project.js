import { types } from "../types/types";

export const activeProject = (id, project) => {
  return {
    type: types.projectActive,
    payload: {
      id,
      ...project,
    },
  };
};

export const projectAddNew = (project) => {
  return {
    type: types.projectAddNew,
    payload: {
      ...project,
    },
  };
};
