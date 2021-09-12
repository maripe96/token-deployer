import Web3 from "web3";

const INITIAL_STATE = new Web3(
  "https://mainnet.infura.io/v3/9ea7f8ab0d9846ab9cf126640abb42f1"
);

const web3Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default web3Reducer;
