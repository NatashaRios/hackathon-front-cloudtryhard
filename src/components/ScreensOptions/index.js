import './styles.scss';

const ScreensOptions = ({ title, img, alt, text }) => {
  return(
    <div className='containerScreens'>
      <h3 className='titleScreens'>{title}</h3>
      <div className='divInfoScreens'>
        <img className='imgScreen' src={img} alt={alt} />
        <p className='textScreen'>{text}</p>
      </div>
    </div>
  );
};

export default ScreensOptions;