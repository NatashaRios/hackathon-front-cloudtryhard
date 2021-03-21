import { Link, useParams } from 'react-router-dom';
import './styles.scss';

const PlayGame = () => {
  const params = useParams();
  const id = params.game;

  return(
    <>
      <Link to={`/Game/${id}`}>
        <img src='https://icongr.am/feather/chevron-left.svg?size=92&color=750b0b' alt='Arrow' />
      </Link>
      <p className='playGameText'>This game is not available at the moment</p>
    </>
  )
};

export default PlayGame;