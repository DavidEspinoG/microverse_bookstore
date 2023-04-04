import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getBooks } from '../../api';

const fetchBooks = createAsyncThunk(
  'books/fetch',
  async () => {
    const data = await getBooks();
    const books = data;
    return books;
  },
);

const initialState = {
  books: [],
  loading: true,
  error: false,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setError(state, action) {
      return {
        ...state,
        error: action.payload,
      };
    },
    setLoading(state, action) {
      return {
        ...state,
        loading: action.payload,
      };
    },
    addBookLocal(state, action) {
      const newState = JSON.parse(JSON.stringify(state));
      newState.books[action.payload.id] = [{
        title: action.payload.title,
        author: action.payload.author,
        category: action.payload.category,
      }];
      return newState;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchBooks.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        books: action.payload,
      }))
      .addCase(fetchBooks.rejected, (state) => ({
        ...state,
        loading: false,
        error: true,
      }));
  },
});

export const booksReducer = booksSlice.reducer;
export const { setError, setLoading, addBookLocal } = booksSlice.actions;
export { fetchBooks };
