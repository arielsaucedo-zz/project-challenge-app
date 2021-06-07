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

export const deleteProject = (id) => {
  return {
    type: types.projectDelete,
    payload: id,
  };
};

export const taskAddNew = (task) => {
  return {
    type: types.taskAddNew,
    payload: {
      ...task,
    },
  };
};

export const tasktActive = (id, task) => {
  return {
    type: types.tasktActive,
    payload: {
      id,
      ...task,
    },
  };
};

export const taskComplete = (id) => {
  return {
    type: types.tasktComplete,
    payload: id,
  };
};
