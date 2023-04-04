import '../styles/Header.css';
import { NavLink } from 'react-router-dom';
import logo from '../assets/userLogo.svg';

const Header = () => (
  <header className="header">
    <div className="header-right">
      <h1>Book Store</h1>
      <nav>
        <NavLink to="/">Books</NavLink>
        <NavLink to="/categories">Categories</NavLink>
      </nav>
    </div>
    <div className="header-left">
      <img src={logo} alt="user logo" className="user-logo" />
    </div>
  </header>
);

export default Header;
