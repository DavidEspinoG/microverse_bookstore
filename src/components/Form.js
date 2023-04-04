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
    <form onSubmit={submitHandler}>
      <input
        onChange={changeTitleHandler}
        type="text"
        name="title"
        placeholder="Book title"
        value={title}
      />
      <input
        onChange={changeAuthorHandler}
        type="text"
        name="author"
        placeholder="Book author"
        value={author}
      />
      <button
        type="submit"
      >
        Add Book
      </button>
    </form>
  );
};

export default Form;
