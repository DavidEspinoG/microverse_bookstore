import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { remove } from '../redux/books/booksSlice';

const Book = ({ title, author, id }) => {
  const dispatch = useDispatch();
  const clickHandler = (id) => {
    dispatch(remove(id));
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
  id: PropTypes.number.isRequired,
};

export default Book;
