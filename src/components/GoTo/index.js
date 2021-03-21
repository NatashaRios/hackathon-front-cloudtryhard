import { Link } from 'react-router-dom';
import './styles.scss';

const GoTo = ({ goGames, arrow, alt, games, subscribe, playgame, id }) => {
  return(
    <>
      {games && (
        <Link to='/Games'>
          <div className='divGoGames'>
            <p className='goGames'>{goGames}</p>
            <img className='arrowGames' src={arrow} alt={alt} />
          </div>
        </Link>
      )}
      {subscribe && (
        <Link to='/Subscribe'>
          <div className='divGoGames'>
            <p className='goGames'>{goGames}</p>
            <img className='arrowGames' src={arrow} alt={alt} />
          </div>
        </Link>
      )}
      {playgame && (
         <Link to={`/PlayGame/${id}`}>
         <div className='divGoGames'>
           <p className='goGames'>{goGames}</p>
           <img className='arrowGames' src={arrow} alt={alt} />
         </div>
       </Link>
      )}
    </>
  );
};

export default GoTo;