import { Link } from 'react-router-dom';
import './styles.scss';

const Header = () => {
  return (
    <header className='containerHeader'>
      <nav className='navbar'>
        <div className='divLogo'>
          <Link to={'/'}>
            <img
              src='https://icongr.am/entypo/game-controller.svg?size=140&color=f7eaea'
              className='cloudLogo'
              alt='logo'
            />
          </Link>
        </div>
        <div className='divItems'>
          <ul className='itemsHeader'>
            <Link to={'/Games'}>
              <li className='itemHeader'> Games </li>
            </Link>
            <Link to={'/Subscribe'}>
              <li className='itemHeader'> Subscribe </li>
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
