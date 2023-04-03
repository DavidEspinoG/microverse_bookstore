import { createSlice } from '@reduxjs/toolkit';

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
  },
  reducers: {
    add: (state, action) => state.books.push(action.payload),
    remove: (state, action) => state.books.push(action.payload),
  },
});

export const booksReducer = booksSlice.reducer;

export const { add, remove } = booksSlice.actions;
