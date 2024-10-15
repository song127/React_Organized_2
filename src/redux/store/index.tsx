import { configureStore } from "@reduxjs/toolkit";

import notificationMiddleware from "@/redux/middleware/notificationMiddleware";
import rootReducer from "@/redux/store/rootSetting";

// import notificationMiddleware from "@/redux/middleware/notificationMiddleware";

/**
 * 각 역할에 대한 코드 이해 시 순서
 * rootReducer -> slice -> selectors -> useGlobal -> middleware
 */
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // to avoid serializable error -> 직렬화 불가능한 객체 전달 시 에러 발생
    }).concat(notificationMiddleware),
});

export type AppDispatch = typeof store.dispatch;
