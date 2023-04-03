import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../redux/books/booksSlice';

const Form = () => {
  const books = useSelector((state) => state.books);
  const getId = (books) => {
    const ids = books.map((element) => element.item_id);
    const max = Math.max(...ids);
    return max + 1;
  };
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: getId(books),
      title,
      author,
      category: 'fiction',
    };
    dispatch(add(newBook));
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
      />
      <input
        onChange={changeAuthorHandler}
        type="text"
        name="author"
        placeholder="Book author"
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
