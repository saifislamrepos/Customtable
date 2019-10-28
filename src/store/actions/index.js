import {
  ASSIGN_DATA,UPDATE_DATA,CHANGE_RESULT_SIZE,SET_SORTDATA,SET_THEME
} from "../constants/action-types";
export const assigndata = payload => ({
  type: ASSIGN_DATA,
  payload
})
export const updatedata = payload => ({
  type: UPDATE_DATA,
  payload
})
export const changeresultsize = payload => ({
  type: CHANGE_RESULT_SIZE,
  payload
})
export const setsortdata = payload => ({
  type: SET_SORTDATA,
  payload
})
export const setselectedtheme = payload => ({
  type: SET_THEME,
  payload
})
