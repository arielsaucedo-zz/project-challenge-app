import { types } from "../types/types";

const initialState = {
  project: [],
  active: null,
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

    default:
      return state;
  }
};
