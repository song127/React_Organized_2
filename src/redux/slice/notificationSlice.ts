import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { NotificationType } from "@/types/domain/NotificationTypes";

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
