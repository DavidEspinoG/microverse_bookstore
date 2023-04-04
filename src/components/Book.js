import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../api';
import { fetchBooks, setError } from '../redux/books/booksSlice';

const Book = ({ title, author, id }) => {
  const dispatch = useDispatch();
  const clickHandler = async (id) => {
    try {
      await deleteBook(id);
      dispatch(fetchBooks());
    } catch {
      dispatch(setError(true));
    }
  };
  return (
    <div>
      {title}
      {' '}
      <span>{author}</span>
      <button
        type="button"
        onClick={() => clickHandler(id)}
      >
        Remove
      </button>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
