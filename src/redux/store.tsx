import { configureStore } from "@reduxjs/toolkit";
// import dataReducer from "@store/data";
// import blockchainReducer from "@store/blockchain";

export const store = configureStore({
  reducer: {
    // data: dataReducer,
    // blockchain: blockchainReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }), // to avoid serializable error -> 직렬화 불가능한 객체 전달 시 에러 발생
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
