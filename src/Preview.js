import './Preview.css';
import icon from './x-icon.svg';
import playButton from './play-button.svg'

const Preview = ({movie}) => {

  return (
    <section className='details-page'>
      <section className='image-section'>
        <img className='backdrop-image' src={movie.backdrop_path} alt={movie.title}/>
        <img className='x-icon' src={icon} alt='x icon, click to go back to home page'/>
        <section className='overlay'>
          <section className='left-side-overlay'>
            <h1>{movie.title}</h1>
            <section className='movie-details'>
              <h4>{movie.runtime} min </h4>
              <h4>{movie.genres}</h4>
            </section>
            <section className='trailer'>
              <img className='play-button' src={playButton} alt="clickable play button to watch trailer"/>
              <h2>Watch Trailer</h2>
            </section>
          </section>
          <h1 className='rating'>{movie.average_rating}</h1>
        </section>
      </section>
      <section className='overview-section'>
        <h2>{movie.tagline}</h2>
        <p>{movie.overview}</p>
        <section className='bottom-details'>
          <h4>Release Date: {movie.release_date}</h4>
          <h4>Budget: {movie.budget}</h4>
          <h4>Revenue: {movie.revenue}</h4>
        </section>
      </section>
    </section>
)}


export default Preview;
