import './Preview.css';
import icon from './images/x-icon.svg';
import playButton from './images/play-button.svg'
import Moment from 'moment';
import { Link } from 'react-router-dom'


const Preview = ({movie, backToMain, playTrailer, videos}) => {

return (

  <section className='details-page'>
    <section className='image-section'>
      <img className='backdrop-image' src={movie.backdrop_path} alt={movie.title}/>
      <Link to={'/'}>
        <section className='x-location'>
        <img className='x-icon' src={icon} alt='x icon, click to go back to home page' onClick={() => {backToMain()}}/>
      </section>
      </Link>
      <section className='overlay'>
        <section className='left-side-overlay'>
          <h1 className='movie-title'>{movie.title}</h1>
          <section className='movie-details'>
            <h4>{movie.runtime} min </h4>
            {movie.genres.map(genre => (<h4>{genre}</h4>))}
          </section>
          <section className='trailer'>
            <img className='play-button' src={playButton} alt='clickable play button to watch trailer' onClick={() => {playTrailer(movie.id)}}/>
            <h2>Watch Trailer</h2>
          </section>
        </section>
        <section className='rating-section'>
        <h1 className='rating'>{Math.round(movie.average_rating)}/10</h1>
        </section>
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
    {videos.length > 0 && <section className='trailer-location'>
    <iframe src={`https://www.youtube.com/embed/${videos[0].key}`}
      frameBorder=''
      allow='autoplay; encrypted-media'
      allowFullScreen
      title='video'
      width={960}
      height={544}
      />
    </section>}
  </section>
)}


export default Preview;
