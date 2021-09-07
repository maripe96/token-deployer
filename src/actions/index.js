import { CHANGE_ACCOUNT } from "./types";

export const changeAccount = (account) => {
  return {
    type: CHANGE_ACCOUNT,
    payload: account,
  };
};
