import { UPDATE_PROGRAMS_LIST } from "./type";

export const initialState = {
  programs: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PROGRAMS_LIST:
      return { ...state, programs: action.payload }
    default:
      return state
  }
};
export default reducer;