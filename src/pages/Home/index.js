import './styles.scss';

import Header from '../../components/Header';
import About from '../../components/About';
import ScreensOptions from '../../components/ScreensOptions';
import ShowGames from '../../components/ShowGames';
import Cards from '../../components/Cards';

const Home = () => {
  return(
    <>
      <Header />
      <About 
        title='Play with Tryhard Cloud'
        subtitle='What it is?'
        text='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
      /> 
      <ScreensOptions 
        title='Game on your favorite screens'
        img='https://i.postimg.cc/gknHPqw7/allscreen.png'
        alt='Screens'
        text='Available on Windows PC, Mac, and web apps for iPhone, iPad and Android phones.'
      />
      <ShowGames />
      <Cards 
        title='Get started with game channels'
      />
    </>
  );
};

export default Home;