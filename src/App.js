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
      movies: movieData.movies
    }
  }

  addMovies = () => {
    this.setState({movies: [...movieData.movies]})
  }

  movieDetails = (id) => {
    const findMovie = this.state.movies.filter((movie) => {
      return movie.id === id
    })
    console.log(findMovie)
    return (
    <Preview
      title={findMovie.title}
      backdropPath={findMovie.backdrop_path}
      releaseDate={findMovie.release_date}
      overview={findMovie.overview}
      averageRating={findMovie.average_rating}
      genres={findMovie.genres}
      budget={findMovie.budget}
      revenue={findMovie.revenue}
      runtime={findMovie.runtime}
      tagline={findMovie.tagline}
      key= {id}
      />
  )}


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
        <h1>Rotten Tomatillos</h1>
        <img className='logo' src="https://ih1.redbubble.net/image.754432836.2047/flat,750x,075,f-pad,750x1000,f8f8f8.u5.jpg" />
        <Form />
        <Movies movies={this.state.movies} movieDetails={this.movieDetails}/>
      </main>
    )
  }
}

export default App;
