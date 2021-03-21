import './styles.scss';

import Header from '../../components/Header';
import SignUp from '../../components/SignUp';
import Footer from '../../components/Footer';

const Subscribe = () => {
  return(
    <>
      <Header />
      <SignUp 
        title='Subscribe here!'
        badMessage='Missing fields!'
        messageOk='Successfully subscribed!'
      />
      <Footer />
    </>
  )
};

export default Subscribe;