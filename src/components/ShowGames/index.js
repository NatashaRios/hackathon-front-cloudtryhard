/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import GoTo from '../GoTo';
import CardGame from '../../components/CardGame';
import './styles.scss';

const ShowGames = ({ title }) => {
  const [cardGame, setCardGame] = useState([]);

  useEffect(() => {
    getGames();
  }, [getGames]);

  async function getGames() {
    const games = await fetch('https://tryhard-cloud-api.herokuapp.com/games');
    const gamesJson = await games.json();

    setCardGame(gamesJson);
  }

  return (
    <>
      <div className='divContainerCard'>
        <h3 className='titleFeaturedGames'>{title}</h3>
        <div className='divCardGame'>
          {cardGame.map((game) => {
            return (
              <CardGame id={game._id} name={game.name} image={game.image} />
            );
          })}
        </div>
      </div>
      <GoTo
        goGames='GO TO ALL GAMES'
        arrow='https://icongr.am/octicons/chevron-right.svg?size=56&color=750b0b'
        alt='Arrow'
        games
      />
    </>
  );
};

export default ShowGames;
