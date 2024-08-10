import { createSlice } from "@reduxjs/toolkit";

export const filter = createSlice({
  name: "filters",
  initialState: { name: "" },
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export default filter.reducer;
export const selectNameFilter = (state) => state.filters.name;
export const { changeFilter } = filter.actions;
