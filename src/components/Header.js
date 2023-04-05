import '../styles/Header.css';
import { NavLink } from 'react-router-dom';
import logo from '../assets/userLogo.svg';

const Header = () => (
  <header className="header">
    <div className="header-left">
      <h1>Book Store CMS</h1>
      <NavLink to="/">Books</NavLink>
      <NavLink to="/categories">Categories</NavLink>
    </div>
    <div className="header-right">
      <div className="logo-container">
        <img src={logo} alt="user logo" className="user-logo" />
      </div>
    </div>
  </header>
);

export default Header;
