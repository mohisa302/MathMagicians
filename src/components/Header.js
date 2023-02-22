import { Link, Outlet } from 'react-router-dom';
import styles from '../styles/Header.module.css';

const Header = () => (
  <>
    <header className={styles.header}>
      <h1>Math Magicians</h1>
      <nav>
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/calculate"> Home </Link>
          </li>
          <li>
            <Link to="/quotes"> Quotes </Link>
          </li>
        </ul>
      </nav>
    </header>
    <Outlet />
  </>
);

export default Header;
