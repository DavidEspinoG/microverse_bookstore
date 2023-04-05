import '../styles/Book.css';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../api';
import { deleteBookLocal, setError } from '../redux/books/booksSlice';

const Book = ({
  title, author, id, category,
}) => {
  const dispatch = useDispatch();
  const clickHandler = async (id) => {
    try {
      await deleteBook(id);
      dispatch(deleteBookLocal(id));
    } catch {
      dispatch(setError(true));
    }
  };
  return (
    <div className="book-card">
      <div className="book-left">
        <div className="book-info">
          <p className="category">{category}</p>
          <p className="title">{title}</p>
          <p className="author">{author}</p>
        </div>
        <div className="book-actions">
          <p>Comments</p>
          <button type="button" onClick={() => { clickHandler(id); }}>Remove</button>
          <p>Edit</p>
        </div>
      </div>
      <div className="book-right">
        <div className="progress">
          <div className="progress-graph-container">
            <div className="progress-graph" />
          </div>
          <div className="progress-text">
            <p>64%</p>
            <p>Completed</p>
          </div>
        </div>
        <div className="chapter-progress">
          <p>Current chapter</p>
          <p>Chapter 17</p>
          <button type="button">Update progress</button>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
