import './css/Card.css';


const Card = ({ image, title}) => {

  return (
    <section className='card'>
      <img className='movie-poster' src={image} alt={title}/>
    </section>
  )
}

export default Card;
