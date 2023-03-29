import Book from './Book';

const Books = () => {
  const books = [
    {
      title: 'Harry Potter',
      author: 'J.K. Rowling',
    },
    {
      title: 'Ensayo sobre la ceguera',
      author: 'José Saramago',
    },
    {
      title: 'Dracula',
      author: 'Bram Stocker',
    },
  ];
  return (
    <ul>
      {books.map((el) => <Book key={el.title} title={el.title} author={el.author} />)}
    </ul>
  );
};

export default Books;
