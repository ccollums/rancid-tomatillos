import './css/Preview.css';
import icon from './images/x-icon.svg';
import playButton from './images/play-button.svg'
import error from './images/error-cloud-icon.svg'
import loading from './images/loading-icon.svg'
import Moment from 'moment';
import { Link } from 'react-router-dom'
import React, { Component } from 'react';

class Preview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      loading: true,
      error: false,
  }
}

  componentDidMount = () => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.urlId}`)
      .then(function(response) {
        if (!response.ok) {
          this.setState({error: true, loading: false})
        } else {
          return response.json()
        }
      })
      .then(data => this.setState({ movie: data.movie, loading: false }))
      .catch(err => this.handleError(err))
  } 

  handleError = (err) => {
    this.setState({ error: true, loading: false})
  }

  findMovieTrailer = () => {
    return this.props.videos.find(video => {return video.type === 'Trailer'}).key
  }

render () {
  return (
    <section className='details-page'>
      {this.state.loading &&
      <section className='loading'> 
        <img className='loading-circle' src={loading} alt='a spinning loading circle'/>
      </section>}
      {this.state.error && !this.state.loading && 
        <section className='error'>
          <img className='sad-cloud' src={error} alt='photo of a sad cloud because there is an error'/>
          <h2 className='error-message'>Oops, something went wrong. Page not found!</h2>
        </section>}
    {!this.state.loading && !this.state.error && <section className='image-section'>
      <section className='fade'>
        <img className='backdrop-image' src={this.state.movie.backdrop_path} alt={this.state.movie.title}/>
      </section>
      <Link to={'/'} key={Date.now()}>
        <section className='x-location'>
        <img className='x-icon' src={icon} alt='x icon, click to go back to home page' onClick={() => {this.props.backToMain()}}/>
      </section>
      </Link>
      <section className='overlay'>
        <section className='left-side-overlay'>
          <h1 className='movie-title'>{this.state.movie.title}</h1>
          <section className='movie-details'>
            <h4>{this.state.movie.runtime} min </h4>
            {this.state.movie.genres.map(genre => (<h4>{genre}</h4>))}
          </section>
          <section className='trailer'>
            <img className='play-button' src={playButton} alt='clickable play button to watch trailer' onClick={() => {this.props.playTrailer(this.state.movie.id)}}/>
            <h2>Watch Trailer</h2>
          </section>
        </section>
        <section className='rating-section'>
        <h1 className='rating'>{Math.round(this.state.movie.average_rating)}/10</h1>
        </section>
      </section>
    </section>}
    {!this.state.loading && !this.state.error && <section className='overview-section'>
      <h2>{this.state.movie.tagline}</h2>
      <p>{this.state.movie.overview}</p>
      <section className='bottom-details'>
        <h4>Release Date: {Moment(this.state.movie.release_date).format('MM-DD-YYYY')}</h4>
        <h4>Budget: {'$' + this.state.movie.budget.toLocaleString()}</h4>
        <h4>Revenue: {'$' + this.state.movie.revenue.toLocaleString()}</h4>
      </section>
    </section>}
    {this.props.videos.length > 0 && <section className='trailer-location'>
    <iframe src={`https://www.youtube.com/embed/${this.findMovieTrailer()}`}
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

}

export default Preview;
