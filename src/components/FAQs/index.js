import FAQ from '../FAQ';
import questions from '../../questions/questions.json';
import './styles.scss';

const FAQs = ({ title }) => {
  return(
    <>
      <h3 className='titleFaqs'>{title}</h3>
      <div className='containerAllFaq'>
        {questions.map(question => {
          return(
            <FAQ question={question.question} answer={question.answer} />
          )
        })}
      </div>
    </>
  )
};

export default FAQs;