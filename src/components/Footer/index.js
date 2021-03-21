import './styles.scss';

const Footer = () => {
  return(
    <footer className='footer'>
      <div className='authors'>
       <p>Make with ♡ by Kevin Leguizamon & Natasha Rios</p>
      </div>
      <div>
        <p className='repo'>Repositorio Frontend: <a className='link' href='https://github.com/NatashaRios/hackathon-front-tryhardcloud'>Cloud Tryhard Frontend</a></p>
        <p className='repo'>Repositorio Backend: <a className='link' href='https://github.com/kleguizamon/hackathon-back-tryhardcloud'>Cloud Tryhard  Backend</a></p>
      </div>
    </footer>
  );
};

export default Footer;