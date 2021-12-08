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
    .catch(err => console.log(err))
  }

  backToMain = () => {
    // this.setState({ movie: ''})
    this.setState({ videos: []})
    // this.componentDidMount();
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

//   movieDetails = (id) => {
    
//     // const findMovie = this.state.movies.filter((movie) => {
//     //   return movie.id === id
//     // })

//     this.setState({ movie:  {
//       id: '',
//       title: "",
//       poster_path: "",
//       backdrop_path: "",
//       release_date: "",
//       overview: "",
//       genres: [],
//       budget: 0,
//       revenue: 0,
//       runtime: 0,
//       tagline: "",
//       average_rating: 0
//       }})

//     fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
//       .then(response => response.json())
//       .then(data => this.setState({ movie: data.movie }))
//       .catch(err => this.handleError(err))
// }

  searchMovies = (input) => {
    const filteredMovie = this.state.movies.filter((movie) => {
          return movie.title.toLowerCase().includes(input) || movie.title.includes(input);
        })
    this.setState({movies: filteredMovie});
}

  render() {
    return (
      <main className='App'>
          <section className='header'>
            <section className='logo-title'>
              <img className='logo' src={tomato2} />
              <h1 className='title'>Rancid Tomatillos</h1>
              {this.state.error && <h2>Oops, something went wrong. Please refresh your page!</h2>}
            </section>
            <section className='form'>
            <img className='magnify-glass' src={magnifyGlass}/>
            <Form searchMovies={this.searchMovies} componentDidMount={this.componentDidMount}/>
            </section>
          </section>
        <Routes>
          <Route path="/" element ={<Movies movies={this.state.movies} movieDetails={this.movieDetails}/>}/>
          <Route path="/:movieId" element={<PreviewFunction backToMain ={this.backToMain} playTrailer={this.playTrailer} videos={this.state.videos}/>}/>
        </Routes>
      </main>
    )
  }
}

export default App;
