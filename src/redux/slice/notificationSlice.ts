import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { NotificationType } from "@/types/domain/NotificationTypes";

export enum NotificationActionEnum {
  // common action
  ERROR = "error",
  // notification action
  ALARM_1 = "alarm_1",
  ALARM_2 = "alarm_2",
  ALARM_3 = "alarm_3",
  // inner action
  SET_STATUS = "set_status",
}

export enum NotificationStatusEnum {
  SUCCESS = "success",
  FAILED = "failed",
}

interface NotificationState {
  latestNotification: NotificationType | null;
}

const initialState: NotificationState = {
  latestNotification: null,
};

export const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    setNotification: (state, action: PayloadAction<NotificationType>) => {
      state.latestNotification = action.payload;
    },
    clearNotification: (state) => {
      state.latestNotification = null;
    },
  },
});

export const { setNotification, clearNotification } = notificationSlice.actions;

const notificationReducer = notificationSlice.reducer;
export default notificationReducer;
