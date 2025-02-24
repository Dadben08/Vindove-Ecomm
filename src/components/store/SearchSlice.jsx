import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  query: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.query = action.payload;
    },
  },
});

// Named export for actions
export const { setSearchTerm } = searchSlice.actions;

// Default export for the reducer
export default searchSlice.reducer;
