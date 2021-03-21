import './styles.scss';

import Header from '../../components/Header';
import About from '../../components/About';
import ScreensOptions from '../../components/ScreensOptions';
import ShowGames from '../../components/ShowGames';
import Cards from '../../components/Cards';
import FAQs from '../../components/FAQs';
import Footer from '../../components/Footer';

import Zoom from 'react-reveal/Zoom';

const Home = () => {
  return (
    <>
      <Header />
      <About
        title='Play with Tryhard Cloud'
        subtitle='What it is?'
        text='Cloud Tryhard is a video game platform that allows you to enjoy games instantly on the compatible screens you already have. Stream them directly to your favorite compatible devices. In addition, you can access games from anywhere on the Internet, without waiting for them to be installed, downloaded or updated.'
      />
      <Zoom>
        <ScreensOptions
          title='Game on your favorite screens'
          img='https://i.postimg.cc/gknHPqw7/allscreen.png'
          alt='Screens'
          text='Available on Windows PC, Mac, and web apps for iPhone, iPad and Android phones.'
        />
      </Zoom>
      <Zoom>
        <ShowGames title='Featured Games ' />
      </Zoom>
      <Zoom>
        <Cards title='Get started with game channels' />
      </Zoom>
      <Zoom>
        <FAQs title='Frequently asked questions' />
      </Zoom>
      <Footer />
    </>
  );
};

export default Home;
