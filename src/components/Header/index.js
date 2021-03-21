import { Link } from 'react-router-dom';
import './styles.scss';

const Header = () => {
  return(
    <header className='containerHeader'>
      <nav className='navbar'>
        <div className='divName'>
          <Link to={'/'}>
            <p className='name'>Cloud Tryhard</p>
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
  )
};

export default Header;