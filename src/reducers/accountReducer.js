import { CHANGE_ACCOUNT } from "../actions/types";

const INITIAL_STATE = {
  account: "0x",
};

const accountReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_ACCOUNT:
      return { ...state, account: action.payload };
    default:
      return state;
  }
};

export default accountReducer;
