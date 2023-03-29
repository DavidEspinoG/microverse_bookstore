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
      {show ? <p>The project is in progress</p> : ''}
      <button type="button" onClick={handleClick}>Check for status</button>
    </>
  );
};

export default Categories;
