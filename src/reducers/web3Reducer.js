import Web3 from "web3";

// SET web3 INITIAL STATE WITH PROVIDER AS new Web3(provider)

const INITIAL_STATE = {
  web3: null,
};

const web3Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default web3Reducer;
