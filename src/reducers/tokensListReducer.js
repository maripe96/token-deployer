import { DEFAULT_TOKENS } from "../helpers/DEFAULT_TOKENS";
import { ADD_TOKEN, REMOVE_TOKEN } from "../actions/types";

const INITIAL_STATE = DEFAULT_TOKENS;

const tokensListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TOKEN:
      return [...state, action.payload];
    case REMOVE_TOKEN:
      return state.filter((token) => token.address !== action.payload);
    default:
      return state;
  }
};

export default tokensListReducer;
