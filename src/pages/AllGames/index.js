/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import CardGame from '../../components/CardGame';
import FilterGame from '../../components/FilterGame';
import Footer from '../../components/Footer';

import './styles.scss';

const AllGames = () => {
  const [allGames, setAllGames] = useState([]);
  const [selectFilter, setSelectFilter] = useState('All')

  const handleClick = (e) => {
    setSelectFilter(e.target.innerText)
  };
  
  useEffect(() => {
    getGames();
  }, [getGames]);

  async function getGames(){
    if(selectFilter == 'All'){
      const games = await fetch('https://tryhard-cloud-api.herokuapp.com/games');
      const gamesJson = await games.json();
      
      setAllGames(gamesJson);
    }else{
      const games = await fetch(`https://tryhard-cloud-api.herokuapp.com/games/category/${selectFilter}`);
      const gamesJson = await games.json();
      
      setAllGames(gamesJson);
    }
  };

  return(
    <>
      <Header />
      <h3 className='titleGames'>Games</h3>
      <div className='containerAllGames'>
        <div className='containerGames'>
        {allGames.map((game) => {
          return(
              <CardGame 
                id={game._id} 
                name={game.name}
                image={game.image}
              />
              )
            })}
          </div>
          <div>
            <p className='titleCategories'>Categories</p>
            <FilterGame title='All' handleClick={handleClick}/>
            <FilterGame title='Rpg' handleClick={handleClick}/>
            <FilterGame title='Action' handleClick={handleClick}/>
          </div>
      </div>
      <Footer />
    </>
  )
};

export default AllGames;