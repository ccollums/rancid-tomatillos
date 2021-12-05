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
      error: false
    }
  }

  componentDidMount = () => {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => response.json())
    .then(data => this.setState({movies : data.movies}))
  }

  backToMain = () => {
    this.setState({ movie: ''})
  }

  handleError = (err) => {
    this.setState({ error: true })
    console.log(this.state.error)

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
        {!this.state.error && this.state.movie && <Preview movie={this.state.movie} backToMain ={this.backToMain}/>}
        {!this.state.movie &&
          <section className='header'>
            <section className='logo-title'>
              <img className='logo' src={tomato3} />
              <h1>Rotten Tomatillos</h1>
              {this.state.error && <h2>Oops, something went wrong. Please refresh your page!</h2>}
            </section>
            <img className='magnify-glass' src={magnifyGlass}/>
            <Form />
          </section>}
        {!this.state.movie && <Movies movies={this.state.movies} movieDetails={this.movieDetails}/>}
      </main>
    )
  }
}

export default App;
