/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ShowGame from '../../components/ShowGame';
import './styles.scss';

const Game = () => {
  const [game, setGame] = useState({});

  const params = useParams();
  const id = params.game;
  
  useEffect(() => {
    getGame();
  }, []);

  async function getGame(){
    const game = await fetch(`https://tryhard-cloud-api.herokuapp.com/games/id/${id}`);
    const gameJson = await game.json();
    console.log(gameJson)
    setGame(gameJson);
  };

  return(
    <>
      <Link to='/Games'>
        <img src='https://icongr.am/feather/chevron-left.svg?size=92&color=750b0b' alt='Arrow' />
      </Link>
     <ShowGame name={game.name} image={game.image} description={game.description} trailer={game.trailer} id={game._id}/>
    </>
  );
};

export default Game;