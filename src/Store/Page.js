import { createSlice} from "@reduxjs/toolkit";

export const pageSlice = createSlice({
    name: 'page',
  initialState: {
    value: 0,
  },
  reducers: {
    next: (state) => {
      state.value += 1;
    },
    back: (state) => {
      state.value -= 1;
    },
  },
});
export const { back } = pageSlice.actions;
export const { next } = pageSlice.actions;
export default pageSlice.reducer;