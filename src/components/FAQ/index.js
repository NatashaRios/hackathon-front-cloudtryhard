import { useState } from 'react';
import './styles.scss';

const FAQ = ({ question, answer }) => {
  const [ showAnswer, setShowAnswer] = useState(false);

  const handleClick = () => {
    if(!showAnswer){
      setShowAnswer(true)
    }else if(showAnswer){
      setShowAnswer(false)
    }
  }

  console.log(showAnswer)
  return(
    <div className='containerFAQ'>
      <div className='containerQuestion' onClick={handleClick}>
        <p className='question'>{question}</p>
        {!showAnswer ?
          <img src='https://icongr.am/feather/chevron-down.svg?size=35&color=750b0b' alt='Arrow' /> :
          <img src='https://icongr.am/feather/chevron-up.svg?size=35&color=750b0b' alt='Arrow' /> 
        }
      </div>
      {showAnswer && (
        <p className='answer'>{answer}</p>
      )}
    </div>
  );
};

export default FAQ;