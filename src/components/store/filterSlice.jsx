import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    searchQuery: "",
    category: "All",
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { setSearchQuery, setCategory } = filterSlice.actions;
export default filterSlice.reducer;
