import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    item_id: 1,
    title: 'The Great Gatsby',
    author: 'John Smith',
    category: 'Fiction',
  },
  {
    item_id: 2,
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    category: 'Fiction',
  },
  {
    item_id: 3,
    title: 'The Selfish Gene',
    author: 'Richard Dawkins',
    category: 'Nonfiction',
  },
];

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      const index = state.findIndex((state) => state.item_id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const booksReducer = booksSlice.reducer;

export const { add, remove } = booksSlice.actions;
