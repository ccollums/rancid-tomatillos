import React, { Component } from 'react';
import './App.css';
import movieData from './data.js';
import { render } from 'react-dom';
import Movies from './Movies.js';
import Form from './Form.js';
import Preview from './Preview.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies,
      movie: ''
    }
  }

  addMovies = () => {
    this.setState({ movies: [...movieData.movies] })
  }

  movieDetails = (id) => {
    const findMovie = this.state.movies.filter((movie) => {
      return movie.id === id
    })

    this.setState({movie: {id: 1, title: "Fake Movie Title", poster_path: "https://image.tmdb.org/t/p/original//7G2VvG1lU8q758uOqU6z2Ds0qpA.jpg", backdrop_path: "https://image.tmdb.org/t/p/original//oazPqs1z78LcIOFslbKtJLGlueo.jpg", release_date: "2019-12-04", overview: "Some overview that is full of buzzwords to attempt to entice you to watch this movie! Explosions! Drama! True love! Robots! A cute dog!", average_rating: 6, genres: ["Drama"], budget:63000000, revenue:100853753, runtime:139, tagline: "It's a movie!" }})

    // this.setState({ movie: {title: findMovie[0].title, backdropPath: findMovie[0].backdrop_path, releaseDate: findMovie[0].release_date,
    // overview: findMovie[0].overview, averageRating: findMovie[0].average_rating, genres: findMovie[0].genres, budget: findMovie[0].budget,
    // revenue: findMovie[0].revenue, runtime: findMovie[0].runtime, tagline: findMovie[0].tagline}})
}


//   searchMovies = event => {
//     event.preventDefault();
//     const filteredMovie = {
//         this.props.state.movies.filter((movie) => {
//           return movie.title === this.state.title;
//         })
//     }
// }

  render() {
    return (
      <main className='App'>
        {this.state.movie && <Preview movie={this.state.movie}/>}
        {!this.state.movie && <h1>Rotten Tomatillos</h1>}
        {!this.state.movie && <img className='logo' src="https://ih1.redbubble.net/image.754432836.2047/flat,750x,075,f-pad,750x1000,f8f8f8.u5.jpg" />}
        {!this.state.movie && <Form />}
        {!this.state.movie && <Movies movies={this.state.movies} movieDetails={this.movieDetails}/>}
      </main>
    )
  }
}

export default App;
