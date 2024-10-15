// src/redux/slices/modalSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ModalPropsMap, ModalType } from "@/types/domain/ModalTypes";

interface BaseModalProps {
  [key: string]: any;
}

interface ModalState {
  modals: {
    modalType: ModalType;
    modalProps: BaseModalProps;
  }[];
}

const initialState: ModalState = {
  modals: [],
};

type OpenModalPayload = {
  [K in ModalType]: {
    modalType: K;
    modalProps: ModalPropsMap[K];
  };
}[ModalType];

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal(state, action: PayloadAction<OpenModalPayload>) {
      // console.log(action.payload);
      state.modals.push({
        modalType: action.payload.modalType,
        modalProps: action.payload.modalProps || {},
      });
    },
    closeModal(state) {
      state.modals.pop();
    },
    closeAllModals(state) {
      state.modals = [];
    },
  },
});

export const { openModal, closeModal, closeAllModals } = modalSlice.actions;
const modalReducer = modalSlice.reducer;
export default modalReducer;
