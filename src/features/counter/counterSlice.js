import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    itemAdded: (state, action) => {
      state.push(action.payload);
    },
    itemRemoved: (state, action) => {
      const indexOfObject = state.findIndex((object) => {
        return object.id === action.payload;
      });
      indexOfObject !== -1 && state.splice(indexOfObject, 1);
    },
    allItemsRemoved: (state, action) => {
      const filteredState = state.filter((object) => {
        return object.id !== action.payload;
      });
      state.splice(0, state.length, ...filteredState);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  increment,
  decrement,
  incrementByAmount,
  itemAdded,
  itemRemoved,
  allItemsRemoved,
} = counterSlice.actions;

export default counterSlice.reducer;
