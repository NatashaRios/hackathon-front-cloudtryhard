import './styles.scss';

const Inputs = ({ label, placeholder, type, handleInput, name }) => {
  return(
    <div className='containerInput'>
      <p className='labelInput'>{label}</p>
      <input 
        className='input' 
        placeholder={placeholder} 
        name={name}
        type={type} 
        onChange={handleInput}
      />
    </div>
  );
};

export default Inputs;