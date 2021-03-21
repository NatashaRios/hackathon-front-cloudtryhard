import FAQ from '../FAQ';
import questions from '../../questions/questions.json';
import './styles.scss';

const FAQs = ({ title }) => {
  return(
    <>
      <h3 className='titleFaqs'>{title}</h3>
      <div className='containerAllFaq'>
        {questions.map((question, key) => {
          return(
            <FAQ question={question.question} answer={question.answer} key={key} />
          )
        })}
      </div>
    </>
  )
};

export default FAQs;