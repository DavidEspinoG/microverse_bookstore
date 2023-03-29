import { PropTypes } from 'prop-types';

const Book = ({ title, author }) => (
  <li>
    {title}
    {' '}
    <span>{author}</span>
  </li>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
