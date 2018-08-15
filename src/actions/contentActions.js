import { CHANGE_TO_INVENTORY, CHANGE_TO_MAP, CHANGE_TO_MAIN } from './types';

export const changeToMain = () => dispatch => {
  dispatch({
    type: CHANGE_TO_MAIN,
  });
};
export const changeToMap = () => dispatch => {
  dispatch({
    type: CHANGE_TO_MAP,
  });
};
export const changeToInventory = () => dispatch => {
  dispatch({
    type: CHANGE_TO_INVENTORY,
  });
};