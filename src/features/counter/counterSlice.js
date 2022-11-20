import { createSlice } from "@reduxjs/toolkit";

// const initialState = [
//   { id: "1", title: "First Post!", content: "Hello!" },
//   { id: "2", title: "Second Post", content: "More text" },
// ];

export const counterSlice = createSlice({
  //   name: "counter",
  //   initialState: {
  //     value: 0,
  //     // totalPrice: 0,
  //     // item: [{ id: "", name: "", price: 0, count: 0 }],
  //   },
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
