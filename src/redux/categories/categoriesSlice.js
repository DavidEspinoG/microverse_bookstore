import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
  },
  reducers: {
    check: (state) => state,
  },
});

export const categoriesReducer = categoriesSlice.reducer;

export const { check } = categoriesSlice.actions;
