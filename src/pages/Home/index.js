import './styles.scss';

import Header from '../../components/Header';
import About from '../../components/About';
import ScreensOptions from '../../components/ScreensOptions';

const Home = () => {
  return(
    <>
      <Header />
      <About 
        title='A jugar jueguitos iupiiii'
        subtitle='Que es esto????'
        text='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
      /> 
      <ScreensOptions 
        title='Juga en tus pantallas favoritas'
        img='https://i.postimg.cc/gknHPqw7/allscreen.png'
        alt='Pantallas'
        text='Se puede jugar en Windows PC, Mac, aplicaciones web para Iphone, Ipad y celulares Android'
      />
    </>
  );
};

export default Home;