import './styles.scss';

const Buttons = ({ label, handleButton, name }) => {
  return(
    <>
      <button className='button' name={name} onClick={handleButton}>{label}</button>
    </>
  );
};

export default Buttons;