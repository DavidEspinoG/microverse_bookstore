import { Outlet, NavLink } from 'react-router-dom';

function App() {
  return (
    <>
      <h1>Book Store</h1>
      <nav>
        <NavLink to="/">Books</NavLink>
        <NavLink to="/categories">Categories</NavLink>
      </nav>
      <Outlet />
    </>
  );
}

export default App;
