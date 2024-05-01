import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const MODAL_TYPES = {
  NONE: "NONE",
  LOADING: "LOADING",
  BID: "BID",
  BID_SUCCESS: "BID_SUCCESS",
  REVEAL_SUCCESS: "REVEAL_SUCCESS",
  REFUND: "REFUND",
  NFT_CLAIM: "NFT_CLAIM",
};

interface DataState {
  modal: boolean;
  modalType: string;
  modalData: any;
  loading: boolean;
}

const initialState: DataState = {
  modal: false,
  modalType: MODAL_TYPES.NONE,
  modalData: null,
  loading: false,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<any>) => {
      state.modal = true;
      state.modalType = action.payload.type;
      state.modalData = action.payload.data;
    },
    closeModal: (state) => {
      state.modal = false;
      state.modalType = MODAL_TYPES.NONE;
      state.modalData = null;
    },
    startLoading: (state) => {
      state.loading = true;
      state.modal = true;
      state.modalType = MODAL_TYPES.LOADING;
    },
    endLoading: (state) => {
      state.loading = false;
      state.modal = false;
      state.modalType = MODAL_TYPES.NONE;
      state.modalData = null;
    },
  },
});

export const dataActions = dataSlice.actions;

export default dataSlice.reducer;
