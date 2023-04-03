import { useSelector } from 'react-redux';
import Book from './Book';

const Books = () => {
  const books = useSelector((state) => state.books);
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
