import { CHANGE_TO_MAIN, CHANGE_TO_MAP, CHANGE_TO_INVENTORY } from "../actions/types";

const initialState = {
  view: 1
};

export default function(state = initialState, action){
  switch(action.type){
    case CHANGE_TO_MAIN:
      return {
        ...state,
        view: 1
      }
    case CHANGE_TO_INVENTORY:
      return {
        ...state,
        view: 2
      }
    case CHANGE_TO_MAP:
      return {
        ...state,
        view: 3
      }
    default:
      return state;
  }
};