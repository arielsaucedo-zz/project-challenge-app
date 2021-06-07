import { types } from "../types/types";

const initialState = {
  project: [],
  active: null,
  tasks: [],
  activeTask: null,
};

export const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.projectActive:
      return {
        ...state,
        active: {
          ...action.payload,
        },
      };

    case types.projectAddNew:
      return {
        ...state,
        project: [action.payload, ...state.project],
      };

    case types.projectDelete:
      return {
        ...state,
        active: null,
        project: state.project.filter(
          (project) => project.id !== action.payload
        ),
      };

    case types.taskAddNew:
      return {
        ...state,
        tasks: [action.payload, ...state.tasks],
      };

    case types.tasktActive:
      return {
        ...state,
        activeTask: {
          ...action.payload,
        },
      };

    case types.tasktComplete:
      return {
        ...state,
        tasks: state.tasks.filter((tasks) => tasks.id !== action.payload),
      };

    default:
      return state;
  }
};
