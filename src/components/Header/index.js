import { Link } from 'react-router-dom';
import './styles.scss';

const Header = () => {
  return(
    <header className='containerHeader'>
      <nav className='navbar'>
        <div className='divName'>
          <Link to={'/'}>
            <p className='name'>Jueguitos</p>
          </Link>
        </div>
        <div className='divItems'>
          <li className='itemsHeader'>
            <Link to={'/Games'}>
              <ul className='itemHeader'> Juegos </ul>
            </Link>
            <Link to={'/Suscribe'}>
              <ul className='itemHeader'> Suscribirse </ul>
            </Link>
          </li>
        </div>
      </nav>
    </header>
  )
};

export default Header;