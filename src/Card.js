import './Card.css';
import Preview from './Preview.js'

const Card = ({ image, title, id }) => {

  const movieDetails = (id) => {
    return (
    <Preview
      key= {id}
      />
  )}

  return (
    <section className='card'>
      <img className='movie-poster' src={image} alt={title} onClick={() => movieDetails(id)}/>
    </section>
  )
}

export default Card;
