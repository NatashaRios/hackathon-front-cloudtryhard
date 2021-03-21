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
      
      const url = 'https://www.mercadopago.com.ar/checkout/v1/payment/redirect/4823323c-697e-42dd-ac8b-e5492b0a5e48/payment-option-form/?preference-id=130798191-f2720a87-3366-4a93-b9ef-666defacf1ea&p=da713da1f41d6923a66f3b950d781b97#/';
      window.open(url)
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