import './styles.scss';

const Card = ({ title, price, hours, resolution, devices, screens }) => {
  return(
    <div className='containerInfoCard'>
      <h3 className='titleCard'>{title}</h3>
      <p className='priceCard'>{price}</p>
      <ul className='liItemsCard'>
        <li className='itemCard' type='circle'>{hours}</li>
        <li className='itemCard' type='circle'>{resolution}</li>
        <li className='itemCard' type='circle'>{devices}</li>
        <li className='itemCard' type='circle'>{screens}</li>
      </ul>
    </div>
  )
};

export default Card;