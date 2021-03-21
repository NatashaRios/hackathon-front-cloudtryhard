import GoTo from '../GoTo';
import './styles.scss';


const ShowGames = () => {
  return(
    <>
      <GoTo 
        goGames='GO TO THE GAMES' 
        arrow='https://icongr.am/octicons/chevron-right.svg?size=56&color=750b0b'
        alt='Arrow'
        games
      />
    </>
  );
};

export default ShowGames;