import Card from '../Card';
import GoTo from '../GoTo';
import './styles.scss';

const Cards = ({ title }) => {
  return(
    <div className='containerCards'>
      <h3 className='titleCards'>{title}</h3>
      <div className='containerCard'>
        <Card 
          title='Basic subscription'
          price='$5.99/month'
          hours='Unlimited hours of play'
          resolution='Up to 1080p/60fps'
          devices='Stream on 2 devices at a time'
          screens='Play on Windows PC, Mac and web apps for Iphone, Ipad and Android phones'
        />
        <Card 
          title='Pro subscription'
          price='14.99/month'
          hours='Unlimited hours of play'
          resolution='Up to 1080p/60fps and 4K'
          devices='Stream on 4 devices at a time'
          screens='Play on Windows PC, Mac and web apps for Iphone, Ipad and Android phones'
        />
      </div>
      <GoTo 
        goGames='GO TO SUBSCRIBE' 
        arrow='https://icongr.am/octicons/chevron-right.svg?size=56&color=750b0b'
        alt='Arrow'
        subscribe
      />
    </div>
  )
};

export default Cards;