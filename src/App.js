import React, { Component } from 'react';
import {Routes, Route} from 'react-router-dom';
import Movies from './Movies.js';
import PreviewFunction from './PreviewFunction.js'
import error from './images/error-cloud-icon.svg'
import './css/App.css';
import {getMovies, getSingleMovie} from './api.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      error: false,
    }
  }

  componentDidMount = () => {
    getMovies()
      .then(data => this.setState({movies : data.movies}))
      .catch(err => this.handleError(err))
  }

  backToMain = () => {
    this.setState({ videos: [], error: false})
  }

  handleError = (err) => {
    this.setState({ error: true })
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
        {this.state.error && 
        <section className='error'>
          <img className='sad-cloud' src={error} alt='a sad cloud because there is an error'/>
          <h2 className='error-message'>Oops, something went wrong. Please refresh your page!</h2>
        </section>}
        <Routes>
          {!this.state.error && <Route path="/" element ={<Movies movies={this.state.movies} searchMovies={this.searchMovies} componentDidMount={this.componentDidMount} />}/>}
          <Route path="/:movieId" element={<PreviewFunction backToMain ={this.backToMain} playTrailer={this.playTrailer} videos={this.state.videos} />}/>
        </Routes>
      </main>
    )
  }
}

export default App;
