import { Link, Outlet } from 'react-router-dom';
import styles from '../styles/Header.module.css';

const Header = () => (
  <>
    <header className={styles.header}>
      <h1>Math Magicians</h1>
      <nav>
        <ul className={styles.navLinks}>
          <li>
            <Link to="MathMagicians/"> Home |&nbsp;</Link>
          </li>
          <li>
            <Link to="MathMagicians/calculate">Calculator |&nbsp;</Link>
          </li>
          <li>
            <Link to="MathMagicians/quotes">  Quotes </Link>
          </li>
        </ul>
      </nav>
    </header>
    <Outlet />
  </>
);

export default Header;
