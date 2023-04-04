import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getBooks } from '../../api';

const initialState = {
  books: [],
  loading: true,
  error: false,
};

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
  extraReducers(builder){
    builder
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.loading = false;
        const arrayOfArrays = Object.values(action.payload)
        const arrayOfObjects = [];
        arrayOfArrays.forEach(element => {
          arrayOfObjects.push(element[0])
        });
        state.books = arrayOfObjects;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.loading = false; 
        state.error = true;
      })
  }
});

const fetchBooks = createAsyncThunk(
  'books/fetch',
  async () => {
    const data = await getBooks();
    const books = data;
    return books
  }
)

export const booksReducer = booksSlice.reducer;
export const { add, remove } = booksSlice.actions;
export { fetchBooks };