import { PROGRAMS_LIST, UPDATE_PROGRAMS_LIST } from "./type";

const setterFn = (data) => {
  return data;
}

export const loadPrograms = (setter = setterFn) => {
  return {
    type: PROGRAMS_LIST,
    setter
  }
}

export const updateProgramList = (payload) => {
  return {
    type: UPDATE_PROGRAMS_LIST,
    payload
  }
}