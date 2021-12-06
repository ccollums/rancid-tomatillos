import React, { Component } from 'react';
import './App.css';
import { render } from 'react-dom';
import Movies from './Movies.js';
import Form from './Form.js';
import Preview from './Preview.js'
import tomato1 from './images/tomato1.svg';
import tomato2 from './images/tomatos2.svg';
import tomato3 from './images/tomato3.svg';
import tomato4 from './images/tomato4.svg';
import magnifyGlass from './images/grey-magnify-glass.svg'


class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      movie: '',
      error: false,
      videos: [],
    }
  }

  componentDidMount = () => {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => response.json())
    .then(data => this.setState({movies : data.movies}))
    .catch(err => console.log(err))
  }

  backToMain = () => {
    this.setState({ movie: ''})
    this.setState({ videos: []})
    this.componentDidMount();
  }

  handleError = (err) => {
    this.setState({ error: true })
  }

  playTrailer = (id) => {

    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}/videos`)
      .then(response => response.json())
      .then(data => this.setState({videos : data.videos}))
      .catch(err => console.log(err))
  }

  movieDetails = (id) => {

    const findMovie = this.state.movies.filter((movie) => {
      return movie.id === id
    })

    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${findMovie[0].id}`)
      .then(response => response.json())
      .then(data => this.setState({movie: data.movie}))
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
        {!this.state.error && this.state.movie && <Preview movie={this.state.movie} backToMain ={this.backToMain} playTrailer={this.playTrailer} videos={this.state.videos}/>}
        {!this.state.movie &&
          <section className='header'>
            <section className='logo-title'>
              <img className='logo' src={tomato2} />
              <h1 className='title'>Rotten Tomatillos</h1>
              {this.state.error && <h2>Oops, something went wrong. Please refresh your page!</h2>}
            </section>
            <section className='form'>
            <img className='magnify-glass' src={magnifyGlass}/>
            <Form searchMovies={this.searchMovies} componentDidMount={this.componentDidMount}/>
            </section>
          </section>}
        {!this.state.movie && <Movies movies={this.state.movies} movieDetails={this.movieDetails}/>}
      </main>
    )
  }
}

export default App;
