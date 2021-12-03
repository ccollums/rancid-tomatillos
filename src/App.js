import React, { Component } from 'react';
import './App.css';
import movieData from './data.js';
import { render } from 'react-dom';
import Movies from './Movies.js';
import Form from './Form.js';

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
        <Movies movies={this.state.movies}/>
      </main>
    );
  }
}
export default App;
