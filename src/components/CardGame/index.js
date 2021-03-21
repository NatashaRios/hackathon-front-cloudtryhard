import { Link } from 'react-router-dom';
import './styles.scss';

const CardGame = ({ name, image, id }) => {
  return(
    <Link to={`/Game/${id}`}>
      <div className='containerGame'>
        <img className='imgGame' src={image} alt={name} />
        <p className='nameGame'>{name}</p>
      </div>
    </Link>
  )
};

export default CardGame;