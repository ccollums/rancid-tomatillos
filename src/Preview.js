import './Preview.css';
import icon from './images/x-icon.svg';
import playButton from './images/play-button.svg'
import Moment from 'moment';
import { Link } from 'react-router-dom'
import React, { Component } from 'react';

class Preview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {
              id: '',
              title: "",
              poster_path: "",
              backdrop_path: "",
              release_date: "",
              overview: "",
              genres: [],
              budget: 0,
              revenue: 0,
              runtime: 0,
              tagline: "",
              average_rating: 0
              },
  }
}


  componentDidMount = () => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.urlId}`)
      .then(response => response.json())
      .then(data => this.setState({ movie: data.movie }))
      .catch(err => this.handleError(err))
  } 

render () {
  return (
  <section className='details-page'>
    <section className='image-section'>
      <img className='backdrop-image' src={this.state.movie.backdrop_path} alt={this.state.movie.title}/>
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
    </section>
    <section className='overview-section'>
      <h2>{this.state.movie.tagline}</h2>
      <p>{this.state.movie.overview}</p>
      <section className='bottom-details'>
        <h4>Release Date: {Moment(this.state.movie.release_date).format('MM-DD-YYYY')}</h4>
        <h4>Budget: {'$' + this.state.movie.budget.toLocaleString()}</h4>
        <h4>Revenue: {'$' + this.state.movie.revenue.toLocaleString()}</h4>
      </section>
    </section>
    {this.props.videos.length > 0 && <section className='trailer-location'>
    <iframe src={`https://www.youtube.com/embed/${this.props.videos[0].key}`}
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
