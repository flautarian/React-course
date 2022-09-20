import { createSlice } from '@reduxjs/toolkit';
export const todoSlice = createSlice({
    name: 'name',
    initialState: {
        date: new Date(),
        desc: "",
        done: false,
    },
    reducers: {
        increment: (state, /* action */ ) => {
            state.counter += 1;
        },
    }
});
// Action creators are generated for each case reducer function
  export const { increment } = todoSlice.actions;