import ReactPlayer from 'react-player/youtube'
import GoTo from '../GoTo';
import './styles.scss';

const ShowGame = ({name, image, description, trailer, id }) => {
  return(
    <div className='containerShowGame'>
      <h3 className='titleShowGame'>{name}</h3>
      <img className='imgShowGame' src={image} alt={name} />
      <p className='desShowGame'>{description}</p>
      <div className='trailerPlay'>
        <div className='contentTrailer'>
          <p className='titleTrailer'>Trailer game</p>
          <ReactPlayer 
            url={trailer}
            width='100%'
            height='100%'
          />
        </div>
        <div className='divPlayGame'>
          <GoTo 
            goGames='PLAY GAME' 
            arrow='https://icongr.am/octicons/chevron-right.svg?size=56&color=750b0b'
            alt='Arrow'
            id={id}
            playgame
          />
        </div>
      </div>
    </div>
  )
};

export default ShowGame;