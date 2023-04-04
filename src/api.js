import axios from 'axios';

const apiKey = 'LHTiSHtHeUsffIjtiqvs';
const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';

const getBooks = async () => {
  try {
    const res = await axios.get(`${baseUrl}${apiKey}/books`);
    return res.data;
  } catch(err) {
    console.log(err)
  }
};

export { getBooks };
