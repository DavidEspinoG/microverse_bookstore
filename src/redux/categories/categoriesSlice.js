import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    message: 'Under construction',
  },
  reducers: {
    check: (state) => state.message,
  },
});
console.log(categoriesSlice.actions.check)
export const categoriesReducer = categoriesSlice.reducer;

export const { check } = categoriesSlice.actions;
