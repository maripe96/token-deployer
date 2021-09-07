import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import accountReducer from "./accountReducer";
import web3Reducer from "./web3Reducer";

export default combineReducers({
  account: accountReducer,
  web3: web3Reducer,
  form: formReducer,
});
