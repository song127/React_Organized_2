import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { sleep } from "@/utils/helper";

interface TickDataState {
  tickData: string;
  isLoadingTickData?: boolean;
}

const initialState: TickDataState = {
  tickData: "",
  isLoadingTickData: false,
};

interface FetchTickDataParams {
  data: any;
}

export const fetchTickData = createAsyncThunk<string, FetchTickDataParams>(
  "tickData/fetchTickData",
  async ({ data }: FetchTickDataParams, { rejectWithValue }) => {
    try {
      await sleep(2000);

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const tickDataSlice = createSlice({
  name: "tickData",
  initialState,
  reducers: {
    setTickData: (state, action: PayloadAction<string>) => {
      state.tickData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTickData.pending, (state) => {
      state.isLoadingTickData = true;
    });
    builder.addCase(fetchTickData.fulfilled, (state, action) => {
      state.isLoadingTickData = false;
      state.tickData = action.payload;
    });
    builder.addCase(fetchTickData.rejected, (state) => {
      state.isLoadingTickData = false;
    });
  },
});

export const { setTickData } = tickDataSlice.actions;

const tickDataReducer = tickDataSlice.reducer;
export default tickDataReducer;
