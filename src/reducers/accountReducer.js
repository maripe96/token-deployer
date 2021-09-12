import { CHANGE_ACCOUNT } from "../actions/types";

const INITIAL_STATE = null;
const accountReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_ACCOUNT:
      return action.payload;
    default:
      return state;
  }
};

export default accountReducer;
