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
          <button type="button" className="book-action-button">Comments</button>
          <button
            type="button"
            onClick={() => { clickHandler(id); }}
            className="book-action-button"
          >
            Remove
          </button>
          <button
            type="button"
            className="book-action-button"
          >
            Edit
          </button>
        </div>
      </div>
      <div className="book-right">
        <div className="progress-line-container">
          <div className="progress">
            <div className="progress-graph-container">
              <div className="progress-graph" />
            </div>
            <div className="progress-text">
              <p className="progress-text-number">64%</p>
              <p className="progress-text-status">Completed</p>
            </div>
          </div>
          <div className="progress-line" />
        </div>
        <div className="chapter-progress">
          <p className="chapter-progress-title">Current chapter</p>
          <p className="chapter-progress-chapter">Chapter 17</p>
          <button
            className="update-progress-button"
            type="button"
          >
            Update progress
          </button>
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
