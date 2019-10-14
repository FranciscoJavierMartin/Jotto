import { actionTypes } from '../actions';

/**
 * @function secretWordReducer
 * @param {string} state - State before reducer.
 * @param {object} action - Action sent to reducer.
 * @returns {string} - New state (secret word payload from action).
 */
export default(state= null, action: any) => {
  let res;

  switch(action.type){
    case actionTypes.SET_SECRET_WORD:
      res = action.payload;
      break;
    default:
      res = state;
  }
  return res;
}