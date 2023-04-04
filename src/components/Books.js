import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Book from './Book';
import { fetchBooks } from '../redux/books/booksSlice';

const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);
  useEffect(() => {

    dispatch(fetchBooks());
  }, [dispatch, fetchBooks])
  return (
    <div>
      {books.map((el) => (
        <Book
          key={el.title}
          title={el.title}
          author={el.author}
          id={el.item_id}
        />
      ))}
    </div>
  );
};

export default Books;
