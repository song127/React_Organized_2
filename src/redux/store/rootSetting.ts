// root reducer
import { combineReducers } from "@reduxjs/toolkit";

import modalReducer from "@/redux/slice/modalSlice";
import notificationReducer from "@/redux/slice/notificationSlice";
import tickDataReducer from "@/redux/slice/tickDataSlice";

const rootReducer = combineReducers({
  notification: notificationReducer,
  modal: modalReducer,
  tickData: tickDataReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;

// root selector
export const selectNotificationState = (state: RootState) => state.notification;
export const selectModalState = (state: RootState) => state.modal;
export const selectTickDataState = (state: RootState) => state.tickData;
