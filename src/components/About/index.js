import './styles.scss';

const About = ({ title, subtitle, text }) => {
  return(
    <div className='containerAbout'>
      <h1 className='titleAbout'>{title}</h1>
      <h3 className='explicationAbout'>{subtitle}</h3>
      <p className='textAbout'>{text}</p>
    </div>
  );
};

export default About;