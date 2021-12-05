import './Preview.css';
import icon from './images/x-icon.svg';
import playButton from './images/play-button.svg'
import Moment from 'moment';

const Preview = ({movie}) => {

  return (
    <section className='details-page'>
      <section className='image-section'>
        <img className='backdrop-image' src={movie.backdrop_path} alt={movie.title}/>
        <section className='x-location'>
          <img className='x-icon' src={icon} alt='x icon, click to go back to home page'/>
        </section>
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
          <h1 className='rating'>{movie.average_rating + '/10'}</h1>
        </section>
      </section>
      <section className='overview-section'>
        <h2>{movie.tagline}</h2>
        <p>{movie.overview}</p>
        <section className='bottom-details'>
          <h4>Release Date: {Moment(movie.release_date).format('MM-DD-YYYY')}</h4>
          <h4>Budget: {'$' + movie.budget.toLocaleString()}</h4>
          <h4>Revenue: {'$' + movie.revenue.toLocaleString()}</h4>
        </section>
      </section>
    </section>
)}


export default Preview;
