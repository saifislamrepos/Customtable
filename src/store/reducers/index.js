import {SET_THEME,ASSIGN_DATA ,UPDATE_DATA,CHANGE_RESULT_SIZE,SET_SORTDATA} from "../constants/action-types";
import {selectcounter} from '../../config'
const initialState = {
  themes: [],
  data:[],
  sort:{
    key:'nm',
    rev:false
  },
  page:0,
  resultperpage:selectcounter[0],
  totalresult:0,
  selectedtheme:{}
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ASSIGN_DATA:
      return {
        ...state,...action.payload
      };
    case UPDATE_DATA:
      return {
        ...state,
        data:action.payload.data,
        page:action.payload.page,
      };
    case CHANGE_RESULT_SIZE:
      return {
        ...state,
        resultperpage:action.payload,

      };
    case SET_SORTDATA:
      return {
        ...state,
        sort:action.payload,

      };
    case SET_THEME:
      return {
        ...state,
        selectedtheme:action.payload,

      };
    
      default:
        return state;
  }
}
export default rootReducer;