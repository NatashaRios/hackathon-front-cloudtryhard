import './styles.scss';

const FilterGame = ({ title, name, handleClick }) => {
  return(
    <>
      <p className='filterGames' name={name} onClick={handleClick}>{title}</p>
    </>
  )
};

export default FilterGame;