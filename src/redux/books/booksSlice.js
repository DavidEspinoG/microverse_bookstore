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
      // eslint-disable-next-line no-param-reassign
      state.error = action.payload;
    },
    setLoading(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.loading = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchBooks.fulfilled, (state, action) => {
        // eslint-disable-next-line no-param-reassign
        state.loading = false;
        // eslint-disable-next-line no-param-reassign
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state) => {
        // eslint-disable-next-line no-param-reassign
        state.loading = false;
        // eslint-disable-next-line no-param-reassign
        state.error = true;
      });
  },
});

export const booksReducer = booksSlice.reducer;
export const { setError, setLoading } = booksSlice.actions;
export { fetchBooks };
