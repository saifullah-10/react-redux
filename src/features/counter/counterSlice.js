import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  {
    id: 1,
    count: 0,
  },
  {
    id: 2,
    count: 0,
  },
];

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incriment: (currentState, action) => {
      const counterIndex = currentState.findIndex(
        (counter) => counter.id === action.payload
      );
      currentState[counterIndex].count++;
    },
    decrement: (currentState, action) => {
      const counterIndex = currentState.findIndex(
        (counter) => counter.id === action.payload
      );
      currentState[counterIndex].count--;
    },
  },
});

export default counterSlice.reducer;
export const { incriment, decrement } = counterSlice.actions;
