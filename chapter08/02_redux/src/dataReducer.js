import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: { things: ["hello"] },
  // actions:{}
};

const dataSlice = createSlice({
  name: "dataReducer",
  initialState,
  reducers: {
    addThing: (state, { payload: newThing }) => {
      state.data.things = state.data.things.concat(newThing);
    },
  },
});

export const { addThing } = dataSlice.actions;
export default dataSlice.reducer;
