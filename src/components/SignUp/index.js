/* eslint-disable eqeqeq */
import { useState } from 'react';
import Inputs from '../Inputs';
import Buttons from '../Buttons';
import { useNotEmpty } from '../../hooks/notEmpty';
import './styles.scss';

const SignUp = ({ title, badMessage, messageOk}) => {
  const [inputs, setInputs] = useState({});
  const [showMessage, setShowMessage] = useState(false);
  const [showMessageOk, setShowMessageOk] = useState(false);
  const requiredFields = ['username', 'email', 'password'];
  const errors = useNotEmpty(inputs, requiredFields);

  const handleInput = e => {
    const { value, name } = e.target;
    setInputs({...inputs, [name]: value});
  };
  
  const handleButton = async() => {
    if(errors == 0){
      setShowMessage(false);
      setShowMessageOk(true);
      
      const request = {
        method: 'POST',
        body: JSON.stringify({'name': 'test4', 'price': 100, 'unit': 1, 'img': 'test'}),
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include'
      };
      const subscribe = await fetch('https://tryhard-cloud-api.herokuapp.com/payment/new', request);
      const subscribeJson = await subscribe.json();
      console.log(subscribeJson)
    }else{
      setShowMessage(true);
      setShowMessageOk(false);
    };
  };
 
  return(
    <div className='containerSubscribe'>
      <h3 className='titleSubcribe'>{title}</h3>
      <div className='containerInputs'>
        <Inputs name='username' label='Username' placeholder='Enter a username' type='text' handleInput={handleInput}/>
        <Inputs name='email' label='Email' placeholder='Enter an email' type='text' handleInput={handleInput}/>
        <Inputs name='password' label='Password' placeholder='Enter a password' type='password' handleInput={handleInput}/>
        <Buttons label='Subscribe' name='subcribe' handleButton={handleButton}/>
      </div>
      {showMessage && ( <p className='badMessage'>{badMessage}</p> )}
      {showMessageOk && ( <p className='messageOk'>{messageOk}</p> )}
    </div>
  );
};

export default SignUp;