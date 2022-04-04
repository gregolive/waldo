import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <header>
      <Link to='/'>
        <h1>WHERE'S <span>WALDO?</span></h1>
      </Link>
    </header>
  );
};

export default Header;
