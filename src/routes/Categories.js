import '../styles/Categories.css';
import { useState } from 'react';

const Categories = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow((prevState) => !prevState);
    setTimeout(() => {
      setShow(() => false);
    }, 3000);
  };

  return (
    <>
      {show ? <p className="inprogress-text">This section is in progress</p> : ''}
      <button
        className="categories-button"
        type="button"
        onClick={handleClick}
      >
        Check for status
      </button>
    </>
  );
};

export default Categories;
