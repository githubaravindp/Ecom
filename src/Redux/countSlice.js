import { createSlice } from "@reduxjs/toolkit";

const intialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: intialState,
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
  },
});

export const { increment } = counterSlice.actions;

export default counterSlice.reducer;
