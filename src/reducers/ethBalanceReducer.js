import { SET_ETH_BALANCE } from "../actions/types";

const INITIAL_STATE = null;
const ethBalanceReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_ETH_BALANCE:
      return action.payload;
    default:
      return state;
  }
};

export default ethBalanceReducer;
