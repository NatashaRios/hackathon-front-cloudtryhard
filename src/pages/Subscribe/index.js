import './styles.scss';

import Header from '../../components/Header';
import SignUp from '../../components/SignUp';

const Subscribe = () => {
  return(
    <>
      <Header />
      <SignUp 
        title='Subscribe here!'
        badMessage='Missing fields!'
        messageOk='Successfully subscribed!'
      />
    </>
  )
};

export default Subscribe;