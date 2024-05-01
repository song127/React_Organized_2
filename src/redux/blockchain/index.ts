// import { PayloadAction, createSlice } from "@reduxjs/toolkit";
// import Web3 from "web3";

// export interface BlockchainState {
//   account: string;
//   provider: Web3;
//   chainId: number;
// }

// const initialState: BlockchainState = {
//   account: "",
//   provider: null,
//   chainId: -1,
// };

// export const blockchainSlice = createSlice({
//   name: "blockchain",
//   initialState,
//   reducers: {
//     setAccount: (state, action: PayloadAction<string>) => {
//       state.account = action.payload;
//     },
//     setProvider: (state, action: PayloadAction<any>) => {
//       state.provider = action.payload;
//     },
//     setChainId: (state, action: PayloadAction<number>) => {
//       state.chainId = action.payload;
//     },
//   },
// });

// export const blockchainActions = blockchainSlice.actions;

// export default blockchainSlice.reducer;