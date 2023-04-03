import { Outlet, NavLink } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <h1>Book Store</h1>
      <nav>
        <NavLink to="/">Books</NavLink>
        <NavLink to="/categories">Categories</NavLink>
      </nav>
      <Outlet />
    </Provider>
  );
}

export default App;
