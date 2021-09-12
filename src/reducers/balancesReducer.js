import { SET_BALANCES } from "../actions/types";

const INITIAL_STATE = null;

const balancesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_BALANCES:
      return action.payload;
    default:
      return state;
  }
};

export default balancesReducer;
