// root reducer
import { combineReducers } from "@reduxjs/toolkit";

import modalReducer from "@/redux/slice/modalSlice";

const rootReducer = combineReducers({
  // notification: notificationReducer,
  // blockchain: blockchainReducer,
  // userData: userDataReducer,
  modal: modalReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;

// root selector
// export const selectAssetState = (state: RootState) => state.asset;
// export const selectWalletState = (state: RootState) => state.wallet;
// export const selectNotificationState = (state: RootState) => state.notification;
// export const selectBlockchainState = (state: RootState) => state.blockchain;
// export const selectUserDataState = (state: RootState) => state.userData;
// export const selectPriceState = (state: RootState) => state.price;
export const selectModalState = (state: RootState) => state.modal;
