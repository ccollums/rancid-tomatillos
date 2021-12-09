import React, { Component } from 'react';
import './App.css';
import { render } from 'react-dom';
import Movies from './Movies.js';
import Form from './Form.js';
import PreviewFunction from './PreviewFunction.js'
import tomato1 from './images/tomato1.svg';
import tomato2 from './images/tomatos2.svg';
import tomato3 from './images/tomato3.svg';
import tomato4 from './images/tomato4.svg';
import magnifyGlass from './images/grey-magnify-glass.svg'
import error from './images/error-cloud-icon.svg'
import {Routes, Route, Link} from 'react-router-dom';


class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      error: false,
      videos: [],
    }
  }

  componentDidMount = () => {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => response.json())
    .then(data => this.setState({movies : data.movies}))
    .catch(err => this.handleError(err))
  }

  backToMain = () => {
    // this.setState({ movie: ''})
    this.setState({ videos: [], error: false})
    // this.componentDidMount();
  }

  handleError = (err) => {
    this.setState({ error: true })
  }

  playTrailer = (id) => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}/videos`)
      .then(response => response.json())
      .then(data => this.setState({videos : data.videos}))
      .catch(err => this.handleError(err))
  }


  searchMovies = (input) => {
    const filteredMovie = this.state.movies.filter((movie) => {
          return movie.title.toLowerCase().includes(input) || movie.title.includes(input);
        })
    this.setState({movies: filteredMovie});
}

  render() {
    return (
      <main className='App'>
        <Routes>
          <Route path="/" element ={<Movies movies={this.state.movies} movieDetails={this.movieDetails} error={this.state.error} searchMovies={this.searchMovies} componentDidMount={this.componentDidMount}/>}/>
          <Route path="/:movieId" element={<PreviewFunction backToMain ={this.backToMain} playTrailer={this.playTrailer} videos={this.state.videos}/>}/>
        </Routes>
        {this.state.error && 
        <section className='error'>
          <img className='sad-cloud' src={error} alt='photo of a sad cloud because there is an error'/>
          <h2 className='error-message'>Oops, something went wrong. Please refresh your page!</h2>
        </section>}
      </main>
    )
  }
}

export default App;
