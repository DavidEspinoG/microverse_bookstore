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

export { deleteBook, getBooks };
