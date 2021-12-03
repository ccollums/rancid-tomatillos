import './Preview.css';

const Preview = ({movie}) => {

  return (
    <section>
      <img className='backdrop-image' src={movie.backdrop_path} alt={movie.title}/>
      <h1>{movie.title}</h1>
      <h4>{movie.runtime}</h4>
      <h4>{movie.genres}</h4>
      <h2>Watch Trailer</h2>
      <h1>{movie.average_rating}</h1>
      <h2>{movie.tagline}</h2>
      <p>{movie.overview}</p>
      <h4>{movie.release_date}</h4>
      <h4>{movie.budget}</h4>
      <h4>{movie.revenue}</h4>
    </section>
)}


export default Preview;
