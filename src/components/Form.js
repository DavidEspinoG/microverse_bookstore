import '../styles/Form.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../api';
import { addBookLocal, setError } from '../redux/books/booksSlice';

const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await addBook(title, author);
      const newBook = {
        author,
        title,
        category: 'Comedy',
        id: title + author,
      };
      dispatch(addBookLocal(newBook));
      setTitle('');
      setAuthor('');
    } catch {
      dispatch(setError(true));
    }
  };
  const changeTitleHandler = (e) => {
    setTitle(e.target.value);
  };
  const changeAuthorHandler = (e) => {
    setAuthor(e.target.value);
  };
  return (
    <div className="form-container">
      <h2 className="form-title">Add new book</h2>
      <form onSubmit={submitHandler} className="form">
        <input
          onChange={changeTitleHandler}
          type="text"
          name="title"
          placeholder="Book title"
          value={title}
          className="form-title-input"
        />
        <input
          onChange={changeAuthorHandler}
          type="text"
          name="author"
          placeholder="Book author"
          value={author}
          className="form-author-input"
        />
        <button
          type="submit"
          className="submit-button"
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default Form;
