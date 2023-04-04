import axios from 'axios';

const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/LHTiSHtHeUsffIjtiqvs/books';

const getBooks = async () => {
  try {
    const res = await axios.get(`${baseUrl}`);
    return res.data;
  } catch (err) {
    return (err);
  }
};

const deleteBook = async (id) => {
  const res = await axios.delete(`${baseUrl}/${id}`, {
    data: {
      item_id: id,
    },
  });
  return res;
};

const addBook = async (title, author) => {
  const body = {
    item_id: title + author,
    title,
    author,
    category: 'Drama',
  };
  const res = await axios.post(baseUrl, body);
  return res;
};

export { deleteBook, getBooks, addBook };
