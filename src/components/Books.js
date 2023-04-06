import '../styles/Books.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Book from './Book';
import { fetchBooks } from '../redux/books/booksSlice';

const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => {
    const arrayOfArrays = Object.values(state.books.books);
    const arrayOfObjects = [];
    arrayOfArrays.forEach((element) => {
      arrayOfObjects.push(element[0]);
    });
    const result = JSON.parse(JSON.stringify(arrayOfObjects));
    const ids = Object.keys(state.books.books);
    for (let i = 0; i < arrayOfObjects.length; i += 1) {
      result[i].id = ids[i];
    }
    return result;
  });
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  return (
    <div className="books-container">
      {books.map((item) => (
        <Book
          key={item.id}
          title={item.title}
          author={item.author}
          id={item.id}
          category={item.category}
        />
      ))}
    </div>
  );
};

export default Books;
