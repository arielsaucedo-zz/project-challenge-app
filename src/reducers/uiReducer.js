import { types } from "../types/types";

const initialState = {
  modalOpenProject: false,
  modalOpenTask: false,
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.uiOpenModalProject:
      return {
        ...state,
        modalOpenProject: true,
      };

    case types.uiCloseModalProject:
      return {
        ...state,
        modalOpenProject: false,
      };

    case types.uiOpenModalTask:
      return {
        ...state,
        modalOpenTask: true,
      };

    case types.uiCloseModalTask:
      return {
        ...state,
        modalOpenTask: false,
      };

    default:
      return state;
  }
};
